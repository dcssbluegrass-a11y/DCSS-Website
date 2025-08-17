import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Shows from "@/pages/Shows";
import About from "@/pages/About";
import Music from "@/pages/Music";
import Videos from "@/pages/Videos";
import EPK from "@/pages/EPK";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen bg-dcss-light">
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/shows" component={Shows} />
        <Route path="/about" component={About} />
        <Route path="/music" component={Music} />
        <Route path="/videos" component={Videos} />
        <Route path="/epk" component={EPK} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
