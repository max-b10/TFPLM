import { API_ENDPOINTS } from '@/app/api/endpoints';
import useSWR from 'swr';
import { fetcher } from '../fetcher';
import { IManagerHistory } from '@/app/types/manager/managerHistory';

export const FetchManagerHistoryData = (fplId: number) => {
  const { data, isValidating } = useSWR<IManagerHistory>(
    `${API_ENDPOINTS.managerHistory}/${fplId}`,
    fetcher
  );

  return { data, isValidating };
};
