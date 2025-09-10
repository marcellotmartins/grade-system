"use client"

import type React from "react"

import { useState } from "react"
import { BookOpen, Save, ArrowLeft } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function NewGradePage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    studentId: "",
    subjectId: "",
    grade: "",
    gradeType: "",
    examDate: "",
    observations: "",
  })

  const students = [
    { id: "1", name: "Ana Silva" },
    { id: "2", name: "João Santos" },
    { id: "3", name: "Maria Oliveira" },
    { id: "4", name: "Pedro Costa" },
    { id: "5", name: "Carla Souza" },
  ]

  const subjects = [
    { id: "1", name: "Matemática" },
    { id: "2", name: "Português" },
    { id: "3", name: "História" },
    { id: "4", name: "Ciências" },
    { id: "5", name: "Geografia" },
  ]

  const gradeTypes = [
    { id: "prova", name: "Prova" },
    { id: "trabalho", name: "Trabalho" },
    { id: "seminario", name: "Seminário" },
    { id: "participacao", name: "Participação" },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      console.log("[v0] Submitting grade data:", formData)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Show success and redirect
      alert("Nota lançada com sucesso!")
      router.push("/grades")
    } catch (error) {
      console.error("[v0] Error submitting grade:", error)
      alert("Erro ao lançar nota. Tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold text-foreground">Lançar Nova Nota</h1>
              <p className="text-muted-foreground">Registre uma nova nota de prova ou trabalho</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Informações da Nota</CardTitle>
            <CardDescription>Preencha todos os campos obrigatórios para registrar a nota</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Student Selection */}
              <div className="space-y-2">
                <Label htmlFor="student">Aluno *</Label>
                <Select
                  value={formData.studentId}
                  onValueChange={(value) => handleInputChange("studentId", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o aluno" />
                  </SelectTrigger>
                  <SelectContent>
                    {students.map((student) => (
                      <SelectItem key={student.id} value={student.id}>
                        {student.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Subject Selection */}
              <div className="space-y-2">
                <Label htmlFor="subject">Disciplina *</Label>
                <Select
                  value={formData.subjectId}
                  onValueChange={(value) => handleInputChange("subjectId", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a disciplina" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem key={subject.id} value={subject.id}>
                        {subject.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Grade Type */}
              <div className="space-y-2">
                <Label htmlFor="gradeType">Tipo de Avaliação *</Label>
                <Select
                  value={formData.gradeType}
                  onValueChange={(value) => handleInputChange("gradeType", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    {gradeTypes.map((type) => (
                      <SelectItem key={type.id} value={type.id}>
                        {type.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Grade Input */}
                <div className="space-y-2">
                  <Label htmlFor="grade">Nota *</Label>
                  <Input
                    id="grade"
                    type="number"
                    min="0"
                    max="10"
                    step="0.1"
                    placeholder="0.0"
                    value={formData.grade}
                    onChange={(e) => handleInputChange("grade", e.target.value)}
                    required
                  />
                  <p className="text-xs text-muted-foreground">Nota de 0 a 10</p>
                </div>

                {/* Exam Date */}
                <div className="space-y-2">
                  <Label htmlFor="examDate">Data da Avaliação *</Label>
                  <Input
                    id="examDate"
                    type="date"
                    value={formData.examDate}
                    onChange={(e) => handleInputChange("examDate", e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Observations */}
              <div className="space-y-2">
                <Label htmlFor="observations">Observações</Label>
                <Textarea
                  id="observations"
                  placeholder="Observações sobre a avaliação (opcional)"
                  value={formData.observations}
                  onChange={(e) => handleInputChange("observations", e.target.value)}
                  rows={3}
                />
              </div>

              {/* Grade Preview */}
              {formData.grade && (
                <Card className="bg-muted/50">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Prévia da Nota:</span>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">{formData.grade}</span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            Number.parseFloat(formData.grade) >= 7
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {Number.parseFloat(formData.grade) >= 7 ? "Aprovado" : "Reprovado"}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <Button type="submit" disabled={isLoading} className="flex-1">
                  {isLoading ? (
                    <>Salvando...</>
                  ) : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Salvar Nota
                    </>
                  )}
                </Button>
                <Button type="button" variant="outline" asChild>
                  <Link href="/grades">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Cancelar
                  </Link>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
