'use server';

import { getClient } from '@/graphql/client';
import { SessionHistory } from '@/graphql/generated/types';
import { CREATE_SESSION_HISTORY } from '@/graphql/mutations/session-history.mutation';

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
