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

const ManagerHistory = () => {
  const fplIdString = useSelector((state: RootState) => state.id.value);
  const fplId = Number(fplIdString);
  const { managerHistoryData, isLoadingManagerData } =
    useManagerHistoryData(fplId);
  useCheckId();
  console.log(managerHistoryData);
  return (
    <>
      <Tabs className="m:p-0 w-full p-4">
        <TabsList className="mb-4 bg-card p-2 md:ml-7">
          <TabsTrigger autoFocus className="mr-2" value="current">
            Current
          </TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>
        <TabsContent value="current">
          <CurrentTab />
        </TabsContent>
        <TabsContent value="past">
          <h1>past</h1>
        </TabsContent>
      </Tabs>
    </>
  );
};
export default ManagerHistory;
