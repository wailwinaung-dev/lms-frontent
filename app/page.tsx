import CompanionCard from '@/components/companion-card';
import CompanionsList from '@/components/companions-list';
import CTA from '@/components/cta';
import { recentSessions } from '@/constants';
import React from 'react';

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          name="Neura the Brainy Explorer"
          topic="Topic: Neural Network of the Brain"
          subject="Science"
          duration={45}
          color="#E5D0FF"
          bookmarked={false}
          id="1"
        />
        <CompanionCard
          name="Countsy the Number Wizard"
          topic="Topic: Derivatives & Integrals"
          subject="Maths"
          duration={40}
          color="#FFDA6E"
          bookmarked={false}
          id="2"
        />
        <CompanionCard
          name="Verba the Vocabulary Builder"
          topic="Topic: English Literature "
          subject="Language"
          duration={35}
          color="#BDE7FF"
          bookmarked={true}
          id="3"
        />
      </section>
      <section className="home-section">
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
