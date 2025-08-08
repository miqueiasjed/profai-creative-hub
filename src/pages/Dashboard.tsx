import { useNavigate } from "react-router-dom";
import { ActionCard } from "@/components/ui/action-card";
import { Button } from "@/components/ui/button";
import { BookOpen, Palette, GraduationCap, Eye, Download } from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();

  const quickActions = [
    {
      title: "Criar Plano de Aula",
      description: "Desenvolva planos detalhados com IA",
      icon: <BookOpen size={24} />,
      action: () => navigate("/lesson-plan")
    },
    {
      title: "Gerar Imagem para Pintar",
      description: "Crie atividades artísticas personalizadas",
      icon: <Palette size={24} />,
      action: () => navigate("/coloring-images")
    },
    {
      title: "Acessar Treinamentos",
      description: "Aprimore suas habilidades pedagógicas",
      icon: <GraduationCap size={24} />,
      action: () => navigate("/training")
    }
  ];

  const recentLessonPlans = [
    {
      theme: "Animais da Floresta",
      subject: "Educação Infantil",
      duration: "45 min",
      date: "08/08/2025",
      status: "Concluído"
    },
    {
      theme: "Letra B e seus sons",
      subject: "Alfabetização",
      duration: "30 min",
      date: "07/08/2025",
      status: "Concluído"
    }
  ];

  const recentImages = [
    { name: "Gato", emoji: "🐱" },
    { name: "Leão", emoji: "🦁" },
    { name: "Casa", emoji: "🏠" },
    { name: "Árvore", emoji: "🌳" }
  ];

  const trainings = [
    {
      title: "Usando IA na Sala de Aula",
      modules: 12,
      hoursRemaining: 8,
      progress: 70
    },
    {
      title: "BNCC com Atividades Criativas",
      modules: 8,
      hoursRemaining: 12,
      progress: 40
    }
  ];

  return (
    <div className="space-y-8">
      {/* Quick Actions */}
      <section>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-foreground mb-2">Ações Rápidas</h2>
          <p className="text-muted-foreground">
            Acesse rapidamente as funcionalidades mais utilizadas
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickActions.map((action, index) => (
            <ActionCard
              key={index}
              title={action.title}
              description={action.description}
              icon={action.icon}
              onClick={action.action}
            />
          ))}
        </div>
      </section>

      {/* Recent Lesson Plans */}
      <section>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-foreground mb-2">Últimos Planos de Aula</h2>
          <p className="text-muted-foreground">Seus planos criados recentemente</p>
        </div>
        <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-muted-foreground text-sm uppercase tracking-wide">
                    Tema
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-muted-foreground text-sm uppercase tracking-wide">
                    Data de Criação
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-muted-foreground text-sm uppercase tracking-wide">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-muted-foreground text-sm uppercase tracking-wide">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentLessonPlans.map((plan, index) => (
                  <tr key={index} className="border-t border-border hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-semibold text-card-foreground">{plan.theme}</div>
                        <div className="text-sm text-muted-foreground">
                          {plan.subject} • {plan.duration}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-card-foreground">{plan.date}</td>
                    <td className="px-6 py-4">
                      <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                        {plan.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                          <Eye size={16} />
                          Visualizar
                        </Button>
                        <Button variant="ghost" size="sm" className="flex items-center gap-2">
                          <Download size={16} />
                          Baixar
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Recent Images and Training Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Images */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-foreground mb-2">Imagens Recentes para Pintar</h2>
            <p className="text-muted-foreground">Suas últimas criações artísticas</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {recentImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square bg-card rounded-xl border border-border flex flex-col items-center justify-center cursor-pointer hover:shadow-md hover:scale-105 transition-all duration-300 group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {image.emoji}
                </div>
                <span className="text-sm text-muted-foreground font-medium">{image.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Training Progress */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-foreground mb-2">Treinamentos em Andamento</h2>
            <p className="text-muted-foreground">Acompanhe seu progresso de aprendizado</p>
          </div>
          <div className="space-y-4">
            {trainings.map((training, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-card-foreground mb-3">{training.title}</h3>
                <div className="flex justify-between text-sm text-muted-foreground mb-4">
                  <span>📚 {training.modules} módulos</span>
                  <span>⏱️ {training.hoursRemaining}h restantes</span>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Progresso</span>
                    <span className="text-sm font-medium text-card-foreground">{training.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
                      style={{ width: `${training.progress}%` }}
                    />
                  </div>
                </div>
                <Button className="w-full" variant="default">
                  Continuar Treinamento
                </Button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}