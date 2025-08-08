import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  Share2, 
  Award, 
  Calendar,
  Star,
  Trophy,
  ExternalLink
} from "lucide-react";

interface Certificate {
  id: number;
  courseTitle: string;
  issueDate: string;
  validUntil?: string;
  grade: number;
  credentialId: string;
  hours: number;
  status: 'active' | 'expired';
  category: string;
}

export default function Certificates() {
  const certificates: Certificate[] = [
    {
      id: 1,
      courseTitle: "Usando IA na Sala de Aula",
      issueDate: "2025-01-15",
      validUntil: "2027-01-15",
      grade: 9.2,
      credentialId: "CERT-IA-2025-001234",
      hours: 40,
      status: 'active',
      category: "Tecnologia"
    },
    {
      id: 2,
      courseTitle: "BNCC com Atividades Criativas",
      issueDate: "2024-12-10",
      validUntil: "2026-12-10",
      grade: 8.8,
      credentialId: "CERT-BNCC-2024-005678",
      hours: 32,
      status: 'active',
      category: "Metodologia"
    },
    {
      id: 3,
      courseTitle: "Gestão de Sala de Aula",
      issueDate: "2024-11-05",
      validUntil: "2026-11-05",
      grade: 9.5,
      credentialId: "CERT-GSA-2024-009876",
      hours: 24,
      status: 'active',
      category: "Gestão"
    },
    {
      id: 4,
      courseTitle: "Metodologias Ativas Básico",
      issueDate: "2024-08-20",
      validUntil: "2024-08-20",
      grade: 8.5,
      credentialId: "CERT-MA-2024-001122",
      hours: 16,
      status: 'expired',
      category: "Metodologia"
    }
  ];

  const activeCertificates = certificates.filter(cert => cert.status === 'active');
  const expiredCertificates = certificates.filter(cert => cert.status === 'expired');
  const totalHours = certificates.reduce((sum, cert) => sum + cert.hours, 0);
  const averageGrade = certificates.reduce((sum, cert) => sum + cert.grade, 0) / certificates.length;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const getGradeColor = (grade: number) => {
    if (grade >= 9) return "text-green-600";
    if (grade >= 8) return "text-blue-600";
    if (grade >= 7) return "text-yellow-600";
    return "text-red-600";
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Tecnologia": return "bg-blue-100 text-blue-800";
      case "Metodologia": return "bg-green-100 text-green-800";
      case "Gestão": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground mb-2">Meus Certificados</h1>
        <p className="text-muted-foreground">
          Gerencie e compartilhe seus certificados de conclusão
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">{certificates.length}</div>
            <div className="text-sm text-muted-foreground">Certificados</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <Award className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">{activeCertificates.length}</div>
            <div className="text-sm text-muted-foreground">Ativos</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <Calendar className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">{totalHours}h</div>
            <div className="text-sm text-muted-foreground">Total de Horas</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <Star className="h-8 w-8 text-orange-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">{averageGrade.toFixed(1)}</div>
            <div className="text-sm text-muted-foreground">Nota Média</div>
          </CardContent>
        </Card>
      </div>

      {/* Active Certificates */}
      <section>
        <h2 className="text-xl font-semibold text-foreground mb-6">Certificados Ativos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeCertificates.map((certificate) => (
            <Card key={certificate.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <Badge className={getCategoryColor(certificate.category)}>
                    {certificate.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight">
                  {certificate.courseTitle}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Emissão:</span>
                    <div className="font-medium">{formatDate(certificate.issueDate)}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Validade:</span>
                    <div className="font-medium">
                      {certificate.validUntil ? formatDate(certificate.validUntil) : 'Permanente'}
                    </div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Carga Horária:</span>
                    <div className="font-medium">{certificate.hours}h</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Nota:</span>
                    <div className={`font-bold ${getGradeColor(certificate.grade)}`}>
                      {certificate.grade.toFixed(1)}
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t">
                  <div className="text-xs text-muted-foreground mb-2">
                    ID: {certificate.credentialId}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <Download size={14} className="mr-1" />
                      Baixar
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Share2 size={14} className="mr-1" />
                      Compartilhar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Expired Certificates */}
      {expiredCertificates.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-6">Certificados Expirados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expiredCertificates.map((certificate) => (
              <Card key={certificate.id} className="opacity-75 hover:shadow-md transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <Award className="h-6 w-6 text-muted-foreground flex-shrink-0 mt-1" />
                    <div className="flex gap-2">
                      <Badge variant="secondary">Expirado</Badge>
                      <Badge className={getCategoryColor(certificate.category)}>
                        {certificate.category}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight text-muted-foreground">
                    {certificate.courseTitle}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Emissão:</span>
                      <div className="font-medium">{formatDate(certificate.issueDate)}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Expirou em:</span>
                      <div className="font-medium text-red-600">
                        {certificate.validUntil ? formatDate(certificate.validUntil) : 'N/A'}
                      </div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Carga Horária:</span>
                      <div className="font-medium">{certificate.hours}h</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Nota:</span>
                      <div className={`font-bold ${getGradeColor(certificate.grade)}`}>
                        {certificate.grade.toFixed(1)}
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t">
                    <div className="text-xs text-muted-foreground mb-2">
                      ID: {certificate.credentialId}
                    </div>
                    
                    <Button size="sm" variant="outline" className="w-full">
                      <ExternalLink size={14} className="mr-1" />
                      Renovar Certificado
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Verification Info */}
      <Card>
        <CardHeader>
          <CardTitle>Verificação de Certificados</CardTitle>
          <CardDescription>
            Todos os nossos certificados podem ser verificados online
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/50 rounded-lg p-4">
            <h4 className="font-medium mb-2">Como verificar a autenticidade:</h4>
            <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
              <li>Acesse nosso portal de verificação</li>
              <li>Digite o ID do certificado</li>
              <li>Confirme os dados do portador</li>
              <li>Visualize as informações do curso</li>
            </ol>
            <Button variant="outline" size="sm" className="mt-3">
              <ExternalLink size={16} className="mr-2" />
              Portal de Verificação
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}