export function calculateLinearPercentileRank(
  meanRank: number,
  totalPlayers: number = 10000000
): number {
  const percentile = 1 - meanRank / totalPlayers;
  const percentileScore = parseFloat((percentile * 100).toFixed(1));

  return percentileScore;
}
