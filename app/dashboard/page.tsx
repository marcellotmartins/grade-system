"use client"

import { useEffect, useState } from "react"
import { GraduationCap, Users, BookOpen, TrendingUp, Award, AlertCircle, Loader2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
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
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Loader2 className="h-6 w-6 animate-spin" />
          <span>Carregando dashboard...</span>
        </div>
      </div>
    )
  }

  if (error || !dashboardData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-96">
          <CardContent className="pt-6 text-center">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <p className="text-red-600 mb-4">{error || "Erro ao carregar dados"}</p>
            <Button onClick={() => window.location.reload()}>Tentar Novamente</Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const { classStats, subjectAverages, recentGrades } = dashboardData

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <GraduationCap className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
              <p className="text-muted-foreground">Visão geral do desempenho da turma com dados atualizados</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Alunos</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{classStats.totalStudents}</div>
              <p className="text-xs text-muted-foreground">Estudantes cadastrados</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Disciplinas</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{subjectAverages.length}</div>
              <p className="text-xs text-muted-foreground">Matérias ativas</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taxa de Aprovação</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{classStats.approvalRate}%</div>
              <p className="text-xs text-muted-foreground">Alunos aprovados</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Média Geral</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{classStats.overallClassAverage}</div>
              <p className="text-xs text-muted-foreground">Média da turma</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Grades */}
          <Card>
            <CardHeader>
              <CardTitle>Notas Recentes</CardTitle>
              <CardDescription>Últimas notas lançadas no sistema</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentGrades.map((grade, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{grade.student}</p>
                      <p className="text-sm text-muted-foreground">{grade.subject}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">{grade.grade}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(grade.date).toLocaleDateString("pt-BR")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Button variant="outline" asChild className="w-full bg-transparent">
                  <Link href="/grades">Ver Todas as Notas</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Subject Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Desempenho por Disciplina</CardTitle>
              <CardDescription>Média calculada de cada matéria</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {subjectAverages.map((subject) => (
                  <div key={subject.subjectId} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{subject.subjectName}</span>
                      <span className="text-sm font-bold">{subject.average.toFixed(1)}</span>
                    </div>
                    <Progress value={(subject.average / 10) * 100} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      {subject.studentCount} alunos • {subject.grades.length} notas
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Button variant="outline" asChild className="w-full bg-transparent">
                  <Link href="/results">Ver Relatório Completo</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
            <CardDescription>Acesse rapidamente as principais funcionalidades</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <Button asChild variant="outline">
                <Link href="/students/new">Novo Aluno</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/grades/new">Lançar Nota</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/students">Ver Alunos</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/results">Ver Resultados</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="mt-8">
          <Button variant="outline" asChild>
            <Link href="/">← Voltar ao Início</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
