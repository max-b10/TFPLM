import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/ui/organisms/Card/Card';
import { Info } from 'lucide-react';
import ManagerSummaryCard from '../Cards/ManagerSummaryCard/ManagerSummaryCards';
import ManagerProfileCard from '../Cards/ManagerProfileCard/ManagerProfileCard';
import BestSeasonCard from '../Cards/BestSeasonCard/BestSeasonCard';
import { IPast } from '@/app/types/manager/managerHistory';
import HistoryCarousel from '../HistoryCarousel/HistoryCarousel';
import PieChart from '../Charts/PieChart';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/app/ui/molecules/Popover/Popover';

interface ICompareSectionProps {
  id?: string;
  name?: string;
  seasonsPlayed?: number;
  totalRankMean?: number;
  totalPointsMean?: number;
  src?: string;
  slides: IPast[];
  bestRank: number;
  isLeftColumn: boolean;
  bestSeason: IPast;
  showUserIcon?: boolean;
}

const CompareSection: React.FC<ICompareSectionProps> = ({
  id,
  name,
  seasonsPlayed,
  totalRankMean,
  totalPointsMean,
  src,
  slides,
  bestRank,
  bestSeason,
  isLeftColumn,
  showUserIcon,
}) => {
  return (
    <div className="lg:max-w-xlg mx-auto mb-6 w-full max-w-sm sm:max-w-md md:max-w-lg xl:max-w-2xl">
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div
          className={`col-span-1 sm:col-span-2 ${isLeftColumn ? 'sm:order-1' : 'sm:order-2'}`}
        >
          <ManagerSummaryCard
            seasonsPlayed={seasonsPlayed}
            totalRankMean={totalRankMean}
            totalPointsMean={totalPointsMean}
            id={id || ''}
            showUserIcon={showUserIcon}
          />
        </div>
        <div
          className={`order-first col-span-1 mb-2 h-full sm:col-span-1 ${isLeftColumn ? 'sm:order-2' : 'sm:order-1'}`}
        >
          <ManagerProfileCard name={name || ''} src={src} />
        </div>
      </div>
      <div className="mb-6">
        <HistoryCarousel slides={slides} />
      </div>
      <div className="mb-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div
          className={`col-span-1 sm:col-span-1 ${isLeftColumn ? 'sm:order-1' : 'sm:order-2'}`}
        >
          <BestSeasonCard bestSeason={bestSeason} bestRank={bestRank} />
        </div>
        <div
          className={`order-first col-span-1 mb-2 h-full sm:col-span-1 ${isLeftColumn ? 'sm:order-2' : 'sm:order-1'}`}
        >
          <Card className="flex h-full flex-grow flex-col border border-primary">
            <CardHeader className="mb-2 flex flex-row items-start rounded-tl-lg rounded-tr-lg bg-muted/50 px-4 py-3">
              <div className="flex w-full justify-between">
                <CardTitle className="flex items-center text-lg">
                  Manager Rating
                </CardTitle>
                <Popover>
                  <PopoverTrigger>
                    <div>
                      <Info className="h-6 w-6 text-primary" />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent>
                    <span>Calculated using average rank</span>
                  </PopoverContent>
                </Popover>
              </div>
            </CardHeader>
            <CardContent className="pb-2">
              <PieChart totalRankMean={totalRankMean || 0}></PieChart>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CompareSection;
