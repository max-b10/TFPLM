import { FetchManagerHistoryData } from '@/lib/fetchData/fetchManagerHistoryData';

export const useManagerHistoryData = (fplId: number) => {
  const { data: managerHistoryData, isValidating: isLoadingManagerData } =
    FetchManagerHistoryData(fplId);
  return {
    managerHistoryData,
    isLoadingManagerData,
  };
};
