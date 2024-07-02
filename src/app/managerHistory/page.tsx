'use client';
import { useCheckId } from '../hooks/useCheckId';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../ui/organisms/Tabs/Tabs';

const ManagerHistory = () => {
  useCheckId();
  return (
    <>
      <Tabs>
        <TabsList className="bg-card p-2 md:ml-7">
          <TabsTrigger className="mr-2" value="current">
            Current
          </TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>
        <TabsContent value="current">
          <h1>current</h1>
        </TabsContent>
        <TabsContent value="past">
          <h1>past</h1>
        </TabsContent>
      </Tabs>
    </>
  );
};
export default ManagerHistory;
