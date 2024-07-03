import { calculateMeanRank } from '@/app/helpers/calculateMean/calculateMean';
import { FetchManagerData } from '@/lib/fetchData/fetchManagerData';
import { FetchManagerHistoryData } from '@/lib/fetchData/fetchManagerHistoryData';

export const useHybridData = (fplId: number) => {
  const { data: managerData, isValidating: isLoadingManagerData } =
    FetchManagerData(fplId);
  const {
    data: managerHistoryData,
    isValidating: isLoadingManagerHistoryData,
  } = FetchManagerHistoryData(fplId);
  const { summary_overall_rank: overallRank } = managerData || {};
  const totalRankMean = calculateMeanRank(
    managerHistoryData?.past,
    overallRank
  );
  return {
    isLoadingManagerData,
    isLoadingManagerHistoryData,
    totalRankMean,
  };
};
