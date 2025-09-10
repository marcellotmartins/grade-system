-- Adding sample data for testing the grade system
-- Insert sample subjects
INSERT INTO subjects (name, code, passing_grade) VALUES
('Matemática', 'MAT', 7.0),
('Português', 'PORT', 7.0),
('História', 'HIST', 6.0),
('Geografia', 'GEO', 6.0),
('Ciências', 'CIEN', 7.0)
ON CONFLICT (code) DO NOTHING;

-- Insert sample students
INSERT INTO students (name, email, student_id) VALUES
('Ana Silva', 'ana.silva@escola.com', 'EST001'),
('Bruno Santos', 'bruno.santos@escola.com', 'EST002'),
('Carla Oliveira', 'carla.oliveira@escola.com', 'EST003'),
('Diego Ferreira', 'diego.ferreira@escola.com', 'EST004'),
('Elena Costa', 'elena.costa@escola.com', 'EST005')
ON CONFLICT (email) DO NOTHING;

-- Insert sample grades
INSERT INTO grades (student_id, subject_id, exam_name, grade, weight) VALUES
-- Ana Silva grades
(1, 1, 'Prova 1', 8.5, 1.0),
(1, 1, 'Prova 2', 7.2, 1.0),
(1, 2, 'Prova 1', 9.0, 1.0),
(1, 2, 'Trabalho', 8.5, 0.5),
-- Bruno Santos grades
(2, 1, 'Prova 1', 6.5, 1.0),
(2, 1, 'Prova 2', 5.8, 1.0),
(2, 2, 'Prova 1', 7.5, 1.0),
-- Carla Oliveira grades
(3, 1, 'Prova 1', 9.2, 1.0),
(3, 2, 'Prova 1', 8.8, 1.0),
(3, 3, 'Prova 1', 7.5, 1.0);
