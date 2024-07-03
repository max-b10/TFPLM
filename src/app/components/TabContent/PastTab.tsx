import { IPast } from '@/app/types/manager/managerHistory';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/ui/organisms/Card/Card';
import SeasonBarChart from '../Charts/SeasonBarChart';
import HistoryCard from '../Cards/HistoryCard/HistoryCard';

interface PastTabProps {
  pastSeasonsData?: IPast[];
  bestRank?: number;
  worstRank?: number;
  seasonsPlayed?: number;
  pointsMean?: number;
  subText?: string;
  lowestPoints?: number;
  highestPoints?: number;
  bestSeasonName?: string;
  worstSeasonName?: string;
  totalRankMean?: number;
  totalPointsMean?: number;
}

const PastTab: React.FC<PastTabProps> = ({
  pastSeasonsData,
  bestRank,
  worstRank,
  seasonsPlayed,
  lowestPoints,
  highestPoints,
  bestSeasonName,
  worstSeasonName,
  totalRankMean,
  totalPointsMean,
}) => (
  <div className="grid h-full gap-4 md:grid-cols-3 md:gap-8">
    <div className="flex h-full flex-grow flex-col gap-4 border-primary md:col-span-2">
      <Card className="h-full border-primary md:ml-7">
        <CardHeader className="mb-4 flex flex-row items-start rounded-tl-lg rounded-tr-lg bg-muted/50">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-lg">
              Rank History
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="h-[calc(100vh-20rem)] overflow-auto">
          <SeasonBarChart pastSeasonsData={pastSeasonsData || []} />
        </CardContent>
      </Card>
    </div>
    <div className="flex h-full flex-grow flex-col gap-4 border-primary md:col-span-1">
      <HistoryCard
        rankMean={totalRankMean || 0}
        subText={
          pastSeasonsData && pastSeasonsData.length > 0
            ? 'Mean rank'
            : 'Current rank'
        }
        bestRank={bestRank || 0}
        worstRank={worstRank || 0}
        seasonsPlayed={seasonsPlayed || 0}
        lowestPoints={lowestPoints}
        highestPoints={highestPoints}
        pointsMean={totalPointsMean || 0}
        bestSeasonName={bestSeasonName}
        worstSeasonName={worstSeasonName}
      />
    </div>
  </div>
);
export default PastTab;
