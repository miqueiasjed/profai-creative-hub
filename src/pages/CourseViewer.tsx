import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  Play, 
  CheckCircle2, 
  Lock, 
  Clock, 
  BookOpen,
  Download,
  Star
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Module {
  id: number;
  title: string;
  duration: string;
  completed: boolean;
  locked: boolean;
  videoUrl?: string;
  description: string;
}

interface Course {
  id: number;
  title: string;
  description: string;
  progress: number;
  totalModules: number;
  completedModules: number;
  rating: number;
  modules: Module[];
}

const mockCourses: { [key: string]: Course } = {
  "1": {
    id: 1,
    title: "Usando IA na Sala de Aula",
    description: "Aprenda a integrar ferramentas de inteligência artificial no ensino",
    progress: 70,
    totalModules: 12,
    completedModules: 8,
    rating: 4.8,
    modules: [
      { id: 1, title: "Introdução à IA na Educação", duration: "15 min", completed: true, locked: false, description: "Conceitos básicos de inteligência artificial aplicada à educação" },
      { id: 2, title: "Ferramentas de IA para Professores", duration: "20 min", completed: true, locked: false, description: "Principais plataformas e ferramentas disponíveis" },
      { id: 3, title: "ChatGPT para Criação de Conteúdo", duration: "25 min", completed: true, locked: false, description: "Como usar ChatGPT para criar planos de aula e materiais" },
      { id: 4, title: "IA para Personalização do Ensino", duration: "30 min", completed: true, locked: false, description: "Adaptando o ensino às necessidades individuais" },
      { id: 5, title: "Avaliação Automatizada", duration: "18 min", completed: true, locked: false, description: "Ferramentas de IA para correção e feedback" },
      { id: 6, title: "Criação de Atividades Interativas", duration: "22 min", completed: true, locked: false, description: "Desenvolvendo exercícios dinâmicos com IA" },
      { id: 7, title: "Ética e IA na Educação", duration: "28 min", completed: true, locked: false, description: "Considerações éticas no uso de IA" },
      { id: 8, title: "Casos Práticos em Sala", duration: "35 min", completed: true, locked: false, description: "Exemplos reais de aplicação" },
      { id: 9, title: "Ferramentas de Apresentação com IA", duration: "20 min", completed: false, locked: false, description: "Criando apresentações dinâmicas" },
      { id: 10, title: "IA para Gestão de Turma", duration: "25 min", completed: false, locked: false, description: "Organizando e gerenciando alunos com IA" },
      { id: 11, title: "Projeto Final", duration: "45 min", completed: false, locked: true, description: "Aplicação prática dos conhecimentos" },
      { id: 12, title: "Certificação e Próximos Passos", duration: "15 min", completed: false, locked: true, description: "Finalizando o curso e certificação" }
    ]
  },
  "2": {
    id: 2,
    title: "BNCC com Atividades Criativas",
    description: "Desenvolvimento de atividades alinhadas à Base Nacional Comum Curricular",
    progress: 40,
    totalModules: 8,
    completedModules: 3,
    rating: 4.9,
    modules: [
      { id: 1, title: "Entendendo a BNCC", duration: "20 min", completed: true, locked: false, description: "Fundamentos da Base Nacional Comum Curricular" },
      { id: 2, title: "Competências e Habilidades", duration: "25 min", completed: true, locked: false, description: "Mapeando competências por área" },
      { id: 3, title: "Atividades para Educação Infantil", duration: "30 min", completed: true, locked: false, description: "Criando atividades criativas para os pequenos" },
      { id: 4, title: "Ensino Fundamental I", duration: "35 min", completed: false, locked: false, description: "Atividades para os primeiros anos" },
      { id: 5, title: "Ensino Fundamental II", duration: "35 min", completed: false, locked: true, description: "Projetos para anos finais" },
      { id: 6, title: "Avaliação na BNCC", duration: "25 min", completed: false, locked: true, description: "Como avaliar competências" },
      { id: 7, title: "Interdisciplinaridade", duration: "30 min", completed: false, locked: true, description: "Conectando diferentes áreas do conhecimento" },
      { id: 8, title: "Projeto Integrador", duration: "40 min", completed: false, locked: true, description: "Desenvolvendo um projeto completo" }
    ]
  }
};

export default function CourseViewer() {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const [currentModule, setCurrentModule] = useState<Module | null>(null);
  
  const course = courseId ? mockCourses[courseId] : null;

  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-foreground mb-2">Curso não encontrado</h2>
          <Button onClick={() => navigate("/training")}>
            Voltar aos Treinamentos
          </Button>
        </div>
      </div>
    );
  }

  const handleModuleClick = (module: Module) => {
    if (!module.locked) {
      setCurrentModule(module);
    }
  };

  const markModuleComplete = (moduleId: number) => {
    // Simular conclusão do módulo
    const module = course.modules.find(m => m.id === moduleId);
    if (module) {
      module.completed = true;
      // Desbloquear próximo módulo se existir
      const nextModule = course.modules.find(m => m.id === moduleId + 1);
      if (nextModule) {
        nextModule.locked = false;
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => navigate("/training")}
          className="flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          Voltar
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-foreground">{course.title}</h1>
          <p className="text-muted-foreground">{course.description}</p>
        </div>
      </div>

      {/* Course Info */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <BookOpen size={20} />
                Progresso do Curso
              </CardTitle>
              <CardDescription>
                {course.completedModules} de {course.totalModules} módulos concluídos
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{course.rating}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Progresso</span>
              <span className="text-sm font-medium">{course.progress}%</span>
            </div>
            <Progress value={course.progress} className="w-full" />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Modules List */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Módulos do Curso</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-0">
                {course.modules.map((module, index) => (
                  <div
                    key={module.id}
                    className={cn(
                      "p-4 border-b last:border-b-0 cursor-pointer transition-colors",
                      module.locked ? "opacity-50 cursor-not-allowed" : "hover:bg-muted/50",
                      currentModule?.id === module.id && "bg-accent"
                    )}
                    onClick={() => handleModuleClick(module)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        {module.completed ? (
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                        ) : module.locked ? (
                          <Lock className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <Play className="h-5 w-5 text-primary" />
                        )}
                      </div>
                      
                      <div className="flex-grow min-w-0">
                        <h4 className="font-medium text-sm truncate">
                          {index + 1}. {module.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock size={12} />
                          <span>{module.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Video Player / Content */}
        <div className="lg:col-span-2">
          {currentModule ? (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{currentModule.title}</span>
                  <Badge variant="outline">{currentModule.duration}</Badge>
                </CardTitle>
                <CardDescription>{currentModule.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Video Player Placeholder */}
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                      <Play className="h-8 w-8 text-white ml-1" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Reproduzir Vídeo</h3>
                      <p className="text-sm text-muted-foreground">Clique para iniciar o módulo</p>
                    </div>
                  </div>
                </div>

                {/* Module Actions */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <Download size={16} />
                      Material
                    </Button>
                  </div>
                  
                  {!currentModule.completed && (
                    <Button 
                      onClick={() => markModuleComplete(currentModule.id)}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 size={16} />
                      Marcar como Concluído
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Selecione um Módulo
                </h3>
                <p className="text-muted-foreground">
                  Escolha um módulo na lista ao lado para começar a estudar
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}