import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import { CustomCursor } from "./components/ui/cursor";
import { NoiseBackground } from "./components/ui/noise-background";
import { ProgressBar } from "./components/ui/progress-bar";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative">
        <NoiseBackground />
        <ProgressBar />
        <CustomCursor />
        <Router />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
