export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const paramsId = params.id;
  console.log('hiya ' + paramsId);

  const url = `https://fantasy.premierleague.com/api/entry/${paramsId}/`;
  const res = await fetch(url);
  const managerData = await res.json();

  return Response.json(managerData);
}
