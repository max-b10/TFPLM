export async function GET(request: Request) {
  const res = await fetch('https://fantasy.premierleague.com/api/entry/115660');
  const managerData = await res.json();

  return Response.json(managerData);
}
