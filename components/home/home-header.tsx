import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function HomeHeader() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/10 pointer-events-none"></div>

      {/* Animated shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-pink-500/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              A Ferramenta de <span style={{ color: "#006FFF" }}>Espionagem</span> de Ofertas mais{" "}
              <span style={{ color: "#006FFF" }}>completa</span> do Brasil
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A única plataforma que combina espionagem de anúncios em tempo real e tecnologia exclusiva para
              transformar VSLs em Lives
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://liveturb.com/login">
                <Button className="rounded-full px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 w-full sm:w-auto">
                  Começar Gratuitamente
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="#vsl-live">
                <Button
                  variant="outline"
                  className="rounded-full px-6 py-2 border-primary text-primary hover:bg-primary/10 w-full sm:w-auto"
                >
                  Ver Demonstração
                </Button>
              </a>
            </div>
            <div className="mt-6 flex items-center gap-2">
              <div className="flex -space-x-2">
                <Image
                  src="/professional-portrait-1.png"
                  alt="Usuário"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full border-2 border-background"
                />
                <Image
                  src="/professional-portrait-2.png"
                  alt="Usuário"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full border-2 border-background"
                />
                <Image
                  src="/professional-portrait-3.png"
                  alt="Usuário"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full border-2 border-background"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">+2.500</span> afiliados já estão usando
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <div className="video-container relative aspect-video bg-black/5 rounded-lg shadow-2xl border border-enhanced/20 overflow-hidden p-1" style={{ boxShadow: '0 0 60px 15px hsla(214, 100%, 50%, 0.2), 0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}>
                <video
                  src="https://liveturb.com/AppLaravel/public/storage/landingpage/spy.webm"
                  className="w-full h-full object-contain bg-black rounded-md"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg animate-bounce z-50" style={{ zIndex: 50 }}>
              +127% ROI
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg animate-pulse z-50" style={{ zIndex: 50 }}>
              Live Agora
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
