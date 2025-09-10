import { getClient } from '@/graphql/client';
import { SessionHistory, Companion } from '@/graphql/generated/types';
import { GET_COMPANIONS_N_SESSIONS_HISTORY_BY_USER_ID } from '@/graphql/queries/my-journey.query';

export async function getMyJourneyData() {
  const client = await getClient();
  const { data, error } = await client.query<{
    companionsByUser: Companion[];
    sessionHistoriesByUser: SessionHistory[];
  }>({
    query: GET_COMPANIONS_N_SESSIONS_HISTORY_BY_USER_ID
  });
  if (error || !data) {
    console.log(error);
    throw new Error('Failed to fetch data');
  }
  return data;
}
