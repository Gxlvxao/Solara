import { Button } from "@/components/ui/button";
import logoVision from "@/assets/logo-vision.png";
import visionImg from "@/assets/vision-editorial.jpg";

const VisionConnection = () => {
  return (
    <section id="vision" className="py-24 lg:py-32 bg-gradient-to-b from-neutral-50 to-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={visionImg} 
                alt="Vision Press workspace" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-8 order-1 lg:order-2">
            <div className="mb-8">
              <img 
                src={logoVision} 
                alt="Vision Press" 
                className="h-16 w-auto mb-6 opacity-90"
              />
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-light">
                Creative Communication
              </p>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light leading-tight">
              Amplifying Impact
              <br />
              Through <span className="italic" style={{ color: 'hsl(100, 19%, 64%)' }}>Vision Press</span>
            </h2>
            
            <p className="text-lg font-light text-muted-foreground leading-relaxed">
              Vision Press, our editorial and creative communication arm, transforms strategic 
              insights into compelling narratives. Through thoughtful journalism, brand storytelling, 
              and content excellence, we bridge investment vision with authentic communication.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4 border-l-4 pl-6" style={{ borderColor: 'hsl(100, 19%, 74%)' }}>
                <div className="flex-1">
                  <h4 className="font-light text-lg mb-2">Editorial Excellence</h4>
                  <p className="text-sm font-light text-muted-foreground">
                    In-depth articles on markets, society, and conscious business
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 border-l-4 pl-6" style={{ borderColor: 'hsl(100, 19%, 74%)' }}>
                <div className="flex-1">
                  <h4 className="font-light text-lg mb-2">Strategic Communication</h4>
                  <p className="text-sm font-light text-muted-foreground">
                    Brand development and corporate storytelling that resonates
                  </p>
                </div>
              </div>
            </div>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2"
              style={{ borderColor: 'hsl(100, 19%, 74%)', color: 'hsl(100, 22%, 13%)' }}
            >
              Explore Vision Press
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionConnection;
