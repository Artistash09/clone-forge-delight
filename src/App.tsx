import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Pricing from "./pages/Pricing.tsx";
import Database from "./pages/Database.tsx";
import OurData from "./pages/OurData.tsx";
import WhyUs from "./pages/WhyUs.tsx";
import CaseStudies from "./pages/CaseStudies.tsx";
import VsZoomInfo from "./pages/VsZoomInfo.tsx";
import VsApollo from "./pages/VsApollo.tsx";
import VsCognism from "./pages/VsCognism.tsx";
import VsLusha from "./pages/VsLusha.tsx";
import VsHunter from "./pages/VsHunter.tsx";
import VsRocketReach from "./pages/VsRocketReach.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/database" element={<Database />} />
          <Route path="/our-data" element={<OurData />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/vs-zoominfo" element={<VsZoomInfo />} />
          <Route path="/vs-apollo" element={<VsApollo />} />
          <Route path="/vs-cognism" element={<VsCognism />} />
          <Route path="/vs-lusha" element={<VsLusha />} />
          <Route path="/vs-hunter" element={<VsHunter />} />
          <Route path="/vs-rocketreach" element={<VsRocketReach />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
