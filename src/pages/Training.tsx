import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Play, Clock, BookOpen, Users, Star, Trophy, CheckCircle2 } from "lucide-react";

export default function Training() {
  const ongoingTrainings = [
    {
      id: 1,
      title: "Usando IA na Sala de Aula",
      description: "Aprenda a integrar ferramentas de inteligência artificial no ensino",
      progress: 70,
      totalModules: 12,
      completedModules: 8,
      hoursLeft: 8,
      category: "Tecnologia",
      level: "Intermediário",
      rating: 4.8
    },
    {
      id: 2,
      title: "BNCC com Atividades Criativas",
      description: "Desenvolvimento de atividades alinhadas à Base Nacional Comum Curricular",
      progress: 40,
      totalModules: 8,
      completedModules: 3,
      hoursLeft: 12,
      category: "Metodologia",
      level: "Básico",
      rating: 4.9
    }
  ];

  const availableTrainings = [
    {
      id: 3,
      title: "Gestão de Sala de Aula",
      description: "Técnicas para manter o controle e engajamento dos alunos",
      duration: "15h",
      modules: 10,
      category: "Gestão",
      level: "Intermediário",
      rating: 4.7,
      students: 1205
    },
    {
      id: 4,
      title: "Educação Inclusiva na Prática",
      description: "Estratégias para incluir alunos com necessidades especiais",
      duration: "20h",
      modules: 15,
      category: "Inclusão",
      level: "Avançado",
      rating: 4.9,
      students: 892
    },
    {
      id: 5,
      title: "Avaliação Formativa e Feedback",
      description: "Métodos modernos de avaliação e fornecimento de feedback",
      duration: "12h",
      modules: 8,
      category: "Avaliação",
      level: "Básico",
      rating: 4.6,
      students: 1543
    },
    {
      id: 6,
      title: "Metodologias Ativas de Ensino",
      description: "Implemente metodologias que colocam o aluno no centro da aprendizagem",
      duration: "18h",
      modules: 12,
      category: "Metodologia",
      level: "Intermediário",
      rating: 4.8,
      students: 967
    }
  ];

  const achievements = [
    { name: "Primeiro Curso", description: "Complete seu primeiro treinamento", earned: true },
    { name: "Dedicado", description: "Complete 5 treinamentos", earned: true },
    { name: "Expert", description: "Complete 10 treinamentos", earned: false },
    { name: "Mentor", description: "Avalie 20 cursos", earned: false }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Básico": return "bg-green-100 text-green-800";
      case "Intermediário": return "bg-yellow-100 text-yellow-800";
      case "Avançado": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground mb-2">Meus Treinamentos</h1>
        <p className="text-muted-foreground">
          Aprimore suas habilidades pedagógicas com nossos cursos especializados
        </p>
      </div>

      {/* Ongoing Trainings */}
      <section>
        <h2 className="text-xl font-semibold text-foreground mb-6">Treinamentos em Andamento</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ongoingTrainings.map((training) => (
            <Card key={training.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-lg">{training.title}</CardTitle>
                    <CardDescription>{training.description}</CardDescription>
                  </div>
                  <Badge className={getLevelColor(training.level)}>{training.level}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    {training.completedModules}/{training.totalModules} módulos
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {training.hoursLeft}h restantes
                  </span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Progresso</span>
                    <span className="text-sm font-medium">{training.progress}%</span>
                  </div>
                  <Progress value={training.progress} className="w-full" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{training.rating}</span>
                  </div>
                  <Button className="flex items-center gap-2">
                    <Play className="h-4 w-4" />
                    Continuar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Available Trainings */}
      <section>
        <h2 className="text-xl font-semibold text-foreground mb-6">Treinamentos Disponíveis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {availableTrainings.map((training) => (
            <Card key={training.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-lg">{training.title}</CardTitle>
                    <CardDescription>{training.description}</CardDescription>
                  </div>
                  <Badge className={getLevelColor(training.level)}>{training.level}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    {training.modules} módulos
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {training.duration}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {training.students.toLocaleString()} alunos
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {training.rating}
                  </span>
                </div>

                <Badge variant="outline">{training.category}</Badge>

                <Button className="w-full">
                  Iniciar Treinamento
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section>
        <h2 className="text-xl font-semibold text-foreground mb-6">Conquistas</h2>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              Suas Conquistas
            </CardTitle>
            <CardDescription>
              Acompanhe seu progresso e desbloqueie novos achievements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border text-center space-y-2 ${
                    achievement.earned 
                      ? "bg-accent border-primary/20" 
                      : "bg-muted/30 border-border"
                  }`}
                >
                  <div className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center ${
                    achievement.earned ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}>
                    {achievement.earned ? (
                      <CheckCircle2 className="h-6 w-6" />
                    ) : (
                      <Trophy className="h-6 w-6" />
                    )}
                  </div>
                  <h4 className={`font-medium ${achievement.earned ? "text-foreground" : "text-muted-foreground"}`}>
                    {achievement.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}