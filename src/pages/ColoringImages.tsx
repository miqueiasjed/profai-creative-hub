import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Download, Share2, Palette, Image as ImageIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ColoringImages() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState("");
  const [formData, setFormData] = useState({
    subject: "",
    style: "",
    complexity: "",
    description: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // Simulate image generation
    setTimeout(() => {
      // This would be replaced with actual image generation
      setGeneratedImage("https://via.placeholder.com/400x400/ffffff/000000?text=Imagem+para+Pintar");
      setIsGenerating(false);
      toast({
        title: "Imagem gerada!",
        description: "Sua imagem para pintar foi criada com sucesso.",
      });
    }, 3000);
  };

  const handleDownload = () => {
    toast({
      title: "Download iniciado!",
      description: "A imagem foi baixada com sucesso.",
    });
  };

  const recentImages = [
    { name: "Gato fofo", subject: "Animais", date: "Hoje" },
    { name: "Casa na floresta", subject: "Natureza", date: "Ontem" },
    { name: "Borboleta colorida", subject: "Insetos", date: "2 dias atrás" },
    { name: "Carro de corrida", subject: "Veículos", date: "3 dias atrás" },
    { name: "Princesa no castelo", subject: "Contos", date: "4 dias atrás" },
    { name: "Dinossauro amigável", subject: "Pré-história", date: "5 dias atrás" }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground mb-2">Gerar Imagens para Pintar</h1>
        <p className="text-muted-foreground">
          Crie atividades artísticas personalizadas para seus alunos
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form */}
        <Card>
          <CardHeader>
            <CardTitle>Criar Nova Imagem</CardTitle>
            <CardDescription>
              Descreva a imagem que você gostaria de gerar para colorir
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="subject">Categoria</Label>
                <Select value={formData.subject} onValueChange={(value) => setFormData({...formData, subject: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="animals">Animais</SelectItem>
                    <SelectItem value="nature">Natureza</SelectItem>
                    <SelectItem value="vehicles">Veículos</SelectItem>
                    <SelectItem value="food">Alimentos</SelectItem>
                    <SelectItem value="toys">Brinquedos</SelectItem>
                    <SelectItem value="fairy-tales">Contos de Fada</SelectItem>
                    <SelectItem value="sports">Esportes</SelectItem>
                    <SelectItem value="objects">Objetos</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descrição da Imagem</Label>
                <Input
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Ex: Um gato dormindo, uma casa na floresta, um carro de corrida..."
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="style">Estilo</Label>
                  <Select value={formData.style} onValueChange={(value) => setFormData({...formData, style: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Escolha o estilo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cartoon">Cartoon</SelectItem>
                      <SelectItem value="realistic">Realista</SelectItem>
                      <SelectItem value="cute">Fofo</SelectItem>
                      <SelectItem value="simple">Simples</SelectItem>
                      <SelectItem value="detailed">Detalhado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="complexity">Complexidade</Label>
                  <Select value={formData.complexity} onValueChange={(value) => setFormData({...formData, complexity: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Nível de dificuldade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="easy">Fácil (3-5 anos)</SelectItem>
                      <SelectItem value="medium">Médio (6-8 anos)</SelectItem>
                      <SelectItem value="hard">Difícil (9+ anos)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                disabled={isGenerating || !formData.description || !formData.subject}
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Gerando Imagem...
                  </>
                ) : (
                  <>
                    <Palette className="mr-2 h-4 w-4" />
                    Gerar Imagem para Pintar
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Generated Image */}
        <Card>
          <CardHeader>
            <CardTitle>Imagem Gerada</CardTitle>
            <CardDescription>
              Sua imagem para colorir aparecerá aqui
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isGenerating ? (
              <div className="flex flex-col items-center justify-center py-12 space-y-4">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="text-muted-foreground">Criando sua imagem...</p>
              </div>
            ) : generatedImage ? (
              <div className="space-y-6">
                <div className="flex gap-2 flex-wrap">
                  <Button onClick={handleDownload} variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download PNG
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="mr-2 h-4 w-4" />
                    Compartilhar
                  </Button>
                </div>
                <div className="bg-white rounded-lg p-4 border">
                  <img 
                    src={generatedImage} 
                    alt="Imagem para colorir gerada"
                    className="w-full max-w-md mx-auto rounded-lg"
                  />
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center text-muted-foreground">
                <ImageIcon className="h-12 w-12 mb-4 opacity-50" />
                <p>Preencha o formulário e clique em "Gerar Imagem" para começar</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Recent Images */}
      <Card>
        <CardHeader>
          <CardTitle>Imagens Recentes</CardTitle>
          <CardDescription>
            Suas últimas criações para colorir
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {recentImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square bg-gradient-to-br from-accent to-background rounded-xl border border-border cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <div className="text-2xl mb-2">🎨</div>
                  <h4 className="font-medium text-card-foreground text-sm mb-1">{image.name}</h4>
                  <p className="text-xs text-muted-foreground mb-1">{image.subject}</p>
                  <p className="text-xs text-muted-foreground">{image.date}</p>
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}