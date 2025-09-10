'use server';

import { getClient } from '@/graphql/client';
import { CompanionConnection, SessionHistory } from '@/graphql/generated/types';
import { GET_COMPANIONS_N_SESSIONS_HISTORY } from '@/graphql/queries/homepage.query';

export async function getHomepageData() {
  const client = await getClient();
  const { data, error } = await client.query<{
    companions: CompanionConnection;
    sessionHistories: SessionHistory[];
  }>({
    query: GET_COMPANIONS_N_SESSIONS_HISTORY,
    variables: { first: 3 }
  });
  if (error || !data) {
    console.log(error);
    throw new Error('Failed to fetch data');
  }
  return data;
}
