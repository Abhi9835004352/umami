import { canViewWebsite } from '@/lib/auth';
import { unauthorized, json } from '@/lib/response';
import { getQueryFilters, parseRequest, setWebsiteDate } from '@/lib/request';
import { BreakdownParameters, getBreakdown } from '@/queries';
import { reportResultSchema } from '@/lib/schema';

export async function POST(request: Request) {
  const { auth, body, error } = await parseRequest(request, reportResultSchema);

  if (error) {
    return error();
  }

  const { websiteId } = body;

  if (!(await canViewWebsite(auth, websiteId))) {
    return unauthorized();
  }

  const parameters = await setWebsiteDate(websiteId, body.parameters);
  const filters = getQueryFilters(body.filters);

  const data = await getBreakdown(websiteId, parameters as BreakdownParameters, filters);

  return json(data);
}
