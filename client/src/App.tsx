import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import CaseStudyDevRelAcademy from "./pages/CaseStudyDevRelAcademy";
import CaseStudyDeveloperEducation from "./pages/CaseStudyDeveloperEducation";
import CaseStudyEli5 from "./pages/CaseStudyEli5";
import CaseStudyConferenceSpeaking from "./pages/CaseStudyConferenceSpeaking";
import CaseStudyEngLeader from "./pages/CaseStudyEngLeader";
import WorkIndex from "./pages/WorkIndex";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path="/work" component={WorkIndex} />
      <Route path={"/work/devrel-academy"} component={CaseStudyDevRelAcademy} />
      <Route path={"/work/developer-education"} component={CaseStudyDeveloperEducation} />
      <Route path={"/work/eli5-series"} component={CaseStudyEli5} />
      <Route path={"/work/conference-speaking"} component={CaseStudyConferenceSpeaking} />
      <Route path={"/work/engineering-leadership-hub"} component={CaseStudyEngLeader} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
