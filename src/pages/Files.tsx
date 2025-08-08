import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  FileText, 
  Image, 
  Download, 
  Trash2, 
  Share2, 
  Search, 
  Filter,
  FolderOpen,
  MoreVertical,
  Upload,
  Calendar
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Files() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const { toast } = useToast();

  const files = [
    {
      id: 1,
      name: "Plano de Aula - Animais da Floresta.pdf",
      type: "lesson-plan",
      size: "245 KB",
      date: "08/08/2025",
      category: "Planos de Aula",
      icon: FileText
    },
    {
      id: 2,
      name: "Plano de Aula - Letra B.pdf",
      type: "lesson-plan",
      size: "198 KB",
      date: "07/08/2025",
      category: "Planos de Aula",
      icon: FileText
    },
    {
      id: 3,
      name: "Gato para Colorir.png",
      type: "coloring-image",
      size: "512 KB",
      date: "08/08/2025",
      category: "Imagens",
      icon: Image
    },
    {
      id: 4,
      name: "Leão para Colorir.png",
      type: "coloring-image",
      size: "487 KB",
      date: "07/08/2025",
      category: "Imagens",
      icon: Image
    },
    {
      id: 5,
      name: "Casa na Floresta.png",
      type: "coloring-image",
      size: "623 KB",
      date: "06/08/2025",
      category: "Imagens",
      icon: Image
    },
    {
      id: 6,
      name: "Atividades de Matemática - 3º ano.pdf",
      type: "lesson-plan",
      size: "342 KB",
      date: "05/08/2025",
      category: "Planos de Aula",
      icon: FileText
    },
    {
      id: 7,
      name: "Borboleta Colorida.png",
      type: "coloring-image",
      size: "456 KB",
      date: "04/08/2025",
      category: "Imagens",
      icon: Image
    },
    {
      id: 8,
      name: "Projeto Meio Ambiente.pdf",
      type: "lesson-plan",
      size: "589 KB",
      date: "03/08/2025",
      category: "Planos de Aula",
      icon: FileText
    }
  ];

  const filteredFiles = files.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || file.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const handleDownload = (fileName: string) => {
    toast({
      title: "Download iniciado",
      description: `Baixando ${fileName}...`,
    });
  };

  const handleDelete = (fileName: string) => {
    toast({
      title: "Arquivo excluído",
      description: `${fileName} foi removido dos seus arquivos.`,
      variant: "destructive",
    });
  };

  const handleShare = (fileName: string) => {
    toast({
      title: "Link copiado!",
      description: `Link de compartilhamento de ${fileName} copiado para a área de transferência.`,
    });
  };

  const getFileTypeColor = (type: string) => {
    switch (type) {
      case "lesson-plan": return "bg-blue-100 text-blue-800";
      case "coloring-image": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getFileTypeName = (type: string) => {
    switch (type) {
      case "lesson-plan": return "Plano de Aula";
      case "coloring-image": return "Imagem";
      default: return "Arquivo";
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Meus Arquivos</h1>
          <p className="text-muted-foreground">
            Gerencie todos os seus planos de aula e imagens criados
          </p>
        </div>
        <Button className="flex items-center gap-2">
          <Upload className="h-4 w-4" />
          Fazer Upload
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar arquivos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-[180px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filtrar por tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os tipos</SelectItem>
                  <SelectItem value="lesson-plan">Planos de Aula</SelectItem>
                  <SelectItem value="coloring-image">Imagens</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">Data</SelectItem>
                  <SelectItem value="name">Nome</SelectItem>
                  <SelectItem value="size">Tamanho</SelectItem>
                  <SelectItem value="type">Tipo</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* File Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{files.length}</div>
              <p className="text-sm text-muted-foreground">Total de Arquivos</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {files.filter(f => f.type === "lesson-plan").length}
              </div>
              <p className="text-sm text-muted-foreground">Planos de Aula</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {files.filter(f => f.type === "coloring-image").length}
              </div>
              <p className="text-sm text-muted-foreground">Imagens</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {Math.round(files.reduce((sum, f) => sum + parseFloat(f.size.split(' ')[0]), 0))} MB
              </div>
              <p className="text-sm text-muted-foreground">Espaço Usado</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Files Grid */}
      <Card>
        <CardHeader>
          <CardTitle>Arquivos ({filteredFiles.length})</CardTitle>
          <CardDescription>
            {searchTerm ? `Resultados para "${searchTerm}"` : "Todos os seus arquivos organizados"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {filteredFiles.length === 0 ? (
            <div className="text-center py-12">
              <FolderOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                {searchTerm ? "Nenhum arquivo encontrado" : "Você ainda não possui arquivos"}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredFiles.map((file) => (
                <Card key={file.id} className="hover:shadow-md transition-shadow group">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                          <file.icon className="h-5 w-5 text-accent-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm text-card-foreground truncate">
                            {file.name}
                          </h4>
                          <p className="text-xs text-muted-foreground">{file.size}</p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={getFileTypeColor(file.type)}>
                        {getFileTypeName(file.type)}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {file.date}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => handleDownload(file.name)}
                      >
                        <Download className="h-3 w-3 mr-1" />
                        Baixar
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleShare(file.name)}
                      >
                        <Share2 className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(file.name)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}