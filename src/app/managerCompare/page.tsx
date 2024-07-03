'use client';
import { useState } from 'react';
import { useCheckId } from '../hooks/useCheckId';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/organisms/Card/Card';

const ManagerCompare = () => {
  const [selectedLeagueId, setSelectedLeagueId] = useState<number | null>(null);

  useCheckId();
  return (
    <>
      <div className="mt-4 grid h-full items-stretch gap-4 px-4 md:mt-0 md:gap-8 md:px-0 lg:grid-cols-3">
        <Card className="flex min-h-[70vh] flex-grow flex-col border-primary lg:col-span-2">
          <CardHeader className="mb-4 rounded-tl-lg rounded-tr-lg bg-muted/50 px-7">
            <CardTitle>Classic Leagues</CardTitle>
            <CardDescription>Select a league</CardDescription>
          </CardHeader>
          <CardContent className="max-h-[50vh] overflow-auto">
            {/* <LeaguesTable
            columns={leagueColumns}
            data={(managerClassicLeagues || []).map((league) => ({
              league,
            }))}
            onRowClick={(data: { league: ILeague }) =>
              setSelectedLeagueId(data.league.id)
            }
          /> */}
          </CardContent>
        </Card>
        <Card className="min-h-[70vh]flex-grow flex flex-col border-primary lg:col-span-1">
          {selectedLeagueId ? (
            <>
              <CardHeader className="mb-4 rounded-tl-lg rounded-tr-lg bg-muted/50">
                <CardTitle>
                  league here
                  {/* {selectedLeague?.league.name} */}
                </CardTitle>
                <CardDescription>Select a manager to compare</CardDescription>
              </CardHeader>
              <CardContent className="max-h-[50vh] overflow-auto">
                {/* <MembersTable
                columns={memberColumns}
                data={(leagueMembers || []).map((member) => ({
                  member,
                }))}
              /> */}
              </CardContent>
            </>
          ) : (
            <div className="flex h-full items-center justify-center text-primary">
              <p>Select a league to see its members</p>
            </div>
          )}
        </Card>
      </div>
    </>
  );
};
export default ManagerCompare;
