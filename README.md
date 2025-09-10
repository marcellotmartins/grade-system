# 🎓 School Grades System Premium

<div align="center">

![System](https://img.shields.io/badge/System-School%20Grades-cyan?style=for-the-badge&logo=graduation-cap)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=for-the-badge&logo=tailwind-css)

**A modern and professional web system for complete school grade management**

[🚀 Demo](#) • [📖 Documentation](#how-to-use) • [🤝 Contribute](#contribution) • [📧 Support](#)

</div>

---

## ✨ Premium Features

### 🎯 **Core Features**
- 🏫 **Complete Student Management** – Register, edit, and organize by classes
- 📝 **Advanced Grade System** – Intuitive interface with real-time validation
- 🧮 **Smart Automatic Calculation** – Accurate subject and overall averages
- 📊 **Dashboard Analytics** – Advanced metrics and interactive visualizations
- 🎨 **Professional Design System** – Modern UI with smooth animations
- 📱 **Fully Responsive** – Perfect experience across devices

### 🔥 **Advanced Features**
- ⚡ **Optimized Performance** – Instant loading with Next.js 15
- 🎭 **Fluid Animations** – Smooth transitions and micro-interactions
- 🌈 **Professional Theme** – Cyan/pink palette with elegant gradients
- 📈 **Detailed Reports** – Complete performance analytics
- 🔍 **Smart Search** – Advanced filters and real-time search
- 💾 **Auto-save** – Automatic data saving

### 📊 **Supported Evaluation Types**
```
🧪 Exam          📚 Assignment      🎤 Seminar
📝 Activity      🚀 Project         📋 Others
```

## 🛠️ Tech Stack

<div align="center">

| Frontend | Styling | Backend | Database | Tools |
|----------|---------|---------|----------|-------|
| Next.js 15 | Tailwind CSS v4 | API Routes | PostgreSQL | TypeScript |
| React 18 | shadcn/ui | Server Actions | MySQL | ESLint |
| Framer Motion | CSS Modules | Middleware | SQLite | Prettier |

</div>

## 🚀 Quick Installation

### 📋 **Requirements**
```bash
Node.js >= 18.0.0
npm >= 9.0.0 or yarn >= 1.22.0
SQL Database (PostgreSQL recommended)
```

### ⚡ **Setup in 5 minutes**
```bash
# 1. Clone repository
git clone https://github.com/your-username/school-grades-premium.git
cd school-grades-premium

# 2. Install dependencies
npm install

# 3. Setup database
npm run db:setup

# 4. Configure environment variables
cp .env.example .env.local
# Edit .env.local with your settings

# 5. Run project
npm run dev
```

🎉 **Done!** Visit [http://localhost:3000](http://localhost:3000)

## 🎯 How to Use

### 👨‍🎓 **1. Student Management**
```
📍 Go to "Manage Students"
➕ Click "New Student"
📝 Fill: Name, ID, Class, Grade
✅ Save and organize by classes
```

### 📊 **2. Entering Grades**
```
🎯 Access "Enter Grade"
👤 Select student
📚 Choose subject
📝 Select evaluation type
🔢 Enter grade (0-10)
💬 Add notes (optional)
```

### 📈 **3. Dashboard Analytics**
```
📊 Real-time metrics
📈 Performance charts
🎯 Approval rate
📋 Detailed reports
```

## 🏗️ Project Architecture

```
school-grades-premium/
├── 🎨 app/                     # Next.js App Router
│   ├── 🔌 api/                # API Routes
│   │   ├── students/          # CRUD Students
│   │   ├── grades/            # CRUD Grades
│   │   └── analytics/         # Analytics
│   ├── 👨‍🎓 students/          # Student Management
│   ├── 📝 grades/             # Grade System
│   ├── 📊 dashboard/          # Analytics Dashboard
│   └── 🎨 globals.css         # Design System
├── 🧩 components/             # React Components
│   ├── ui/                    # shadcn/ui
│   ├── charts/                # Charts
│   └── forms/                 # Forms
├── 🔧 lib/                    # Utilities
│   ├── calculations.ts        # Grade Calculations
│   ├── validations.ts         # Validations
│   └── utils.ts               # Helpers
├── 🗄️ scripts/                 # SQL Scripts
└── 📚 docs/                    # Documentation
```

## 🎨 Premium Design System

### 🌈 **Color Palette**
```css
/* Primary Colors */
--primary-cyan: #06b6d4      /* Trust and Modernity */
--primary-pink: #ec4899      /* Energy and Creativity */

/* Gradients */
--gradient-primary: linear-gradient(135deg, #06b6d4, #ec4899)
--gradient-success: linear-gradient(135deg, #10b981, #059669)

/* Neutrals */
--slate-50: #f8fafc         /* Backgrounds */
--slate-900: #0f172a        /* Texts */
```

### 📝 **Typography**
```css
/* Headings */
font-family: 'Inter', sans-serif
font-weight: 600-800

/* Body */
font-family: 'Inter', sans-serif  
font-weight: 400-500
line-height: 1.6
```

### ✨ **Animations**
- **Hover Effects**: Smooth transformations with scale and shadow
- **Loading States**: Animated skeletons
- **Transitions**: 200ms ease-in-out
- **Micro-interactions**: Instant visual feedback

## 📊 Business Rules

### 🧮 **Calculation System**
```typescript
// Subject Average
subjectAverage = Σ(grades) / number_of_evaluations

// Overall Average
overallAverage = Σ(subjectAverages) / number_of_subjects

// Approval Status
if (average >= 7.0) → ✅ APPROVED
if (average < 7.0)  → ❌ FAILED
if (no_grades)      → ⏳ IN PROGRESS
```

### 🎯 **Quality Criteria**
- **Minimum Grade**: 0.0
- **Maximum Grade**: 10.0
- **Precision**: 2 decimal places
- **Passing Grade**: ≥ 7.0
- **Validation**: Real-time

## 📈 Performance & Optimization

### ⚡ **Performance Metrics**
- **First Contentful Paint**: < 1.2s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.0s

### 🔧 **Optimizations Implemented**
- ✅ Server-Side Rendering (SSR)
- ✅ Static Site Generation (SSG)
- ✅ Image Optimization
- ✅ Code Splitting
- ✅ Bundle Optimization
- ✅ Caching Strategies

## 🧪 Tests & Quality

```bash
# Run all tests
npm run test

# Unit tests
npm run test:unit

# Integration tests
npm run test:integration

# Coverage report
npm run test:coverage

# Linting
npm run lint

# Type checking
npm run type-check
```

## 🚀 Deployment & Production

### 🌐 **Vercel (Recommended)**
```bash
# Automatic deploy
git push origin main

# Manual deploy
vercel --prod
```

### 🐳 **Docker**
```bash
# Build image
docker build -t school-grades .

# Run container
docker run -p 3000:3000 school-grades
```

## 🤝 Contribution

<div align="center">

**Contributions are very welcome!** 🎉

</div>

### 📝 **How to Contribute**
1. 🍴 Fork the project
2. 🌿 Create your branch (`git checkout -b feature/NewFeature`)
3. 📝 Commit your changes (`git commit -m 'feat: add new feature'`)
4. 📤 Push to the branch (`git push origin feature/NewFeature`)
5. 🔄 Open a Pull Request

### 🎯 **Areas for Contribution**
- 🐛 **Bug Fixes** – Fixes and improvements
- ✨ **Features** – New features
- 📚 **Documentation** – Docs improvements
- 🎨 **Design** – Visual improvements
- ⚡ **Performance** – Optimizations

## 🗺️ Roadmap

### 🎯 **Next Versions**

#### v2.0 - Authentication & Security
- [ ] 🔐 Login/logout system
- [ ] 👥 User profiles (Teacher/Coordinator)
- [ ] 🛡️ Role-based access control
- [ ] 🔑 JWT Authentication

#### v2.1 - Advanced Reports
- [ ] 📄 Export PDF/Excel
- [ ] 📊 Advanced charts
- [ ] 📈 Predictive analysis
- [ ] 📧 Email reports

#### v2.2 - Integrations
- [ ] 🔗 Academic systems API
- [ ] 📱 Mobile app (React Native)
- [ ] 🔔 Push notifications
- [ ] ☁️ Automatic backup

#### v3.0 - AI & Machine Learning
- [ ] 🤖 Performance prediction
- [ ] 📊 Automatic insights
- [ ] 🎯 Personalized recommendations
- [ ] 📈 Trend analysis

## 📊 Project Stats

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/your-username/school-grades-premium?style=social)
![GitHub forks](https://img.shields.io/github/forks/your-username/school-grades-premium?style=social)
![GitHub issues](https://img.shields.io/github/issues/your-username/school-grades-premium)
![GitHub license](https://img.shields.io/github/license/your-username/school-grades-premium)

</div>

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

<div align="center">

**Built with 💙 to revolutionize educational management**

[💼 LinkedIn](https://www.linkedin.com/in/marcellotmartins/) • [🐙 GitHub](https://github.com/marcellotmartins)

</div>

---

<div align="center">

### 🌟 **If this project was useful, consider giving it a star!** ⭐

**Help spread the word about this amazing system!** 🚀

</div>
