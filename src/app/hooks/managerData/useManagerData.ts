import clubMapping from '@/app/constants/clubMapping';
import {
  calculateMeanPoints,
  calculateMeanRank,
} from '@/app/helpers/calculateMean/calculateMean';
import { FetchManagerData } from '@/lib/fetchData/fetchManagerData';
import { FetchSquadPicks } from '@/lib/fetchData/fetchSquadPicks';

export const useManagerData = (fplId: number) => {
  const { data: managerData, isValidating: isLoadingManagerData } =
    FetchManagerData(fplId);
  // Directly from response:
  const {
    player_first_name: firstName = 'Loading...',
    player_last_name: lastName = '',
    name: teamName,
    player_region_name: regionName,
    summary_overall_rank: overallRank,
    current_event: currentGameweek,
    summary_event_points: eventPoints,
    summary_event_rank: eventRank,
    favourite_team: favouriteTeamId,
    leagues,
  } = managerData || {};

  // Variables from data:
  const playerName = `${firstName} ${lastName}`;
  const favouriteClubObj = clubMapping.find(
    (club) => club.id === favouriteTeamId
  );
  const favouriteClub = favouriteClubObj?.name;
  const { data: squadPicksData } = FetchSquadPicks(fplId, currentGameweek);
  const currentSquad = squadPicksData?.picks;

  return {
    managerData,
    firstName,
    lastName,
    playerName,
    teamName,
    regionName,
    overallRank,
    currentGameweek,
    eventPoints,
    eventRank,
    favouriteClub,
    leagues,
    currentSquad,
    isLoadingManagerData,
  };
};
