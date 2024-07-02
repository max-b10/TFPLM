export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  try {
    const fplId = params.id;
    const url = `https://fantasy.premierleague.com/api/entry/${fplId}/history`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`API call failed with status: ${res.status}`);
    }

    const managerHistoryData = await res.json();

    return Response.json(managerHistoryData);
  } catch (error) {
    console.error('Failed to fetch data:', error);

    return new Response('Error fetching data', { status: 500 });
  }
}
