import { BookOpen, Plus, Search } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function GradesPage() {
  const grades = [
    { id: 1, student: "Ana Silva", subject: "Matemática", grade: 8.5, date: "2024-01-15", type: "Prova" },
    { id: 2, student: "João Santos", subject: "Português", grade: 7.0, date: "2024-01-14", type: "Trabalho" },
    { id: 3, student: "Maria Oliveira", subject: "História", grade: 9.0, date: "2024-01-13", type: "Prova" },
    { id: 4, student: "Pedro Costa", subject: "Matemática", grade: 6.5, date: "2024-01-12", type: "Prova" },
    { id: 5, student: "Carla Souza", subject: "Ciências", grade: 8.0, date: "2024-01-11", type: "Trabalho" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-foreground">Lançar Notas</h1>
                <p className="text-muted-foreground">Registre notas de provas e trabalhos</p>
              </div>
            </div>
            <Button asChild>
              <Link href="/grades/new">
                <Plus className="h-4 w-4 mr-2" />
                Nova Nota
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="mb-6 flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar por aluno ou disciplina..." className="pl-10" />
          </div>
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Disciplina" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="matematica">Matemática</SelectItem>
              <SelectItem value="portugues">Português</SelectItem>
              <SelectItem value="historia">História</SelectItem>
              <SelectItem value="ciencias">Ciências</SelectItem>
              <SelectItem value="geografia">Geografia</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="prova">Prova</SelectItem>
              <SelectItem value="trabalho">Trabalho</SelectItem>
              <SelectItem value="seminario">Seminário</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Grades List */}
        <div className="grid gap-4">
          {grades.map((grade) => (
            <Card key={grade.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">{grade.grade}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{grade.student}</h3>
                      <p className="text-muted-foreground">
                        {grade.subject} • {grade.type}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(grade.date).toLocaleDateString("pt-BR")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        grade.grade >= 7 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {grade.grade >= 7 ? "Aprovado" : "Reprovado"}
                    </span>
                    <Button variant="outline" size="sm">
                      Editar
                    </Button>
                  </div>
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
