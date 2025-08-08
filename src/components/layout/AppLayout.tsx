import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AppSidebar } from "./AppSidebar";
import { AppHeader } from "./AppHeader";

const pageTitles: { [key: string]: string } = {
  "/": "Olá, Professor!",
  "/lesson-plan": "Planejar Aula",
  "/coloring-images": "Imagens para Pintar",
  "/training": "Treinamentos",
  "/files": "Meus Arquivos",
  "/settings": "Configurações"
};

export function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  
  const title = pageTitles[location.pathname] || "ProfOnline AI";

  return (
    <div className="min-h-screen bg-background flex">
      <AppSidebar 
        isOpen={sidebarOpen} 
        onToggle={() => setSidebarOpen(!sidebarOpen)} 
      />
      
      <div className="flex-1 lg:ml-72 transition-all duration-300">
        <AppHeader 
          title={title}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />
        
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}