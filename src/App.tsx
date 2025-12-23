import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Páginas Públicas
import Index from "./pages/Index";
import Services from "./pages/Services";
import RealEstate from "./pages/RealEstate";
import RealEstateDetail from "./pages/RealEstateDetail";
import Financial from "./pages/Financial"; // <--- NOVO
import Consultancy from "./pages/Consultancy"; // <--- NOVO
import About from "./pages/About";
import Contact from "./pages/Contact";
import Vision from "./pages/Vision";
import VisionArticles from "./pages/VisionArticles";
import VisionServices from "./pages/VisionServices";
import VisionArticleDetail from "./pages/VisionArticleDetail";
import NotFound from "./pages/NotFound";

// Páginas Admin
import AdminRoute from "./components/AdminRoute";
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminPostEditor from "./pages/admin/PostEditor";
import AdminMarketEditor from "./pages/admin/MarketEditor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Rotas Públicas */}
          <Route path="/" element={<Index />} />
          
          {/* HUB de Serviços (Opcional manter ou redirecionar) */}
          <Route path="/services" element={<Services />} />
          
          {/* Sub-páginas de Serviços */}
          <Route path="/services/real-estate" element={<RealEstate />} />
          <Route path="/services/real-estate/:slug" element={<RealEstateDetail />} />
          <Route path="/services/financial" element={<Financial />} /> {/* <--- ROTA NOVA */}
          <Route path="/services/consultancy" element={<Consultancy />} /> {/* <--- ROTA NOVA */}

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/vision/articles" element={<VisionArticles />} />
          <Route path="/vision/articles/:slug" element={<VisionArticleDetail />} />
          <Route path="/vision/services" element={<VisionServices />} />

          {/* Rota de Login Admin */}
          <Route path="/admin/login" element={<AdminLogin />} />
          
          {/* Rotas Protegidas (Dashboard) */}
          <Route element={<AdminRoute />}>
            <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            
            <Route path="/admin/posts/new" element={<AdminPostEditor />} />
            <Route path="/admin/posts/edit/:id" element={<AdminPostEditor />} />

            <Route path="/admin/markets/new" element={<AdminMarketEditor />} />
            <Route path="/admin/markets/edit/:id" element={<AdminMarketEditor />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;