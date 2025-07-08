import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { StatsSection } from "@/components/StatsSection";
import { TechShowcase } from "@/components/TechShowcase";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github,
  ArrowRight,
  Star,
  Quote
} from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Digital Experience",
    company: "TechRetail Corp",
    content: "The AI-powered personalization has transformed our customer engagement. We've seen a 400% increase in conversion rates since implementing these technologies.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Innovation",
    company: "Future Commerce",
    content: "The voice commerce integration is revolutionary. Our customers love the hands-free shopping experience, and it's significantly reduced our support tickets.",
    rating: 5
  },
  {
    name: "Emily Johnson",
    role: "CEO",
    company: "NextGen Retail",
    content: "The AR try-on feature has virtually eliminated returns. Customer satisfaction scores have never been higher, and our operational costs have decreased by 30%.",
    rating: 5
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Technology Showcase */}
      <TechShowcase />

      {/* Interactive Demo */}
      <InteractiveDemo />

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4">
              <Star className="w-4 h-4 mr-2" />
              Customer Success Stories
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">What Leaders</span>{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Are Saying
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how industry leaders are leveraging our retail innovation platform 
              to transform their customer experiences and drive unprecedented growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name}
                className="group relative overflow-hidden hover:shadow-glow-primary transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute inset-0 bg-gradient-hero opacity-5 group-hover:opacity-10 transition-opacity" />
                
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  
                  <div className="mb-6">
                    <Quote className="w-8 h-8 text-primary mb-4" />
                    <p className="text-muted-foreground italic">
                      "{testimonial.content}"
                    </p>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-primary">
                      {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-accent">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Ready to</span>{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Transform Retail?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the revolution in retail technology. Let's create personalized, 
              immersive shopping experiences that delight customers and drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="group">
                <Mail className="w-5 h-5 mr-2" />
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="futuristic" size="xl">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold bg-gradient-hero bg-clip-text text-transparent">
                Future Retail
              </h3>
              <p className="text-muted-foreground">
                Transforming retail through AI, immersive technologies, and data-driven insights.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Github className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Technologies</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>AI Shopping Assistant</li>
                <li>AR Visualization</li>
                <li>Voice Commerce</li>
                <li>Predictive Analytics</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Solutions</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Personalization Engine</li>
                <li>Dynamic Pricing</li>
                <li>Inventory Optimization</li>
                <li>Customer Journey Mapping</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>hello@futureretail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Future Retail. All rights reserved. Powered by AI and innovation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;