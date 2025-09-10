import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Log the received data for debugging
    console.log("[v0] Received student data:", body)

    // Validate required fields
    const { name, email, class: studentClass } = body

    if (!name || !email || !studentClass) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, and class are required" },
        { status: 400 },
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Mock database insertion
    // In a real app, this would insert into the database
    const newStudent = {
      id: Date.now(), // Mock ID
      name,
      email,
      class: studentClass,
      birthDate: body.birthDate || null,
      phone: body.phone || null,
      address: body.address || null,
      status: "Ativo",
      createdAt: new Date().toISOString(),
    }

    console.log("[v0] Mock student saved:", newStudent)

    return NextResponse.json({
      success: true,
      data: newStudent,
      message: "Student saved successfully",
    })
  } catch (error) {
    console.error("[v0] Error saving student:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET() {
  const mockStudents = [
    { id: 1, name: "Ana Silva", email: "ana@email.com", class: "3º A", status: "Ativo" },
    { id: 2, name: "João Santos", email: "joao@email.com", class: "3º A", status: "Ativo" },
    { id: 3, name: "Maria Oliveira", email: "maria@email.com", class: "3º B", status: "Ativo" },
    { id: 4, name: "Pedro Costa", email: "pedro@email.com", class: "3º A", status: "Ativo" },
    { id: 5, name: "Carla Souza", email: "carla@email.com", class: "3º B", status: "Ativo" },
  ]

  return NextResponse.json({
    success: true,
    data: mockStudents,
  })
}
