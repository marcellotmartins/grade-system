"use client"

import { useEffect, useState } from "react"
import {
  Users,
  BookOpen,
  TrendingUp,
  Award,
  AlertCircle,
  Loader2,
  BarChart3,
  Calendar,
  Target,
  Zap,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import type { SubjectAverage } from "@/lib/grade-calculations"

interface DashboardData {
  classStats: {
    totalStudents: number
    approvedStudents: number
    reprovedStudents: number
    approvalRate: number
    overallClassAverage: number
  }
  subjectAverages: SubjectAverage[]
  recentGrades: Array<{
    student: string
    subject: string
    grade: number
    date: string
  }>
}

export default function DashboardPage() {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        console.log("[v0] Fetching dashboard data...")
        const response = await fetch("/api/averages")

        if (!response.ok) {
          throw new Error("Failed to fetch dashboard data")
        }

        const result = await response.json()
        console.log("[v0] Dashboard data fetched:", result)

        setDashboardData({
          classStats: result.data.classStats,
          subjectAverages: result.data.subjectAverages,
          recentGrades: result.data.recentGrades,
        })
      } catch (err) {
        console.error("[v0] Error fetching dashboard data:", err)
        setError("Erro ao carregar dados do dashboard. Tente novamente.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchDashboardData()
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-card/30 flex items-center justify-center">
        <Card className="w-96 border-0 shadow-professional-lg">
          <CardContent className="pt-8 text-center">
            <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto mb-4">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Carregando Dashboard</h3>
            <p className="text-muted-foreground">Processando dados analíticos...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (error || !dashboardData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-card/30 flex items-center justify-center">
        <Card className="w-96 border-0 shadow-professional-lg">
          <CardContent className="pt-8 text-center">
            <div className="p-4 rounded-full bg-destructive/10 w-fit mx-auto mb-4">
              <AlertCircle className="h-8 w-8 text-destructive" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-destructive">Erro no Sistema</h3>
            <p className="text-muted-foreground mb-6">{error || "Falha ao carregar dados analíticos"}</p>
            <Button onClick={() => window.location.reload()} size="lg">
              Recarregar Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const { classStats, subjectAverages, recentGrades } = dashboardData

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-card/30">
      <header className="border-b bg-card/80 backdrop-blur-sm shadow-professional">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl gradient-primary">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Dashboard Executivo</h1>
                <p className="text-muted-foreground text-lg">Analytics e Métricas de Performance</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Badge variant="secondary" className="px-4 py-2">
                <Zap className="h-4 w-4 mr-1" />
                Tempo Real
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                {new Date().toLocaleDateString("pt-BR")}
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="border-0 shadow-professional hover:shadow-professional-lg transition-all duration-300 animate-slide-up">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">TOTAL DE ALUNOS</CardTitle>
              <div className="p-2 rounded-lg bg-primary/10">
                <Users className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{classStats.totalStudents}</div>
              <p className="text-xs text-muted-foreground mt-1">Estudantes cadastrados no sistema</p>
            </CardContent>
          </Card>

          <Card
            className="border-0 shadow-professional hover:shadow-professional-lg transition-all duration-300 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">DISCIPLINAS ATIVAS</CardTitle>
              <div className="p-2 rounded-lg bg-secondary/10">
                <BookOpen className="h-4 w-4 text-secondary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary">{subjectAverages.length}</div>
              <p className="text-xs text-muted-foreground mt-1">Matérias com avaliações registradas</p>
            </CardContent>
          </Card>

          <Card
            className="border-0 shadow-professional hover:shadow-professional-lg transition-all duration-300 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">TAXA DE APROVAÇÃO</CardTitle>
              <div className="p-2 rounded-lg bg-green-100">
                <Award className="h-4 w-4 text-green-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">{classStats.approvalRate}%</div>
              <p className="text-xs text-muted-foreground mt-1">Alunos com média ≥ 7.0</p>
            </CardContent>
          </Card>

          <Card
            className="border-0 shadow-professional hover:shadow-professional-lg transition-all duration-300 animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">MÉDIA INSTITUCIONAL</CardTitle>
              <div className="p-2 rounded-lg bg-chart-3/10">
                <TrendingUp className="h-4 w-4 text-chart-3" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-chart-3">{classStats.overallClassAverage}</div>
              <p className="text-xs text-muted-foreground mt-1">Média geral da instituição</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2 border-0 shadow-professional animate-fade-in">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl">Avaliações Recentes</CardTitle>
                  <CardDescription>Últimas notas registradas no sistema</CardDescription>
                </div>
                <Badge variant="outline" className="px-3 py-1">
                  {recentGrades.length} registros
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentGrades.map((grade, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <BookOpen className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{grade.student}</p>
                        <p className="text-sm text-muted-foreground">{grade.subject}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2">
                        <Badge variant={grade.grade >= 7 ? "default" : "destructive"} className="px-3 py-1">
                          {grade.grade.toFixed(1)}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {new Date(grade.date).toLocaleDateString("pt-BR")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <Button asChild className="flex-1">
                  <Link href="/grades">Ver Todas as Notas</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/grades/new">Nova Avaliação</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-professional animate-fade-in">
            <CardHeader>
              <CardTitle className="text-xl">Performance por Disciplina</CardTitle>
              <CardDescription>Análise detalhada de cada matéria</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {subjectAverages.map((subject, index) => (
                  <div key={subject.subjectId} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-semibold text-foreground">{subject.subjectName}</span>
                        <p className="text-xs text-muted-foreground">
                          {subject.studentCount} alunos • {subject.grades.length} avaliações
                        </p>
                      </div>
                      <Badge variant={subject.average >= 7 ? "default" : "destructive"} className="px-3 py-1">
                        {subject.average.toFixed(1)}
                      </Badge>
                    </div>
                    <Progress value={(subject.average / 10) * 100} className="h-3" />
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button variant="outline" asChild className="w-full bg-transparent">
                  <Link href="/results">
                    <Target className="h-4 w-4 mr-2" />
                    Relatório Detalhado
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-0 shadow-professional-lg gradient-card animate-scale-in">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Calendar className="h-6 w-6 text-primary" />
              <div>
                <CardTitle className="text-xl">Central de Ações</CardTitle>
                <CardDescription>Acesso rápido às principais funcionalidades</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button asChild size="lg" className="h-auto p-4 flex-col gap-2">
                <Link href="/students/new">
                  <Users className="h-5 w-5" />
                  Novo Aluno
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="h-auto p-4 flex-col gap-2">
                <Link href="/grades/new">
                  <BookOpen className="h-5 w-5" />
                  Lançar Nota
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-auto p-4 flex-col gap-2 bg-transparent">
                <Link href="/students">
                  <Users className="h-5 w-5" />
                  Ver Alunos
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-auto p-4 flex-col gap-2 bg-transparent">
                <Link href="/results">
                  <BarChart3 className="h-5 w-5" />
                  Analytics
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="mt-12 flex justify-center">
          <Button variant="outline" asChild size="lg">
            <Link href="/">← Voltar ao Início</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
