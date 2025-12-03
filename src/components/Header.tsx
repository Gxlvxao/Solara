import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logoSolara from "@/assets/logo-solara-full.jpg";
import HamburgerMenu from "@/components/HamburgerMenu";

const Header = () => {
  const location = useLocation();
  const isVisionSection = location.pathname.startsWith('/vision');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <div className="h-12 w-12 rounded-full border border-black p-1 bg-white overflow-hidden flex items-center justify-center">
              <img 
                src={logoSolara} 
                alt="Solara Project" 
                className="w-full h-full object-contain"
              />
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-light hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-sm font-light hover:text-primary transition-colors">
              Serviços
            </Link>
            <Link to="/about" className="text-sm font-light hover:text-primary transition-colors">
              Sobre
            </Link>
            <Link to="/contact" className="text-sm font-light hover:text-primary transition-colors">
              Contacto
            </Link>
            {!isVisionSection && (
              <Link to="/vision">
                <Button variant="outline" size="sm" className="border-2" style={{ borderColor: 'hsl(100, 19%, 74%)', color: 'hsl(100, 22%, 13%)' }}>
                  Conheça a Vision Press
                </Button>
              </Link>
            )}
            {isVisionSection && (
              <Link to="/">
                <Button variant="outline" size="sm" className="border-2">
                  Voltar à Solara
                </Button>
              </Link>
            )}
            <Link to="/contact">
              <Button variant="default" size="sm">
                Agende uma Reunião
              </Button>
            </Link>
          </nav>
          
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;