'use server';

import { getClient } from '@/graphql/client';
import { SessionHistory } from '@/graphql/generated/types';
import { CREATE_SESSION_HISTORY } from '@/graphql/mutations/session-history.mutation';
import { GET_SESSION_HISTORIES } from '@/graphql/queries/session-history.query';

export async function createSessionHistory(companionId: string) {
  const variables = {
    createSessionHistoryInput: { companion_id: companionId }
  };
  const client = await getClient();

  client.mutate<{
    createSessionHistory: SessionHistory;
  }>({
    mutation: CREATE_SESSION_HISTORY,
    variables
  });
}

export async function getSessionHistories() {
  const client = await getClient();

  const { data } = await client.query<{ sessionHistories: SessionHistory[] }>({
    query: GET_SESSION_HISTORIES
  });

  return data?.sessionHistories;
}
