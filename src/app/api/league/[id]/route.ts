export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  try {
    const fplId = params.id;
    const url = `https://fantasy.premierleague.com/api/leagues-classic/${fplId}/standings/`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`API call failed with status: ${res.status}`);
    }

    const leagueData = await res.json();
    return Response.json(leagueData);
  } catch (error) {
    console.error('Failed to fetch data:', error);

    return new Response('Error fetching data', { status: 500 });
  }
}
