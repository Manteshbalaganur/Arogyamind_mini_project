
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-arogya-primary to-arogya-accent flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="font-bold text-xl">ArogyaMind</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Empower your mental well-being with AI-powered healthcare solutions.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-arogya-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-arogya-primary transition-colors">About</Link></li>
              <li><Link to="/chat" className="text-muted-foreground hover:text-arogya-primary transition-colors">Chat</Link></li>
              <li><Link to="/docs" className="text-muted-foreground hover:text-arogya-primary transition-colors">Documentation</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-arogya-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-arogya-primary transition-colors">Doctors</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-arogya-primary transition-colors">Support</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-arogya-primary transition-colors">Terms & Privacy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-arogya-primary transition-colors">GitHub</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-arogya-primary transition-colors">Twitter</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-arogya-primary transition-colors">LinkedIn</a></li>
              <li><a href="mailto:info@arogyamind.com" className="text-muted-foreground hover:text-arogya-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2025 Neural Nexus. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-arogya-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-arogya-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-arogya-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
