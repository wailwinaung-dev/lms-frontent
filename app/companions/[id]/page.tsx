import { getCompanion } from '@/lib/actions/companion.action';
import { currentUser } from '@clerk/nextjs/server';
import { notFound, redirect } from 'next/navigation';
import React, { Suspense } from 'react';
import Image from 'next/image';
import { getSubjectColor } from '@/lib/utils';
import CompanionComponent from '@/components/companion-component';

const CompanionSession = async ({
  params
}: {
  params: Promise<{ id: string }>;
}) => {
  const user = await currentUser();
  if (!user) {
    redirect('/sign-in');
  }
  const { id } = await params;

  const companion = await getCompanion(id);
  if (!companion) {
    notFound();
  }
  const { name, subject, topic, duration } = companion;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main>
        <article className="flex rounded-border justify-between p-6 max-md:flex-col">
          <div className="flex items-center gap-2">
            <div
              className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden"
              style={{ backgroundColor: getSubjectColor(subject) }}
            >
              <Image
                src={`/icons/${subject}.svg`}
                alt={subject}
                width={35}
                height={35}
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <p className="font-bold text-2xl">{name}</p>
                <div className="subject-badge max-sm:hidden">{subject}</div>
              </div>
              <p className="text-lg">{topic}</p>
            </div>
          </div>
          <div className="items-start text-2xl max-md:hidden">
            {duration} minutes
          </div>
        </article>

        <CompanionComponent
          {...companion}
          companionId={id}
          userName={user.firstName!}
          userImage={user.imageUrl!}
        />
      </main>
    </Suspense>
  );
};

export default CompanionSession;
