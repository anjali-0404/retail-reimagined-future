import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useScrollTo } from "@/hooks/useScrollTo";
import { useToast } from "@/hooks/use-toast";
import { 
  Menu, 
  X, 
  Brain, 
  Sparkles,
  ArrowRight
} from "lucide-react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollToSection } = useScrollTo();
  const { toast } = useToast();

  const navItems = [
    { name: "Technologies", href: "tech-showcase" },
    { name: "Solutions", href: "features" },
    { name: "Analytics", href: "stats" },
    { name: "Testimonials", href: "testimonials" },
    { name: "Contact", href: "contact" }
  ];

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsMenuOpen(false);
  };

  const handleSignIn = () => {
    toast({
      title: "Sign In",
      description: "Sign in functionality would be implemented here with your authentication system.",
    });
  };

  const handleGetStarted = () => {
    scrollToSection("hero");
    toast({
      title: "Let's Get Started!",
      description: "Scroll down to explore our revolutionary retail technologies.",
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-hero rounded-lg">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Future Retail
            </span>
            <Badge variant="secondary" className="ml-2">
              <Sparkles className="w-3 h-3 mr-1" />
              AI-Powered
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" onClick={handleSignIn}>
              Sign In
            </Button>
            <Button variant="hero" className="group" onClick={handleGetStarted}>
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors px-4 py-2 text-left"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-border">
                <Button variant="ghost" className="justify-start" onClick={handleSignIn}>
                  Sign In
                </Button>
                <Button variant="hero" className="justify-start group" onClick={handleGetStarted}>
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};