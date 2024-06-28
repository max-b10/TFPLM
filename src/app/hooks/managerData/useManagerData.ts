import { API_ENDPOINTS } from '@/app/api/endpoints';
import { IManagerData } from '@/app/types/manager/managerData';
import { fetcher } from '@/lib/fetcher';
import useSWR from 'swr';

const useManagerDataFetch = (fplId: number) =>
  useSWR<IManagerData>(`${API_ENDPOINTS.manager}/${fplId}`, fetcher);

export const useManagerData = (fplId: number) => {
  const { data: managerData } = useManagerDataFetch(fplId);
  return { managerData };
};
