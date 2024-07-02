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
}

const CurrentContent: React.FC<CurrentTabProps> = ({
  managerGameweekData,
  generalGameweekData,
}) => (
  <Card className="flex-grow border-primary md:ml-7">
    <CardHeader className="mb-4 flex rounded-tl-lg rounded-tr-lg bg-muted/50 px-7">
      <div>
        <CardTitle className="mb-1">Gameweek History</CardTitle>
        <CardDescription>How often do you beat the average?</CardDescription>
      </div>
    </CardHeader>
    <CardContent className="h-[calc(100vh-20rem)] overflow-auto">
      <GameweekLineChart
        managerGameweekData={managerGameweekData || []}
        generalGameweekData={generalGameweekData || []}
        playerName={''}
      />
    </CardContent>
  </Card>
);
export default CurrentContent;
