'use client';
import FadeIn from '../animations/FadeIn';
import MainContainer from '../components/Layout/MainContainer';
import { useCheckId } from '../hooks/useCheckId';

const Dashboard = () => {
  useCheckId();
  return (
    <>
      <FadeIn>
        <MainContainer>
          <h1>Dashboard</h1>
        </MainContainer>
      </FadeIn>
    </>
  );
};
export default Dashboard;
