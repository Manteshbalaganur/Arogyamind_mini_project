
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Activity, Heart, MessageSquare, Sparkles } from "lucide-react";
import TypingAnimation from "@/components/home/TypingAnimation";
import HealthChart from "@/components/home/HealthChart";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

const Index = () => {
  const typingPhrases = [
    "AI-Powered Healthcare Solutions",
    "Revolutionize Healthcare with Intelligent AI Models",
    "Empowering Patients with Next-Gen AI",
    "Your Mental Health Companion"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-arogya-tertiary/10 z-0"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 text-left space-y-6 mb-12 md:mb-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  Discover Mental Wellness with <span className="gradient-text">ArogyaMind</span>
                </h1>
                
                <div className="text-xl md:text-2xl text-muted-foreground h-12">
                  <TypingAnimation phrases={typingPhrases} typingSpeed={50} />
                </div>
                
                <p className="text-muted-foreground">
                  Experience personalized AI mental health support designed for GenZ and young adults.
                  Talk with Manas, our intelligent AI assistant, access resources, and track your well-being journey.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link to="/chat">
                    <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-arogya-primary to-arogya-secondary hover:opacity-90 transition-opacity">
                      Start Chatting <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  
                  <Link to="/docs">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -inset-1 bg-gradient-to-r from-arogya-primary to-arogya-accent rounded-lg blur opacity-25"></div>
                  <div className="relative bg-background border border-border rounded-lg shadow-xl overflow-hidden">
                    <div className="p-5">
                      <HealthChart />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Features That <span className="gradient-text">Empower</span> Your Mental Health
              </h2>
              <p className="text-muted-foreground">
                Discover the tools and resources that make ArogyaMind your personal mental health companion.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-border">
                <div className="w-12 h-12 bg-arogya-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Brain className="text-arogya-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered Conversations</h3>
                <p className="text-muted-foreground">
                  Chat with Manas AI, your personal mental health assistant, available 24/7 for support and guidance.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-border">
                <div className="w-12 h-12 bg-arogya-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Activity className="text-arogya-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
                <p className="text-muted-foreground">
                  Monitor your mental wellness journey with interactive charts and personalized insights.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-border">
                <div className="w-12 h-12 bg-arogya-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="text-arogya-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Voice Assistant</h3>
                <p className="text-muted-foreground">
                  Speak naturally with our voice assistant for a more comfortable and accessible experience.
                </p>
              </div>
              
              {/* Feature 4 */}
              <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-border">
                <div className="w-12 h-12 bg-arogya-tertiary/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="text-arogya-tertiary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Professional Connection</h3>
                <p className="text-muted-foreground">
                  Get connected with licensed mental health professionals when you need additional support.
                </p>
              </div>
              
              {/* Feature 5 */}
              <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-border">
                <div className="w-12 h-12 bg-arogya-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MessageSquare className="text-arogya-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Educational Resources</h3>
                <p className="text-muted-foreground">
                  Access a comprehensive library of mental health articles, guides, and exercises.
                </p>
              </div>
              
              {/* Feature 6 */}
              <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-border">
                <div className="w-12 h-12 bg-arogya-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Brain className="text-arogya-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Personalized Recommendations</h3>
                <p className="text-muted-foreground">
                  Receive tailored exercises and resources based on your unique mental health needs.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-arogya-primary/10 to-arogya-accent/10"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Start Your Mental Wellness Journey Today
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
                Join thousands of GenZ individuals who have transformed their mental health with ArogyaMind's AI-powered support system.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/chat">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-arogya-primary to-arogya-secondary hover:opacity-90 transition-opacity">
                    Start Chatting Now
                  </Button>
                </Link>
                <Link to="/docs">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Explore Resources
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
