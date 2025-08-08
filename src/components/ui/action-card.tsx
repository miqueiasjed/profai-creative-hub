import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ActionCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function ActionCard({ title, description, icon, onClick, className }: ActionCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "bg-card rounded-xl p-8 shadow-sm border border-border cursor-pointer transition-all duration-300 text-center group hover:shadow-lg hover:-translate-y-1 relative overflow-hidden",
        "before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-primary before:transform before:scale-x-0 before:transition-transform before:duration-300 before:origin-left hover:before:scale-x-100",
        className
      )}
    >
      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-accent-foreground group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}