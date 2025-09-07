import { getCompanion } from '@/lib/actions/companion.action';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react';

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

  const data = await getCompanion(id);
  console.log('data', data);
  return <div>Companion Session Page {id}</div>;
};

export default CompanionSession;
