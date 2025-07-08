import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Brain, Eye } from "lucide-react";
import { useScrollTo } from "@/hooks/useScrollTo";
import { useDemo } from "@/hooks/useDemo";
import heroImage from "@/assets/hero-retail.jpg";

export const HeroSection = () => {
  const { scrollToSection } = useScrollTo();
  const { isLoading, startDemo } = useDemo();

  const handleExploreTech = () => {
    scrollToSection("features");
  };

  const handleAIDemo = () => {
    startDemo("AI Shopping Assistant");
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary-glow/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/30 rounded-full blur-lg animate-pulse-glow" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge variant="secondary" className="px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2" />
                Future of Retail Technology
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Reimagine
                </span>
                <br />
                <span className="text-foreground">
                  Retail with AI
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Harness the power of AI, immersive technologies, and data-driven insights to create 
                hyper-personalized shopping experiences that anticipate customer needs and redefine convenience.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group" onClick={handleExploreTech}>
                Explore Technologies
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="futuristic" size="xl" className="group" onClick={handleAIDemo} disabled={isLoading}>
                <Brain className="w-5 h-5 mr-2" />
                {isLoading ? "Loading..." : "AI Demo"}
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">85%</div>
                <div className="text-sm text-muted-foreground">Engagement Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">3.2x</div>
                <div className="text-sm text-muted-foreground">Conversion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">92%</div>
                <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
              </div>
            </div>
          </div>
          
          {/* Right column - Hero image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Future of Retail Technology" 
                className="w-full h-auto rounded-2xl shadow-2xl hover:shadow-glow-primary transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-primary/20 rounded-2xl" />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-primary/90 backdrop-blur-sm rounded-full p-4 animate-pulse-glow">
                <Eye className="w-6 h-6 text-primary-foreground" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-primary-glow/90 backdrop-blur-sm rounded-full p-4 animate-float">
                <Brain className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};