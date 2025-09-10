"use client"

import { useEffect, useState } from "react"
import { TrendingUp, Award, AlertTriangle, Loader2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import type { StudentAverage } from "@/lib/grade-calculations"

interface ClassStats {
  totalStudents: number
  approvedStudents: number
  reprovedStudents: number
  approvalRate: number
  overallClassAverage: number
}

export default function ResultsPage() {
  const [studentAverages, setStudentAverages] = useState<StudentAverage[]>([])
  const [classStats, setClassStats] = useState<ClassStats | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchAverages = async () => {
      try {
        console.log("[v0] Fetching averages...")
        const response = await fetch("/api/averages")

        if (!response.ok) {
          throw new Error("Failed to fetch averages")
        }

        const result = await response.json()
        console.log("[v0] Averages fetched:", result)

        setStudentAverages(result.data.studentAverages)
        setClassStats(result.data.classStats)
      } catch (err) {
        console.error("[v0] Error fetching averages:", err)
        setError("Erro ao carregar médias. Tente novamente.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchAverages()
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Loader2 className="h-6 w-6 animate-spin" />
          <span>Calculando médias...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-96">
          <CardContent className="pt-6 text-center">
            <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <p className="text-red-600 mb-4">{error}</p>
            <Button onClick={() => window.location.reload()}>Tentar Novamente</Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <TrendingUp className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold text-foreground">Médias e Status</h1>
              <p className="text-muted-foreground">Visualize médias calculadas e status de aprovação dos alunos</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Summary Cards */}
        {classStats && (
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total de Alunos</CardTitle>
                <Award className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{classStats.totalStudents}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Taxa de Aprovação</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{classStats.approvalRate}%</div>
                <p className="text-xs text-muted-foreground">
                  {classStats.approvedStudents} aprovados de {classStats.totalStudents}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Média Geral</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{classStats.overallClassAverage}</div>
                <p className="text-xs text-muted-foreground">Média da turma</p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Student Results */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Resultados por Aluno</h2>

          {studentAverages.map((student) => (
            <Card key={student.studentId} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">{student.studentName}</CardTitle>
                    <CardDescription>
                      Média: {student.overallAverage.toFixed(1)} • {student.totalGrades} notas lançadas
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        student.status === "Aprovado" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {student.status}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(student.subjectAverages).map(([subject, grade]) => (
                    <div key={subject} className="flex items-center justify-between">
                      <span className="text-sm font-medium">{subject}</span>
                      <div className="flex items-center gap-3">
                        <Progress value={(grade / 10) * 100} className="w-24 h-2" />
                        <span className="text-sm font-semibold w-8">{grade.toFixed(1)}</span>
                      </div>
                    </div>
                  ))}
                  {Object.keys(student.subjectAverages).length === 0 && (
                    <p className="text-sm text-muted-foreground text-center py-4">Nenhuma nota lançada ainda</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

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
