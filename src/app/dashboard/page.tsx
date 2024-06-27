'use client';
import { useCheckId } from '../hooks/useCheckId';

const Dashboard = () => {
  useCheckId();
  return <h1>Dashboard</h1>;
};
export default Dashboard;
