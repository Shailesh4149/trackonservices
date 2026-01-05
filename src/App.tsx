import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Index = lazy(() => import("./pages/Index"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const AreaDetail = lazy(() => import("./pages/AreaDetail"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const About = lazy(() => import("./pages/About"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Dedicated SEO-optimized service pages
const SameDayCourier = lazy(() => import("./pages/SameDayCourier"));
const ExpressCourier = lazy(() => import("./pages/ExpressCourier"));
const PanIndiaCourier = lazy(() => import("./pages/PanIndiaCourier"));
const InternationalCourier = lazy(() => import("./pages/InternationalCourier"));
const AirportCourier = lazy(() => import("./pages/AirportCourier"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/area/:slug" element={<AreaDetail />} />
            <Route path="/areas/:areaSlug" element={<AreaDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/sitemap" element={<Sitemap />} />
            
            {/* Dedicated SEO service pages */}
            <Route path="/same-day-courier-andheri-west" element={<SameDayCourier />} />
            <Route path="/express-courier-mumbai" element={<ExpressCourier />} />
            <Route path="/pan-india-courier" element={<PanIndiaCourier />} />
            <Route path="/international-courier-mumbai" element={<InternationalCourier />} />
            <Route path="/airport-courier-mumbai" element={<AirportCourier />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
