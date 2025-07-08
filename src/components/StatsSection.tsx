import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, ShoppingBag, Zap } from "lucide-react";

const stats = [
  {
    value: "85%",
    label: "Increase in Customer Engagement",
    description: "AI-powered personalization drives deeper customer connections",
    icon: TrendingUp,
    color: "from-purple-500 to-blue-500"
  },
  {
    value: "3.2x",
    label: "Higher Conversion Rates",
    description: "Immersive experiences lead to confident purchase decisions",
    icon: ShoppingBag,
    color: "from-blue-500 to-cyan-500"
  },
  {
    value: "92%",
    label: "Customer Satisfaction Score",
    description: "Seamless, personalized experiences delight customers",
    icon: Users,
    color: "from-cyan-500 to-teal-500"
  },
  {
    value: "70%",
    label: "Faster Purchase Process",
    description: "Voice commerce and frictionless checkout accelerate sales",
    icon: Zap,
    color: "from-teal-500 to-green-500"
  }
];

export const StatsSection = () => {
  return (
    <section className="py-24 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">
            <TrendingUp className="w-4 h-4 mr-2" />
            Performance Metrics
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Measurable</span>{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Impact
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from retailers who've embraced the future of shopping with 
            our AI-powered, immersive technology solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label}
              className="group relative overflow-hidden hover:shadow-glow-primary transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity" 
                   style={{ backgroundImage: `linear-gradient(135deg, ${stat.color.replace('from-', '').replace('to-', ', ')})` }} />
              
              <CardContent className="p-8 text-center relative z-10">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${stat.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                
                <div className="text-5xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">
                  {stat.value}
                </div>
                
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {stat.label}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};