import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Log the received data for debugging
    console.log("[v0] Received grade data:", body)

    // Validate required fields
    const { studentId, subjectId, grade, gradeType, examDate } = body

    if (!studentId || !subjectId || !grade || !gradeType || !examDate) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Validate grade range
    const gradeValue = Number.parseFloat(grade)
    if (isNaN(gradeValue) || gradeValue < 0 || gradeValue > 10) {
      return NextResponse.json({ error: "Grade must be between 0 and 10" }, { status: 400 })
    }

    // Mock database insertion
    // In a real app, this would insert into the database
    const newGrade = {
      id: Date.now(), // Mock ID
      studentId,
      subjectId,
      grade: gradeValue,
      gradeType,
      examDate,
      observations: body.observations || "",
      createdAt: new Date().toISOString(),
    }

    console.log("[v0] Mock grade saved:", newGrade)

    return NextResponse.json({
      success: true,
      data: newGrade,
      message: "Grade saved successfully",
    })
  } catch (error) {
    console.error("[v0] Error saving grade:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET() {
  const mockGrades = [
    { id: 1, student: "Ana Silva", subject: "Matemática", grade: 8.5, date: "2024-01-15", type: "Prova" },
    { id: 2, student: "João Santos", subject: "Português", grade: 7.0, date: "2024-01-14", type: "Trabalho" },
    { id: 3, student: "Maria Oliveira", subject: "História", grade: 9.0, date: "2024-01-13", type: "Prova" },
    { id: 4, student: "Pedro Costa", subject: "Matemática", grade: 6.5, date: "2024-01-12", type: "Prova" },
    { id: 5, student: "Carla Souza", subject: "Ciências", grade: 8.0, date: "2024-01-11", type: "Trabalho" },
  ]

  return NextResponse.json({
    success: true,
    data: mockGrades,
  })
}
