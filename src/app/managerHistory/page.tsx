'use client';
import FadeIn from '../animations/FadeIn';
import MainContainer from '../components/Layout/MainContainer';
import { useCheckId } from '../hooks/useCheckId';

const ManagerHistory = () => {
  useCheckId();
  return (
    <>
      <FadeIn>
        <MainContainer>
          <h1>History</h1>
        </MainContainer>
      </FadeIn>
    </>
  );
};
export default ManagerHistory;
