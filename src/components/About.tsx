import { Card } from "@/components/ui/card";
import signatureCamila from "@/assets/signature-camila.png";

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-light mb-4">
                Philosophy
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                Investing with
                <br />
                <span className="text-primary">Consciousness</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-lg font-light text-muted-foreground leading-relaxed">
              <p>
                At Solara Project, we believe that true prosperity emerges from the alignment 
                of financial intelligence with authentic purpose. Our approach transcends 
                traditional investment paradigms.
              </p>
              <p>
                Founded on principles of integrity, strategic vision, and sustainable growth, 
                we partner with clients who seek more than returns—they pursue meaningful impact 
                and lasting legacy.
              </p>
            </div>
            
            <div className="pt-4">
              <img 
                src={signatureCamila} 
                alt="Camila Montenegro signature" 
                className="h-12 w-auto opacity-80"
              />
              <p className="text-sm text-muted-foreground font-light mt-2">
                Camila Montenegro, Founder
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <div className="text-5xl font-light text-primary">12+</div>
                <p className="text-sm font-light text-muted-foreground">Years Experience</p>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-light text-primary">€50M+</div>
                <p className="text-sm font-light text-muted-foreground">Assets Under Advisory</p>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-light text-primary">98%</div>
                <p className="text-sm font-light text-muted-foreground">Client Satisfaction</p>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-light text-primary">250+</div>
                <p className="text-sm font-light text-muted-foreground">Successful Projects</p>
              </div>
            </div>
            
            <Card className="bg-neutral-50 border-0 p-8">
              <div className="space-y-4">
                <h3 className="text-xl font-light">Our Pillars</h3>
                <div className="space-y-3">
                  {['Strategic Vision', 'Financial Integrity', 'Sustainable Growth', 'Client Partnership'].map((pillar) => (
                    <div key={pillar} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="font-light text-muted-foreground">{pillar}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
