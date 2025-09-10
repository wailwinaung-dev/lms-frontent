'use server';

import {
  Companion,
  CompanionConnection,
  QueryCompanionsArgs
} from '@/graphql/generated/types';
import { getClient } from '@/graphql/client';
import {
  GET_COMPANION,
  GET_COMPANIONS,
  GET_TOTAL_COUNT_BY_USER
} from '@/graphql/queries/companion.query';
import { CREATE_COMPANION } from '@/graphql/mutations/comopanion.mutation';
import { auth, clerkClient } from '@clerk/nextjs/server';

export async function createCompanion(
  prevState: any,
  formData: CreateCompanion
): Promise<ServerActionResponse> {
  const variables = { createCompanionInput: formData };
  const client = await getClient();

  const { data, error } = await client.mutate<{ createCompanion: Companion }>({
    mutation: CREATE_COMPANION,
    variables,

    refetchQueries: [{ query: GET_COMPANIONS }]
  });
  if (error) {
    return {
      success: false,
      message: 'Failed to create companion'
    };
  }

  return {
    success: true,
    message: `Companion "${data?.createCompanion.name}" created successfully!`
  };
}

export async function getCompanion(id: string) {
  const client = await getClient();

  const { data } = await client.query<{ companion: Companion }>({
    query: GET_COMPANION,
    variables: { id }
  });

  return data?.companion;
}

// Fetch companions with pagination
//note: first, last are not used in the query yet
export async function getCompanions({
  after,
  before,
  first,
  last,
  filter,
  subject
}: QueryCompanionsArgs) {
  const client = await getClient();

  const { data } = await client.query<{ companions: CompanionConnection }>({
    query: GET_COMPANIONS,
    variables: { first, last, after, before, filter, subject }
  });

  return data?.companions;
}

export const newCompanionPermissions = async () => {
  const { userId, has } = await auth();

  let limit = 0;

  if (has({ plan: 'pro_companions' })) {
    return true;
  } else if (has({ feature: '3_active_companions' })) {
    limit = 3;
  } else if (has({ feature: '10_active_companions' })) {
    limit = 10;
  }

  const client = await getClient();
  const { data, error } = await client.query<{ totalCountByUser: number }>({
    query: GET_TOTAL_COUNT_BY_USER
  });

  if (error) throw new Error(error.message);

  const companionCount = data?.totalCountByUser || 0;

  if (companionCount >= limit) {
    return false;
  } else {
    return true;
  }
};
