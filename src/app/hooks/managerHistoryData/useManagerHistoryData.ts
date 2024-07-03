import { calculateMeanPoints } from '@/app/helpers/calculateMean/calculateMean';
import { FetchManagerHistoryData } from '@/lib/fetchData/fetchManagerHistoryData';

export const useManagerHistoryData = (fplId: number) => {
  const {
    data: managerHistoryData,
    isValidating: isLoadingManagerHistoryData,
  } = FetchManagerHistoryData(fplId);
  const pastSeasonsData = managerHistoryData?.past;
  const gameWeekHistoryData = managerHistoryData?.current;

  const bestSeason = pastSeasonsData
    ? [...pastSeasonsData].sort((a, b) => a.rank - b.rank)[0]
    : undefined;
  const worstSeason = pastSeasonsData
    ? [...pastSeasonsData].sort((a, b) => b.rank - a.rank)[0]
    : undefined;

  const bestRank = bestSeason?.rank;
  const worstRank = worstSeason?.rank;
  const bestSeasonName = bestSeason?.season_name;
  const worstSeasonName = worstSeason?.season_name;
  const seasonsPlayed = pastSeasonsData?.length;
  const lowestPoints = pastSeasonsData
    ? Math.min(...pastSeasonsData.map((season) => season.total_points))
    : 0;
  const highestPoints = pastSeasonsData
    ? Math.max(...pastSeasonsData.map((season) => season.total_points))
    : 0;
  const totalPointsMean = calculateMeanPoints(managerHistoryData?.past);
  // const totalRankMean = calculateMeanRank(managerHistoryData?.past, overallRank);
  return {
    managerHistoryData,
    isLoadingManagerHistoryData,
    gameWeekHistoryData,
    pastSeasonsData,
    bestRank,
    worstRank,
    bestSeasonName,
    worstSeasonName,
    seasonsPlayed,
    lowestPoints,
    highestPoints,
    totalPointsMean,
  };
};
