'use client';

import CompanionsFilter from '@/components/companion-filter';
import { CompanionSkeletonLoading } from '@/components/loading';
import Pagination from '@/components/pagination';
import CompanionCard from '@/components/companion-card';
import { getSubjectColor } from '@/lib/utils';

import React, { use } from 'react';
import { CompanionConnection } from '@/graphql/generated/types';
import { useQuery } from '@apollo/client/react';
import { GET_COMPANIONS } from '@/graphql/queries/companion.query';

const CompanionsPage = ({
  searchParams: filteredSearchParams
}: SearchParams) => {
  const { first, last, after, before, filter, subject } =
    use(filteredSearchParams);

  const { loading, error, data } = useQuery<{
    companions: CompanionConnection;
  }>(GET_COMPANIONS, {
    variables: {
      first,
      last,
      after,
      before,
      filter,
      subject
    }
  });

  // console.log('Data from useQuery:', data, loading, error);

  return (
    <main>
      <CompanionsFilter
        filter={filter as string | undefined}
        subject={subject as string | undefined}
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
