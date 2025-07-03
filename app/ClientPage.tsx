"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggleButtons } from "@/components/theme-toggle-buttons"
import { ChevronRight } from "lucide-react"
import { HomeHeader } from "@/components/home/home-header"
import { FeatureCard } from "@/components/home/feature-card"
import { PricingCard } from "@/components/home/pricing-card"
import { Testimonial } from "@/components/home/testimonial"
import { FAQ } from "@/components/home/faq"
import { ThemeLogo } from "@/components/theme-logo"

export function ClientPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full border-b border-enhanced/30 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <ThemeLogo width={75} height={30} className="h-auto" priority />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#recursos" className="text-sm text-foreground/80 hover:text-primary transition-colors">
              Recursos
            </Link>
            <Link href="#como-funciona" className="text-sm text-foreground/80 hover:text-primary transition-colors">
              Como Funciona
            </Link>
            <Link href="#planos" className="text-sm text-foreground/80 hover:text-primary transition-colors">
              Planos
            </Link>
            <Link href="#faq" className="text-sm text-foreground/80 hover:text-primary transition-colors">
              FAQ
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggleButtons />
            <div className="hidden sm:flex gap-3">
              <Link href="https://liveturb.com/login">
                <Button variant="outline" className="rounded-full px-4">
                  Entrar
                </Button>
              </Link>
              <Link href="https://liveturb.com/login" target="_self">
                <Button className="rounded-full px-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600">
                  Começar Grátis
                </Button>
              </Link>
            </div>
            <button className="md:hidden text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HomeHeader />

      {/* Problema/Solução */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nunca ganhou mais de <span style={{ color: "#006FFF" }}>50k Copiando</span> Uma Oferta ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Se a Resposta For NÃO entao é porque Voce Sempre utilizou a Plataforma{" "}
              <span style={{ color: "#EF4444", fontWeight: "bold" }}>Errada</span> !!
              <br />
              Veja o que A LiveTub Spy Vai Fazer por Voce.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background/50 border border-enhanced/20 rounded-xl p-6 shadow-sm backdrop-blur-sm">
                <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-red-500"
                  >
                    <path
                      d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center">O Problema</h3>
                <p className="text-muted-foreground text-center">
                  Anúncios que não convertem, orçamento desperdiçado e horas perdidas tentando descobrir o que funciona.
                </p>
              </div>
              <div className="bg-background/50 border border-enhanced/20 rounded-xl p-6 shadow-sm backdrop-blur-sm">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue-500"
                  >
                    <path
                      d="M9.66347 17H14.3364M11.9999 3V4M18.3639 5.63604L17.6568 6.34315M21 11.9999H20M4 11.9999H3M6.34309 6.34315L5.63599 5.63604M8.46441 15.5356C6.51179 13.5829 6.51179 10.4171 8.46441 8.46449C10.417 6.51187 13.5829 6.51187 15.5355 8.46449C17.4881 10.4171 17.4881 13.5829 15.5355 15.5356L14.9884 16.0827C14.3555 16.7155 13.9999 17.5739 13.9999 18.469V19C13.9999 20.1046 13.1045 21 11.9999 21C10.8954 21 9.99995 20.1046 9.99995 19V18.469C9.99995 17.5739 9.6444 16.7155 9.01151 16.0827L8.46441 15.5356Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center">A Solução</h3>
                <p className="text-muted-foreground text-center">
                  Acesso aos anúncios que já estão comprovadamente escalando e tecnologia exclusiva para maximizar suas
                  conversões.
                </p>
              </div>
              <div className="bg-background/50 border border-enhanced/20 rounded-xl p-6 shadow-sm backdrop-blur-sm">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-green-500"
                  >
                    <path
                      d="M16 18L18 20L22 16M12 15C8.68629 15 6 12.3137 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 9.38148 17.9605 9.75388 17.8844 10.1129C16.8868 10.0391 15.9589 10.2156 15.1342 10.5528C15.0447 10.0468 15 9.52891 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12C12.6532 12 13.2499 11.7800 13.7128 11.4104C13.3766 12.0475 13.1399 12.7551 13.0193 13.5M7 16.8V13.5C7 12.3954 7.89543 11.5 9 11.5H9.5M13 18.2V21L12 22L11 21V18.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center">O Resultado</h3>
                <p className="text-muted-foreground text-center">
                  Aumento de ROI, economia de tempo e recursos, e crescimento acelerado do seu negócio digital.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background/50 border border-enhanced/20 rounded-2xl p-8 shadow-md backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  VSLs em formato live têm taxa de visualização completa até{" "}
                  <span className="text-primary">10x maior</span>
                </h3>
                <p className="text-muted-foreground mb-6">
                  Nossos usuários relatam um aumento médio de 300% nas taxas de conversão ao utilizar nossa tecnologia
                  exclusiva de transformação de VSL em Live. A sensação de urgência e interatividade criada pelos
                  comentários em tempo real mantém os espectadores engajados do início ao fim.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-green-500/10 text-green-500 mt-0.5">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    </div>
                    <span className="text-foreground">
                      <strong>+300%</strong> de aumento médio nas taxas de conversão
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-green-500/10 text-green-500 mt-0.5">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    </div>
                    <span className="text-foreground">
                      <strong>-40%</strong> de redução na taxa de abandono do vídeo
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-green-500/10 text-green-500 mt-0.5">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    </div>
                    <span className="text-foreground">
                      <strong>+75%</strong> de aumento no tempo médio de visualização
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="video-container relative aspect-video bg-black rounded-lg shadow-2xl border border-enhanced/20 overflow-hidden" style={{ boxShadow: '0 0 60px 15px hsla(214, 100%, 50%, 0.3), 0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
                  <div className="relative w-full h-full">
                    {/* Fallback image in case video fails to load */}
                    <Image
                      src="/liveturb-conversoes.png"
                      alt="Estatísticas de conversão com LiveTurb"
                      width={1920}
                      height={1080}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 video-fallback"
                    />

                    {/* Video element - load only when visible */}
                    <video
                      data-src="https://liveturb.com/AppLaravel/public/storage/landingpage/16x9.webm"
                      className="w-full h-full object-cover lazy-video"
                      playsInline
                      muted
                      loop
                      preload="none"
                      aria-label="Vídeo sobre estatísticas de conversão com LiveTurb"
                    />

                    {/* Overlay with play button and sound indicator */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center video-overlay bg-black/30 opacity-100 transition-opacity duration-300">
                      {/* Pulsing sound indicator */}
                      <div className="sound-indicator mb-4 px-3 py-1 rounded-full bg-black/50 text-white text-sm animate-pulse">
                        Clique para ativar o Som
                      </div>

                      {/* Play button */}
                      <button
                        className="play-button w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center shadow-lg hover:scale-110 hover:brightness-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                        aria-label="Reproduzir vídeo com som"
                        tabIndex={0}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <polygon points="5 3 19 12 5 21 5 3" fill="white"></polygon>
                        </svg>
                      </button>
                    </div>

                    {/* Video controls that appear on hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 video-controls opacity-0 transition-opacity duration-300 bg-gradient-to-t from-black/70 to-transparent">
                      <div className="flex items-center justify-between">
                        <button
                          className="text-white hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full"
                          aria-label="Play/Pause"
                          tabIndex={0}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="6" y="4" width="4" height="16"></rect>
                            <rect x="14" y="4" width="4" height="16"></rect>
                          </svg>
                        </button>

                        <button
                          className="text-white hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full"
                          aria-label="Ativar/Desativar som"
                          tabIndex={0}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                            <line x1="23" y1="9" x2="17" y2="15"></line>
                            <line x1="17" y1="9" x2="23" y2="15"></line>
                          </svg>
                        </button>

                        <button
                          className="text-white hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full"
                          aria-label="Tela cheia"
                          tabIndex={0}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Add client-side script for video interaction */}
                <script
                  dangerouslySetInnerHTML={{
                    __html: `
document.addEventListener('DOMContentLoaded', function() {
  // Aguardar um momento para garantir que todos os elementos estejam carregados
  setTimeout(function() {
    // Selecionar todos os contêineres de vídeo para poder aplicar em mais de um vídeo na página
    const videoContainers = document.querySelectorAll('.video-container');
    
    videoContainers.forEach(videoContainer => {
      const video = videoContainer.querySelector('video');
      const overlay = videoContainer.querySelector('.video-overlay');
      const controls = videoContainer.querySelector('.video-controls');
      const fallbackImg = videoContainer.querySelector('.video-fallback');
      const playButton = videoContainer.querySelector('.play-button');
      
      if (!video) return;
      
      // Verificar se é um vídeo com lazy loading
      const isLazyVideo = video.classList.contains('lazy-video');
      const videoSrc = isLazyVideo ? video.getAttribute('data-src') : video.getAttribute('src');
      
      // Handle video loading error
      video.addEventListener('error', function() {
        if (fallbackImg) fallbackImg.classList.remove('opacity-0');
        if (overlay) overlay.classList.add('hidden');
        if (controls) controls.classList.add('hidden');
      });
      
      // Intersection Observer para carregar e reproduzir o vídeo quando visível
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Se for lazy video e ainda não tiver o src definido, carregar agora
              if (isLazyVideo && !video.src && videoSrc) {
                console.log('Lazy loading video:', videoSrc);
                video.src = videoSrc;
              }
              
              // Tentar reproduzir o vídeo
              if (video.paused) {
                video.play().catch(e => console.log('Autoplay prevented:', e));
              }
            } else {
              // Pausar quando não estiver visível para economizar recursos
              if (!video.paused) {
                video.pause();
              }
            }
          });
        },
        { threshold: 0.25, rootMargin: '50px' }
      );
      
      observer.observe(videoContainer);
    
      // Função específica para lidar com o clique no botão play
      function handlePlayButtonClick(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Reiniciar o vídeo
        video.currentTime = 0;
        
        // Ativar o som
        video.muted = false;
        
        // Esconder o overlay completamente
        if (overlay) overlay.style.display = 'none';
        
        // Garantir que o vídeo está reproduzindo
        video.play().catch(e => console.log('Play failed:', e));
      }
      
      // Adicionar o evento de clique diretamente ao botão
      if (playButton) {
        // Remover qualquer listener existente para evitar duplicação
        playButton.removeEventListener('click', handlePlayButtonClick);
        // Adicionar o novo listener
        playButton.addEventListener('click', handlePlayButtonClick);
      }
      
      // Show/hide controls on hover
      videoContainer.addEventListener('mouseenter', function() {
        if (controls) controls.classList.add('opacity-100');
      });
      
      videoContainer.addEventListener('mouseleave', function() {
        if (controls) controls.classList.remove('opacity-100');
      });
      
      // Handle control buttons dentro do escopo do forEach para cada vídeo
      const playPauseBtn = controls ? controls.querySelector('button[aria-label="Play/Pause"]') : null;
      const muteBtn = controls ? controls.querySelector('button[aria-label="Ativar/Desativar som"]') : null;
      const fullscreenBtn = controls ? controls.querySelector('button[aria-label="Tela cheia"]') : null;
      
      if (playPauseBtn) {
        playPauseBtn.addEventListener('click', function(e) {
          e.stopPropagation();
          e.preventDefault();
          
          if (video.paused) {
            video.play()
              .then(() => {
                console.log('Vídeo iniciado com sucesso');
                if (overlay) overlay.style.display = 'none';
              })
              .catch(err => console.log('Erro ao iniciar vídeo:', err));
          } else {
            video.pause();
            if (overlay) overlay.style.display = 'flex';
          }
        });
      }
      
      if (muteBtn) {
        muteBtn.addEventListener('click', function(e) {
          e.stopPropagation();
          e.preventDefault();
          video.muted = !video.muted;
          
          // Atualiza o ícone conforme o estado de mudo
          const mutedIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>';
          
          const unmutedIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>';
          
          muteBtn.innerHTML = video.muted ? mutedIcon : unmutedIcon;
        });
      }
      
      if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', function(e) {
          e.stopPropagation();
          e.preventDefault();
          
          if (videoContainer.requestFullscreen) {
            videoContainer.requestFullscreen();
          } else if (videoContainer.webkitRequestFullscreen) {
            videoContainer.webkitRequestFullscreen();
          } else if (videoContainer.mozRequestFullScreen) {
            videoContainer.mozRequestFullScreen();
          } else if (videoContainer.msRequestFullscreen) {
            videoContainer.msRequestFullscreen();
          }
        });
      }
    });
  }, 500); // Aguardar 500ms para garantir que tudo esteja carregado
});
`,
                  }}
                />

                {/* Add styles for video container */}
                <style>{`
                  .video-container:hover .video-controls {
                    opacity: 1;
                  }
                  
                  @keyframes pulse {
                    0% { opacity: 0.8; }
                    50% { opacity: 1; }
                    100% { opacity: 0.8; }
                  }
                  
                  .animate-pulse {
                    animation: pulse 2s infinite ease-in-out;
                  }

                  .video-overlay {
                    display: flex;
                  }
                  
                  @media (max-width: 640px) {
                    .video-overlay {
                      display: flex !important;
                    }
                  }
                `}</style>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos Principais */}
      <section id="recursos" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Duas ferramentas poderosas em <span className="text-primary">uma única plataforma</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A LiveTurb combina espionagem de anúncios avançada com tecnologia exclusiva de transformação de VSL em
              Live, oferecendo tudo que você precisa para dominar o marketing digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <FeatureCard
              title="Espionagem de Anúncios"
              description="Descubra os anúncios mais escalados e de melhor desempenho do mercado, atualizados diariamente."
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-blue-500"
                >
                  <path
                    d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm0 0v5.5M8 16h8M12 7V5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.45 15.48a10 10 0 1 0-10.9 0c.33.24.68.48 1.05.69L12 21l4.4-4.83c.37-.21.72-.45 1.05-.69z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              features={[
                "Dashboard visual moderno e intuitivo",
                "Biblioteca de anúncios atualizada diariamente",
                "Análise de criativos com IA em tempo real",
                "Download e transcrição de VSLs",
                "Visualização completa de funis de venda",
              ]}
              image="https://liveturb.com/AppLaravel/public/storage/landingpage/painel-espionagem.png"
              alt="Dashboard de Espionagem de Anúncios LiveTurb"
            />

            <FeatureCard
              title="VSL em Live"
              description="Transforme qualquer VSL em uma transmissão ao vivo com comentários em tempo real para aumentar suas conversões."
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-blue-500"
                >
                  <rect
                    x="2"
                    y="4"
                    width="20"
                    height="16"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 9l5 3-5 3V9z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="19" cy="6" r="2" fill="#FF3B30" />
                </svg>
              }
              features={[
                "Transformação automática de VSL em Live",
                "Comentários automáticos em tempo real",
                "Múltiplos templates (YouTube, Instagram, etc)",
                "Personalização visual completa",
                "Métricas de visualização e engajamento",
              ]}
              image="https://liveturb.com/AppLaravel/public/storage/landingpage/live.gif"
              alt="Transformação de VSL em Live LiveTurb"
              imagePosition="left"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background/50 border border-enhanced/20 rounded-xl p-6 shadow-sm backdrop-blur-sm">
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-blue-500"
                >
                  <path
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Transcrição de VSL</h3>
              <p className="text-muted-foreground">
                Acesse a transcrição completa de qualquer VSL para facilitar a análise e modelagem do conteúdo que está
                convertendo.
              </p>
            </div>

            <div className="bg-background/50 border border-enhanced/20 rounded-xl p-6 shadow-sm backdrop-blur-sm">
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-blue-500"
                >
                  <path
                    d="M16 8v8M12 11v5M8 14v2M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Análise com IA</h3>
              <p className="text-muted-foreground">
                Nossa inteligência artificial analisa os criativos e identifica padrões de sucesso para você aplicar em
                suas campanhas.
              </p>
            </div>

            <div className="bg-background/50 border border-enhanced/20 rounded-xl p-6 shadow-sm backdrop-blur-sm">
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-blue-500"
                >
                  <path
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586
                    a1
                    0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0
                    01-2 2z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13 2.5V6a2 2 0 002 2h3.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Links Diretos</h3>
              <p className="text-muted-foreground">
                Acesse diretamente a biblioteca de anúncios e as páginas de destino com o cloaker já quebrado para
                análise completa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Como a <span className="text-primary">LiveTurb</span> funciona
            </h2>
            <p className="text-lg text-muted-foreground">
              Um processo simples e eficiente para descobrir anúncios de sucesso e multiplicar suas conversões
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-background/50 border border-enhanced/20 rounded-xl p-8 shadow-md backdrop-blur-sm relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Descubra</h3>
              <p className="text-muted-foreground mb-6">
                Acesse nossa biblioteca de anúncios e encontre os criativos que estão escalando no seu nicho. Analise
                métricas, copys e elementos visuais que estão gerando resultados.
              </p>
              <Image
                src="https://liveturb.com/AppLaravel/public/storage/landingpage/passo1.png"
                alt="Descobrindo anúncios de sucesso"
                width={600}
                height={400}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>

            <div className="bg-background/50 border border-enhanced/20 rounded-xl p-8 shadow-md backdrop-blur-sm relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Transforme</h3>
              <p className="text-muted-foreground mb-6">
                Converta sua VSL em uma transmissão ao vivo com comentários em tempo real. Escolha o template que mais
                combina com seu público e personalize a experiência.
              </p>
              <Image
                src="https://liveturb.com/AppLaravel/public/storage/landingpage/passo2.png"
                alt="Transformando VSL em Live"
                width={600}
                height={400}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>

            <div className="bg-background/50 border border-enhanced/20 rounded-xl p-8 shadow-md backdrop-blur-sm relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Converta</h3>
              <p className="text-muted-foreground mb-6">
                Acompanhe o aumento nas suas taxas de conversão. A sensação de urgência e interatividade da live mantém
                os espectadores engajados do início ao fim.
              </p>
              <Image
                src="https://liveturb.com/AppLaravel/public/storage/landingpage/passo3.png"
                alt="Aumentando conversões"
                width={600}
                height={400}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="bg-background/50 border border-enhanced/20 rounded-2xl p-8 shadow-md backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">
                  Veja a <span className="text-primary">LiveTurb</span> em ação
                </h3>
                <p className="text-muted-foreground mb-6">
                  Assista a uma demonstração rápida de como nossa plataforma pode revolucionar suas estratégias de
                  marketing digital e aumentar suas conversões.
                </p>
                <Link href="#demo">
                  <Button className="rounded-full px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600">
                    Ver Demonstração Completa
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="third-video-container relative aspect-video bg-black rounded-lg shadow-2xl border border-enhanced/20 overflow-hidden" style={{ boxShadow: '0 0 60px 15px hsla(214, 100%, 50%, 0.3), 0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
                  {/* Capa do vídeo */}
                  <div className="video-cover absolute inset-0 cursor-pointer z-10">
                    <Image
                      src="https://liveturb.com/AppLaravel/public/storage/landingpage/capa1.webp"
                      alt="Capa do vídeo demonstrativo"
                      width={1920}
                      height={1080}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    {/* Botão de play sobre a capa */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <button className="play-cover-button w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center shadow-lg hover:scale-110 hover:brightness-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white ml-1"
                        >
                          <polygon points="5 3 19 12 5 21 5 3" fill="white"></polygon>
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Elemento de vídeo (inicialmente oculto) */}
                  <video
                    className="w-full h-full object-cover video-element"
                    preload="none"
                    playsInline
                    style={{ display: 'none' }}
                  />

                  {/* Controles do vídeo */}
                  <div className="video-controls absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300" style={{ display: 'none' }}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button className="control-btn play-pause-btn text-white hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full p-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="play-icon"
                          >
                            <polygon points="5 3 19 12 5 21 5 3" fill="white"></polygon>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="pause-icon" 
                            style={{ display: 'none' }}
                          >
                            <rect x="6" y="4" width="4" height="16" fill="white"></rect>
                            <rect x="14" y="4" width="4" height="16" fill="white"></rect>
                          </svg>
                        </button>
                        
                        <div className="flex items-center gap-2">
                          <button className="control-btn mute-btn text-white hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full p-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="volume-icon"
                            >
                              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="mute-icon"
                              style={{ display: 'none' }}
                            >
                              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                              <line x1="23" y1="9" x2="17" y2="15"></line>
                              <line x1="17" y1="9" x2="23" y2="15"></line>
                            </svg>
                          </button>
                          
                          <input
                            type="range"
                            min="0"
                            max="100"
                            defaultValue="50"
                            className="volume-slider w-16 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer"
                          />
                        </div>
                      </div>
                      
                      <button className="control-btn fullscreen-btn text-white hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Script para controle do terceiro vídeo */}
                <script
                  dangerouslySetInnerHTML={{
                    __html: `
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    const thirdVideoContainer = document.querySelector('.third-video-container');
    if (!thirdVideoContainer) return;
    
    const videoCover = thirdVideoContainer.querySelector('.video-cover');
    const videoElement = thirdVideoContainer.querySelector('.video-element');
    const videoControls = thirdVideoContainer.querySelector('.video-controls');
    const playCoverButton = thirdVideoContainer.querySelector('.play-cover-button');
    const playPauseBtn = thirdVideoContainer.querySelector('.play-pause-btn');
    const muteBtn = thirdVideoContainer.querySelector('.mute-btn');
    const fullscreenBtn = thirdVideoContainer.querySelector('.fullscreen-btn');
    const volumeSlider = thirdVideoContainer.querySelector('.volume-slider');
    
    let videoLoaded = false;
    
    // Função para carregar o vídeo
    function loadVideo() {
      if (!videoLoaded && videoElement) {
        videoElement.src = 'https://liveturb.com/AppLaravel/public/storage/landingpage/video2.webm';
        videoLoaded = true;
        
        videoElement.addEventListener('loadeddata', function() {
          console.log('Vídeo carregado com sucesso');
        });
        
        videoElement.addEventListener('error', function(e) {
          console.error('Erro ao carregar vídeo:', e);
        });
      }
    }
    
    // Função para mostrar vídeo e esconder capa
    function showVideo() {
      if (videoCover) {
        videoCover.style.display = 'none';
      }
      if (videoElement) {
        videoElement.style.display = 'block';
      }
      if (videoControls) {
        videoControls.style.display = 'block';
      }
    }
    
    // Função para play/pause
    function togglePlayPause() {
      if (!videoElement) return;
      
      if (videoElement.paused) {
        videoElement.play().then(() => {
          updatePlayPauseIcon(false);
        }).catch(e => console.error('Erro ao reproduzir:', e));
      } else {
        videoElement.pause();
        updatePlayPauseIcon(true);
      }
    }
    
    // Função para atualizar ícone play/pause
    function updatePlayPauseIcon(isPaused) {
      const playIcon = playPauseBtn?.querySelector('.play-icon');
      const pauseIcon = playPauseBtn?.querySelector('.pause-icon');
      
      if (playIcon && pauseIcon) {
        if (isPaused) {
          playIcon.style.display = 'block';
          pauseIcon.style.display = 'none';
        } else {
          playIcon.style.display = 'none';
          pauseIcon.style.display = 'block';
        }
      }
    }
    
    // Função para mute/unmute
    function toggleMute() {
      if (!videoElement) return;
      
      videoElement.muted = !videoElement.muted;
      updateMuteIcon(videoElement.muted);
      
      if (volumeSlider) {
        volumeSlider.value = videoElement.muted ? 0 : videoElement.volume * 100;
      }
    }
    
    // Função para atualizar ícone mute
    function updateMuteIcon(isMuted) {
      const volumeIcon = muteBtn?.querySelector('.volume-icon');
      const muteIcon = muteBtn?.querySelector('.mute-icon');
      
      if (volumeIcon && muteIcon) {
        if (isMuted) {
          volumeIcon.style.display = 'none';
          muteIcon.style.display = 'block';
        } else {
          volumeIcon.style.display = 'block';
          muteIcon.style.display = 'none';
        }
      }
    }
    
    // Função para controle de volume
    function setVolume(value) {
      if (!videoElement) return;
      
      const volume = value / 100;
      videoElement.volume = volume;
      videoElement.muted = volume === 0;
      updateMuteIcon(videoElement.muted);
    }
    
    // Função para tela cheia
    function toggleFullscreen() {
      if (!thirdVideoContainer) return;
      
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        thirdVideoContainer.requestFullscreen().catch(err => {
          console.error('Erro ao entrar em tela cheia:', err);
        });
      }
    }
    
    // Event listeners
    if (playCoverButton) {
      playCoverButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        loadVideo();
        showVideo();
        
        // Aguardar um pouco para o vídeo carregar antes de reproduzir
        setTimeout(() => {
          if (videoElement) {
            videoElement.play().then(() => {
              updatePlayPauseIcon(false);
            }).catch(e => console.error('Erro ao reproduzir:', e));
          }
        }, 100);
      });
    }
    
    if (playPauseBtn) {
      playPauseBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        togglePlayPause();
      });
    }
    
    if (muteBtn) {
      muteBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMute();
      });
    }
    
    if (volumeSlider) {
      volumeSlider.addEventListener('input', function(e) {
        setVolume(e.target.value);
      });
    }
    
    if (fullscreenBtn) {
      fullscreenBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleFullscreen();
      });
    }
    
    // Mostrar controles ao passar o mouse
    if (thirdVideoContainer) {
      thirdVideoContainer.addEventListener('mouseenter', function() {
        if (videoControls && videoControls.style.display === 'block') {
          videoControls.style.opacity = '1';
        }
      });
      
      thirdVideoContainer.addEventListener('mouseleave', function() {
        if (videoControls && videoControls.style.display === 'block') {
          videoControls.style.opacity = '0';
        }
      });
    }
    
    // Eventos do vídeo
    if (videoElement) {
      videoElement.addEventListener('play', function() {
        updatePlayPauseIcon(false);
      });
      
      videoElement.addEventListener('pause', function() {
        updatePlayPauseIcon(true);
      });
      
      videoElement.addEventListener('volumechange', function() {
        updateMuteIcon(videoElement.muted);
        if (volumeSlider) {
          volumeSlider.value = videoElement.muted ? 0 : videoElement.volume * 100;
        }
      });
    }
    
  }, 500);
});
`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O que nossos <span className="text-primary">usuários</span> dizem
            </h2>
            <p className="text-lg text-muted-foreground">
              Centenas de profissionais de marketing já transformaram seus resultados com a LiveTurb
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Testimonial
              quote="A LiveTurb revolucionou meu negócio! Em apenas 2 semanas já tive um aumento de 300% nas conversões. A ferramenta de espionagem é incrível e me ajuda a ficar sempre um passo à frente da concorrência."
              author="Carlos Silva"
              role="Empreendedor Digital"
              avatar="https://liveturb.com/AppLaravel/public/storage/landingpage/depo4.png"
              stars={5}
            />

            <Testimonial
              quote="A função de transcrição de VSL economiza horas do meu tempo. Agora consigo modelar as melhores ofertas do mercado em uma fração do tempo que levava antes. Simplesmente indispensável!"
              author="Mariana Costa"
              role="Copywriter"
              avatar="https://liveturb.com/AppLaravel/public/storage/landingpage/depo3.png"
              stars={5}
            />

            <Testimonial
              quote="Já testei várias ferramentas de espionagem, mas a LiveTurb está em outro nível. A análise de criativos com IA me dá insights que nunca teria descoberto sozinho. Recomendo fortemente."
              author="Rafael Mendes"
              role="Gestor de Tráfego"
              avatar="https://liveturb.com/AppLaravel/public/storage/landingpage/depo2.png"
              stars={4}
            />
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 bg-background/50 border border-enhanced/20 rounded-full px-6 py-3 shadow-sm backdrop-blur-sm">
              <div className="flex -space-x-2">
                <Image
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=user1"
                  alt="Usuário 1"
                  width={100}
                  height={100}
                  className="w-8 h-8 rounded-full border-2 border-background"
                  loading="lazy"
                  decoding="async"
                />
                <Image
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=user2"
                  alt="Usuário 2"
                  width={100}
                  height={100}
                  className="w-8 h-8 rounded-full border-2 border-background"
                  loading="lazy"
                  decoding="async"
                />
                <Image
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=user3"
                  alt="Usuário 3"
                  width={100}
                  height={100}
                  className="w-8 h-8 rounded-full border-2 border-background"
                  loading="lazy"
                  decoding="async"
                />
                <Image
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=user4"
                  alt="Usuário 4"
                  width={100}
                  height={100}
                  className="w-8 h-8 rounded-full border-2 border-background"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className="text-sm text-muted-foreground">
                Junte-se a <span className="font-bold text-foreground">2.500+</span> profissionais de marketing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Planos e Preços */}
      <section id="planos" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Planos para todos os <span className="text-primary">perfis</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Escolha o plano ideal para o seu negócio e comece a transformar seus resultados hoje mesmo
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full sm:max-w-md md:max-w-sm lg:max-w-xs">
              <PricingCard
                title="Free"
                price="R$ 0"
                period="para sempre"
                description="Ideal para conhecer a plataforma"
                features={[
                  "5 análises de anúncios por dia",
                  "Acesso básico ao dashboard",
                  "5 downloads de VSL por semana",
                  "3 transcrições de VSL por dia",
                  "Sem acesso à transformação de VSL em Lives",
                ]}
                buttonText="Começar Grátis"
                buttonVariant="outline"
              />
            </div>

            <div className="w-full sm:max-w-md md:max-w-sm lg:max-w-xs">
              <PricingCard
                title="Básico"
                price={
                  <>
                    <span className="text-3xl">R$ 47</span>
                    <span className="text-xl">,90</span>
                  </>
                }
                period="por mês"
                description="Ideal para quem está começando"
                features={[
                  "Análises de anúncios ilimitadas",
                  "Downloads de VSL ilimitados",
                  "Transcrição de VSL ilimitada",
                  "Acesso com cloaker quebrado",
                  "Transformar VSL em Lives (6.000 plays/mês)",
                  "180 comentários por vídeo",
                  "1 template simultâneo",
                  "Custo por play extra: R$0,02",
                ]}
                buttonText="Assinar Agora"
                buttonVariant="default"
                highlighted={true}
                badge="MAIS POPULAR"
              />
            </div>

            <div className="w-full sm:max-w-md md:max-w-sm lg:max-w-xs">
              <PricingCard
                title="Pro"
                price={
                  <>
                    <span className="text-3xl">R$ 97</span>
                    <span className="text-xl">,90</span>
                  </>
                }
                period="por mês"
                description="Solução completa para profissionais"
                features={[
                  "Dashboard premium com alertas",
                  "Análise avançada de criativos com IA",
                  "Transformar VSL em Lives (25.000 plays/mês)",
                  "240 comentários por vídeo",
                  "2 templates simultâneos",
                  "Integração avançada com IA",
                  "Suporte prioritário",
                  "Custo por play extra: R$0,02",
                ]}
                buttonText="Assinar Agora"
                buttonVariant="default"
              />
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="bg-background/50 border border-enhanced/20 rounded-xl p-6 shadow-sm backdrop-blur-sm flex items-center gap-4 max-w-2xl">
              <div className="flex-shrink-0">
                <svg className="h-10 w-10 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Garantia de 7 dias</h3>
                <p className="text-muted-foreground text-sm">
                  Experimente a LiveTurb sem riscos. Se não estiver satisfeito nos primeiros 7 dias, devolvemos seu
                  dinheiro integralmente, sem perguntas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perguntas <span className="text-primary">Frequentes</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Tire suas dúvidas sobre a LiveTurb e descubra como podemos ajudar seu negócio
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQ />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Comece a descobrir os anúncios de sucesso e multiplique suas conversões hoje
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Junte-se a mais de 2.500 profissionais de marketing que já transformaram seus resultados com a LiveTurb
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="https://liveturb.com/login">
                  <Button className="rounded-full px-8 py-6 text-lg bg-white text-blue-600 hover:bg-white/90 w-full sm:w-auto">
                    Começar Gratuitamente
                  </Button>
                </Link>
                <a href="#vsl-live">
                  <Button
                    variant="outline"
                    className="rounded-full px-8 py-6 text-lg border-white text-white hover:bg-white/10 w-full sm:w-auto"
                  >
                    Ver Demonstração
                  </Button>
                </a>
              </div>
              <p className="text-white/80 mt-6 text-sm">
                Experimente sem compromisso. Garantia de 7 dias ou seu dinheiro de volta.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
