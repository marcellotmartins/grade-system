export interface Grade {
  id: number
  studentId: number
  subjectId: number
  grade: number
  gradeType: string
  examDate: string
  observations?: string
}

export interface Student {
  id: number
  name: string
  email: string
  class: string
  status: string
}

export interface Subject {
  id: number
  name: string
}

export interface StudentAverage {
  studentId: number
  studentName: string
  subjectAverages: { [subjectName: string]: number }
  overallAverage: number
  status: "Aprovado" | "Reprovado"
  totalGrades: number
}

export interface SubjectAverage {
  subjectId: number
  subjectName: string
  average: number
  studentCount: number
  grades: Grade[]
}

// Calculate average for a specific student in a specific subject
export function calculateSubjectAverage(grades: Grade[]): number {
  if (grades.length === 0) return 0

  const sum = grades.reduce((total, grade) => total + grade.grade, 0)
  return Math.round((sum / grades.length) * 10) / 10 // Round to 1 decimal place
}

// Calculate overall average for a student across all subjects
export function calculateOverallAverage(subjectAverages: { [key: string]: number }): number {
  const averages = Object.values(subjectAverages)
  if (averages.length === 0) return 0

  const sum = averages.reduce((total, avg) => total + avg, 0)
  return Math.round((sum / averages.length) * 10) / 10
}

// Determine if student is approved (average >= 7.0)
export function determineApprovalStatus(overallAverage: number): "Aprovado" | "Reprovado" {
  return overallAverage >= 7.0 ? "Aprovado" : "Reprovado"
}

// Calculate averages for all students
export function calculateStudentAverages(students: Student[], grades: Grade[], subjects: Subject[]): StudentAverage[] {
  return students.map((student) => {
    // Get all grades for this student
    const studentGrades = grades.filter((grade) => grade.studentId === student.id)

    // Calculate average for each subject
    const subjectAverages: { [subjectName: string]: number } = {}

    subjects.forEach((subject) => {
      const subjectGrades = studentGrades.filter((grade) => grade.subjectId === subject.id)
      if (subjectGrades.length > 0) {
        subjectAverages[subject.name] = calculateSubjectAverage(subjectGrades)
      }
    })

    // Calculate overall average
    const overallAverage = calculateOverallAverage(subjectAverages)

    return {
      studentId: student.id,
      studentName: student.name,
      subjectAverages,
      overallAverage,
      status: determineApprovalStatus(overallAverage),
      totalGrades: studentGrades.length,
    }
  })
}

// Calculate averages by subject
export function calculateSubjectAverages(subjects: Subject[], grades: Grade[], students: Student[]): SubjectAverage[] {
  return subjects.map((subject) => {
    const subjectGrades = grades.filter((grade) => grade.subjectId === subject.id)
    const studentsWithGrades = new Set(subjectGrades.map((grade) => grade.studentId))

    return {
      subjectId: subject.id,
      subjectName: subject.name,
      average: calculateSubjectAverage(subjectGrades),
      studentCount: studentsWithGrades.size,
      grades: subjectGrades,
    }
  })
}

// Get class statistics
export function getClassStatistics(studentAverages: StudentAverage[]) {
  const totalStudents = studentAverages.length
  const approvedStudents = studentAverages.filter((s) => s.status === "Aprovado").length
  const reprovedStudents = totalStudents - approvedStudents

  const overallClassAverage =
    totalStudents > 0
      ? Math.round((studentAverages.reduce((sum, s) => sum + s.overallAverage, 0) / totalStudents) * 10) / 10
      : 0

  const approvalRate = totalStudents > 0 ? Math.round((approvedStudents / totalStudents) * 100) : 0

  return {
    totalStudents,
    approvedStudents,
    reprovedStudents,
    approvalRate,
    overallClassAverage,
  }
}
