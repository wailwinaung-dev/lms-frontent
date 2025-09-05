'use server';

import { auth } from '@clerk/nextjs/server';
import { CompanionConnection } from '@/generated/types';
import { getClient } from '@/lib/ApolloClient';
import { gql } from '@apollo/client';

export async function createCompanion(
  prevState: any,
  formData: CreateCompanion
): Promise<ServerActionResponse> {
  const { getToken } = await auth();
  const token = await getToken();
  const mutation = `
  mutation CreateCompanion($createCompanionInput: CreateCompanionInput!) {
    createCompanion(createCompanionInput: $createCompanionInput) {
      id
      name
    }
  }
`;

  const variables = { createCompanionInput: formData };
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      query: mutation,
      variables
    })
  });

  const data = await res.json();
  console.log('Create Companion:', data);
  if (data.errors) {
    return {
      success: false,
      message: 'Failed to create companion'
    };
  }

  return {
    success: true,
    message: `Companion "${data.data.createCompanion.name}" created successfully!`
  };
}

// Fetch companions with pagination
//note: first, last are not used in the query yet
export interface CompanionParams {
  after?: string;
  before?: string;
  first?: number;
  last?: number;
  searchText?: string;
  subject?: string;
}
export async function getCompanions({
  after,
  before,
  first,
  last,
  searchText,
  subject
}: CompanionParams) {
  const client = await getClient();

  const query = gql`
    query Companions($first: Int, $last: Int, $after: String, $before: String) {
      companions(first: $first, last: $last, after: $after, before: $before) {
        pageInfo {
          startCursor
          endCursor
          hasPreviousPage
          hasNextPage
        }
        edges {
          cursor
          node {
            id
            name
            subject
            topic
            style
            voice
            duration
            author
          }
        }
      }
    }
  `;

  const { data } = await client.query<{ companions: CompanionConnection }>({
    query,
    variables: { first, last, after, before }
  });

  return data?.companions;
}
