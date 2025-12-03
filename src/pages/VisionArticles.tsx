import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calendar, User, Clock, Search } from "lucide-react";
import visionImg from "@/assets/vision-editorial.jpg";
import { useState } from "react";

const VisionArticles = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ["Todos", "Negócios", "Imobiliário", "Finanças", "Sociedade", "Tendências"];
  
  const articles = [
    {
      title: "O Futuro dos Investimentos Imobiliários Sustentáveis",
      category: "Imobiliário",
      author: "Camila Montenegro",
      date: "15 Jan 2025",
      readTime: "8 min",
      excerpt: "Como a consciência ambiental está a transformar o mercado imobiliário e criar novas oportunidades de investimento de longo prazo.",
      image: visionImg
    },
    {
      title: "Comunicação Estratégica em Tempos de Transformação",
      category: "Negócios",
      author: "Camila Montenegro",
      date: "12 Jan 2025",
      readTime: "6 min",
      excerpt: "A importância de uma narrativa autêntica na construção de marcas que resistem ao tempo e conquistam confiança.",
      image: visionImg
    },
    {
      title: "Tendências Financeiras para 2025: Análise e Perspetivas",
      category: "Finanças",
      author: "Camila Montenegro",
      date: "8 Jan 2025",
      readTime: "10 min",
      excerpt: "Um olhar profundo sobre os movimentos de mercado, oportunidades emergentes e estratégias para investidores conscientes.",
      image: visionImg
    },
    {
      title: "A Revolução Silenciosa da Consciência nos Negócios",
      category: "Sociedade",
      author: "Camila Montenegro",
      date: "5 Jan 2025",
      readTime: "7 min",
      excerpt: "Como empresas líderes estão a integrar propósito e lucro, criando um novo paradigma de sucesso sustentável.",
      image: visionImg
    },
    {
      title: "Tecnologia e Humanidade: O Equilíbrio Necessário",
      category: "Tendências",
      author: "Camila Montenegro",
      date: "2 Jan 2025",
      readTime: "9 min",
      excerpt: "Explorando como a inovação tecnológica pode servir valores humanos autênticos sem perder a essência.",
      image: visionImg
    },
    {
      title: "Investimento com Impacto: Além do Retorno Financeiro",
      category: "Finanças",
      author: "Camila Montenegro",
      date: "28 Dez 2024",
      readTime: "11 min",
      excerpt: "A ascensão dos investimentos de impacto e como alinhar rentabilidade com transformação social positiva.",
      image: visionImg
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || selectedCategory === "Todos" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-neutral-50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-light mb-4">
              Jornal Vision Press
            </p>
            <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
              Artigos e <span style={{ color: 'hsl(100, 22%, 13%)' }}>Análises</span>
            </h1>
            <p className="text-lg font-light text-muted-foreground leading-relaxed">
              Conteúdo editorial que transforma informação em visão estratégica
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                type="text"
                placeholder="Pesquisar artigos..."
                className="h-14 pl-12 text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category === "Todos" ? null : category)}
                className={`px-6 py-2 rounded-full font-light text-sm transition-all ${
                  (category === "Todos" && !selectedCategory) || selectedCategory === category
                    ? 'text-white'
                    : 'bg-neutral-100 hover:bg-neutral-200'
                }`}
                style={
                  (category === "Todos" && !selectedCategory) || selectedCategory === category
                    ? { backgroundColor: 'hsl(100, 22%, 13%)' }
                    : undefined
                }
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground font-light">
                Nenhum artigo encontrado. Tente outra pesquisa.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <Card key={index} className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer">
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
                    
                    <div className="flex items-center gap-4 text-xs text-muted-foreground font-light border-t border-border pt-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Pagination could go here */}
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

export default VisionArticles;
