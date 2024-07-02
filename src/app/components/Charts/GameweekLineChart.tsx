import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { IEvent } from '@/app/types/general/event';
import { ICurrent } from '@/app/types/manager/managerHistory';
import { FC } from 'react';

interface IGameweekLineChartProps {
  managerGameweekData: ICurrent[];
  generalGameweekData: IEvent[];
  playerName: string;
}

const GameweekLineChart: FC<IGameweekLineChartProps> = ({
  managerGameweekData,
  generalGameweekData,
  playerName,
}) => {
  const series = [
    {
      name: playerName,
      data: managerGameweekData.map((item) => ({
        category: item.event,
        value: item.points,
      })),
    },
    {
      name: 'Average',
      data: generalGameweekData.map((item) => ({
        category: item.id,
        value: item.average_entry_score,
      })),
    },
  ];
  let tickCount = 0;

  const tickFormatter = (tick: string) => {
    tickCount += 1;
    return tickCount % 2 === 0 ? tick : '';
  };
  return (
    <div className="h-full w-full">
      <ResponsiveContainer>
        <LineChart
          width={500}
          margin={{
            top: 0,
            right: 30,
            left: -20,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey="category"
            type="category"
            allowDuplicatedCategory={false}
            tickFormatter={tickFormatter}
          />
          <YAxis dataKey="value" />
          {/* <Tooltip content={<GameweekTooltip playerName={playerName} />} /> */}
          <Legend />
          {series.map((s) => (
            <Line
              dataKey="value"
              data={s.data}
              name={s.name}
              key={s.name}
              stroke={s.name === playerName ? '#22C55E' : '#A3A8B1'}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GameweekLineChart;
