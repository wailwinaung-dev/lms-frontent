'use client';

import CompanionsFilter from '@/components/companion-filter';
import { CompanionSkeletonLoading } from '@/components/loading';
import Pagination from '@/components/pagination';
import CompanionCard from '@/components/companion-card';
import { getSubjectColor } from '@/lib/utils';
import { useSearchParams } from 'next/navigation';

import React, { useEffect, useState, useTransition } from 'react';
import { CompanionConnection } from '@/graphql/generated/types';
import { useQuery } from '@apollo/client/react';
import { GET_COMPANIONS } from '@/graphql/queries/companion.query';

const CompanionsPage = () => {
  const searchParams = useSearchParams();
  const { loading, error, data } = useQuery<{
    companions: CompanionConnection;
  }>(GET_COMPANIONS, {
    variables: {
      first: searchParams.get('first'),
      last: searchParams.get('last'),
      after: searchParams.get('after'),
      before: searchParams.get('before'),
      filter: searchParams.get('filter'),
      subject: searchParams.get('subject')
    }
  });

  // console.log('Data from useQuery:', data, loading, error);

  return (
    <main>
      <CompanionsFilter
        filter={searchParams.get('filter')}
        subject={searchParams.get('subject')}
      />

      {loading ? (
        <CompanionSkeletonLoading />
      ) : (
        <section className="grid grid-cols-3 gap-4">
          {data?.companions?.edges?.map(({ node }: any) => (
            <CompanionCard
              key={node.id}
              {...node}
              color={getSubjectColor(node.subject)}
            />
          ))}
        </section>
      )}
      {!loading && data?.companions?.edges?.length === 0 && (
        <p className="text-center mt-10">No companions found.</p>
      )}
      {data?.companions?.pageInfo && (
        <Pagination
          startCursor={data.companions.pageInfo.startCursor}
          endCursor={data.companions.pageInfo.endCursor}
          hasNextPage={data.companions.pageInfo.hasNextPage}
          hasPreviousPage={data.companions.pageInfo.hasPreviousPage}
          className="mb-10"
        />
      )}
    </main>
  );
};

export default CompanionsPage;
