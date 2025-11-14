
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ModeToggle } from '@/components/theme/ModeToggle';
import { 
  Home, 
  LogIn, 
  Info, 
  FileText, 
  User,
  LogOut,
  ChevronDown,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useClerk, useUser, SignedIn, SignedOut } from "@clerk/clerk-react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { signOut } = useClerk();
  const { user } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Hide navbar in chat page when scrolling down
  const isChat = location.pathname === '/chat';
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled && isChat ? '-translate-y-full' : 'translate-y-0'
      } ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2"> 
          {/* <img src="/manas-ai-wellbeing/public/ChatGPT Image Apr 11, 2025, 10_42_02 PM.png" alt="" /> */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-arogya-primary to-arogya-accent flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className="font-bold text-xl hidden sm:block">ArogyaMind</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className={`transition-colors hover:text-arogya-primary ${location.pathname === '/' ? 'text-arogya-primary font-medium' : ''}`}>
            <span className="flex items-center gap-1"><Home size={18} /> Home</span>
          </Link>
          <Link to="/about" className={`transition-colors hover:text-arogya-primary ${location.pathname === '/about' ? 'text-arogya-primary font-medium' : ''}`}>
            <span className="flex items-center gap-1"><Info size={18} /> About</span>
          </Link>
          <Link to="/docs" className={`transition-colors hover:text-arogya-primary ${location.pathname === '/docs' ? 'text-arogya-primary font-medium' : ''}`}>
            <span className="flex items-center gap-1"><FileText size={18} /> Documentation</span>
          </Link>
          
          {/* Assist Doctor dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1">
                Assist Doctor <ChevronDown size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem className="cursor-pointer">
                Recommend Medicine
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Find Psychiatrist
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <div className="flex items-center space-x-2">
            <ModeToggle />
            
            <SignedIn>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar>
                      <AvatarImage src={user?.imageUrl} alt={user?.fullName || "User"} />
                      <AvatarFallback>{user?.firstName?.charAt(0) || "U"}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="cursor-pointer">
                    Profile Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    Chat History
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => signOut()} className="cursor-pointer">
                    <LogOut size={16} className="mr-2" /> Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SignedIn>
            
            <SignedOut>
              <Button 
                variant="default" 
                onClick={() => window.location.href = '/sign-in'} 
                className="bg-gradient-to-r from-arogya-primary to-arogya-secondary hover:opacity-90 transition-opacity"
              >
                <LogIn size={18} className="mr-2" /> Sign In
              </Button>
            </SignedOut>
          </div>
        </div>
        
        {/* Social icons */}
        <div className="hidden lg:flex items-center space-x-2">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-muted transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-muted transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-muted transition-colors">
            <Twitter size={20} />
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-current mb-1.5"></div>
          <div className="w-6 h-0.5 bg-current mb-1.5"></div>
          <div className="w-6 h-0.5 bg-current"></div>
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="px-4 py-2 rounded-md hover:bg-muted transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="px-4 py-2 rounded-md hover:bg-muted transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>
            <Link to="/docs" className="px-4 py-2 rounded-md hover:bg-muted transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Documentation
            </Link>
            
            <div className="px-4 py-2 rounded-md hover:bg-muted transition-colors cursor-pointer">
              Assist Doctor
            </div>
            
            <SignedIn>
              <Button onClick={() => signOut()} variant="outline" className="justify-start">
                <LogOut size={16} className="mr-2" /> Sign Out
              </Button>
            </SignedIn>
            <SignedOut>
              <Button onClick={() => window.location.href = '/sign-in'} variant="default" className="bg-arogya-primary hover:bg-arogya-secondary justify-start">
                <LogIn size={16} className="mr-2" /> Sign In
              </Button>
            </SignedOut>
            
            <div className="flex items-center space-x-4 px-4 pt-4 border-t border-border">
              <ModeToggle />
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-muted transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-muted transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-muted transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
