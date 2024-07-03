'use client';

import FadeIn from '@/app/animations/FadeIn';
import MainContainer from '@/app/components/Layout/MainContainer';
import Navbar from '@/app/components/Layout/Navbar';
import { useManagerData } from '@/app/hooks/managerData/useManagerData';
import { useCheckId } from '@/app/hooks/useCheckId';
import { useNavigationWithId } from '@/app/hooks/useNavigationWithId';
import { RootState } from '@/lib/store';
import { useSelector } from 'react-redux';

const ManagerCompareDetails = ({ params }: { params: { id: string } }) => {
  const enemyManagerId = params.id;
  const fplIdString = useSelector((state: RootState) => state.id.value);
  const fplId = Number(fplIdString);
  const { playerName } = useManagerData(fplId);
  const handleSubmit = useNavigationWithId();
  useCheckId();

  return (
    <>
      <Navbar handleSubmit={handleSubmit}></Navbar>
      <FadeIn>
        <MainContainer>
          <div>
            <h1>{playerName}</h1>
            <h1>enemy id: {enemyManagerId}</h1>
          </div>
        </MainContainer>
      </FadeIn>
    </>
  );
};
export default ManagerCompareDetails;
