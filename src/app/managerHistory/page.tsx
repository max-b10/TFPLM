'use client';
import { useSelector } from 'react-redux';
import CurrentTab from '../components/TabContent/CurrentTab';
import { useCheckId } from '../hooks/useCheckId';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../ui/organisms/Tabs/Tabs';
import { RootState } from '@/lib/store';
import { useManagerHistoryData } from '../hooks/managerHistoryData/useManagerHistoryData';
import { useGeneralData } from '../hooks/useGeneralData';
import { useManagerData } from '../hooks/managerData/useManagerData';
import PastTab from '../components/TabContent/PastTab';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '../ui/molecules/Alert/Alert';
import { AlertCircle } from 'lucide-react';
import { useHybridData } from '../hooks/hybridData/useHybridData';

const ManagerHistory = () => {
  const fplIdString = useSelector((state: RootState) => state.id.value);
  const fplId = Number(fplIdString);
  const { playerName } = useManagerData(fplId);
  const {
    pastSeasonsData,
    gameWeekHistoryData,
    bestRank,
    worstRank,
    bestSeasonName,
    worstSeasonName,
    seasonsPlayed,
    lowestPoints,
    highestPoints,
    totalPointsMean,
  } = useManagerHistoryData(fplId);
  const { totalRankMean } = useHybridData(fplId);
  const { generalGameweekData } = useGeneralData();

  useCheckId();
  return (
    <>
      <Tabs className="w-full p-4 md:p-0">
        <TabsList className="mb-4 bg-card p-2 md:ml-7">
          <TabsTrigger autoFocus className="mr-2" value="current">
            Current
          </TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>
        <TabsContent value="current">
          <CurrentTab
            managerGameweekData={gameWeekHistoryData || []}
            generalGameweekData={generalGameweekData || []}
            playerName={playerName}
          />
        </TabsContent>
        <TabsContent value="past">
          {pastSeasonsData && pastSeasonsData.length > 0 ? (
            <PastTab
              totalRankMean={totalRankMean || 0}
              subText={
                pastSeasonsData && pastSeasonsData.length > 0
                  ? 'Mean rank'
                  : 'Current rank'
              }
              totalPointsMean={totalPointsMean}
              pastSeasonsData={pastSeasonsData}
              bestRank={bestRank}
              worstRank={worstRank}
              seasonsPlayed={seasonsPlayed}
              lowestPoints={lowestPoints}
              highestPoints={highestPoints}
              bestSeasonName={bestSeasonName}
              worstSeasonName={worstSeasonName}
            />
          ) : (
            <div className="flex justify-center text-primary">
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Oops!</AlertTitle>
                <AlertDescription>
                  No past seasons data for this FPL manager, must be rookie!
                </AlertDescription>
              </Alert>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </>
  );
};
export default ManagerHistory;
