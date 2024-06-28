import { FetchGeneralData } from '@/lib/fetchData/fetchGeneralData';

export const useGeneralData = () => {
  const { data: generalData } = FetchGeneralData();

  const generalGameweekData = generalData?.events?.map((gameWeek) => ({
    ...gameWeek,
    average_entry_score: gameWeek.average_entry_score,
  }));
  return {
    generalData,
    generalGameweekData,
  };
};
