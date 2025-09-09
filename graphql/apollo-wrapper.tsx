'use client';

import { HttpLink } from '@apollo/client';
import {
  ApolloNextAppProvider,
  ApolloClient,
  InMemoryCache
} from '@apollo/client-integration-nextjs';
import { useAuth } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

// you need to create a component to wrap your app in
export function ApolloWrapper({ children }: React.PropsWithChildren) {
  const { getToken } = useAuth();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getToken();
      setToken(token);
    };
    fetchToken();
  }, []);

  const makeClient = () =>
    new ApolloClient({
      // use the `InMemoryCache` from "@apollo/client-integration-nextjs"
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
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
