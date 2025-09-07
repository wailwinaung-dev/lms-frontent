'use client';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { subjects } from '@/constants';
import { Search, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { useDebounce } from 'use-debounce';
import { InputMaybe, Scalars } from '@/generated/types';

export interface CompanionFilterProps {
  filter?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
}
export default function CompanionsFilter({
  filter,
  subject
}: CompanionFilterProps) {
  const [filterText, setFilterText] = useState(filter || '');
  const [selectedSubject, setSelectedSubject] = useState(subject || '');

  const [debouncedFilterText] = useDebounce(filterText, 500);

  const router = useRouter();

  // Handle filter and subject change
  useEffect(() => {
    if (!filterText && !selectedSubject) return;
    const query = new URLSearchParams();
    if (debouncedFilterText) query.set('filter', debouncedFilterText);
    if (selectedSubject) query.set('subject', selectedSubject);
    router.push(`/companions?${query.toString()}`);
  }, [debouncedFilterText, selectedSubject]);

  // Clear filters
  const clearFilters = () => {
    setFilterText('');
    setSelectedSubject('');
    router.push('/companions');
  };

  return (
    <section className="flex justify-between items-between">
      <h1>Companions Library</h1>
      {/* Filter */}
      <div className="flex items-center gap-4">
        <div className="relative flex items-center">
          <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search..."
            className="pl-8 input"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
        </div>

        <div className="w-[200px]">
          <Select
            value={selectedSubject}
            onValueChange={(value) => setSelectedSubject(value)}
          >
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

        <Button variant={'outline'} onClick={clearFilters}>
          {' '}
          <X /> Clear
        </Button>
      </div>
    </section>
  );
}
