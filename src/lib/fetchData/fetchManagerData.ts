import { API_ENDPOINTS } from '@/app/api/endpoints';
import { IManager } from '@/app/types/manager/manager';
import useSWR from 'swr';
import { fetcher } from '../fetcher';

export const FetchManagerData = (fplId: number) => {
  const { data, isValidating } = useSWR<IManager>(
    `${API_ENDPOINTS.manager}/${fplId}`,
    fetcher
  );

  return { data, isValidating };
};
