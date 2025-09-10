import { NextResponse } from "next/server"
import {
  calculateStudentAverages,
  calculateSubjectAverages,
  getClassStatistics,
  type Grade,
  type Student,
  type Subject,
} from "@/lib/grade-calculations"

// Mock data - in a real app, this would come from database
const mockStudents: Student[] = [
  { id: 1, name: "Ana Silva", email: "ana@email.com", class: "3º A", status: "Ativo" },
  { id: 2, name: "João Santos", email: "joao@email.com", class: "3º A", status: "Ativo" },
  { id: 3, name: "Maria Oliveira", email: "maria@email.com", class: "3º B", status: "Ativo" },
  { id: 4, name: "Pedro Costa", email: "pedro@email.com", class: "3º A", status: "Ativo" },
  { id: 5, name: "Carla Souza", email: "carla@email.com", class: "3º B", status: "Ativo" },
]

const mockSubjects: Subject[] = [
  { id: 1, name: "Matemática" },
  { id: 2, name: "Português" },
  { id: 3, name: "História" },
  { id: 4, name: "Ciências" },
  { id: 5, name: "Geografia" },
]

const mockGrades: Grade[] = [
  // Ana Silva (id: 1) - Good student
  { id: 1, studentId: 1, subjectId: 1, grade: 8.5, gradeType: "prova", examDate: "2024-01-15", observations: "" },
  { id: 2, studentId: 1, subjectId: 1, grade: 8.0, gradeType: "trabalho", examDate: "2024-01-10", observations: "" },
  { id: 3, studentId: 1, subjectId: 2, grade: 8.0, gradeType: "prova", examDate: "2024-01-12", observations: "" },
  { id: 4, studentId: 1, subjectId: 3, grade: 9.0, gradeType: "prova", examDate: "2024-01-14", observations: "" },
  { id: 5, studentId: 1, subjectId: 4, grade: 8.5, gradeType: "trabalho", examDate: "2024-01-16", observations: "" },
  { id: 6, studentId: 1, subjectId: 5, grade: 8.0, gradeType: "prova", examDate: "2024-01-18", observations: "" },

  // João Santos (id: 2) - Struggling student
  { id: 7, studentId: 2, subjectId: 1, grade: 6.0, gradeType: "prova", examDate: "2024-01-15", observations: "" },
  { id: 8, studentId: 2, subjectId: 1, grade: 6.5, gradeType: "trabalho", examDate: "2024-01-10", observations: "" },
  { id: 9, studentId: 2, subjectId: 2, grade: 7.0, gradeType: "prova", examDate: "2024-01-12", observations: "" },
  { id: 10, studentId: 2, subjectId: 3, grade: 7.5, gradeType: "prova", examDate: "2024-01-14", observations: "" },
  { id: 11, studentId: 2, subjectId: 4, grade: 6.5, gradeType: "trabalho", examDate: "2024-01-16", observations: "" },

  // Maria Oliveira (id: 3) - Excellent student
  { id: 12, studentId: 3, subjectId: 1, grade: 9.0, gradeType: "prova", examDate: "2024-01-15", observations: "" },
  { id: 13, studentId: 3, subjectId: 2, grade: 9.5, gradeType: "prova", examDate: "2024-01-12", observations: "" },
  { id: 14, studentId: 3, subjectId: 3, grade: 9.0, gradeType: "prova", examDate: "2024-01-14", observations: "" },
  { id: 15, studentId: 3, subjectId: 4, grade: 9.0, gradeType: "trabalho", examDate: "2024-01-16", observations: "" },
  { id: 16, studentId: 3, subjectId: 5, grade: 9.5, gradeType: "prova", examDate: "2024-01-18", observations: "" },

  // Pedro Costa (id: 4) - Below average student
  { id: 17, studentId: 4, subjectId: 1, grade: 5.0, gradeType: "prova", examDate: "2024-01-15", observations: "" },
  { id: 18, studentId: 4, subjectId: 1, grade: 6.0, gradeType: "trabalho", examDate: "2024-01-10", observations: "" },
  { id: 19, studentId: 4, subjectId: 2, grade: 6.0, gradeType: "prova", examDate: "2024-01-12", observations: "" },
  { id: 20, studentId: 4, subjectId: 3, grade: 6.5, gradeType: "prova", examDate: "2024-01-14", observations: "" },

  // Carla Souza (id: 5) - Average student
  { id: 21, studentId: 5, subjectId: 1, grade: 7.5, gradeType: "prova", examDate: "2024-01-15", observations: "" },
  { id: 22, studentId: 5, subjectId: 2, grade: 8.0, gradeType: "prova", examDate: "2024-01-12", observations: "" },
  { id: 23, studentId: 5, subjectId: 3, grade: 7.0, gradeType: "prova", examDate: "2024-01-14", observations: "" },
  { id: 24, studentId: 5, subjectId: 4, grade: 8.0, gradeType: "trabalho", examDate: "2024-01-16", observations: "" },
  { id: 25, studentId: 5, subjectId: 5, grade: 7.5, gradeType: "prova", examDate: "2024-01-18", observations: "" },
]

export async function GET() {
  try {
    console.log("[v0] Calculating averages...")

    // Calculate student averages
    const studentAverages = calculateStudentAverages(mockStudents, mockGrades, mockSubjects)

    // Calculate subject averages
    const subjectAverages = calculateSubjectAverages(mockSubjects, mockGrades, mockStudents)

    // Get class statistics
    const classStats = getClassStatistics(studentAverages)

    // Get recent grades (last 5)
    const recentGrades = mockGrades
      .sort((a, b) => new Date(b.examDate).getTime() - new Date(a.examDate).getTime())
      .slice(0, 5)
      .map((grade) => {
        const student = mockStudents.find((s) => s.id === grade.studentId)
        const subject = mockSubjects.find((s) => s.id === grade.subjectId)
        return {
          student: student?.name || "Unknown",
          subject: subject?.name || "Unknown",
          grade: grade.grade,
          date: grade.examDate,
        }
      })

    console.log("[v0] Averages calculated successfully")

    return NextResponse.json({
      success: true,
      data: {
        studentAverages,
        subjectAverages,
        classStats,
        recentGrades,
      },
    })
  } catch (error) {
    console.error("[v0] Error calculating averages:", error)
    return NextResponse.json({ error: "Failed to calculate averages" }, { status: 500 })
  }
}
