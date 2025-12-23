import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom"; 
import realEstateImg from "@/assets/service-real-estate.jpg";
import financialImg from "@/assets/service-financial.jpg";
import consultingImg from "@/assets/service-consulting-premium.jpg"; // Garante que a imagem existe

const services = [
  {
    title: "Real Estate Investments",
    description: "Strategic property portfolio development with focus on sustainable value creation and long-term capital appreciation.",
    image: realEstateImg,
    link: "/services/real-estate" // Rota correta
  },
  {
    title: "Financial Investments",
    description: "Diversified investment strategies tailored to individual goals, combining market expertise with conscious allocation.",
    image: financialImg,
    link: "/services/financial" // <--- ATUALIZADO: Aponta para a nova página
  },
  {
    title: "Strategic Consultancy",
    description: "Comprehensive business guidance integrating investment vision, growth strategy, and operational excellence.",
    image: consultingImg,
    link: "/services/consultancy" // <--- ATUALIZADO: Aponta para a nova página
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-neutral-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-solara-vinho font-semibold mb-4">
            Our Expertise
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-neutral-900">
            Investment Solutions
          </h2>
          <p className="text-lg font-light text-neutral-600 leading-relaxed">
            Delivering excellence through specialized services designed to elevate your financial future.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link to={service.link} key={index} className="block h-full transform hover:-translate-y-2 transition-transform duration-500">
              <Card 
                className="border-0 shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:bg-solara-vinho h-full flex flex-col"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-light mb-4 text-neutral-900 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-neutral-500 font-light leading-relaxed group-hover:text-white/90 transition-colors duration-300 flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Indicador visual de clique (Traduzido) */}
                  <span className="text-sm uppercase tracking-widest mt-6 text-solara-vinho font-medium group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex items-center gap-2">
                    Discover More →
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;