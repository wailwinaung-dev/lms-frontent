import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { subjects } from '@/constants';
import { Search } from 'lucide-react';

export default function CompanionsFilter() {
  return (
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
  );
}
