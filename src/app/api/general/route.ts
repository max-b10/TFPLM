export async function GET(request: Request) {
  try {
    const url = 'https://fantasy.premierleague.com/api/bootstrap-static/';
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`API call failed with status: ${res.status}`);
    }

    const generalData = await res.json();

    return Response.json(generalData);
  } catch (error) {
    console.error('Failed to fetch data:', error);

    return new Response('Error fetching data', { status: 500 });
  }
}
