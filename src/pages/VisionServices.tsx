import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Palette, TrendingUp, Users, FileText, Target, Share2, Shield, Megaphone } from "lucide-react";

const VisionServices = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-neutral-50 to-background">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-light mb-4">
            Vision Press Services
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
            Comunicação com propósito.
            <br />
            <span style={{ color: 'hsl(100, 22%, 13%)' }}>Marcas com visão.</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Branding, marketing e comunicação estratégica para empresas e investidores
          </p>
        </div>
      </section>

      {/* Branding Estratégico */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Branding <span style={{ color: 'hsl(100, 22%, 13%)' }}>Estratégico</span>
            </h2>
            <p className="text-lg font-light text-muted-foreground max-w-2xl mx-auto">
              Construímos identidades de marca autênticas que comunicam valor e geram conexão
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'hsl(100, 19%, 74%)' }}>
                  <Palette className="w-7 h-7" style={{ color: 'hsl(100, 22%, 13%)' }} />
                </div>
                <h3 className="text-xl font-light mb-4">Criação de Marca e Identidade</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Desenvolvimento completo de identidade visual, naming, manifesto de marca e guidelines estratégicos
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'hsl(100, 19%, 74%)' }}>
                  <Target className="w-7 h-7" style={{ color: 'hsl(100, 22%, 13%)' }} />
                </div>
                <h3 className="text-xl font-light mb-4">Posicionamento de Mercado</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Análise competitiva, definição de públicos e estratégia de diferenciação autêntica
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'hsl(100, 19%, 74%)' }}>
                  <FileText className="w-7 h-7" style={{ color: 'hsl(100, 22%, 13%)' }} />
                </div>
                <h3 className="text-xl font-light mb-4">Storytelling e Reputação</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Narrativas que conectam emocionalmente e constroem autoridade de marca duradoura
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Marketing e Performance */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Marketing e <span style={{ color: 'hsl(100, 22%, 13%)' }}>Performance</span>
            </h2>
            <p className="text-lg font-light text-muted-foreground max-w-2xl mx-auto">
              Estratégias digitais que geram resultados mensuráveis e crescimento sustentável
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <TrendingUp className="w-8 h-8 mx-auto mb-4" style={{ color: 'hsl(100, 22%, 13%)' }} />
                <h3 className="text-lg font-light mb-2">Planeamento de Campanhas</h3>
                <p className="text-sm text-muted-foreground font-light">
                  Estratégias integradas de comunicação e marketing
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <Target className="w-8 h-8 mx-auto mb-4" style={{ color: 'hsl(100, 22%, 13%)' }} />
                <h3 className="text-lg font-light mb-2">Tráfego Pago e SEO</h3>
                <p className="text-sm text-muted-foreground font-light">
                  Otimização de conversões e visibilidade orgânica
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <Share2 className="w-8 h-8 mx-auto mb-4" style={{ color: 'hsl(100, 22%, 13%)' }} />
                <h3 className="text-lg font-light mb-2">Social Media e Automação</h3>
                <p className="text-sm text-muted-foreground font-light">
                  Gestão estratégica de redes sociais e fluxos automatizados
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <Users className="w-8 h-8 mx-auto mb-4" style={{ color: 'hsl(100, 22%, 13%)' }} />
                <h3 className="text-lg font-light mb-2">Marketing de Influência</h3>
                <p className="text-sm text-muted-foreground font-light">
                  Parcerias autênticas com embaixadores de marca
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comunicação Corporativa */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Comunicação <span style={{ color: 'hsl(100, 22%, 13%)' }}>Corporativa</span>
            </h2>
            <p className="text-lg font-light text-muted-foreground max-w-2xl mx-auto">
              Gestão profissional da comunicação institucional e reputação empresarial
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4 items-start p-6 border-l-4 bg-neutral-50 rounded-r-2xl" style={{ borderColor: 'hsl(100, 19%, 74%)' }}>
              <Megaphone className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: 'hsl(100, 22%, 13%)' }} />
              <div>
                <h3 className="text-lg font-light mb-2">Relações Públicas e Imprensa</h3>
                <p className="text-sm text-muted-foreground font-light">
                  Gestão de relacionamento com media e stakeholders estratégicos
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 border-l-4 bg-neutral-50 rounded-r-2xl" style={{ borderColor: 'hsl(100, 19%, 74%)' }}>
              <Users className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: 'hsl(100, 22%, 13%)' }} />
              <div>
                <h3 className="text-lg font-light mb-2">Comunicação Interna</h3>
                <p className="text-sm text-muted-foreground font-light">
                  Alinhamento de cultura, valores e engagement de equipas
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 border-l-4 bg-neutral-50 rounded-r-2xl" style={{ borderColor: 'hsl(100, 19%, 74%)' }}>
              <Shield className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: 'hsl(100, 22%, 13%)' }} />
              <div>
                <h3 className="text-lg font-light mb-2">Gestão de Crises</h3>
                <p className="text-sm text-muted-foreground font-light">
                  Protocolos e resposta estratégica em situações críticas
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 border-l-4 bg-neutral-50 rounded-r-2xl" style={{ borderColor: 'hsl(100, 19%, 74%)' }}>
              <FileText className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: 'hsl(100, 22%, 13%)' }} />
              <div>
                <h3 className="text-lg font-light mb-2">Produção de Conteúdos Institucionais</h3>
                <p className="text-sm text-muted-foreground font-light">
                  Relatórios, apresentações e materiais corporativos de excelência
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-b from-neutral-50 to-background">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Quer transformar a sua marca em <span style={{ color: 'hsl(100, 22%, 13%)' }}>autoridade</span>?
          </h2>
          <p className="text-lg font-light text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contacto e descubra como a Vision Press pode elevar a sua comunicação
          </p>
          <Link to="/contact">
            <Button size="lg" className="text-base" style={{ backgroundColor: 'hsl(100, 22%, 13%)' }}>
              Fale com a Vision Press
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton 
        phoneNumber="+351123456789" 
        message="Olá! Gostaria de saber mais sobre os serviços da Vision Press."
        brand="vision"
      />
      <BackToTop />
      <ExitIntentPopup brand="vision" />
    </div>
  );
};

export default VisionServices;
