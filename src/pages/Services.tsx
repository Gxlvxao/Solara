import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, TrendingUp, Users, Briefcase, ChartLine, Shield } from "lucide-react";
import realEstateImg from "@/assets/service-real-estate.jpg";
import financialImg from "@/assets/service-financial.jpg";
import consultingImg from "@/assets/service-consulting.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-neutral-50 to-background">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-light mb-4">
            Consultoria e Investimento
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
            Consultoria e Investimento
            <br />
            <span className="text-primary">com Propósito</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Da estratégia ao resultado — soluções completas para quem investe com visão
          </p>
        </div>
      </section>

      {/* Investimentos Imobiliários */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={realEstateImg} 
                  alt="Real Estate Investment" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-light">
                Investimentos <span className="text-primary">Imobiliários</span>
              </h2>
              <p className="text-lg font-light text-muted-foreground leading-relaxed">
                Transformamos oportunidades imobiliárias em investimentos rentáveis e sustentáveis, 
                com análise estratégica e visão de longo prazo.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <Building2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-light text-lg mb-1">Consultoria e Oportunidades</h4>
                    <p className="text-sm text-muted-foreground font-light">
                      Identificação e análise de propriedades com potencial de valorização
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ChartLine className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-light text-lg mb-1">Estudos de Rentabilidade</h4>
                    <p className="text-sm text-muted-foreground font-light">
                      Análises completas de ROI, fluxo de caixa e projeções de mercado
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-light text-lg mb-1">Captação e Intermediação</h4>
                    <p className="text-sm text-muted-foreground font-light">
                      Conexão com investidores e gestão completa de projetos imobiliários
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Investimentos Financeiros */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-light">
                Investimentos <span className="text-primary">Financeiros</span>
              </h2>
              <p className="text-lg font-light text-muted-foreground leading-relaxed">
                Estratégias personalizadas de investimento que aliam segurança, rentabilidade 
                e diversificação inteligente de carteira.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-light text-lg mb-1">Planeamento e Gestão de Carteira</h4>
                    <p className="text-sm text-muted-foreground font-light">
                      Construção de portfólios diversificados alinhados aos seus objetivos
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Briefcase className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-light text-lg mb-1">Parcerias Estratégicas</h4>
                    <p className="text-sm text-muted-foreground font-light">
                      Colaboração com intermediários de crédito e instituições financeiras de confiança
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-light text-lg mb-1">Ferramentas e Simuladores</h4>
                    <p className="text-sm text-muted-foreground font-light">
                      Acesso a tecnologia avançada para análise e acompanhamento de investimentos
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={financialImg} 
                alt="Financial Investment" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Diferenciais <span className="text-primary">Solara</span>
            </h2>
            <p className="text-lg font-light text-muted-foreground max-w-2xl mx-auto">
              O que nos torna únicos no mercado de consultoria e investimento
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <ChartLine className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-light mb-4">Análise Estratégica</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Avaliação profunda de mercado com dados reais e projeções fundamentadas
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-light mb-4">Transparência Total</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Comunicação clara, processos transparentes e parceria de confiança
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-light mb-4">Rede Internacional</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Acesso a oportunidades globais e expertise em mercados internacionais
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="text-base">
                Solicite um Estudo Personalizado de Rentabilidade
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-b from-background to-neutral-50">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Pronto para <span className="text-primary">Investir com Consciência</span>?
          </h2>
          <p className="text-lg font-light text-muted-foreground mb-8 max-w-2xl mx-auto">
            Agende uma consultoria estratégica e descubra as melhores oportunidades para o seu perfil
          </p>
          <Link to="/contact">
            <Button size="lg" className="text-base">
              Agendar Consultoria
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton 
        phoneNumber="+351123456789" 
        message="Olá! Gostaria de saber mais sobre os serviços da Solara."
        brand="solara"
      />
      <BackToTop />
      <ExitIntentPopup brand="solara" />
    </div>
  );
};

export default Services;
