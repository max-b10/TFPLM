import { API_ENDPOINTS } from '@/app/api/endpoints';
import { IGeneralData } from '@/app/types/general/generalData';
import useSWR from 'swr';
import { fetcher } from '../fetcher';

export const FetchGeneralData = () =>
  useSWR<IGeneralData>(`${API_ENDPOINTS.general}`, fetcher);
