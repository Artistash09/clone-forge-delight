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
import CaseStudySnyk from "./pages/CaseStudySnyk.tsx";
import CaseStudyMeritt from "./pages/CaseStudyMeritt.tsx";
import CaseStudyStackOptimise from "./pages/CaseStudyStackOptimise.tsx";
import CaseStudyFounderLedSales from "./pages/CaseStudyFounderLedSales.tsx";
import CaseStudyGreyScout from "./pages/CaseStudyGreyScout.tsx";
import EmailFinder from "./pages/EmailFinder.tsx";
import DomainSearch from "./pages/DomainSearch.tsx";
import TrustCenter from "./pages/TrustCenter.tsx";
import Affiliate from "./pages/Affiliate.tsx";
import ChromeExtension from "./pages/ChromeExtension.tsx";
import Changelog from "./pages/Changelog.tsx";
import ApiDocs from "./pages/ApiDocs.tsx";
import Blog from "./pages/Blog.tsx";
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
          <Route path="/case-studies/snyk" element={<CaseStudySnyk />} />
          <Route path="/case-studies/meritt" element={<CaseStudyMeritt />} />
          <Route path="/case-studies/stackoptimise" element={<CaseStudyStackOptimise />} />
          <Route path="/case-studies/founder-led-sales" element={<CaseStudyFounderLedSales />} />
          <Route path="/case-studies/greyscout" element={<CaseStudyGreyScout />} />
          <Route path="/email-finder" element={<EmailFinder />} />
          <Route path="/domain-search" element={<DomainSearch />} />
          <Route path="/trust-center" element={<TrustCenter />} />
          <Route path="/affiliate" element={<Affiliate />} />
          <Route path="/chrome-extension" element={<ChromeExtension />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/api-docs" element={<ApiDocs />} />
          <Route path="/blog" element={<Blog />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
