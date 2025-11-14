
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, User, Mail, Phone, ExternalLink } from "lucide-react";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

// Mock data for blogs
const blogPosts = [
  {
    id: 1,
    title: "Understanding Anxiety in Young Adults",
    summary: "Learn about the common triggers and symptoms of anxiety in young adults, and effective strategies to manage them.",
    image: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
    readTime: 5,
    category: "Anxiety"
  },
  {
    id: 2,
    title: "The Science of Sleep and Mental Health",
    summary: "Explore the intricate relationship between quality sleep and mental wellbeing, with actionable tips for better sleep hygiene.",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
    readTime: 7,
    category: "Sleep Health"
  },
  {
    id: 3,
    title: "Mindfulness Techniques for Stress Relief",
    summary: "Discover practical mindfulness exercises that can help reduce stress and increase present-moment awareness in your daily life.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1622&q=80",
    readTime: 6,
    category: "Stress"
  },
  {
    id: 4,
    title: "Digital Detox: Reducing Social Media Anxiety",
    summary: "How to create healthy boundaries with technology and social media to improve your mental wellbeing and reduce anxiety.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    readTime: 4,
    category: "Anxiety"
  },
  {
    id: 5,
    title: "Recognizing Depression: Signs and Support",
    summary: "An overview of common depression symptoms, when to seek help, and how to support yourself or someone experiencing depression.",
    image: "https://images.unsplash.com/photo-1546954026-42149614d27f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    readTime: 8,
    category: "Depression"
  },
  {
    id: 6,
    title: "Building Resilience in Challenging Times",
    summary: "Practical strategies for developing emotional resilience and maintaining mental health during periods of stress and uncertainty.",
    image: "https://images.unsplash.com/photo-1569144157591-c60f3f82f137?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    readTime: 6,
    category: "Stress"
  }
];

// Mock data for doctors
const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Clinical Psychologist",
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2456&q=80",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 123-4567",
    categories: ["Anxiety", "Depression", "Stress"],
    availability: "Mon-Fri"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Psychiatrist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    email: "michael.chen@example.com",
    phone: "+1 (555) 234-5678",
    categories: ["Depression", "Sleep Health", "Anxiety"],
    availability: "Tue-Sat"
  },
  {
    id: 3,
    name: "Dr. Amanda Patel",
    specialty: "Neuropsychologist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    email: "amanda.patel@example.com",
    phone: "+1 (555) 345-6789",
    categories: ["Anxiety", "Stress"],
    availability: "Mon-Wed, Fri"
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Therapist",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1664&q=80",
    email: "james.wilson@example.com",
    phone: "+1 (555) 456-7890",
    categories: ["Depression", "Sleep Health"],
    availability: "Wed-Sun"
  }
];

const Docs = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Filter blogs by category if one is selected
  const filteredBlogs = selectedCategory
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;
    
  // Filter doctors by category if one is selected
  const filteredDoctors = selectedCategory
    ? doctors.filter(doctor => doctor.categories.includes(selectedCategory))
    : doctors;

  const categories = ["Anxiety", "Depression", "Stress", "Sleep Health"];
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-gradient-to-b from-background via-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources & Documentation</h1>
              <p className="text-muted-foreground text-lg">
                Explore our collection of mental health resources, articles, and connect with specialists.
              </p>
            </div>
            
            <div className="mb-8">
              <div className="flex flex-wrap justify-center gap-2">
                <Button 
                  variant={selectedCategory === null ? "default" : "outline"}
                  onClick={() => setSelectedCategory(null)}
                >
                  All Categories
                </Button>
                
                {categories.map(category => (
                  <Button 
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            
            <Tabs defaultValue="blogs">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="blogs">Blogs & Articles</TabsTrigger>
                <TabsTrigger value="doctors">Mental Health Specialists</TabsTrigger>
              </TabsList>
              
              <TabsContent value="blogs">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredBlogs.map(post => (
                    <Card key={post.id} className="overflow-hidden card-effect">
                      <div className="aspect-[16/9] overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <Badge variant="outline">{post.category}</Badge>
                          <div className="flex items-center text-muted-foreground text-sm">
                            <Clock size={14} className="mr-1" />
                            <span>{post.readTime} min read</span>
                          </div>
                        </div>
                        <CardTitle className="text-xl">{post.title}</CardTitle>
                        <CardDescription className="line-clamp-2">{post.summary}</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button variant="ghost" className="w-full">
                          <BookOpen size={16} className="mr-2" /> Read Article
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                {filteredBlogs.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No articles found in this category.</p>
                    <Button 
                      variant="link" 
                      onClick={() => setSelectedCategory(null)}
                      className="mt-2"
                    >
                      View all articles
                    </Button>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="doctors">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredDoctors.map(doctor => (
                    <Card key={doctor.id} className="card-effect overflow-hidden">
                      <div className="md:flex">
                        <div className="md:w-1/3 aspect-square md:aspect-auto overflow-hidden">
                          <img 
                            src={doctor.image}
                            alt={doctor.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="md:w-2/3">
                          <CardHeader>
                            <div className="flex items-center gap-4">
                              <Avatar className="hidden md:flex h-12 w-12">
                                <AvatarImage src={doctor.image} alt={doctor.name} />
                                <AvatarFallback>{doctor.name[0]}</AvatarFallback>
                              </Avatar>
                              <div>
                                <CardTitle className="text-xl">{doctor.name}</CardTitle>
                                <CardDescription>{doctor.specialty}</CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <div className="flex flex-wrap gap-2">
                              {doctor.categories.map(category => (
                                <Badge key={category} variant="secondary">{category}</Badge>
                              ))}
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2 text-sm">
                                <Mail size={16} className="text-muted-foreground" />
                                <span>{doctor.email}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <Phone size={16} className="text-muted-foreground" />
                                <span>{doctor.phone}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <User size={16} className="text-muted-foreground" />
                                <span>Available: {doctor.availability}</span>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button variant="outline" className="w-full">
                              <ExternalLink size={16} className="mr-2" /> View Profile
                            </Button>
                          </CardFooter>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
                
                {filteredDoctors.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No specialists found in this category.</p>
                    <Button 
                      variant="link" 
                      onClick={() => setSelectedCategory(null)}
                      className="mt-2"
                    >
                      View all specialists
                    </Button>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Docs;
