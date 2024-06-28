'use client';
import { useCheckId } from '../hooks/useCheckId';
import DashboardCard from '../components/Cards/DashboardCard';
import { Activity, ShieldHalf, Tally4, User } from 'lucide-react';
import { useManagerData } from '../hooks/managerData/useManagerData';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

const Dashboard = () => {
  const fplIdString = useSelector((state: RootState) => state.id.value);
  const fplId = Number(fplIdString);
  const { managerData } = useManagerData(fplId);
  useCheckId();

  return (
    <div className="grid gap-4 p-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
      <DashboardCard
        data-cy="dashboard-card-current-gameweek"
        title="Manager"
        icon={<User className="h-4 w-4 text-primary" />}
        content={managerData?.player_first_name}
        footer={managerData?.player_region_name}
      />
      <DashboardCard
        data-cy="dashboard-card-team"
        title="Team"
        icon={<ShieldHalf className="h-4 w-4 text-primary" />}
        content={'teamName'}
        footer={'favouriteTeam'}
      />
      <DashboardCard
        data-cy="dashboard-card-overall-rank"
        title="Overall Rank"
        icon={<Activity className="h-4 w-4 text-primary" />}
        content={'177,023'}
        footer={'<>{rankDifferenceElement}</>'}
      />
      <DashboardCard
        data-cy="dashboard-card-previous-gameweek"
        title={'Gameweek ' + 'previousGameWeek?.event'}
        icon={<Tally4 className="h-4 w-4 text-primary" />}
        content={'previousGameWeekScore'}
        footer={'`${previousGameWeek?.rank.toLocaleString()} rank`'}
      />
    </div>
  );
};
export default Dashboard;
