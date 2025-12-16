import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logoSolara from "@/assets/logo-solara-full.jpg";
import HamburgerMenu from "@/components/HamburgerMenu";

const Header = () => {
  const location = useLocation();
  const isVisionSection = location.pathname.startsWith('/vision');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-all duration-300">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          <Link to="/" className="flex items-center group">
            <div className="h-20 w-20 rounded-full border-2 border-solara-vinho p-1.5 bg-white overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105">
              <img 
                src={logoSolara} 
                alt="Solara Project" 
                className="w-full h-full object-contain"
              />
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-light hover:text-solara-vinho transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-sm font-light hover:text-solara-vinho transition-colors">
              Serviços
            </Link>
            <Link to="/about" className="text-sm font-light hover:text-solara-vinho transition-colors">
              Sobre
            </Link>
            <Link to="/contact" className="text-sm font-light hover:text-solara-vinho transition-colors">
              Contacto
            </Link>
            {!isVisionSection && (
              <Link to="/vision">
                <Button variant="outline" size="sm" className="border-2 hover:bg-vision-green/10" style={{ borderColor: '#064E3B', color: '#064E3B' }}>
                  Conheça a Vision Press
                </Button>
              </Link>
            )}
            {isVisionSection && (
              <Link to="/">
                <Button variant="outline" size="sm" className="border-2 border-solara-vinho text-solara-vinho hover:bg-solara-vinho/10">
                  Voltar à Solara
                </Button>
              </Link>
            )}
            <Link to="/contact">
              <Button variant="default" size="sm" className="bg-solara-vinho hover:bg-solara-vinho/90">
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