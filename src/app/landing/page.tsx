'use client'
import FadeIn from "../animations/FadeIn";
import Footer from "../components/Footer";
import LandingIdForm from "../components/Forms/LandingIdForm";
import { IFormData } from "../types/FormData";
import { useDispatch } from 'react-redux';
import { setId } from "@/lib/id/idSlice";
import { useRouter } from "next/navigation";

const Landing = () => {

  const dispatch = useDispatch();
  const router = useRouter()
  const handleSubmit = (data:IFormData) => {
    dispatch(setId(data.id));
    router.push('/dashboard');
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
