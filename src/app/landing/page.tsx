import FadeIn from '../animations/FadeIn';
import LandingIdForm from '../components/Forms/LandingIdForm';

const Landing = () => {
  return (
    <div className="mx-auto flex min-h-[90svh] flex-col items-center justify-center px-6">
      <FadeIn>
        <LandingIdForm />
      </FadeIn>
    </div>
  );
};

export default Landing;
