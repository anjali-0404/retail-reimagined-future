import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Mic, 
  MicOff, 
  Eye, 
  Brain, 
  ShoppingCart,
  Sparkles,
  Play,
  Pause,
  RotateCcw
} from "lucide-react";

export const InteractiveDemo = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isARActive, setIsARActive] = useState(false);
  const [aiResponse, setAiResponse] = useState("");

  const handleVoiceDemo = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Simulate voice recognition
      setTimeout(() => {
        setAiResponse("I heard you say 'Show me running shoes for women'. Here are some great options for you!");
      }, 2000);
    } else {
      setAiResponse("");
    }
  };

  const handleARDemo = () => {
    setIsARActive(!isARActive);
  };

  const products = [
    {
      name: "Nike Air Max 270",
      price: "$150",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop"
    },
    {
      name: "Adidas Ultraboost 22",
      price: "$180",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=300&fit=crop"
    },
    {
      name: "New Balance 1080v11",
      price: "$160",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=300&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">
            <Play className="w-4 h-4 mr-2" />
            Interactive Experience
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Try It</span>{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Yourself
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of retail technology with our interactive demos. 
            See how AI, voice, and AR technologies transform the shopping experience.
          </p>
        </div>

        <Tabs defaultValue="voice" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="voice" className="flex items-center gap-2">
              <Mic className="w-4 h-4" />
              Voice Commerce
            </TabsTrigger>
            <TabsTrigger value="ar" className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              AR Try-On
            </TabsTrigger>
            <TabsTrigger value="ai" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              AI Assistant
            </TabsTrigger>
          </TabsList>

          <TabsContent value="voice" className="animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5" />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mic className="w-5 h-5" />
                    Voice Search Demo
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center p-8 bg-muted/20 rounded-lg">
                    <div className={`w-32 h-32 mx-auto mb-4 rounded-full border-4 ${
                      isRecording ? 'border-primary animate-pulse-glow' : 'border-muted'
                    } flex items-center justify-center`}>
                      {isRecording ? (
                        <div className="w-16 h-16 bg-primary rounded-full animate-pulse" />
                      ) : (
                        <Mic className="w-16 h-16 text-muted-foreground" />
                      )}
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {isRecording ? "Listening..." : "Click to start voice search"}
                    </p>
                    <Button
                      onClick={handleVoiceDemo}
                      variant={isRecording ? "destructive" : "tech"}
                      className="group"
                    >
                      {isRecording ? <MicOff className="w-4 h-4 mr-2" /> : <Mic className="w-4 h-4 mr-2" />}
                      {isRecording ? "Stop Recording" : "Start Recording"}
                    </Button>
                  </div>
                  
                  {aiResponse && (
                    <Card className="bg-primary/10 border-primary/20">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-primary/20 rounded-full">
                            <Brain className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <div className="text-sm font-medium mb-1">AI Assistant</div>
                            <p className="text-sm text-muted-foreground">{aiResponse}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    Search Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {products.map((product, index) => (
                      <Card key={product.name} className="group hover:shadow-glow-secondary transition-all duration-300">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-4">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h3 className="font-semibold">{product.name}</h3>
                              <p className="text-sm text-muted-foreground">Rating: {product.rating}/5</p>
                              <p className="text-lg font-bold text-primary">{product.price}</p>
                            </div>
                            <Button variant="tech" size="sm">
                              Add to Cart
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="ar" className="animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5" />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    AR Try-On Experience
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="aspect-square bg-muted/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                    {isARActive ? (
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-glow/20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-32 h-32 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                              <Sparkles className="w-16 h-16 text-primary animate-pulse" />
                            </div>
                            <p className="text-primary font-semibold">AR Experience Active</p>
                            <p className="text-sm text-muted-foreground">Virtual try-on in progress...</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center">
                        <Eye className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground">Click to activate AR camera</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex gap-4">
                    <Button
                      onClick={handleARDemo}
                      variant={isARActive ? "destructive" : "tech"}
                      className="flex-1"
                    >
                      {isARActive ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                      {isARActive ? "Stop AR" : "Start AR"}
                    </Button>
                    <Button variant="outline">
                      <RotateCcw className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5" />
                <CardHeader>
                  <CardTitle>Product Suggestions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-sm text-muted-foreground mb-4">
                      Based on your AR session, here are personalized recommendations:
                    </div>
                    {products.slice(0, 2).map((product, index) => (
                      <Card key={product.name} className="group hover:shadow-glow-secondary transition-all duration-300">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-4">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-12 h-12 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h3 className="font-semibold text-sm">{product.name}</h3>
                              <p className="text-xs text-muted-foreground">Perfect fit detected</p>
                              <p className="text-sm font-bold text-primary">{product.price}</p>
                            </div>
                            <Button variant="tech" size="sm">
                              Try AR
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="ai" className="animate-fade-in">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  AI Shopping Assistant
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-muted/20 rounded-lg p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 bg-primary/20 rounded-full">
                        <Brain className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium mb-1">AI Assistant</div>
                        <p className="text-sm text-muted-foreground">
                          Hello! I'm your personal shopping assistant. I can help you find products, 
                          compare prices, check availability, and provide personalized recommendations. 
                          What are you looking for today?
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Button variant="outline" className="h-auto p-4 flex-col">
                      <ShoppingCart className="w-5 h-5 mb-2" />
                      <span className="text-xs">Find Products</span>
                    </Button>
                    <Button variant="outline" className="h-auto p-4 flex-col">
                      <Sparkles className="w-5 h-5 mb-2" />
                      <span className="text-xs">Get Recommendations</span>
                    </Button>
                    <Button variant="outline" className="h-auto p-4 flex-col">
                      <Eye className="w-5 h-5 mb-2" />
                      <span className="text-xs">Compare Items</span>
                    </Button>
                    <Button variant="outline" className="h-auto p-4 flex-col">
                      <Mic className="w-5 h-5 mb-2" />
                      <span className="text-xs">Voice Search</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};