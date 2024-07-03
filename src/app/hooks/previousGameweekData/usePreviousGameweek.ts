import { IManagerHistory } from '@/app/types/manager/managerHistory';
import { FetchManagerData } from '@/lib/fetchData/fetchManagerData';
import { FetchManagerHistoryData } from '@/lib/fetchData/fetchManagerHistoryData';
export const usePreviousGameweek = (fplId: number) => {
  const { data: managerData, isValidating: isLoadingManagerData } =
    FetchManagerData(fplId);
  const {
    data: managerHistoryData,
    isValidating: isLoadingManagerHistoryData,
  } = FetchManagerHistoryData(fplId);
  const { current_event: currentGameweek, summary_overall_rank: overallRank } =
    managerData || {};
  const getPreviousGameWeekData = (
    managerHistory: IManagerHistory | undefined,
    currentGameweek: number | undefined
  ) => {
    if (managerHistory?.current && currentGameweek !== undefined) {
      const previousGameWeek = managerHistory.current.find(
        (gameweek) =>
          gameweek.event === (currentGameweek === 1 ? 1 : currentGameweek - 1)
      );
      const previousGameWeekOverallRank = previousGameWeek?.overall_rank;
      const previousGameWeekScore = previousGameWeek?.points
        ? `${previousGameWeek.points} pts`
        : undefined;

      return {
        previousGameWeek,
        previousGameWeekOverallRank,
        previousGameWeekScore,
      };
    }
    return {
      previousGameWeekOverallRank: undefined,
      previousGameWeekScore: undefined,
      previousGameWeek: undefined,
    };
  };
  const {
    previousGameWeek,
    previousGameWeekOverallRank,
    previousGameWeekScore,
  } = getPreviousGameWeekData(managerHistoryData, currentGameweek);
  const rankDifference =
    (overallRank ?? 0) - (previousGameWeekOverallRank ?? 0);
  return {
    managerData,
    isLoadingManagerData,
    managerHistoryData,
    isLoadingManagerHistoryData,
    rankDifference,
    previousGameWeek,
    previousGameWeekScore,
  };
};
