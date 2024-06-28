import { API_ENDPOINTS } from '@/app/api/endpoints';
import { ISquad } from '@/app/types/squad/squadPicks';
import useSWR from 'swr';
import { fetcher } from '../fetcher';

export const FetchSquadPicks = (
  fplId: number,
  previousGameWeek: number | undefined
) =>
  useSWR<ISquad>(
    previousGameWeek !== undefined
      ? `${API_ENDPOINTS.squadPicks}/${fplId}/${previousGameWeek}`
      : null,
    fetcher
  );
