import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Manifesto from "./pages/Manifesto";
import NotFound from "./pages/NotFound";
import BitcoinCultureHub from "./Badge";
import Login from "../src/components/ui/login";
import Register from "../src//components/ui/Register";
import Profile from "../src/components/ui/profile"; 



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/intro" element={<BitcoinCultureHub/>}/>
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
