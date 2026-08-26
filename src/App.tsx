import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ScrollToTop from "./components/ScrollToTop";

const CerimonialCasamento = lazy(() => import("./pages/servicos/CerimonialCasamento"));
const AssessoriaCasamento = lazy(() => import("./pages/servicos/AssessoriaCasamento"));
const CerimonialDebutantes = lazy(() => import("./pages/servicos/CerimonialDebutantes"));
const Festa15Anos = lazy(() => import("./pages/servicos/Festa15Anos"));
const CityPage = lazy(() => import("./pages/CityPage"));
const CasamentosReais = lazy(() => import("./pages/CasamentosReais"));
const DebutantesReais = lazy(() => import("./pages/DebutantesReais"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div style={{ minHeight: "60vh" }} />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/cerimonial-de-casamento" element={<CerimonialCasamento />} />
            <Route path="/assessoria-de-casamento" element={<AssessoriaCasamento />} />
            <Route path="/cerimonial-debutantes" element={<CerimonialDebutantes />} />
            <Route path="/festa-de-15-anos" element={<Festa15Anos />} />
            <Route path="/cerimonial-para-de-minas" element={<CityPage />} />
            <Route path="/cerimonial-divinopolis" element={<CityPage />} />
            <Route path="/cerimonial-nova-serrana" element={<CityPage />} />
            <Route path="/cerimonial-itauna" element={<CityPage />} />
            <Route path="/casamentos-reais" element={<CasamentosReais />} />
            <Route path="/debutantes-reais" element={<DebutantesReais />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <WhatsAppFloat />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
