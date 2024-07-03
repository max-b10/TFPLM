import { API_ENDPOINTS } from '@/app/api/endpoints';
import clubMapping from '@/app/constants/clubMapping';
import {
  calculateMeanPoints,
  calculateMeanRank,
} from '@/app/helpers/calculateMean/calculateMean';
import { IManager } from '@/app/types/manager/manager';
import { IManagerHistory } from '@/app/types/manager/managerHistory';
import { fetcher } from '@/lib/fetcher';
import useSWR from 'swr';

export const useEnemyManagerData = (enemyId: number) => {
  const { data: enemyData, isValidating: isLoadingEnemyData } =
    useSWR<IManager>(`${API_ENDPOINTS.manager}/${enemyId}`, fetcher);
  const { data: enemyHistory, isValidating: isLoadingEnemyHistory } =
    useSWR<IManagerHistory>(
      `${API_ENDPOINTS.managerHistory}/${enemyId}`,
      fetcher
    );
  const enemyPastSeasonsData = enemyHistory?.past;
  const enemyFavouriteTeamObj = clubMapping.find(
    (club) => club.id === enemyData?.favourite_team
  );
  const enemyBestSeason = enemyPastSeasonsData
    ? enemyPastSeasonsData.reduce((prev, current) =>
        prev.rank < current.rank ? prev : current
      )
    : null;
  const enemyBestRank = enemyBestSeason ? enemyBestSeason.rank : 0;

  const enemyName = `${enemyData?.player_first_name} ${enemyData?.player_last_name}`;
  const enemySeasonsPlayed = enemyHistory?.past?.length
    ? Number(enemyHistory.past.length) + 1
    : 1;
  const enemyTotalRankMean = calculateMeanRank(
    enemyHistory?.past,
    enemyData?.summary_overall_rank
  );
  const enemyTotalPointsMean = calculateMeanPoints(enemyHistory?.past);
  const enemyFavouriteTeamSrc = enemyFavouriteTeamObj?.src;

  return {
    enemyName,
    enemyPastSeasonsData,
    enemySeasonsPlayed,
    enemyTotalRankMean,
    enemyTotalPointsMean,
    enemyFavouriteTeamSrc,
    isLoadingEnemyData,
    isLoadingEnemyHistory,
    enemyBestSeason,
    enemyBestRank,
  };
};
