'use server';

import { auth } from '@clerk/nextjs/server';

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
