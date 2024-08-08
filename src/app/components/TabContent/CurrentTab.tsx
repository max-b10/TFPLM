'use client';
import { IEvent } from '@/app/types/general/event';
import { ICurrent } from '@/app/types/manager/managerHistory';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/ui/organisms/Card/Card';
import GameweekLineChart from '../Charts/GameweekLineChart';
interface CurrentTabProps {
  managerGameweekData?: ICurrent[];
  generalGameweekData?: IEvent[];
  playerName: string;
}

const CurrentTab: React.FC<CurrentTabProps> = ({
  managerGameweekData,
  generalGameweekData,
  playerName,
}) => (
  <Card className="flex-grow border-primary md:ml-7">
    <CardHeader className="mb-4 flex flex-row items-start rounded-tl-lg rounded-tr-lg bg-muted/50 p-5">
      <div className="grid gap-0.5">
        <CardTitle className="group flex items-center gap-2 text-lg">
          Gameweek History
        </CardTitle>
      </div>
    </CardHeader>
    <CardContent className="h-[calc(100vh-20rem)] overflow-auto pb-2">
      <GameweekLineChart
        managerGameweekData={managerGameweekData || []}
        generalGameweekData={generalGameweekData || []}
        playerName={playerName}
      />
    </CardContent>
  </Card>
);
export default CurrentTab;
