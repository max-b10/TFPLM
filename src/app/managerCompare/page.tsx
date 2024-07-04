'use client';
import { useEffect, useState } from 'react';
import { useCheckId } from '../hooks/useCheckId';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/organisms/Card/Card';
import { LeaguesTable } from '../components/Tables/ManagerCompare/LeaguesTable/LeaguesTable';
import { leagueColumns } from '../components/Tables/ManagerCompare/LeaguesTable/leagueColumns';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { useManagerData } from '../hooks/managerData/useManagerData';
import { useManagerHistoryData } from '../hooks/managerHistoryData/useManagerHistoryData';
import { LoaderIcon } from 'lucide-react';
import { ILeague, ILeagueData } from '../types/league/leagueData';
import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';
import { API_ENDPOINTS } from '../api/endpoints';
import { MembersTable } from '../components/Tables/ManagerCompare/MembersTable/MembersTable';
import { memberColumns } from '../components/Tables/ManagerCompare/MembersTable/memberColumns';
import Navbar from '../components/Layout/Navbar';
import { useNavigationWithId } from '../hooks/useNavigationWithId';
import FadeIn from '../animations/FadeIn';
import MainContainer from '../components/Layout/MainContainer';

const ManagerCompare = () => {
  const fplIdString = useSelector((state: RootState) => state.id.value);
  const fplId = Number(fplIdString);
  const { isLoadingManagerData, managerClassicLeagues } = useManagerData(fplId);
  const { isLoadingManagerHistoryData } = useManagerHistoryData(fplId);
  const [selectedLeagueId, setSelectedLeagueId] = useState<number | null>(null);

  const { data: selectedLeague } = useSWR<ILeagueData>(
    selectedLeagueId ? `${API_ENDPOINTS.league}/${selectedLeagueId}` : null,
    fetcher
  );
  const leagueMembers = selectedLeague?.standings.results;
  const handleSubmit = useNavigationWithId();

  useCheckId();
  return (
    <>
      <Navbar handleSubmit={handleSubmit}></Navbar>

      {isLoadingManagerData || isLoadingManagerHistoryData ? (
        <div className="flex min-h-screen items-center justify-center">
          <LoaderIcon className="animate-spin" />
        </div>
      ) : (
        <>
          <FadeIn>
            <MainContainer>
              <div className="mt-4 grid h-full items-stretch gap-4 px-4 md:mt-0 md:gap-8 md:px-0 lg:grid-cols-3">
                <Card className="flex min-h-[70vh] flex-grow flex-col border-primary lg:col-span-2">
                  <CardHeader className="mb-0 rounded-tl-lg rounded-tr-lg bg-muted/50 p-5">
                    <CardTitle>Classic Leagues</CardTitle>
                    <CardDescription>Select a league</CardDescription>
                  </CardHeader>
                  <CardContent className="max-h-[50vh] overflow-auto px-0">
                    <LeaguesTable
                      columns={leagueColumns}
                      data={(managerClassicLeagues || []).map((league) => ({
                        league,
                      }))}
                      onRowClick={(data: { league: ILeague }) =>
                        setSelectedLeagueId(data.league.id)
                      }
                    />
                  </CardContent>
                </Card>
                <Card className="min-h-[70vh]flex-grow flex flex-col border-primary lg:col-span-1">
                  {selectedLeagueId ? (
                    <>
                      <CardHeader className="mb-0 rounded-tl-lg rounded-tr-lg bg-muted/50 p-5">
                        <CardTitle>{selectedLeague?.league.name}</CardTitle>
                        <CardDescription>
                          Select a manager to compare
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="max-h-[50vh] overflow-auto px-0">
                        <MembersTable
                          columns={memberColumns}
                          data={(leagueMembers || []).map((member) => ({
                            member,
                          }))}
                          fplId={fplId}
                        />
                      </CardContent>
                    </>
                  ) : (
                    <div className="flex h-full items-center justify-center text-primary">
                      <p>Select a league to see its members</p>
                    </div>
                  )}
                </Card>
              </div>
            </MainContainer>
          </FadeIn>
        </>
      )}
    </>
  );
};
export default ManagerCompare;
