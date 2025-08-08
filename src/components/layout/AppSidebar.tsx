import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { 
  Home, 
  BookOpen, 
  Palette, 
  GraduationCap, 
  FolderOpen, 
  Settings,
  Menu,
  X,
  Award
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { title: "Início", url: "/", icon: Home },
  { title: "Planejar Aula", url: "/lesson-plan", icon: BookOpen },
  { title: "Imagens para Pintar", url: "/coloring-images", icon: Palette },
  { title: "Treinamentos", url: "/training", icon: GraduationCap },
  { title: "Meus Certificados", url: "/certificates", icon: Award },
  { title: "Meus Arquivos", url: "/files", icon: FolderOpen },
  { title: "Configurações", url: "/settings", icon: Settings },
];

interface AppSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function AppSidebar({ isOpen, onToggle }: AppSidebarProps) {
  const location = useLocation();

  const getNavClass = (url: string) => {
    const isActive = location.pathname === url;
    return cn(
      "flex items-center gap-3 px-6 py-4 text-white/80 hover:text-white hover:bg-primary-hover transition-all duration-200 border-l-4 border-transparent hover:border-accent",
      isActive && "bg-primary-hover text-white border-accent font-medium"
    );
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed left-0 top-0 h-full w-72 bg-primary z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-primary-hover">
          <h2 className="text-xl font-bold text-white">ProfOnline AI</h2>
          <button
            onClick={onToggle}
            className="lg:hidden text-white hover:text-accent transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6">
          {menuItems.map((item) => (
            <NavLink
              key={item.url}
              to={item.url}
              className={getNavClass(item.url)}
              onClick={() => window.innerWidth < 1024 && onToggle()}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.title}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}