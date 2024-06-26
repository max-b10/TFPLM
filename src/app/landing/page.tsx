import FadeIn from "../animations/FadeIn";
import Footer from "../components/Layout/Footer";
import LandingIdForm from "../components/Forms/LandingIdForm";

const Landing = () => {

  return (
    <FadeIn>
      <div className="flex min-h-screen flex-col justify-between">
        <main className="relative isolate flex flex-grow items-center justify-center overflow-hidden">
          <div className="mx-auto mb-16 max-w-7xl px-6 lg:px-8">
          <LandingIdForm />
          </div>
        </main>
        <Footer />
      </div>
    </FadeIn>
  );
};

export default Landing;
