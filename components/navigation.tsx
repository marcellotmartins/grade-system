"use client"

import { GraduationCap, Users, BookOpen, TrendingUp, BarChart3 } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Início", href: "/", icon: GraduationCap },
  { name: "Alunos", href: "/students", icon: Users },
  { name: "Notas", href: "/grades", icon: BookOpen },
  { name: "Resultados", href: "/results", icon: TrendingUp },
  { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-card border-b">
      <div className="container mx-auto px-4">
        <div className="flex space-x-8">
          {navigation.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 px-3 py-4 text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary border-b-2 border-primary" : "text-muted-foreground",
                )}
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
