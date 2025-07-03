"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeLogo } from "@/components/theme-logo"
import { ThemeToggleButtons } from "@/components/theme-toggle-buttons"
import { useRouter } from "next/navigation"
import { useState } from "react"
import axios from "@/lib/axios"

export default function SignupPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [termsAccepted, setTermsAccepted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")

    if (!termsAccepted) {
      setError("Você deve aceitar os termos de uso e política de privacidade.")
      return
    }

    if (formData.password !== formData.password_confirmation) {
      setError("As senhas não coincidem.")
      return
    }

    if (formData.password.length < 8) {
      setError("A senha deve ter pelo menos 8 caracteres.")
      return
    }

    setLoading(true)

    try {
      // Primeiro, obter o cookie CSRF
      await axios.get('/sanctum/csrf-cookie')
      
      // Fazer registro
      const response = await axios.post('/register', formData)

      if (response.status === 201 || response.status === 200) {
        // Registro bem-sucedido, redirecionar para o dashboard
        router.push("/")
      }
    } catch (error: any) {
      console.error('Erro no registro:', error)
      if (error.response?.status === 422) {
        const errors = error.response.data.errors
        if (errors.email) {
          setError("Este email já está em uso.")
        } else if (errors.password) {
          setError("A senha deve ter pelo menos 8 caracteres.")
        } else {
          setError("Dados inválidos. Verifique os campos e tente novamente.")
        }
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
            <h1 className="text-3xl font-bold mb-2">Crie sua conta</h1>
            <p className="text-muted-foreground">Comece a usar a LiveTurb gratuitamente</p>
          </div>
          <div className="bg-background/50 border border-enhanced/20 rounded-xl p-6 shadow-md backdrop-blur-sm">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Nome Completo
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full px-3 py-2 bg-background border border-enhanced/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full px-3 py-2 bg-background border border-enhanced/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1">
                  Senha
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="w-full px-3 py-2 bg-background border border-enhanced/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  disabled={loading}
                  minLength={8}
                />
                <p className="text-xs text-muted-foreground mt-1">Mínimo de 8 caracteres</p>
              </div>
              <div>
                <label htmlFor="password_confirmation" className="block text-sm font-medium mb-1">
                  Confirmar Senha
                </label>
                <input
                  id="password_confirmation"
                  name="password_confirmation"
                  type="password"
                  className="w-full px-3 py-2 bg-background border border-enhanced/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="••••••••"
                  value={formData.password_confirmation}
                  onChange={handleInputChange}
                  required
                  disabled={loading}
                />
              </div>
              <div className="flex items-center">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 text-primary border-enhanced/30 rounded focus:ring-primary/50"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  disabled={loading}
                />
                <label htmlFor="terms" className="ml-2 block text-sm">
                  Eu concordo com os{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    Termos de Uso
                  </Link>{" "}
                  e{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Política de Privacidade
                  </Link>
                </label>
              </div>
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
                disabled={loading}
              >
                {loading ? "Criando conta..." : "Criar Conta"}
              </Button>
            </form>
            {error && <p className="mt-4 text-sm text-red-500 text-center">{error}</p>}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Já tem uma conta?{" "}
                <Link href="/login" className="text-primary hover:underline">
                  Faça login
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
