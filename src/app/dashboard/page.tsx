'use client';
import useSWR from 'swr';

import { useCheckId } from '../hooks/useCheckId';
import { IGeneralData } from '../types/general/generalData';
import { fetcher } from '@/lib/fetcher';

const Dashboard = () => {
  // const { data: generalData } = useSWR<IGeneralData>(`/api/general`, fetcher);

  // console.log(generalData);
  useCheckId();
  return <h1>Dashboard</h1>;
};
export default Dashboard;
