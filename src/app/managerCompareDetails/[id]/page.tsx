'use client';

import FadeIn from '@/app/animations/FadeIn';
import CompareSection from '@/app/components/CompareSection/CompareSection';
import MainContainer from '@/app/components/Layout/MainContainer';
import Navbar from '@/app/components/Layout/Navbar';
import { useHybridData } from '@/app/hooks/hybridData/useHybridData';
import { useManagerData } from '@/app/hooks/managerData/useManagerData';
import { useManagerHistoryData } from '@/app/hooks/managerHistoryData/useManagerHistoryData';
import { useCheckId } from '@/app/hooks/useCheckId';
import { useNavigationWithId } from '@/app/hooks/useNavigationWithId';
import { RootState } from '@/lib/store';
import { useSelector } from 'react-redux';

const ManagerCompareDetails = ({ params }: { params: { id: string } }) => {
  const enemyManagerId = params.id;
  const fplIdString = useSelector((state: RootState) => state.id.value);
  const fplId = Number(fplIdString);
  const { playerName, favouriteTeamSrc } = useManagerData(fplId);
  const {
    managerSeasonsPlayed,
    pastSeasonsData,
    totalPointsMean,
    bestRank,
    bestSeason,
  } = useManagerHistoryData(fplId);
  const { totalRankMean } = useHybridData(fplId);
  const handleSubmit = useNavigationWithId();
  useCheckId();

  return (
    <>
      <Navbar handleSubmit={handleSubmit}></Navbar>
      <FadeIn>
        <MainContainer>
          <div className="mx-4 mt-4 flex max-w-6xl flex-col items-center justify-center sm:mx-auto md:mt-0 lg:flex-row lg:space-x-8">
            <CompareSection
              id={enemyManagerId}
              name={playerName}
              seasonsPlayed={managerSeasonsPlayed}
              totalRankMean={totalRankMean}
              totalPointsMean={totalPointsMean}
              src={favouriteTeamSrc}
              slides={pastSeasonsData || []}
              bestRank={bestRank || 0}
              bestSeason={
                bestSeason || { season_name: '', total_points: 0, rank: 0 }
              }
              isLeftColumn={true}
              // showUserIcon={false}
            />

            {/* <CompareSection
              // region={regionName || ''}
              id={enemyManagerId}
              // name={enemyName}
              // seasonsPlayed={enemySeasonsPlayed}
              // totalRankMean={enemyTotalRankMean}
              // totalPointsMean={enemyTotalPointsMean}
              // src={enemyFavouriteTeamSrc}
              // slides={enemyPastSeasonsData || []}
              // bestRank={enemyBestRank || 0}
              // bestSeason={
              //   enemyBestSeason || {
              //     season_name: '',
              //     total_points: 0,
              //     rank: 0,
              //   }
              // }
              isLeftColumn={false}
              // showUserIcon={true}
            /> */}
          </div>
        </MainContainer>
      </FadeIn>
    </>
  );
};
export default ManagerCompareDetails;
