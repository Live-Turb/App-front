"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "O que é a LiveTurb?",
    answer:
      "A LiveTurb é uma plataforma 2-em-1 que combina uma ferramenta avançada de espionagem de anúncios com uma tecnologia inovadora de transformação de VSLs em transmissões ao vivo. Nossa plataforma ajuda profissionais de marketing a descobrir anúncios de sucesso e aumentar suas taxas de conversão.",
  },
  {
    question: "Como funciona a espionagem de anúncios?",
    answer:
      "Nossa ferramenta de espionagem de anúncios coleta e analisa dados da biblioteca de anúncios do Facebook para mostrar os criativos e anúncios mais escalados. Você pode ver quais anúncios estão performando melhor, analisar as estratégias de copy e design, e identificar tendências emergentes no seu nicho.",
  },
  {
    question: "O que é a transformação de VSL em Live?",
    answer:
      "É uma tecnologia exclusiva que converte qualquer VSL (Video Sales Letter) tradicional em um formato que simula uma transmissão ao vivo, com comentários em tempo real. Isso cria uma sensação de urgência e interatividade que aumenta significativamente as taxas de conversão.",
  },
  {
    question: "Quais são os benefícios de transformar uma VSL em Live?",
    answer:
      "As VSLs em formato live têm taxa de visualização completa até 10x maior que VSLs tradicionais. Nossos usuários relatam um aumento médio de 300% nas taxas de conversão, 40% de redução na taxa de abandono do vídeo e 75% de aumento no tempo médio de visualização.",
  },
  {
    question: "Posso testar a plataforma antes de assinar?",
    answer:
      "Sim! Oferecemos um plano gratuito que permite testar as principais funcionalidades da plataforma. Você terá acesso a 5 análises de anúncios por dia, 5 downloads de VSL por semana e 3 transcrições de VSL por dia. Para acessar a transformação de VSL em Live, é necessário assinar um de nossos planos pagos.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Aceitamos cartões de crédito (Visa, Mastercard, American Express, Elo), cartões de débito, PIX, boleto bancário e PayPal para clientes internacionais. Todas as transações são processadas em ambiente seguro com criptografia SSL.",
  },
  {
    question: "Existe alguma garantia?",
    answer:
      "Sim, oferecemos garantia de satisfação de 7 dias. Se você não estiver satisfeito com a plataforma nos primeiros 7 dias após a assinatura, devolvemos seu dinheiro integralmente, sem perguntas.",
  },
  {
    question: "Como posso cancelar minha assinatura?",
    answer:
      "Você pode cancelar sua assinatura a qualquer momento através da sua área de membro. Basta acessar 'Minha Conta' > 'Meu Plano' > 'Gerenciar Assinatura' > 'Cancelar Assinatura'. O cancelamento será efetivado ao final do período já pago.",
  },
]

export function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const toggleItem = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null)
    } else {
      setExpandedIndex(index)
    }
  }

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <div
          key={index}
          className={`rounded-xl overflow-hidden border ${
            expandedIndex === index ? "border-primary/30" : "border-enhanced/20"
          } bg-background/50 backdrop-blur-sm`}
        >
          <button
            className="w-full p-6 flex justify-between items-center text-left focus:outline-none"
            onClick={() => toggleItem(index)}
          >
            <h3 className="text-lg font-semibold text-foreground">{item.question}</h3>
            {expandedIndex === index ? (
              <ChevronUp size={20} className="text-primary" />
            ) : (
              <ChevronDown size={20} className="text-primary" />
            )}
          </button>
          {expandedIndex === index && (
            <div className="px-6 pb-6">
              <div className="border-t border-enhanced/30 pt-4 mt-2">
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
