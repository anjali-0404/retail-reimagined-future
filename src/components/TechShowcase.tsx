import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  Eye, 
  Mic, 
  BarChart3, 
  MessageSquare, 
  Smartphone,
  Play,
  ArrowRight
} from "lucide-react";

const techCategories = [
  {
    id: "ai",
    label: "AI & ML",
    icon: Brain,
    color: "from-purple-500 to-blue-500",
    technologies: [
      {
        name: "GPT-4 Integration",
        description: "Advanced language models for natural conversations",
        status: "Live"
      },
      {
        name: "Computer Vision",
        description: "Real-time product recognition and analysis",
        status: "Beta"
      },
      {
        name: "Predictive Analytics",
        description: "ML-powered demand forecasting and optimization",
        status: "Live"
      },
      {
        name: "Recommendation Engine",
        description: "Hyper-personalized product suggestions",
        status: "Live"
      }
    ]
  },
  {
    id: "immersive",
    label: "AR/VR",
    icon: Eye,
    color: "from-blue-500 to-cyan-500",
    technologies: [
      {
        name: "WebAR Try-On",
        description: "Browser-based augmented reality experiences",
        status: "Live"
      },
      {
        name: "3D Product Viewer",
        description: "Interactive 360° product visualization",
        status: "Live"
      },
      {
        name: "Virtual Showrooms",
        description: "Immersive VR shopping environments",
        status: "Beta"
      },
      {
        name: "Spatial Commerce",
        description: "Location-based shopping experiences",
        status: "Coming Soon"
      }
    ]
  },
  {
    id: "voice",
    label: "Voice Tech",
    icon: Mic,
    color: "from-cyan-500 to-teal-500",
    technologies: [
      {
        name: "Voice Search",
        description: "Natural language product discovery",
        status: "Live"
      },
      {
        name: "Voice Commerce",
        description: "Complete voice-activated shopping flows",
        status: "Beta"
      },
      {
        name: "Multilingual Support",
        description: "Voice recognition in 50+ languages",
        status: "Live"
      },
      {
        name: "Conversational AI",
        description: "Context-aware voice interactions",
        status: "Live"
      }
    ]
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: BarChart3,
    color: "from-teal-500 to-green-500",
    technologies: [
      {
        name: "Real-time Insights",
        description: "Live customer behavior analytics",
        status: "Live"
      },
      {
        name: "Dynamic Pricing",
        description: "AI-powered price optimization",
        status: "Live"
      },
      {
        name: "Inventory Intelligence",
        description: "Automated stock management",
        status: "Live"
      },
      {
        name: "Customer Journey Mapping",
        description: "End-to-end experience tracking",
        status: "Beta"
      }
    ]
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Live":
      return "bg-green-500/20 text-green-400 border-green-500/30";
    case "Beta":
      return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    case "Coming Soon":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    default:
      return "bg-gray-500/20 text-gray-400 border-gray-500/30";
  }
};

export const TechShowcase = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">
            <Smartphone className="w-4 h-4 mr-2" />
            Technology Stack
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Cutting-Edge</span>{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the comprehensive suite of technologies powering the next generation 
            of retail experiences.
          </p>
        </div>

        <Tabs defaultValue="ai" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-12">
            {techCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="flex items-center gap-2 data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground"
              >
                <category.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{category.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {techCategories.map((category, categoryIndex) => (
            <TabsContent 
              key={category.id} 
              value={category.id}
              className="animate-fade-in"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <Card 
                    key={tech.name}
                    className="group relative overflow-hidden hover:shadow-glow-secondary transition-all duration-500 animate-fade-in"
                    style={{ animationDelay: `${techIndex * 0.1}s` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity" 
                         style={{ backgroundImage: `linear-gradient(135deg, ${category.color.replace('from-', '').replace('to-', ', ')})` }} />
                    
                    <CardHeader className="relative z-10">
                      <div className="flex items-center justify-between mb-2">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                          <category.icon className="w-4 h-4" />
                        </div>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${getStatusColor(tech.status)}`}
                        >
                          {tech.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{tech.name}</CardTitle>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        {tech.description}
                      </p>
                      
                      <div className="flex gap-2">
                        <Button variant="tech" size="sm" className="flex-1">
                          <Play className="w-3 h-3 mr-1" />
                          Demo
                        </Button>
                        <Button variant="outline" size="sm">
                          <ArrowRight className="w-3 h-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-16">
          <Button variant="hero" size="xl" className="group">
            <MessageSquare className="w-5 h-5 mr-2" />
            Schedule Technology Demo
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};