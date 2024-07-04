import { calculateMeanPoints, calculateMeanRank } from './calculateMean';
import { IPast } from '../../types/manager/managerHistory';

describe('calculateMeanPoints', () => {
  test('calculates mean points correctly', () => {
    const pastSeasons: IPast[] = [
      { total_points: 100, rank: 1, season_name: '2020/21' },
      { total_points: 200, rank: 2, season_name: '2021/22' },
    ];
    expect(calculateMeanPoints(pastSeasons)).toBe(150);
  });

  test('returns undefined for empty array', () => {
    expect(calculateMeanPoints([])).toBeUndefined();
  });

  test('returns undefined for undefined input', () => {
    expect(calculateMeanPoints(undefined)).toBeUndefined();
  });
});

describe('calculateMeanRank', () => {
  test('calculates mean rank correctly', () => {
    const pastSeasons: IPast[] = [
      { total_points: 100, rank: 1, season_name: '2020/21' },
      { total_points: 200, rank: 2, season_name: '2021/22' },
    ];
    expect(calculateMeanRank(pastSeasons, undefined)).toBe(1);
  });

  test('returns overallRank for empty array', () => {
    const overallRank = 10;
    expect(calculateMeanRank([], overallRank)).toBe(overallRank);
  });

  test('returns overallRank for undefined input', () => {
    const overallRank = 10;
    expect(calculateMeanRank(undefined, overallRank)).toBe(overallRank);
  });
});
