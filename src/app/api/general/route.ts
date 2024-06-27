export async function GET(request: Request) {
  const res = await fetch(
    'https://fantasy.premierleague.com/api/bootstrap-static/'
  );
  const generalData = await res.json();

  return Response.json({ generalData });
}
