'use client'
import FadeIn from "../animations/FadeIn";
import MainContainer from "../components/Layout/MainContainer";
import { useCheckId } from "../hooks/useCheckId";
import { IManagerData } from "../types/manager/managerData";

const Dashboard = () => {
  
    // const response = await fetch('https://fantasy.premierleague.com/api/entry/115660');
    // const data: IManagerData = await response.json(); 
    // console.log(data);
    useCheckId();
    return (
      <FadeIn>
            <MainContainer>
              <h1>Dashboard</h1>
            </MainContainer>
      </FadeIn>
    );
  };
  export default Dashboard;