'use client';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/ui/organisms/Card/Card';

const CurrentContent = () => (
  <Card className="flex-grow border-primary md:ml-7">
    <CardHeader className="mb-4 flex rounded-tl-lg rounded-tr-lg bg-muted/50 px-7">
      <div>
        <CardTitle className="mb-1">Gameweek History</CardTitle>
        <CardDescription>How often do you beat the average?</CardDescription>
      </div>
    </CardHeader>
  </Card>
);
export default CurrentContent;
