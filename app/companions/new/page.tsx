import CompanionForm from '@/components/companion-form';
import { LimitPlan } from '@/components/limit-plan';
import { newCompanionPermissions } from '@/lib/actions/companion.action';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const NewCompanion = async () => {
  const { userId } = await auth();
  if (!userId) redirect('/sign-in');

  const canCreateCompanion = await newCompanionPermissions();

  if (!canCreateCompanion) {
    return <LimitPlan />;
  }
  return (
    <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center pb-2">
      <article className="w-full gap-4 flex flex-col">
        <h1>Companion Builder</h1>

        <CompanionForm />
      </article>
    </main>
  );
};

export default NewCompanion;
