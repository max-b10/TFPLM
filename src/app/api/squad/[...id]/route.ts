export async function GET(
  request: Request,
  { params }: { params: { id: string[] } }
) {
  const [fplId, gameweek] = params.id.map(Number);
  // const fplId = params.id;
  // const gameweek = params.gameweek;

  const url = `https://fantasy.premierleague.com/api/entry/${fplId}/event/${gameweek}/picks/`;
  console.log('url here:  ' + url);
  const res = await fetch(url);
  const squadPicksData = await res.json();

  return Response.json(squadPicksData);
}
