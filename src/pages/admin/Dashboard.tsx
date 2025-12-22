import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link, useNavigate } from "react-router-dom";
import { Plus, LogOut, Edit, Trash, Loader2, FileText, Building2, MapPin } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

interface Post {
  id: number;
  title: string;
  category: string;
  createdAt: string;
}

interface Market {
  id: number;
  name: string;
  tag: string;
  slug: string;
}

const API_URL = import.meta.env.VITE_API_URL;

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const [markets, setMarkets] = useState<Market[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    setIsLoading(true);
    try {
      const [postsRes, marketsRes] = await Promise.all([
        fetch(`${API_URL}/posts`),
        fetch(`${API_URL}/markets`)
      ]);

      if (postsRes.ok) setPosts(await postsRes.json());
      if (marketsRes.ok) setMarkets(await marketsRes.json());
      
    } catch (error) {
      console.error(error);
      toast.error("Erro ao carregar dados do painel.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("solara_token");
    navigate("/admin/login");
  };

  const handleDeletePost = async (id: number) => {
    if (!confirm("Tem certeza que deseja remover este artigo?")) return;
    const token = localStorage.getItem("solara_token");
    
    try {
      const response = await fetch(`${API_URL}/posts/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        toast.success("Artigo removido!");
        fetchAllData();
      } else {
        toast.error("Erro ao remover artigo.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro de conexão.");
    }
  };

  const handleDeleteMarket = async (id: number) => {
    if (!confirm("Tem certeza? Isso removerá o mercado e seus pins do mapa.")) return;
    const token = localStorage.getItem("solara_token");

    try {
      const response = await fetch(`${API_URL}/markets/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        toast.success("Mercado removido!");
        fetchAllData();
      } else {
        toast.error("Erro ao remover mercado.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro de conexão.");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <Loader2 className="h-10 w-10 animate-spin text-solara-vinho" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 p-6 md:p-10 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl font-light text-solara-vinho">Painel Administrativo</h1>
            <p className="text-muted-foreground">Gerencie o conteúdo do ecossistema Solara.</p>
          </div>
          <Button variant="outline" onClick={handleLogout} className="border-red-200 text-red-700 hover:bg-red-50">
            <LogOut className="mr-2 h-4 w-4" /> Sair
          </Button>
        </div>

        {/* SECTION 1: MERCADOS (Real Estate) */}
        <Card className="border-0 shadow-lg overflow-hidden">
          <CardHeader className="bg-white border-b flex flex-row items-center justify-between pb-6">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-solara-vinho" />
              <CardTitle className="font-light text-xl">Mercados (Real Estate)</CardTitle>
              <Badge variant="secondary" className="ml-2">{markets.length}</Badge>
            </div>
            <Link to="/admin/markets/new">
              <Button className="bg-solara-vinho hover:bg-solara-vinho/90 text-white">
                <MapPin className="mr-2 h-4 w-4" /> Novo Mercado
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-neutral-50/50">
                  <TableHead className="pl-6">País / Mercado</TableHead>
                  <TableHead>Tag (Destaque)</TableHead>
                  <TableHead>Slug</TableHead>
                  <TableHead className="text-right pr-6">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {markets.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                      Nenhum mercado cadastrado. Adicione o primeiro!
                    </TableCell>
                  </TableRow>
                ) : (
                  markets.map((market) => (
                    <TableRow key={market.id} className="hover:bg-neutral-50/50">
                      <TableCell className="font-medium pl-6 text-base">{market.name}</TableCell>
                      <TableCell><Badge variant="outline">{market.tag}</Badge></TableCell>
                      <TableCell className="text-muted-foreground text-xs font-mono">/{market.slug}</TableCell>
                      <TableCell className="text-right pr-6 space-x-1">
                        <Link to={`/admin/markets/edit/${market.id}`}>
                          <Button variant="ghost" size="icon" className="hover:text-blue-600 hover:bg-blue-50">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Button variant="ghost" size="icon" className="hover:text-red-600 hover:bg-red-50" onClick={() => handleDeleteMarket(market.id)}>
                          <Trash className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* SECTION 2: BLOG POSTS (Vision Press) */}
        <Card className="border-0 shadow-lg overflow-hidden">
          <CardHeader className="bg-white border-b flex flex-row items-center justify-between pb-6">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-vision-green" />
              <CardTitle className="font-light text-xl">Artigos (Vision Press)</CardTitle>
              <Badge variant="secondary" className="ml-2">{posts.length}</Badge>
            </div>
            <Link to="/admin/posts/new">
              <Button className="bg-vision-green hover:bg-vision-green/90 text-white">
                <Plus className="mr-2 h-4 w-4" /> Novo Artigo
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-neutral-50/50">
                  <TableHead className="pl-6">Título</TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead className="text-right pr-6">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {posts.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                      Nenhum artigo encontrado.
                    </TableCell>
                  </TableRow>
                ) : (
                  posts.map((post) => (
                    <TableRow key={post.id} className="hover:bg-neutral-50/50">
                      <TableCell className="font-medium pl-6">{post.title}</TableCell>
                      <TableCell><Badge variant="secondary" className="bg-vision-light/20 text-vision-green hover:bg-vision-light/30">{post.category}</Badge></TableCell>
                      <TableCell className="text-muted-foreground text-sm">{new Date(post.createdAt).toLocaleDateString()}</TableCell>
                      <TableCell className="text-right pr-6 space-x-1">
                        <Link to={`/admin/posts/edit/${post.id}`}>
                          <Button variant="ghost" size="icon" className="hover:text-blue-600 hover:bg-blue-50">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Button variant="ghost" size="icon" className="hover:text-red-600 hover:bg-red-50" onClick={() => handleDeletePost(post.id)}>
                          <Trash className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default AdminDashboard;