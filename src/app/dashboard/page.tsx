'use client';
import { useCheckId } from '../hooks/useCheckId';
import DashboardCard from '../components/Cards/DashboardCard/DashboardCard';
import {
  Activity,
  ArrowDown,
  ArrowUp,
  LoaderIcon,
  ShieldHalf,
  Tally4,
  User,
} from 'lucide-react';
import { useManagerData } from '../hooks/managerData/useManagerData';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../ui/organisms/Card/Card';
import { DashboardTable } from '../components/Tables/Dashboard/DashboardTable';
import { columns } from '../components/Tables/Dashboard/columns';
import { usePlayerData } from '../hooks/playerData/usePlayerData';
import { useNavigationWithId } from '../hooks/useNavigationWithId';
import Navbar from '../components/Layout/Navbar';
import FadeIn from '../animations/FadeIn';
import MainContainer from '../components/Layout/MainContainer';
import { usePreviousGameweek } from '../hooks/previousGameweekData/usePreviousGameweek';

const Dashboard = () => {
  const fplIdString = useSelector((state: RootState) => state.id.value);
  const fplId = Number(fplIdString);
  const {
    managerData,
    playerName,
    regionName,
    teamName,
    favouriteClub,
    currentSquad,
    isLoadingManagerData,
  } = useManagerData(fplId);
  const { rankDifference, previousGameWeek, previousGameWeekScore } =
    usePreviousGameweek(fplId);
  const { getPlayerData } = usePlayerData();
  const rankDifferenceElement =
    rankDifference > 0 ? (
      <div className="flex text-red">
        <ArrowDown className="mr-0.5 h-4 w-4" />
        {Math.abs(rankDifference).toLocaleString()}
        {/* <p className="ml-1 text-xs text-muted-foreground">from last week</p> */}
      </div>
    ) : (
      <div className="mr-0.5 flex text-primary">
        <ArrowUp className="h-4 w-4" />
        {Math.abs(rankDifference).toLocaleString()}
      </div>
    );
  const handleSubmit = useNavigationWithId();

  useCheckId();
  const playerInformation =
    currentSquad?.map((player) => {
      const playerData = getPlayerData(player.element);
      return {
        player: player,
        playerData: playerData,
      };
    }) || [];
  return (
    <>
      <Navbar handleSubmit={handleSubmit}></Navbar>
      {isLoadingManagerData ? (
        <div className="flex min-h-screen items-center justify-center">
          <LoaderIcon className="animate-spin" />
        </div>
      ) : (
        <>
          <FadeIn>
            <MainContainer>
              <div className="grid gap-4 p-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
                <DashboardCard
                  data-cy="dashboard-card-current-gameweek"
                  title="Manager"
                  icon={<User className="h-4 w-4 text-primary" />}
                  content={playerName}
                  footer={regionName}
                />
                <DashboardCard
                  data-cy="dashboard-card-team"
                  title="Team"
                  icon={<ShieldHalf className="h-4 w-4 text-primary" />}
                  content={teamName}
                  footer={favouriteClub}
                />
                <DashboardCard
                  data-cy="dashboard-card-overall-rank"
                  title="Overall Rank"
                  icon={<Activity className="h-4 w-4 text-primary" />}
                  content={managerData?.summary_overall_rank?.toLocaleString()}
                  footer={rankDifferenceElement}
                />
                <DashboardCard
                  data-cy="dashboard-card-previous-gameweek"
                  title={'Gameweek 38'}
                  icon={<Tally4 className="h-4 w-4 text-primary" />}
                  content={previousGameWeekScore}
                  footer={`${previousGameWeek?.rank.toLocaleString()} rank`}
                />
              </div>
              <div className="flex flex-grow flex-col overflow-auto px-4">
                <Card className="flex-grow border-primary">
                  <CardHeader className="mb-0 rounded-tl-lg rounded-tr-lg bg-muted/50 p-5">
                    <CardTitle data-cy="table-title">Current Squad</CardTitle>
                  </CardHeader>
                  <CardContent className="h-[calc(100vh-23rem)] overflow-auto px-0">
                    <DashboardTable
                      columns={columns}
                      data={playerInformation}
                    ></DashboardTable>
                  </CardContent>
                </Card>
              </div>
            </MainContainer>
          </FadeIn>
        </>
      )}
    </>
  );
};
export default Dashboard;
