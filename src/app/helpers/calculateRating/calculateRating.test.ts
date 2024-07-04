import { calculateLinearPercentileRank } from './calculateRating';

describe('calculateLinearPercentileRank', () => {
  test('calculates percentile rank correctly with default totalPlayers', () => {
    const meanRank = 5000000;
    const result = calculateLinearPercentileRank(meanRank);
    expect(result).toBe(50.0);
  });

  test('calculates percentile rank correctly with custom totalPlayers', () => {
    const meanRank = 250;
    const totalPlayers = 500;
    const result = calculateLinearPercentileRank(meanRank, totalPlayers);
    expect(result).toBe(50.0);
  });

  test('handles meanRank equal to totalPlayers', () => {
    const meanRank = 10000000;
    const result = calculateLinearPercentileRank(meanRank);
    expect(result).toBe(0.0);
  });

  test('handles meanRank of 1', () => {
    const meanRank = 1;
    const result = calculateLinearPercentileRank(meanRank);
    expect(result).toBe(100.0);
  });
});
