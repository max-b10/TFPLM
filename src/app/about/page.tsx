'use client';
import FadeIn from '../animations/FadeIn';
import MainContainer from '../components/Layout/MainContainer';
import Navbar from '../components/Layout/Navbar';
const About = () => {
  return (
    <>
      <Navbar />

      <FadeIn>
        <MainContainer>
          <h1>About</h1>
        </MainContainer>
      </FadeIn>
    </>
  );
};
export default About;
