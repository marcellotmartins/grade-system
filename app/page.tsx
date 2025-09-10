import { GraduationCap, Users, BookOpen, TrendingUp, Award, BarChart3, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-card/30">
      <header className="border-b bg-card/80 backdrop-blur-sm shadow-professional">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl gradient-primary">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">EduGrade Pro</h1>
                <p className="text-muted-foreground text-lg">Sistema Avançado de Gestão Educacional</p>
              </div>
            </div>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              v2.0 Professional
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-16 text-center animate-fade-in">
          <h2 className="text-5xl font-bold text-foreground mb-6 text-balance">Transforme a Gestão Educacional</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Plataforma completa para gerenciamento de notas, análise de desempenho e acompanhamento acadêmico com
            tecnologia de ponta e interface intuitiva.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Button size="lg" asChild className="px-8 py-3">
              <Link href="/dashboard">Acessar Dashboard</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="px-8 py-3 bg-transparent">
              <Link href="/grades/new">Lançar Primeira Nota</Link>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="group hover:shadow-professional-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up border-0 shadow-professional">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Gestão de Alunos</CardTitle>
              <CardDescription className="text-base">
                Cadastro completo com histórico acadêmico e perfil detalhado
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full" size="lg">
                <Link href="/students">Gerenciar Alunos</Link>
              </Button>
            </CardContent>
          </Card>

          <Card
            className="group hover:shadow-professional-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up border-0 shadow-professional"
            style={{ animationDelay: "0.1s" }}
          >
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-4 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                <BookOpen className="h-8 w-8 text-secondary" />
              </div>
              <CardTitle className="text-xl">Sistema de Notas</CardTitle>
              <CardDescription className="text-base">
                Lançamento inteligente com validação automática e histórico
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full" size="lg">
                <Link href="/grades">Lançar Notas</Link>
              </Button>
            </CardContent>
          </Card>

          <Card
            className="group hover:shadow-professional-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up border-0 shadow-professional"
            style={{ animationDelay: "0.2s" }}
          >
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-4 rounded-full bg-chart-3/10 group-hover:bg-chart-3/20 transition-colors">
                <BarChart3 className="h-8 w-8 text-chart-3" />
              </div>
              <CardTitle className="text-xl">Analytics Avançado</CardTitle>
              <CardDescription className="text-base">
                Relatórios detalhados com gráficos e métricas de performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full" size="lg">
                <Link href="/results">Ver Análises</Link>
              </Button>
            </CardContent>
          </Card>

          <Card
            className="group hover:shadow-professional-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up border-0 shadow-professional"
            style={{ animationDelay: "0.3s" }}
          >
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-4 rounded-full bg-chart-4/10 group-hover:bg-chart-4/20 transition-colors">
                <TrendingUp className="h-8 w-8 text-chart-4" />
              </div>
              <CardTitle className="text-xl">Dashboard Executivo</CardTitle>
              <CardDescription className="text-base">
                Visão estratégica com KPIs e indicadores de desempenho
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full" size="lg">
                <Link href="/dashboard">Acessar Dashboard</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="gradient-card border-0 shadow-professional animate-scale-in">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-primary" />
                <CardTitle className="text-xl">Métricas Institucionais</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-3 rounded-lg bg-background/50">
                <span className="text-muted-foreground font-medium">Alunos Ativos:</span>
                <span className="font-bold text-2xl text-primary">127</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-background/50">
                <span className="text-muted-foreground font-medium">Disciplinas:</span>
                <span className="font-bold text-2xl text-secondary">12</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-background/50">
                <span className="text-muted-foreground font-medium">Avaliações:</span>
                <span className="font-bold text-2xl text-chart-3">1,248</span>
              </div>
            </CardContent>
          </Card>

          <Card
            className="gradient-card border-0 shadow-professional animate-scale-in"
            style={{ animationDelay: "0.1s" }}
          >
            <CardHeader>
              <div className="flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-secondary" />
                <CardTitle className="text-xl">Performance Acadêmica</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-3 rounded-lg bg-background/50">
                <span className="text-muted-foreground font-medium">Taxa de Aprovação:</span>
                <span className="font-bold text-2xl text-green-600">87.3%</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-background/50">
                <span className="text-muted-foreground font-medium">Média Institucional:</span>
                <span className="font-bold text-2xl text-primary">8.2</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-background/50">
                <span className="text-muted-foreground font-medium">Excelência (≥9.0):</span>
                <span className="font-bold text-2xl text-secondary">23%</span>
              </div>
            </CardContent>
          </Card>

          <Card
            className="gradient-card border-0 shadow-professional animate-scale-in"
            style={{ animationDelay: "0.2s" }}
          >
            <CardHeader>
              <div className="flex items-center gap-3">
                <Calendar className="h-6 w-6 text-chart-3" />
                <CardTitle className="text-xl">Ações Estratégicas</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button asChild variant="outline" className="w-full justify-start bg-transparent" size="lg">
                <Link href="/students/new">
                  <Users className="h-4 w-4 mr-2" />
                  Cadastrar Novo Aluno
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start bg-transparent" size="lg">
                <Link href="/grades/new">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Registrar Avaliação
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start bg-transparent" size="lg">
                <Link href="/results">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Gerar Relatório
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="border-0 shadow-professional-lg gradient-primary text-white animate-fade-in">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">Tecnologia de Ponta para Educação</h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Algoritmos inteligentes de análise, interface responsiva e relatórios em tempo real para uma gestão
              educacional eficiente e moderna.
            </p>
            <div className="flex gap-6 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/dashboard">Explorar Recursos</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                asChild
              >
                <Link href="/results">Ver Demonstração</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
