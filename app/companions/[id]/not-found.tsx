import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Search, Users } from 'lucide-react';

export default function CompanionNotFound() {
  return (
    <div className="mt-4 bg-gradient-to-br from-background to-muted/20 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="relative">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-muted/50 to-muted/30 flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
            <Users className="h-16 w-16 text-muted-foreground/50" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center">
            <span className="text-destructive text-sm font-bold">?</span>
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl font-bold text-foreground">
            Companion Not Found
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            The companion you're looking for doesn't exist or may have been
            removed. Let's help you find another great companion to chat with.
          </p>
        </div>

        <div className="space-y-3">
          <Button asChild className="w-full gap-2">
            <Link href="/companions">
              <Users className="h-4 w-4" />
              Browse All Companions
            </Link>
          </Button>

          <Button variant="ghost" asChild className="w-full gap-2">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
