import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Download, Share2, Bookmark, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function LessonPlan() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState("");
  const [formData, setFormData] = useState({
    subject: "",
    topic: "",
    level: "",
    duration: "",
    objectives: "",
    additionalInfo: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      const samplePlan = `
# Plano de Aula: ${formData.topic}

## Informações Gerais
- **Disciplina:** ${formData.subject}
- **Nível:** ${formData.level}
- **Duração:** ${formData.duration}

## Objetivos de Aprendizagem
${formData.objectives}

## Desenvolvimento da Aula

### 1. Introdução (10 minutos)
- Apresentação do tema através de perguntas provocativas
- Ativação do conhecimento prévio dos alunos
- Contextualização do assunto

### 2. Desenvolvimento (25 minutos)
- Explicação conceitual com exemplos práticos
- Atividade interativa em grupos
- Demonstração prática ou experimento

### 3. Consolidação (10 minutos)
- Síntese dos principais conceitos
- Esclarecimento de dúvidas
- Atividade de fixação

## Recursos Necessários
- Material didático específico
- Quadro/projetor
- Materiais para atividades práticas

## Avaliação
- Participação nas discussões
- Qualidade das respostas nas atividades
- Compreensão demonstrada durante a aula

## Tarefa de Casa
Exercícios de fixação relacionados ao tema abordado.

## Observações
${formData.additionalInfo || "Adaptar conforme o ritmo da turma."}
      `;
      
      setGeneratedPlan(samplePlan);
      setIsGenerating(false);
      toast({
        title: "Plano de aula gerado!",
        description: "Seu plano foi criado com sucesso usando IA.",
      });
    }, 3000);
  };

  const handleSave = () => {
    toast({
      title: "Plano salvo!",
      description: "O plano foi salvo nos seus arquivos.",
    });
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([generatedPlan], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `plano-aula-${formData.topic || "novo"}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast({
      title: "Download iniciado!",
      description: "O arquivo foi baixado com sucesso.",
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground mb-2">Criar Plano de Aula</h1>
        <p className="text-muted-foreground">
          Desenvolva planos de aula personalizados com inteligência artificial
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form */}
        <Card>
          <CardHeader>
            <CardTitle>Informações da Aula</CardTitle>
            <CardDescription>
              Preencha os dados para que a IA possa criar um plano personalizado
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="subject">Matéria/Disciplina</Label>
                <Select value={formData.subject} onValueChange={(value) => setFormData({...formData, subject: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma matéria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="portuguese">Língua Portuguesa</SelectItem>
                    <SelectItem value="math">Matemática</SelectItem>
                    <SelectItem value="science">Ciências</SelectItem>
                    <SelectItem value="history">História</SelectItem>
                    <SelectItem value="geography">Geografia</SelectItem>
                    <SelectItem value="arts">Artes</SelectItem>
                    <SelectItem value="pe">Educação Física</SelectItem>
                    <SelectItem value="english">Inglês</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="topic">Tópico/Tema da Aula</Label>
                <Input
                  id="topic"
                  value={formData.topic}
                  onChange={(e) => setFormData({...formData, topic: e.target.value})}
                  placeholder="Ex: Animais da floresta, Tabuada do 5, Sistema solar..."
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="level">Nível de Ensino</Label>
                  <Select value={formData.level} onValueChange={(value) => setFormData({...formData, level: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o nível" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="infantil">Educação Infantil</SelectItem>
                      <SelectItem value="fundamental1">Fundamental I (1º-5º ano)</SelectItem>
                      <SelectItem value="fundamental2">Fundamental II (6º-9º ano)</SelectItem>
                      <SelectItem value="medio">Ensino Médio</SelectItem>
                      <SelectItem value="eja">EJA</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Duração</Label>
                  <Select value={formData.duration} onValueChange={(value) => setFormData({...formData, duration: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Tempo da aula" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30min">30 minutos</SelectItem>
                      <SelectItem value="45min">45 minutos</SelectItem>
                      <SelectItem value="50min">50 minutos</SelectItem>
                      <SelectItem value="90min">90 minutos</SelectItem>
                      <SelectItem value="120min">2 horas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="objectives">Objetivos de Aprendizagem</Label>
                <Textarea
                  id="objectives"
                  value={formData.objectives}
                  onChange={(e) => setFormData({...formData, objectives: e.target.value})}
                  placeholder="Descreva o que os alunos devem aprender nesta aula..."
                  className="min-h-[100px]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="additionalInfo">Informações Adicionais</Label>
                <Textarea
                  id="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                  placeholder="Metodologias específicas, recursos disponíveis, características da turma..."
                  className="min-h-[80px]"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                disabled={isGenerating || !formData.topic || !formData.subject || !formData.level}
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Gerando Plano...
                  </>
                ) : (
                  "Gerar Plano de Aula"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Generated Plan */}
        <Card>
          <CardHeader>
            <CardTitle>Plano Gerado</CardTitle>
            <CardDescription>
              Seu plano de aula personalizado aparecerá aqui
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isGenerating ? (
              <div className="flex flex-col items-center justify-center py-12 space-y-4">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="text-muted-foreground">Criando seu plano de aula...</p>
              </div>
            ) : generatedPlan ? (
              <div className="space-y-6">
                <div className="flex gap-2 flex-wrap">
                  <Button onClick={handleSave} variant="outline" size="sm">
                    <Bookmark className="mr-2 h-4 w-4" />
                    Salvar
                  </Button>
                  <Button onClick={handleDownload} variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="mr-2 h-4 w-4" />
                    Compartilhar
                  </Button>
                </div>
                <div className="prose prose-sm max-w-none">
                  <pre className="whitespace-pre-wrap text-sm text-foreground leading-relaxed font-sans">
                    {generatedPlan}
                  </pre>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center text-muted-foreground">
                <BookOpen className="h-12 w-12 mb-4 opacity-50" />
                <p>Preencha o formulário e clique em "Gerar Plano de Aula" para começar</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}