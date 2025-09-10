import { Users, Plus, Search } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function StudentsPage() {
  const students = [
    { id: 1, name: "Ana Silva", email: "ana@email.com", class: "3º A", status: "Ativo" },
    { id: 2, name: "João Santos", email: "joao@email.com", class: "3º A", status: "Ativo" },
    { id: 3, name: "Maria Oliveira", email: "maria@email.com", class: "3º B", status: "Ativo" },
    { id: 4, name: "Pedro Costa", email: "pedro@email.com", class: "3º A", status: "Ativo" },
    { id: 5, name: "Carla Souza", email: "carla@email.com", class: "3º B", status: "Ativo" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-foreground">Gerenciar Alunos</h1>
                <p className="text-muted-foreground">Cadastre e gerencie informações dos estudantes</p>
              </div>
            </div>
            <Button asChild>
              <Link href="/students/new">
                <Plus className="h-4 w-4 mr-2" />
                Novo Aluno
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="mb-6 flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar alunos..." className="pl-10" />
          </div>
          <Button variant="outline">Filtros</Button>
        </div>

        {/* Students List */}
        <div className="grid gap-4">
          {students.map((student) => (
            <Card key={student.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">
                        {student.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{student.name}</h3>
                      <p className="text-muted-foreground">{student.email}</p>
                      <p className="text-sm text-muted-foreground">Turma: {student.class}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-sm rounded-full">{student.status}</span>
                    <Button variant="outline" size="sm">
                      <Link href={`/students/${student.id}`}>Ver Detalhes</Link>
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
