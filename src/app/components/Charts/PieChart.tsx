import { calculateLinearPercentileRank } from '@/app/helpers/calculateRating/calculateRating';
import { getColour } from '@/app/helpers/getColour/getColour';
import { FC } from 'react';
import { Cell, Label, Pie, PieChart, ResponsiveContainer } from 'recharts';

interface IPieChartProps {
  totalRankMean: number;
}

const TOTAL_RANKS = 10000000;

const PieChartComponent: FC<IPieChartProps> = ({ totalRankMean }) => {
  const rankProportion = TOTAL_RANKS - totalRankMean;
  const data = [
    { name: 'Best Rank', value: rankProportion },
    { name: 'Rest', value: TOTAL_RANKS - rankProportion },
  ];
  const managerRating = calculateLinearPercentileRank(totalRankMean);
  const managerRatingString = `${managerRating}%`;
  return (
    <ResponsiveContainer height={127} width="100%">
      <PieChart>
        <Pie
          cornerRadius={5}
          stroke={'none'}
          data={data}
          startAngle={90}
          endAngle={-270}
          innerRadius="80%"
          outerRadius="100%"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={index === 0 ? getColour(totalRankMean) : 'transparent'}
            />
          ))}
          <Label position={'center'} style={{ fill: '#fff' }}>
            {managerRatingString}
          </Label>
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
