import { API_ENDPOINTS } from '@/app/api/endpoints';
import { IManagerData } from '@/app/types/manager/managerData';
import useSWR from 'swr';
import { fetcher } from '../fetcher';

export const FetchManagerData = (fplId: number) => {
  const { data, isValidating } = useSWR<IManagerData>(
    `${API_ENDPOINTS.manager}/${fplId}`,
    fetcher
  );

  return { data, isValidating };
};
