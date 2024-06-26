'use client';
import FadeIn from '../animations/FadeIn';
import MainContainer from '../components/Layout/MainContainer';
import Navbar from '../components/Layout/Navbar';
import { useCheckId } from '../hooks/useCheckId';

const ManagerCompare = () => {
  useCheckId();
  return (
    <>
      <Navbar />

      <FadeIn>
        <MainContainer>
          <h1>Compare</h1>
        </MainContainer>
      </FadeIn>
    </>
  );
};
export default ManagerCompare;
