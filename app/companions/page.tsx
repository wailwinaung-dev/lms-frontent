import CompanionCard from '@/components/companion-card';
import Loading from '@/components/loading';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { subjects } from '@/constants';
import { CompanionConnection } from '@/generated/types';
import { getClient } from '@/lib/ApolloClient';
import { getSubjectColor } from '@/lib/utils';
import { gql } from '@apollo/client';
import { Search } from 'lucide-react';
import React, { Suspense } from 'react';

async function GetCompanions() {
  const client = await getClient();

  const { data } = await client.query<{ companions: CompanionConnection }>({
    query: gql`
      query Companions {
        companions {
          pageInfo {
            startCursor
            endCursor
            hasPreviousPage
            hasNextPage
          }
          edges {
            cursor
            node {
              id
              name
              subject
              topic
              style
              voice
              duration
              author
            }
          }
        }
      }
    `
  });

  return (
    <>
      {data?.companions?.edges?.map(({ node }: any) => (
        <CompanionCard
          key={node.id}
          {...node}
          color={getSubjectColor(node.subject)}
        />
      ))}
    </>
  );
}

const CompanionsPage = async () => {
  return (
    <main>
      <section className="flex justify-between items-between">
        <h1>Companions Library</h1>
        {/* Filter */}
        <div className="flex items-center gap-4">
          <div className="relative flex items-center">
            <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="text" placeholder="Search..." className="pl-8 input" />
          </div>

          <div className="w-[200px]">
            <Select>
              <SelectTrigger className="input capitalize w-[100px]">
                <SelectValue placeholder="Select subject" />
              </SelectTrigger>
              <SelectContent>
                {subjects.map((subject) => (
                  <SelectItem
                    value={subject}
                    key={subject}
                    className="capitalize"
                  >
                    {subject}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>
      <Suspense fallback={<Loading />}>
        <section className="grid grid-cols-3 gap-4">
          <GetCompanions />
        </section>
      </Suspense>
    </main>
  );
};

export default CompanionsPage;
