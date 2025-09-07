'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="bg-background flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Illustration */}
        <div className="relative">
          <div className="w-64 h-40 mx-auto mb-8 relative">
            <svg
              viewBox="0 0 400 300"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Friendly robot illustration */}
              <rect
                x="150"
                y="100"
                width="100"
                height="120"
                rx="20"
                fill="currentColor"
                className="text-card"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle
                cx="175"
                cy="130"
                r="8"
                fill="currentColor"
                className="text-destructive"
              />
              <circle
                cx="225"
                cy="130"
                r="8"
                fill="currentColor"
                className="text-destructive"
              />
              <rect
                x="190"
                y="150"
                width="20"
                height="8"
                rx="4"
                fill="currentColor"
                className="text-muted-foreground"
              />
              <circle
                cx="200"
                cy="80"
                r="25"
                fill="currentColor"
                className="text-accent"
                opacity="0.2"
              />
              <rect
                x="195"
                y="70"
                width="10"
                height="20"
                rx="5"
                fill="currentColor"
                className="text-accent"
              />
              <path
                d="M120 180 L150 180 M250 180 L280 180"
                stroke="currentColor"
                strokeWidth="4"
                className="text-muted"
              />
              <text
                x="200"
                y="260"
                textAnchor="middle"
                className="text-sm font-medium fill-muted-foreground"
              >
                System Error
              </text>
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Something Went Wrong
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto text-pretty">
            We are experiencing technical difficulties. Please try again later
            or contact support if the problem persists.
          </p>
        </div>

        {/* Error Details Card */}
        {error.digest && (
          <Card className="max-w-md mx-auto">
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">
                Error ID:{' '}
                <code className="bg-muted px-2 py-1 rounded text-xs">
                  {error.digest}
                </code>
              </p>
            </CardContent>
          </Card>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button onClick={reset} size="lg" className="min-w-[140px]">
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="min-w-[140px]"
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
