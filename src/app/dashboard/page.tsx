'use client'
import { useCheckId } from "../hooks/useCheckId";
import { IManagerData } from "../types/manager/managerData";

const Dashboard = () => {
  
    // const response = await fetch('https://fantasy.premierleague.com/api/entry/115660');
    // const data: IManagerData = await response.json(); 
    // console.log(data);
    useCheckId();
    return (
      <div>
        <h1>Dashboard</h1>
       
      </div>
    );
  };
  export default Dashboard;