import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User, Loader2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";

// --- IMPORTAÇÃO DE ASSETS (Sem URLs chumbadas) ---
import logoVision from "@/assets/logo-vision.png";
import logoSolara from "@/assets/logo-solara-full.png"; 
import camilaImg from "@/assets/camila.png";
import signatureCamila from "@/assets/signature-camila.png"; 

interface Post {
  id: number;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  image: string;
  createdAt: string;
  author?: string;
}

// Configuração dinâmica da API baseada no ambiente
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";
const BASE_URL = API_URL.replace('/api', '');

const Vision = () => {
  const [recentPosts, setRecentPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // --- ESTADOS PARA O EFEITO HERO 3D (Replicado da Solara) ---
  const [mousePosition, setMousePosition] = useState({ 
    x: 0, 
    y: 0,
    pixelX: 0,
    pixelY: 0
  });
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      
      const x = (event.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (event.clientY - innerHeight / 2) / (innerHeight / 2);
      const pixelX = event.clientX;
      const pixelY = event.clientY;

      requestAnimationFrame(() => {
        setMousePosition({ x, y, pixelX, pixelY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Cálculos de física para os efeitos (Vinho e Verde)
  const moveX = mousePosition.x * 30; 
  const moveY = mousePosition.y * 30;
  const rotateDynamic = mousePosition.x * 5; 
  const skewDynamic = mousePosition.y * 2; 
  const logoTiltX = isHoveringLogo ? 0 : mousePosition.y * -25;
  const logoTiltY = isHoveringLogo ? 0 : mousePosition.x * 25;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${API_URL}/posts`);
        if (response.ok) {
          const data = await response.json();
          setRecentPosts(data.slice(0, 3));
        }
      } catch (error) {
        console.error(error);
        toast.error("Erro ao carregar destaques.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const getImageUrl = (imagePath: string) => {
    if (!imagePath) return logoVision; // Fallback seguro
    if (imagePath.startsWith('http')) return imagePath;
    return `${BASE_URL}${imagePath}`;
  };

  return (
    <div className="min-h-screen font-sans selection:bg-vision-light/30">
      <Header />
      
      {/* --- HERO SECTION COM EFEITOS 3D --- */}
      <section 
        ref={containerRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f8f8f8] perspective-1000 pt-20"
      >
        {/* CAMADA DE FUNDO INTERATIVA */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Noise */}
          <div className="absolute inset-0 opacity-[0.04] z-10 mix-blend-multiply" 
               style={{ 
                 backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
               }} 
          />

          {/* Spotlight */}
          <div 
            className="absolute inset-0 z-20 mix-blend-overlay transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.pixelX}px ${mousePosition.pixelY}px, rgba(255,255,255,0.8), transparent 40%)`
            }}
          />

          {/* Feixes de Luz (Prismas) */}
          {/* Feixe Verde (Identidade Vision) - Esquerda */}
          <div 
            className="absolute -top-[10%] -left-[10%] w-[70vw] h-[140vh] bg-gradient-to-br from-vision-green via-[#0a5c45] to-transparent opacity-20 blur-[50px]"
            style={{
              transform: `translate(${moveX * -1.5}px, ${moveY * -1.5}px) rotate(${-15 + rotateDynamic}deg) skewX(${skewDynamic}deg)`,
              transition: 'transform 0.1s ease-out'
            }}
          />

          {/* Feixe Vinho (Parceiro Solara) - Direita */}
          <div 
            className="absolute -bottom-[10%] -right-[10%] w-[60vw] h-[120vh] bg-gradient-to-tl from-solara-vinho via-[#701c35] to-transparent opacity-15 blur-[50px]"
            style={{
              transform: `translate(${moveX * 1.5}px, ${moveY * 1.5}px) rotate(${15 + rotateDynamic}deg) skewY(${skewDynamic * -1}deg)`,
              transition: 'transform 0.1s ease-out'
            }}
          />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-30 text-center pt-10">
          <div className="max-w-4xl mx-auto">
            
            {/* LOGO SOLARA HERO (Substituindo Vision) */}
            <div className="flex flex-col items-center gap-6 mb-12">
                <Link to="/" className="block perspective-container relative group">
                  <div 
                    className="flex items-center justify-center transition-all duration-300 ease-out will-change-transform relative"
                    onMouseEnter={() => setIsHoveringLogo(true)}
                    onMouseLeave={() => setIsHoveringLogo(false)}
                    style={{
                      transform: `perspective(1000px) rotateX(${logoTiltX}deg) rotateY(${logoTiltY}deg) scale3d(${isHoveringLogo ? 1.05 : 1}, ${isHoveringLogo ? 1.05 : 1}, 1)`,
                    }}
                  >
                    {/* Glow interativo da logo SOLARA (Cor Vinho) */}
                    <div 
                      className={`absolute inset-0 bg-solara-vinho rounded-full blur-[60px] transition-all duration-500 ${isHoveringLogo ? 'opacity-40 scale-125' : 'opacity-0 scale-90'}`}
                      style={{ zIndex: -1 }}
                    />

                    <img 
                      src={logoSolara} 
                      alt="Solara Project" 
                      className="h-40 md:h-52 w-auto object-contain transition-all duration-300 relative z-10 mix-blend-multiply" 
                      style={{
                        filter: isHoveringLogo 
                          ? `drop-shadow(0 15px 35px rgba(114, 47, 55, 0.3))` 
                          : `drop-shadow(${mousePosition.x * -10}px ${mousePosition.y * 10}px 15px rgba(0,0,0,0.1))`
                      }}
                    />
                  </div>
                </Link>
            </div>
            
            {/* Título Magnético */}
            <div style={{
               transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
               transition: 'transform 0.1s ease-out'
            }}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight text-foreground">
                Conteúdo é
                <br />
                <span className="text-vision-green font-normal relative inline-block">
                  Investimento
                </span>
              </h1>
            </div>

            <p className="text-lg md:text-xl font-light text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Análises, tendências e narrativas que ampliam a visão do mercado
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/vision/articles">
                <Button 
                  size="lg" 
                  className="text-base bg-vision-green hover:bg-vision-light hover:text-vision-green transition-all duration-300 border border-transparent hover:border-vision-green px-8 py-6 rounded-none uppercase tracking-widest text-xs font-bold shadow-xl"
                >
                  Ler Artigos
                </Button>
              </Link>
              <Link to="/">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-base border border-solara-vinho text-solara-vinho hover:bg-solara-vinho/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 px-8 py-6 rounded-none uppercase tracking-widest text-xs font-bold"
                >
                  Conheça a Solara
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- DESTAQUES RECENTES --- */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Destaques <span className="text-vision-green font-normal">Recentes</span>
            </h2>
            <p className="text-lg font-light text-muted-foreground max-w-2xl mx-auto">
              Insights e análises que transformam informação em visão estratégica
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="w-10 h-10 animate-spin text-vision-green" />
            </div>
          ) : recentPosts.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground font-light">
              Ainda não há artigos publicados.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((article) => (
                <Link to={`/vision/articles/${article.slug}`} key={article.id} className="block h-full">
                  <Card className="border-0 shadow-lg overflow-hidden group hover:shadow-xl hover:shadow-vision-green/10 transition-all duration-500 cursor-pointer h-full flex flex-col">
                    <div className="aspect-[3/2] overflow-hidden relative">
                      <div className="absolute inset-0 bg-vision-green/0 group-hover:bg-vision-green/10 transition-colors duration-500 z-10" />
                      <img 
                        src={getImageUrl(article.image)} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <div className="mb-4">
                        <Badge 
                          className="mb-4 font-normal bg-vision-green/10 text-vision-green hover:bg-vision-green hover:text-white transition-colors" 
                        >
                          {article.category}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-light mb-3 leading-tight group-hover:text-vision-green transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4 line-clamp-3 flex-grow">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-4 text-xs text-muted-foreground font-light border-t border-border pt-4 mt-auto">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3 text-vision-green" />
                          <span>Camila Montenegro</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-vision-green" />
                          <span>{new Date(article.createdAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link to="/vision/articles">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-vision-green text-vision-green hover:bg-vision-green hover:text-white transition-all duration-300 group"
              >
                Ver Todos os Artigos
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- SOBRE MIM (ATUALIZADO COM FOTO CAMILA) --- */}
      <section className="py-24 bg-neutral-50 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-2xl max-w-md mx-auto">
                <img 
                  src={camilaImg} 
                  alt="Camila Montenegro" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 border-[1px] border-white/20 m-4 pointer-events-none"></div>
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-vision-green/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-vision-light/20 rounded-full blur-3xl -z-10"></div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-vision-green font-medium mb-4">
                  Sobre Mim
                </p>
                <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground">
                  Camila <span className="font-serif italic text-vision-green">Montenegro</span>
                </h2>
              </div>

              <div className="prose prose-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  A Vision Press nasce da convicção de que a comunicação é a ponte mais forte entre o valor financeiro e o valor humano. Esta estampa, que carrega o nosso símbolo, representa o selo de autenticidade que aplicamos em cada narrativa.
                </p>
                <p>
                  Ela simboliza a transparência, o crescimento orgânico e a conexão profunda com o propósito. Não é apenas uma marca gráfica; é o compromisso de que cada palavra escrita e cada estratégia desenhada carrega a intenção de construir um futuro mais consciente.
                </p>
              </div>

              <div className="pt-8 flex flex-col sm:flex-row items-center sm:items-end gap-8 border-t border-vision-green/20 mt-8">
                <div className="flex-1">
                  <img 
                    src={signatureCamila} 
                    alt="Assinatura Camila Montenegro" 
                    className="h-20 w-auto object-contain opacity-90"
                  />
                  <p className="text-xs text-muted-foreground mt-2 tracking-widest uppercase">Founding Partner & Editor-in-Chief</p>
                </div>
                
                <div className="relative group cursor-help">
                  <div className="absolute inset-0 bg-vision-green/5 rounded-full blur-xl group-hover:bg-vision-green/10 transition-colors"></div>
                  <img 
                    src={logoVision} 
                    alt="Estampa Vision Press" 
                    className="relative h-24 w-24 object-contain opacity-40 mix-blend-multiply rotate-12 group-hover:rotate-0 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0"
                    title="Selo de Autenticidade Vision Press"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SEÇÃO PARCERIA (MANTIDA MAS COM CONTEXTO) --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="border-l-4 pl-8 border-vision-green">
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Em parceria com a <span className="text-solara-vinho font-normal">Solara</span>
              </h2>
              <p className="text-lg font-light text-muted-foreground leading-relaxed mb-6">
                A Vision Press trabalha em colaboração direta com a Solara Project, 
                explorando a interseção entre investimento, comunicação e consciência global.
              </p>
              <p className="text-lg font-light text-muted-foreground leading-relaxed">
                Cada artigo, análise e conteúdo é desenvolvido com o mesmo rigor e 
                transparência que orientam as estratégias de investimento da Solara.
              </p>
              <Link to="/">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="mt-8 border-2 border-vision-green text-vision-green hover:bg-vision-green hover:text-white transition-colors"
                >
                  Ver Projetos Conjuntos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEWSLETTER --- */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <Card className="border-0 shadow-2xl overflow-hidden ring-1 ring-vision-green/10">
            <CardContent className="p-12 md:p-16 text-center bg-gradient-to-br from-vision-green/5 to-background">
              <h2 className="text-3xl md:text-4xl font-light mb-4">
                Receba os principais <span className="text-vision-green font-normal">insights</span>
              </h2>
              <p className="text-lg font-light text-muted-foreground mb-8 max-w-2xl mx-auto">
                Subscreva a newsletter da Vision Press e receba análises exclusivas de mercado
              </p>
              
              <form className="max-w-md mx-auto flex gap-4">
                <Input 
                  type="email" 
                  placeholder="O seu e-mail" 
                  className="h-12 flex-1 border-vision-green/20 focus-visible:ring-vision-green"
                  required
                />
                <Button 
                  type="submit"
                  size="lg"
                  className="bg-vision-green hover:bg-vision-light hover:text-vision-green transition-all duration-300"
                >
                  Subscrever
                </Button>
              </form>
              
              <p className="text-xs text-muted-foreground font-light mt-4">
                Ao subscrever, concorda com a nossa Política de Privacidade
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <WhatsAppButton 
        phoneNumber="+351123456789" 
        message="Olá! Gostaria de saber mais sobre a Vision Press."
        brand="vision"
      />
      <BackToTop />
      <ExitIntentPopup brand="vision" />
    </div>
  );
};

export default Vision;