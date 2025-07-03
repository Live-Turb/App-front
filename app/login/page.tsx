"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeLogo } from "@/components/theme-logo"
import { ThemeToggleButtons } from "@/components/theme-toggle-buttons"
import { useRouter } from "next/navigation"
import { useState } from "react"
import axios from "@/lib/axios"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      // Primeiro, obter o cookie CSRF
      await axios.get('/sanctum/csrf-cookie')
      
      // Fazer login
      const response = await axios.post('/login', {
        email,
        password,
      })

      if (response.status === 200) {
        // Login bem-sucedido, redirecionar para o dashboard
        router.push("/")
      }
    } catch (error: any) {
      console.error('Erro no login:', error)
      if (error.response?.status === 422) {
        setError("Email ou senha inválidos.")
      } else if (error.response?.status === 401) {
        setError("Credenciais inválidas.")
      } else {
        setError("Erro interno do servidor. Tente novamente.")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="border-b border-enhanced/30 p-4 flex justify-between items-center">
        <Link href="/">
          <ThemeLogo width={120} height={48} />
        </Link>
        <ThemeToggleButtons />
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Bem-vindo de volta</h1>
            <p className="text-muted-foreground">Entre na sua conta para continuar</p>
          </div>
          <div className="bg-background/50 border border-enhanced/20 rounded-xl p-6 shadow-md backdrop-blur-sm">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-3 py-2 bg-background border border-enhanced/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor="password" className="block text-sm font-medium">
                    Senha
                  </label>
                  <Link href="/forgot-password" className="text-xs text-primary hover:underline">
                    Esqueceu a senha?
                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  className="w-full px-3 py-2 bg-background border border-enhanced/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 text-primary border-enhanced/30 rounded focus:ring-primary/50"
                  disabled={loading}
                />
                <label htmlFor="remember" className="ml-2 block text-sm">
                  Lembrar de mim
                </label>
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
                disabled={loading}
              >
                {loading ? "Entrando..." : "Entrar"}
              </Button>
            </form>
            {error && <p className="mt-4 text-sm text-red-500 text-center">{error}</p>}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Não tem uma conta?{" "}
                <Link href="/signup" className="text-primary hover:underline">
                  Cadastre-se
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t border-enhanced/30 p-4 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} LiveTurb. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}
