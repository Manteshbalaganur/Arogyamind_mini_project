
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { MessageSquare, User, Heart, BarChart, Brain, ArrowRight } from 'lucide-react';
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About ArogyaMind</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Our mission is to make mental healthcare accessible, personalized, and effective
              for GenZ and young adults through innovative AI technology.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-muted-foreground mb-6">
                  ArogyaMind was created with a simple yet powerful vision: to revolutionize mental healthcare
                  through accessible, personalized, and stigma-free support powered by artificial intelligence.
                </p>
                <p className="text-muted-foreground mb-6">
                  We believe that everyone deserves access to mental health resources that understand their
                  unique needs, speak their language, and are available whenever they're needed most.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Link to="/chat">
                    <Button>
                      Start Chatting <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/docs">
                    <Button variant="outline">
                      Explore Resources
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-arogya-primary to-arogya-accent rounded-lg blur opacity-25"></div>
                  <div className="relative bg-card rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                      alt="Mental wellness" 
                      className="w-full h-full object-cover aspect-[4/3]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">How ArogyaMind Helps You</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg card-effect">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto bg-arogya-primary/10 rounded-full flex items-center justify-center mb-6">
                    <MessageSquare className="h-8 w-8 text-arogya-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">AI-Powered Conversations</h3>
                  <p className="text-muted-foreground">
                    Our AI assistant Manas provides supportive, judgment-free conversations to help you
                    process emotions and develop healthy coping strategies.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg card-effect">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto bg-arogya-secondary/10 rounded-full flex items-center justify-center mb-6">
                    <User className="h-8 w-8 text-arogya-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Personalized Support</h3>
                  <p className="text-muted-foreground">
                    We adapt to your unique needs, providing personalized resources, exercises,
                    and strategies based on your mental health journey.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg card-effect">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto bg-arogya-accent/10 rounded-full flex items-center justify-center mb-6">
                    <Heart className="h-8 w-8 text-arogya-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Comprehensive Resources</h3>
                  <p className="text-muted-foreground">
                    Access our library of evidence-based articles, guides, and exercises designed
                    to support your mental wellbeing and personal growth.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://cdn.pixabay.com/photo/2022/10/17/15/55/meditate-7528123_1280.jpg" 
                  alt="Team collaboration" 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-arogya-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Brain className="h-6 w-6 text-arogya-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Evidence-Based</h3>
                      <p className="text-muted-foreground">
                        Our AI is trained on established psychological approaches and evidence-based techniques for mental wellness.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-arogya-secondary/10 rounded-full flex items-center justify-center shrink-0">
                      <User className="h-6 w-6 text-arogya-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Privacy-Centered</h3>
                      <p className="text-muted-foreground">
                        Your conversations and data are private. We prioritize security and confidentiality in all of our services.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-arogya-accent/10 rounded-full flex items-center justify-center shrink-0">
                      <BarChart className="h-6 w-6 text-arogya-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Continuous Improvement</h3>
                      <p className="text-muted-foreground">
                        Our AI gets smarter with every conversation, helping us deliver more effective support over time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Join Our Community</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
              Be part of a supportive community focused on mental wellness and personal growth. Start your journey with ArogyaMind today.
            </p>
            
            <Link to="/chat">
              <Button size="lg" className="bg-gradient-to-r from-arogya-primary to-arogya-secondary hover:opacity-90 transition-opacity">
                Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
