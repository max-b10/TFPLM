'use client'
import FadeIn from "../animations/FadeIn";
import Footer from "../components/Footer";
import LandingIdForm from "../components/Forms/LandingIdForm";
import { IFormData } from "../types/FormData";
import { useSelector } from 'react-redux';
const Landing = () => {
  const handleSubmit = (data:IFormData) => {
    console.log(data);
   
  };

  return (
    <FadeIn>
      <div className="flex min-h-screen flex-col justify-between">
        <main className="relative isolate flex flex-grow items-center justify-center overflow-hidden">
          <div className="mx-auto mb-16 max-w-7xl px-6 lg:px-8">
          <LandingIdForm onSubmit={handleSubmit}/>
          </div>
        
        </main>
        <Footer />
      </div>
    </FadeIn>
  );
};

export default Landing;
