import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, Home, HelpCircle } from 'lucide-react';

export default function NotFound() {
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
              {/* Lost character illustration */}
              <circle
                cx="200"
                cy="150"
                r="80"
                fill="currentColor"
                className="text-muted"
                opacity="0.1"
              />
              <circle
                cx="200"
                cy="130"
                r="40"
                fill="currentColor"
                className="text-card"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle
                cx="185"
                cy="120"
                r="4"
                fill="currentColor"
                className="text-foreground"
              />
              <circle
                cx="215"
                cy="120"
                r="4"
                fill="currentColor"
                className="text-foreground"
              />
              <path
                d="M185 140 Q200 150 215 140"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-muted-foreground"
              />
              <text
                x="200"
                y="200"
                textAnchor="middle"
                className="text-6xl font-bold fill-primary"
              >
                404
              </text>
              <path
                d="M160 180 Q180 190 200 180 Q220 190 240 180"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                className="text-accent opacity-50"
              />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Oops! We Can't Find That Page
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto text-pretty">
            The page you are looking for might have been removed or is
            temporarily unavailable.
          </p>
        </div>

        {/* Navigation Options */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="min-w-[140px]">
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
