'use client';
import FadeIn from '../animations/FadeIn';
import MainContainer from '../components/Layout/MainContainer';
import { useCheckId } from '../hooks/useCheckId';

const ManagerCompare = () => {
  useCheckId();
  return (
    <>
      <FadeIn>
        <MainContainer>
          <h1>Compare</h1>
        </MainContainer>
      </FadeIn>
    </>
  );
};
export default ManagerCompare;
