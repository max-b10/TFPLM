'use client';

import { useManagerData } from '@/app/hooks/managerData/useManagerData';
import { RootState } from '@/lib/store';
import { useSelector } from 'react-redux';

const ManagerCompareDetails = ({ params }: { params: { id: string } }) => {
  const enemyManagerId = params.id;
  const fplIdString = useSelector((state: RootState) => state.id.value);
  const fplId = Number(fplIdString);
  const { playerName } = useManagerData(fplId);
  return (
    <div>
      <h1>{playerName}</h1>
      <h1>enemy id: {enemyManagerId}</h1>
    </div>
  );
};
export default ManagerCompareDetails;
