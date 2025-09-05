import CompanionCard from '@/components/companion-card';
import CompanionsFilter from '@/components/companion-filter';
import Loading, { CompanionSkeletonLoading } from '@/components/loading';
import Pagination from '@/components/pagination';

import { CompanionParams, getCompanions } from '@/lib/actions/companion.action';
import { getSubjectColor } from '@/lib/utils';

import React, { Suspense } from 'react';

async function GetCompanions({ params }: { params: CompanionParams }) {
  const companions = await getCompanions(params);
  return (
    <>
      <section className="grid grid-cols-3 gap-4">
        {companions?.edges?.map(({ node }: any) => (
          <CompanionCard
            key={node.id}
            {...node}
            color={getSubjectColor(node.subject)}
          />
        ))}
      </section>
      {companions?.pageInfo && (
        <Pagination
          startCursor={companions.pageInfo.startCursor}
          endCursor={companions.pageInfo.endCursor}
          hasNextPage={companions.pageInfo.hasNextPage}
          hasPreviousPage={companions.pageInfo.hasPreviousPage}
          className="mb-10"
        />
      )}
    </>
  );
}

const CompanionsPage = async ({ searchParams }: SearchParams) => {
  const { after, before, first, last, filter, subject } = await searchParams;
  const updatedParams = {
    after: after as string | undefined,
    before: before as string | undefined,
    first: first ? Number(first as string) : undefined,
    last: last ? Number(last as string) : undefined,
    filter: filter as string | undefined,
    subject: subject as string | undefined
  };
  return (
    <main>
      <CompanionsFilter
        filter={updatedParams.filter}
        subject={updatedParams.subject}
      />
      <Suspense
        key={JSON.stringify(updatedParams)}
        fallback={<CompanionSkeletonLoading />}
      >
        <GetCompanions params={updatedParams} />
      </Suspense>
    </main>
  );
};

export default CompanionsPage;
