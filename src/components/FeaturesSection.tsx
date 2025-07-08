import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useDemo } from "@/hooks/useDemo";
import { 
  Brain, 
  Eye, 
  Mic, 
  CreditCard, 
  BarChart3, 
  Users, 
  ShoppingCart, 
  Zap,
  ArrowRight
} from "lucide-react";
import aiAssistantImage from "@/assets/ai-assistant.jpg";
import arExperienceImage from "@/assets/ar-experience.jpg";
import voiceCommerceImage from "@/assets/voice-commerce.jpg";
import frictionlessCheckoutImage from "@/assets/frictionless-checkout.jpg";

const features = [
  {
    title: "AI Shopping Assistant",
    description: "Conversational AI that understands customer preferences and provides personalized recommendations in real-time.",
    icon: Brain,
    image: aiAssistantImage,
    badge: "GPT-4 Powered",
    stats: "95% Accuracy",
    color: "from-purple-500 to-blue-500"
  },
  {
    title: "AR Product Visualization",
    description: "Immersive augmented reality experiences that let customers try products virtually before purchasing.",
    icon: Eye,
    image: arExperienceImage,
    badge: "WebAR",
    stats: "3x Engagement",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Voice Commerce",
    description: "Natural language processing for voice-activated shopping with seamless order processing.",
    icon: Mic,
    image: voiceCommerceImage,
    badge: "Voice AI",
    stats: "70% Faster",
    color: "from-cyan-500 to-teal-500"
  },
  {
    title: "Frictionless Checkout",
    description: "Biometric authentication and one-click payments for the ultimate seamless shopping experience.",
    icon: CreditCard,
    image: frictionlessCheckoutImage,
    badge: "Biometric",
    stats: "90% Faster",
    color: "from-teal-500 to-green-500"
  }
];

const additionalFeatures = [
  {
    title: "Predictive Analytics",
    description: "AI-powered demand forecasting and inventory optimization",
    icon: BarChart3,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Hyper-Personalization",
    description: "Dynamic content and recommendations based on real-time behavior",
    icon: Users,
    color: "from-emerald-500 to-cyan-500"
  },
  {
    title: "Smart Inventory",
    description: "Automated stock management with predictive restocking",
    icon: ShoppingCart,
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Dynamic Pricing",
    description: "Real-time price optimization based on demand and competition",
    icon: Zap,
    color: "from-blue-500 to-purple-500"
  }
];

export const FeaturesSection = () => {
  const { isLoading, startDemo } = useDemo();

  const handleExploreDemo = (title: string) => {
    startDemo(title);
  };

  return (
    <section id="features" className="py-24 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Core Technologies
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Revolutionary
            </span>{" "}
            <span className="text-foreground">Shopping Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how cutting-edge AI and immersive technologies are transforming 
            the retail landscape with personalized, efficient, and engaging experiences.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group relative overflow-hidden hover:shadow-glow-primary transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity" 
                   style={{ backgroundImage: `linear-gradient(135deg, ${feature.color.replace('from-', '').replace('to-', ', ')})` }} />
              
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary">{feature.badge}</Badge>
                    <div className="text-sm text-muted-foreground mt-1">{feature.stats}</div>
                  </div>
                </div>
                <CardTitle className="text-2xl">{feature.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{feature.description}</p>
                
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                
                <Button 
                  variant="tech" 
                  className="w-full group" 
                  onClick={() => handleExploreDemo(feature.title)}
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Explore Technology"}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalFeatures.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group relative overflow-hidden hover:shadow-glow-secondary transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${(index + 4) * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity" 
                   style={{ backgroundImage: `linear-gradient(135deg, ${feature.color.replace('from-', '').replace('to-', ', ')})` }} />
              
              <CardContent className="p-6 text-center">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-4`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};