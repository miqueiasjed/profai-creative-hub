import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { User, Bell, Shield, Database, Palette, Globe, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Settings() {
  const [profile, setProfile] = useState({
    name: "Professor Silva",
    email: "professor.silva@escola.com",
    school: "Escola Municipal Dom Pedro",
    subjects: "Matemática, Ciências",
    bio: "Apaixonado por educação e tecnologia, sempre buscando novas formas de engajar os alunos."
  });

  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    lessonReminders: true,
    trainingUpdates: false,
    weeklyReport: true
  });

  const [preferences, setPreferences] = useState({
    language: "pt-BR",
    theme: "light",
    autoSave: true,
    defaultLessonDuration: "45min",
    imageComplexity: "medium"
  });

  const [privacy, setPrivacy] = useState({
    profileVisible: false,
    shareProgress: true,
    dataAnalytics: true
  });

  const { toast } = useToast();

  const handleSaveProfile = () => {
    toast({
      title: "Perfil atualizado!",
      description: "Suas informações foram salvas com sucesso.",
    });
  };

  const handleSaveNotifications = () => {
    toast({
      title: "Notificações atualizadas!",
      description: "Suas preferências de notificação foram salvas.",
    });
  };

  const handleSavePreferences = () => {
    toast({
      title: "Preferências salvas!",
      description: "Suas configurações foram atualizadas.",
    });
  };

  const handleExportData = () => {
    toast({
      title: "Exportação iniciada!",
      description: "Seus dados serão enviados por email em breve.",
    });
  };

  const handleDeleteAccount = () => {
    toast({
      title: "Solicitação registrada",
      description: "Entraremos em contato para confirmar a exclusão da conta.",
      variant: "destructive",
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground mb-2">Configurações</h1>
        <p className="text-muted-foreground">
          Gerencie sua conta e personalize sua experiência
        </p>
      </div>

      {/* Profile Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Perfil
          </CardTitle>
          <CardDescription>
            Atualize suas informações pessoais e profissionais
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-6">
            <Avatar className="h-20 w-20">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback className="text-lg">PS</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <Button variant="outline" size="sm">
                Alterar Foto
              </Button>
              <p className="text-sm text-muted-foreground">
                JPG, PNG até 2MB
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome Completo</Label>
              <Input
                id="name"
                value={profile.name}
                onChange={(e) => setProfile({...profile, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({...profile, email: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="school">Escola/Instituição</Label>
              <Input
                id="school"
                value={profile.school}
                onChange={(e) => setProfile({...profile, school: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subjects">Disciplinas que Leciona</Label>
              <Input
                id="subjects"
                value={profile.subjects}
                onChange={(e) => setProfile({...profile, subjects: e.target.value})}
                placeholder="Ex: Matemática, Português, Ciências"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Biografia</Label>
            <Textarea
              id="bio"
              value={profile.bio}
              onChange={(e) => setProfile({...profile, bio: e.target.value})}
              placeholder="Conte um pouco sobre você e sua experiência..."
              className="min-h-[100px]"
            />
          </div>

          <Button onClick={handleSaveProfile} className="flex items-center gap-2">
            <Save className="h-4 w-4" />
            Salvar Perfil
          </Button>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notificações
          </CardTitle>
          <CardDescription>
            Configure como e quando você quer receber notificações
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Notificações por Email</Label>
                <p className="text-sm text-muted-foreground">
                  Receba atualizações importantes por email
                </p>
              </div>
              <Switch
                checked={notifications.email}
                onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Notificações Push</Label>
                <p className="text-sm text-muted-foreground">
                  Receba notificações no navegador
                </p>
              </div>
              <Switch
                checked={notifications.push}
                onCheckedChange={(checked) => setNotifications({...notifications, push: checked})}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Lembretes de Aula</Label>
                <p className="text-sm text-muted-foreground">
                  Notificações sobre planos de aula agendados
                </p>
              </div>
              <Switch
                checked={notifications.lessonReminders}
                onCheckedChange={(checked) => setNotifications({...notifications, lessonReminders: checked})}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Atualizações de Treinamento</Label>
                <p className="text-sm text-muted-foreground">
                  Novos cursos e material de capacitação
                </p>
              </div>
              <Switch
                checked={notifications.trainingUpdates}
                onCheckedChange={(checked) => setNotifications({...notifications, trainingUpdates: checked})}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Relatório Semanal</Label>
                <p className="text-sm text-muted-foreground">
                  Resumo das suas atividades da semana
                </p>
              </div>
              <Switch
                checked={notifications.weeklyReport}
                onCheckedChange={(checked) => setNotifications({...notifications, weeklyReport: checked})}
              />
            </div>
          </div>

          <Button onClick={handleSaveNotifications} className="flex items-center gap-2">
            <Save className="h-4 w-4" />
            Salvar Notificações
          </Button>
        </CardContent>
      </Card>

      {/* App Preferences */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="h-5 w-5" />
            Preferências do App
          </CardTitle>
          <CardDescription>
            Personalize a interface e comportamento da aplicação
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Idioma</Label>
              <Select value={preferences.language} onValueChange={(value) => setPreferences({...preferences, language: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
                  <SelectItem value="en-US">English (US)</SelectItem>
                  <SelectItem value="es-ES">Español</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Duração Padrão da Aula</Label>
              <Select value={preferences.defaultLessonDuration} onValueChange={(value) => setPreferences({...preferences, defaultLessonDuration: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30min">30 minutos</SelectItem>
                  <SelectItem value="45min">45 minutos</SelectItem>
                  <SelectItem value="50min">50 minutos</SelectItem>
                  <SelectItem value="90min">90 minutos</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Complexidade de Imagens</Label>
              <Select value={preferences.imageComplexity} onValueChange={(value) => setPreferences({...preferences, imageComplexity: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="easy">Simples</SelectItem>
                  <SelectItem value="medium">Médio</SelectItem>
                  <SelectItem value="hard">Complexo</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Salvamento Automático</Label>
              <p className="text-sm text-muted-foreground">
                Salve automaticamente o progresso dos formulários
              </p>
            </div>
            <Switch
              checked={preferences.autoSave}
              onCheckedChange={(checked) => setPreferences({...preferences, autoSave: checked})}
            />
          </div>

          <Button onClick={handleSavePreferences} className="flex items-center gap-2">
            <Save className="h-4 w-4" />
            Salvar Preferências
          </Button>
        </CardContent>
      </Card>

      {/* Privacy & Security */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Privacidade e Segurança
          </CardTitle>
          <CardDescription>
            Controle sua privacidade e segurança dos dados
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Perfil Público</Label>
                <p className="text-sm text-muted-foreground">
                  Permitir que outros professores vejam seu perfil
                </p>
              </div>
              <Switch
                checked={privacy.profileVisible}
                onCheckedChange={(checked) => setPrivacy({...privacy, profileVisible: checked})}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Compartilhar Progresso</Label>
                <p className="text-sm text-muted-foreground">
                  Permitir compartilhamento de estatísticas anônimas
                </p>
              </div>
              <Switch
                checked={privacy.shareProgress}
                onCheckedChange={(checked) => setPrivacy({...privacy, shareProgress: checked})}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Analytics de Uso</Label>
                <p className="text-sm text-muted-foreground">
                  Ajude-nos a melhorar o app com dados de uso anônimos
                </p>
              </div>
              <Switch
                checked={privacy.dataAnalytics}
                onCheckedChange={(checked) => setPrivacy({...privacy, dataAnalytics: checked})}
              />
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <Button variant="outline" onClick={handleExportData} className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              Exportar Meus Dados
            </Button>

            <Button variant="outline">
              Alterar Senha
            </Button>

            <Button variant="destructive" onClick={handleDeleteAccount}>
              Excluir Conta
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}