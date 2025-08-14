import { z } from 'zod';
import { unauthorized, json } from '@/lib/response';
import { canViewTeam } from '@/lib/auth';
import { getQueryFilters, parseRequest } from '@/lib/request';
import { pagingParams, searchParams } from '@/lib/schema';
import { getTeamWebsites } from '@/queries';

export async function GET(request: Request, { params }: { params: Promise<{ teamId: string }> }) {
  const schema = z.object({
    ...pagingParams,
    ...searchParams,
  });
  const { teamId } = await params;
  const { auth, query, error } = await parseRequest(request, schema);

  if (error) {
    return error();
  }

  if (!(await canViewTeam(auth, teamId))) {
    return unauthorized();
  }

  const filters = await getQueryFilters(query);

  const websites = await getTeamWebsites(teamId, filters);

  return json(websites);
}
