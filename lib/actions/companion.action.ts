'use server';

import { auth } from '@clerk/nextjs/server';
import { Companion } from '@/graphql/generated/types';
import { getClient } from '@/graphql/client';
import {
  GET_COMPANION,
  GET_COMPANIONS
} from '@/graphql/queries/companion-query';
import { CREATE_COMPANION } from '@/graphql/mutations/comopanion-mutation';
import { cache } from 'react';

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
