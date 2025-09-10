import CompanionCard from '@/components/companion-card';
import CompanionsList from '@/components/companions-list';
import CTA from '@/components/cta';
import { getHomepageData } from '@/lib/actions/homepage.action';
import { getSubjectColor } from '@/lib/utils';
import React from 'react';

const Page = async () => {
  const { companions, sessionHistories: recentSessions } =
    await getHomepageData();

  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section">
        {companions.edges?.length === 0 && (
          <p className="text-center text-muted-foreground">
            No companions found.
          </p>
        )}
        {companions.edges?.map(({ node }) => (
          <CompanionCard
            key={node.id}
            {...node}
            color={getSubjectColor(node.subject)}
          />
        ))}
      </section>
      <section className="home-section mb-6">
        <CompanionsList
          title="Recent completed session"
          classNames="w-2/3 max-lg:w-full"
          companions={recentSessions}
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
