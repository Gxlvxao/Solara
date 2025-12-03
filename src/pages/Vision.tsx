import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import logoVision from "@/assets/logo-vision.png";
import visionImg from "@/assets/vision-editorial.jpg";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";

const Vision = () => {
  const articles = [
    {
      title: "O Futuro dos Investimentos Imobiliários Sustentáveis",
      category: "Imobiliário",
      author: "Camila Montenegro",
      date: "15 Jan 2025",
      excerpt: "Como a consciência ambiental está a transformar o mercado imobiliário e criar novas oportunidades de investimento de longo prazo.",
      image: visionImg
    },
    {
      title: "Comunicação Estratégica em Tempos de Transformação",
      category: "Negócios",
      author: "Camila Montenegro",
      date: "12 Jan 2025",
      excerpt: "A importância de uma narrativa autêntica na construção de marcas que resistem ao tempo e conquistam confiança.",
      image: visionImg
    },
    {
      title: "Tendências Financeiras para 2025: Análise e Perspetivas",
      category: "Finanças",
      author: "Camila Montenegro",
      date: "8 Jan 2025",
      excerpt: "Um olhar profundo sobre os movimentos de mercado, oportunidades emergentes e estratégias para investidores conscientes.",
      image: visionImg
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-neutral-50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <img 
              src={logoVision} 
              alt="Vision Press" 
              className="h-20 w-auto mx-auto mb-8 opacity-90"
            />
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-light mb-4">
              Creative Communication
            </p>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
              Conteúdo é
              <br />
              <span style={{ color: 'hsl(100, 22%, 13%)' }}>Investimento</span>
            </h1>
            <p className="text-lg md:text-xl font-light text-muted-foreground leading-relaxed mb-8">
              Análises, tendências e narrativas que ampliam a visão do mercado
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/vision/articles">
                <Button 
                  size="lg" 
                  className="text-base"
                  style={{ backgroundColor: 'hsl(100, 22%, 13%)' }}
                >
                  Ler Artigos
                </Button>
              </Link>
              <Link to="/">
                <Button size="lg" variant="outline" className="text-base border-2">
                  Conheça a Solara
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Destaques <span style={{ color: 'hsl(100, 22%, 13%)' }}>Recentes</span>
            </h2>
            <p className="text-lg font-light text-muted-foreground max-w-2xl mx-auto">
              Insights e análises que transformam informação em visão estratégica
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="aspect-[3/2] overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge 
                    className="mb-4 font-light" 
                    style={{ backgroundColor: 'hsl(100, 19%, 74%)', color: 'hsl(100, 22%, 13%)' }}
                  >
                    {article.category}
                  </Badge>
                  
                  <h3 className="text-xl font-light mb-3 leading-tight group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground font-light">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/vision/articles">
              <Button variant="outline" size="lg" className="border-2">
                Ver Todos os Artigos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Collaboration with Solara */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="border-l-4 pl-8" style={{ borderColor: 'hsl(100, 19%, 74%)' }}>
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Em parceria com a <span className="text-primary">Solara</span>
              </h2>
              <p className="text-lg font-light text-muted-foreground leading-relaxed mb-6">
                A Vision Press trabalha em colaboração direta com a Solara Project, 
                explorando a interseção entre investimento, comunicação e consciência global.
              </p>
              <p className="text-lg font-light text-muted-foreground leading-relaxed">
                Cada artigo, análise e conteúdo é desenvolvido com a mesma rigor e 
                transparência que orientam as estratégias de investimento da Solara.
              </p>
              <Link to="/">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="mt-8 border-2"
                >
                  Ver Projetos Conjuntos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <Card className="border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-12 md:p-16 text-center bg-gradient-to-br from-neutral-50 to-background">
              <h2 className="text-3xl md:text-4xl font-light mb-4">
                Receba os principais <span style={{ color: 'hsl(100, 22%, 13%)' }}>insights</span>
              </h2>
              <p className="text-lg font-light text-muted-foreground mb-8 max-w-2xl mx-auto">
                Subscreva a newsletter da Vision Press e receba análises exclusivas de mercado
              </p>
              
              <form className="max-w-md mx-auto flex gap-4">
                <Input 
                  type="email" 
                  placeholder="O seu e-mail" 
                  className="h-12 flex-1"
                  required
                />
                <Button 
                  type="submit"
                  size="lg"
                  style={{ backgroundColor: 'hsl(100, 22%, 13%)' }}
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
