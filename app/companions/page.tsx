'use client';

import CompanionsFilter from '@/components/companion-filter';
import { CompanionSkeletonLoading } from '@/components/loading';
import Pagination from '@/components/pagination';
import CompanionCard from '@/components/companion-card';
import { getCompanions } from '@/lib/actions/companion.action';
import { getSubjectColor } from '@/lib/utils';
import { useSearchParams } from 'next/navigation';

import React, { useEffect, useState, useTransition } from 'react';
import { CompanionConnection } from '@/generated/types';

const CompanionsPage = () => {
  const searchParams = useSearchParams();
  const [companions, setCompanions] = useState<
    CompanionConnection | undefined
  >();
  const [isPending, startTransaction] = useTransition();
  const updatedParams = {
    after: searchParams.get('after'),
    before: searchParams.get('before'),
    first: searchParams.get('first')
      ? Number(searchParams.get('first'))
      : undefined,
    last: searchParams.get('last')
      ? Number(searchParams.get('last'))
      : undefined,
    filter: searchParams.get('filter'),
    subject: searchParams.get('subject')
  };

  useEffect(() => {
    startTransaction(async () => {
      const data = await getCompanions(updatedParams);
      setCompanions(data);
    });
  }, [searchParams]);

  return (
    <main>
      <CompanionsFilter
        filter={updatedParams.filter}
        subject={updatedParams.subject}
      />

      {isPending ? (
        <CompanionSkeletonLoading />
      ) : (
        <section className="grid grid-cols-3 gap-4">
          {companions?.edges?.map(({ node }: any) => (
            <CompanionCard
              key={node.id}
              {...node}
              color={getSubjectColor(node.subject)}
            />
          ))}
        </section>
      )}
      {!isPending && companions?.edges?.length === 0 && (
        <p className="text-center mt-10">No companions found.</p>
      )}
      {companions?.pageInfo && (
        <Pagination
          startCursor={companions.pageInfo.startCursor}
          endCursor={companions.pageInfo.endCursor}
          hasNextPage={companions.pageInfo.hasNextPage}
          hasPreviousPage={companions.pageInfo.hasPreviousPage}
          className="mb-10"
        />
      )}
    </main>
  );
};

export default CompanionsPage;
