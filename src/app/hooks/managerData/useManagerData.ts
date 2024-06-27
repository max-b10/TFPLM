import { API_ENDPOINTS } from '@/app/api/endpoints';
import { IManagerData } from '@/app/types/manager/managerData';
import { fetcher } from '@/lib/fetcher';
import useSWR from 'swr';

const useManagerDataFetch = () =>
  useSWR<IManagerData>(`${API_ENDPOINTS.manager}`, fetcher);
export const useManagerData = () => {
  const { data: managerData } = useManagerDataFetch();
  return { managerData };
};
