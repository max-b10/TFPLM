import { API_ENDPOINTS } from '@/app/api/endpoints';
import { IManagerData } from '@/app/types/manager/managerData';
import useSWR from 'swr';
import { fetcher } from '../fetcher';

export const FetchManagerData = (fplId: number) =>
  useSWR<IManagerData>(`${API_ENDPOINTS.manager}/${fplId}`, fetcher);
