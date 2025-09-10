import { GraduationCap, Users, BookOpen, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <GraduationCap className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold text-foreground">Sistema de Notas</h1>
              <p className="text-muted-foreground">Gestão completa de notas e médias escolares</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Bem-vindo ao Sistema de Gestão de Notas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Gerencie notas de provas, calcule médias automaticamente e acompanhe o desempenho dos alunos de forma
            simples e eficiente.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle>Gerenciar Alunos</CardTitle>
              <CardDescription>Cadastre e gerencie informações dos estudantes</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/students">Acessar</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <BookOpen className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle>Lançar Notas</CardTitle>
              <CardDescription>Registre notas de provas e trabalhos</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/grades">Acessar</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle>Médias e Status</CardTitle>
              <CardDescription>Visualize médias e status de aprovação</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/results">Acessar</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <GraduationCap className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle>Dashboard</CardTitle>
              <CardDescription>Visão geral do desempenho da turma</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/dashboard">Acessar</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Estatísticas Rápidas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total de Alunos:</span>
                  <span className="font-semibold">5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Disciplinas:</span>
                  <span className="font-semibold">5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Notas Lançadas:</span>
                  <span className="font-semibold">12</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Desempenho Geral</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Aprovados:</span>
                  <span className="font-semibold text-primary">60%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Reprovados:</span>
                  <span className="font-semibold text-destructive">40%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Média Geral:</span>
                  <span className="font-semibold">7.2</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Ações Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/students/new">Novo Aluno</Link>
              </Button>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/grades/new">Lançar Nota</Link>
              </Button>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/results">Ver Relatório</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
