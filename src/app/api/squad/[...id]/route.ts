export async function GET(
  request: Request,
  { params }: { params: { id: string[] } }
) {
  try {
    const [fplId, gameweek] = params.id.map(Number);
    const url = `https://fantasy.premierleague.com/api/entry/${fplId}/event/${gameweek}/picks/`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`API call failed with status: ${res.status}`);
    }

    const squadPicksData = await res.json();

    return Response.json(squadPicksData);
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return new Response('Error fetching data', { status: 500 });
  }
}
