import { HttpLink } from '@apollo/client';
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache
} from '@apollo/client-integration-nextjs';
import { auth } from '@clerk/nextjs/server';

export const client = async () => {
  const { getToken } = await auth();
  const token = await getToken();

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      // this needs to be an absolute url, as relative urls cannot be used in SSR
      uri: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        Authorization: `Bearer ${token}`
      },
      fetchOptions: {
        // you can pass additional options that should be passed to `fetch` here,
        // e.g. Next.js-related `fetch` options regarding caching and revalidation
        // see https://nextjs.org/docs/app/api-reference/functions/fetch#fetchurl-options
      }
    })
  });
};
// Apollo Client for React Server Components (RSC)
// This client will be used in server components and server actions
// It automatically attaches the Clerk auth token to each request
export const { getClient, query, PreloadQuery } = registerApolloClient(
  async () => client()
);
