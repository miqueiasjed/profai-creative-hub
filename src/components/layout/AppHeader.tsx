import { Bell, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AppHeaderProps {
  title: string;
  onToggleSidebar: () => void;
}

export function AppHeader({ title, onToggleSidebar }: AppHeaderProps) {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-30 shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleSidebar}
            className="lg:hidden"
          >
            <Menu size={20} />
          </Button>
          <h1 className="text-2xl font-bold text-foreground tracking-tight">
            {title}
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="rounded-full">
            <Bell size={20} />
          </Button>
          <Button variant="ghost" size="sm" className="rounded-full">
            <User size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
}