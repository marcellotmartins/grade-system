# 📚 School Grades System

A complete web system for managing school grades, developed with Next.js 15. It allows grade entry, automatic average calculation, and monitoring of student performance.

## ✨ Features

### 🎯 Main Features
- **Student Management**: Register, list, and edit student information
- **Grade Entry**: Intuitive interface to record grades by subject
- **Automatic Calculation**: Averages calculated automatically by subject and overall
- **Approval Status**: Automatic determination of pass/fail (average ≥ 7.0)
- **Interactive Dashboard**: Class statistics with real-time charts and metrics
- **Detailed Reports**: Full visualization of individual and class performance

### 📊 Supported Evaluation Types
- Exam
- Assignment
- Seminar
- Activity
- Project

## 🚀 Technologies Used

- **Frontend**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Language**: TypeScript
- **Database**: SQL (compatible with PostgreSQL, MySQL)
- **Icons**: Lucide React

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- SQL Database (PostgreSQL recommended)

### Step by Step

1. **Clone the repository**
```bash
git clone https://github.com/marcellotmartins/grade-system.git
cd grade-system
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Configure the database**
```bash
# Run the SQL scripts in order:
# 1. scripts/01-create-tables.sql
# 2. scripts/02-seed-data.sql
```

4. **Configure environment variables**
```bash
# Create a .env.local file
DATABASE_URL="your_connection_string_here"
```

5. **Run the project**
```bash
npm run dev
# or
yarn dev
```

6. **Access the system**
Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 How to Use

### 1. Student Registration
- Go to "Manage Students" on the home page
- Click "New Student" to register
- Fill in: name, enrollment, class, and grade

### 2. Grade Entry
- Go to "Enter Grade" on the home page
- Select the student and subject
- Choose the evaluation type
- Enter the grade (0-10) and optional notes
- The system automatically shows pass/fail status

### 3. Results Visualization
- Go to "View Averages" for a complete report
- View averages by subject and overall
- Track each student’s status
- Filter by class or grade

### 4. Dashboard
- Overview of class statistics
- Performance charts
- Pass/fail metrics
- Grade distribution

## 📁 Project Structure

```
school-grades-system/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   │   ├── students/      # Student endpoints
│   │   ├── grades/        # Grade endpoints
│   │   └── averages/      # Average endpoints
│   ├── students/          # Student management pages
│   ├── grades/            # Grade entry pages
│   ├── results/           # Results pages
│   ├── dashboard/         # Main dashboard
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── navigation.tsx    # Main navigation
├── lib/                  # Utilities and configs
│   └── grade-calculations.ts # Grade calculation logic
├── scripts/              # SQL scripts
│   ├── 01-create-tables.sql
│   └── 02-seed-data.sql
└── README.md
```

## 🎨 Design System

The system uses a professional educational color palette:

- **Main Green**: `#22c55e` - Represents growth and success
- **Dark Green**: `#16a34a` - For highlights
- **Grays**: Neutral tones for text and backgrounds
- **Red**: `#ef4444` - For failures and alerts
- **Blue**: `#3b82f6` - For info and links

## 📊 Business Rules

### Average Calculation
- **Subject Average**: Sum of grades ÷ number of evaluations
- **Overall Average**: Sum of all subject averages ÷ number of subjects
- **Approval Criteria**: Average ≥ 7.0

### Status Types
- ✅ **Approved**: Average ≥ 7.0
- ❌ **Failed**: Average < 7.0
- ⏳ **In Progress**: Not enough grades

## 🤝 Contribution

Contributions are welcome! To contribute:

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Roadmap

- [ ] User authentication (teachers/coordinators)
- [ ] Export reports to PDF
- [ ] Email notifications
- [ ] Integration with academic systems
- [ ] Mobile app
- [ ] Automatic data backup

---

⭐ If this project was useful to you, consider giving it a star on the repository!
