import { redirect } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import CompanionForm from '@/components/companion-form';

const NewCompanion = async () => {
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
