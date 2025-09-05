'use client';

import { Button } from '@/components/ui/button';
import { Maybe } from '@/generated/types';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

interface PaginationProps {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor?: Maybe<string> | undefined;
  endCursor?: Maybe<string> | undefined;
  className?: string;
}

export default function Pagination({
  hasNextPage,
  hasPreviousPage,
  startCursor,
  endCursor,
  className
}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const createPageURL = (cursor: string, direction: 'next' | 'prev') => {
    const params = new URLSearchParams(searchParams);

    if (direction === 'next') {
      params.set('after', cursor);
      params.delete('before');
    } else {
      params.set('before', cursor);
      params.delete('after');
    }

    return `?${params.toString()}`;
  };

  const handlePrevious = () => {
    if (hasPreviousPage && startCursor) {
      router.push(createPageURL(startCursor, 'prev'));
    }
  };

  const handleNext = () => {
    if (hasNextPage && endCursor) {
      router.push(createPageURL(endCursor, 'next'));
    }
  };

  return (
    <div className={cn('flex items-center justify-center gap-4 ', className)}>
      <Button
        variant="outline"
        onClick={handlePrevious}
        disabled={!hasPreviousPage}
        className="flex items-center gap-2 rounded-4xl border-black disabled:opacity-50 bg-transparent"
      >
        <ChevronLeft className="h-4 w-4" />
        Previous
      </Button>

      <Button
        variant="outline"
        onClick={handleNext}
        disabled={!hasNextPage}
        className="flex items-center gap-2 rounded-4xl border-black disabled:opacity-50 bg-transparent"
      >
        Next
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
