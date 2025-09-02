'use server';

import { auth } from '@clerk/nextjs/server';

export async function createCompanion(formData: CreateCompanion) {
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

  console.log('Access Token > ', token);
  const variables = { createCompanionInput: formData };
  console.log('url >', process.env.NEXT_PUBLIC_API_URL);
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

  if (data.errors) {
    console.error('GraphQL Errors:', data.errors);
  }

  return data.data.createCompanion;
}
