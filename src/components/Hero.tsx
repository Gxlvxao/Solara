import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-consulting.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.85), rgba(255,255,255,0.92)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center pt-20">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Logos em destaque */}
          <div className="flex flex-col items-center gap-6 mb-8">
            <img 
              src="/src/assets/logo-solara-full.jpg" 
              alt="Solara Project" 
              className="h-20 md:h-24 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-border"></div>
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-light">em parceria com</span>
              <div className="h-px w-12 bg-border"></div>
            </div>
            <img 
              src="/src/assets/logo-vision.png" 
              alt="Vision Press" 
              className="h-16 md:h-20 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
          
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-light">
            ESTD 2025
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] text-foreground">
            Strategic Investment
            <br />
            <span className="text-primary">Conscious Growth</span>
          </h1>
          
          <p className="text-lg md:text-xl font-light text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Solara Project delivers tailored investment solutions and strategic consultancy, 
            combining financial expertise with authentic vision for sustainable prosperity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-base">
              Explore Services
            </Button>
            <Button size="lg" variant="outline" className="text-base border-2">
              Discover Vision Press
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
