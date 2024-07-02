import { FetchManagerHistoryData } from '@/lib/fetchData/fetchManagerHistoryData';

export const useManagerHistoryData = (fplId: number) => {
  const { data: managerHistoryData, isValidating: isLoadingManagerData } =
    FetchManagerHistoryData(fplId);
  const pastSeasonsData = managerHistoryData?.past;

  const gameWeekHistoryData = managerHistoryData?.current;

  return {
    managerHistoryData,
    isLoadingManagerData,
    gameWeekHistoryData,
    pastSeasonsData,
  };
};
