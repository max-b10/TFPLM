import { IManagerData } from "../types/manager/managerData";

export default async function Dashboard() {
    const response = await fetch('https://fantasy.premierleague.com/api/entry/115660');
    const data: IManagerData = await response.json(); 
    return (
      <div>
        <h1>Dashboard</h1>
       
      </div>
    );
  };