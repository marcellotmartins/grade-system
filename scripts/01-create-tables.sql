-- Creating database schema for grade management system
-- Create students table
CREATE TABLE IF NOT EXISTS students (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  student_id VARCHAR(50) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create subjects table
CREATE TABLE IF NOT EXISTS subjects (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  code VARCHAR(10) UNIQUE NOT NULL,
  passing_grade DECIMAL(4,2) DEFAULT 7.0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create grades table
CREATE TABLE IF NOT EXISTS grades (
  id SERIAL PRIMARY KEY,
  student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
  subject_id INTEGER REFERENCES subjects(id) ON DELETE CASCADE,
  exam_name VARCHAR(255) NOT NULL,
  grade DECIMAL(4,2) NOT NULL CHECK (grade >= 0 AND grade <= 10),
  weight DECIMAL(3,2) DEFAULT 1.0,
  exam_date DATE DEFAULT CURRENT_DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create student_averages view for easy calculation
CREATE OR REPLACE VIEW student_averages AS
SELECT 
  s.id as student_id,
  s.name as student_name,
  s.student_id,
  sub.id as subject_id,
  sub.name as subject_name,
  sub.code as subject_code,
  sub.passing_grade,
  COALESCE(
    ROUND(
      SUM(g.grade * g.weight) / NULLIF(SUM(g.weight), 0), 
      2
    ), 
    0
  ) as average_grade,
  CASE 
    WHEN COALESCE(
      ROUND(
        SUM(g.grade * g.weight) / NULLIF(SUM(g.weight), 0), 
        2
      ), 
      0
    ) >= sub.passing_grade THEN 'Aprovado'
    ELSE 'Reprovado'
  END as status,
  COUNT(g.id) as total_exams
FROM students s
CROSS JOIN subjects sub
LEFT JOIN grades g ON s.id = g.student_id AND sub.id = g.subject_id
GROUP BY s.id, s.name, s.student_id, sub.id, sub.name, sub.code, sub.passing_grade
ORDER BY s.name, sub.name;
