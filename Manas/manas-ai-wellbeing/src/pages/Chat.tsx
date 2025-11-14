import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Trash, List } from "lucide-react";
import ChatMessage from "@/components/chat/ChatMessage";
import VoiceAssistant from "@/components/chat/VoiceAssistant";
import NavBar from "@/components/layout/NavBar";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";

interface ChatHistoryItem {
  date: string;
  preview: string;
}

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chat = () => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi there! I'm Manas, your mental health assistant. How are you feeling today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [isAiTyping, setIsAiTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  // Mock chat history (unchanged)
  const chatHistory: ChatHistoryItem[] = [
    { date: "Today", preview: "Discussed anxiety management techniques" },
    { date: "Yesterday", preview: "Sleep improvement strategies" },
    { date: "Apr 5, 2025", preview: "Mindfulness exercises for focus" },
    { date: "Apr 3, 2025", preview: "Stress management during work" },
    { date: "Mar 29, 2025", preview: "Dealing with social anxiety" },
  ];
  
  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSendMessage = async (text: string = inputValue) => {
    if (text.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      text: text,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputValue('');
    setIsAiTyping(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, timestamp: userMessage.timestamp.toISOString() }),
      });

      const data = await response.json();
      setIsAiTyping(false);

      if (response.ok) {
        const aiResponse: Message = {
          text: data.response,
          isUser: false,
          timestamp: new Date(data.timestamp),
        };
        setMessages(prevMessages => [...prevMessages, aiResponse]);

        if (data.alert) {
          toast({
            title: "Alert",
            description: data.alert,
            duration: 5000,
            variant: "default",
          });
        }
      } else {
        toast({
          title: "Error",
          description: data.error || "Failed to get response from the server",
          duration: 5000,
          variant: "destructive",
        });
      }
    } catch (error) {
      setIsAiTyping(false);
      toast({
        title: "Error",
        description: "Network error occurred. Please try again.",
        duration: 5000,
        variant: "destructive",
      });
    }
  };
  
  const handleVoiceInput = (transcription: string) => {
    if (transcription.trim() !== "") {
      toast({
        title: "Voice captured!",
        description: transcription,
        duration: 3000,
      });
      handleSendMessage(transcription);
    }
  };
  
  const handleClearChat = () => {
    setMessages([{
      text: "Hi there! I'm Manas, your mental health assistant. How are you feeling today?",
      isUser: false,
      timestamp: new Date()
    }]);
    
    toast({
      title: "Chat cleared",
      description: "All messages have been cleared",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1 flex">
        {/* Chat Interface */}
        <div className="flex-1 flex flex-col h-[calc(100vh-4rem)]">
          {/* Chat Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="max-w-4xl mx-auto">
              {messages.map((message, index) => (
                <ChatMessage 
                  key={index}
                  message={message.text}
                  isUser={message.isUser}
                  timestamp={message.timestamp}
                />
              ))}
              
              {isAiTyping && (
                <div className="flex items-center gap-2 text-muted-foreground animate-pulse mb-4">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    AI
                  </div>
                  <div className="px-4 py-3 bg-muted dark:bg-muted/30 rounded-2xl">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-current animate-bounce" style={{ animationDelay: "0ms" }}></div>
                      <div className="w-2 h-2 rounded-full bg-current animate-bounce" style={{ animationDelay: "300ms" }}></div>
                      <div className="w-2 h-2 rounded-full bg-current animate-bounce" style={{ animationDelay: "600ms" }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>
          
          {/* Input Area */}
          <div className="p-4 border-t border-border bg-background">
            <div className="max-w-4xl mx-auto flex items-center gap-2 md:gap-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="flex-shrink-0" aria-label="Chat history">
                    <List size={20} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Chat History</SheetTitle>
                  </SheetHeader>
                  <div className="py-6">
                    {chatHistory.map((chat, index) => (
                      <div 
                        key={index}
                        className="py-3 px-4 hover:bg-muted rounded-lg mb-2 cursor-pointer transition-colors"
                      >
                        <div className="font-medium text-sm">{chat.date}</div>
                        <div className="text-sm text-muted-foreground truncate">{chat.preview}</div>
                      </div>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="flex-shrink-0"
                onClick={handleClearChat}
                aria-label="Clear chat"
              >
                <Trash size={20} />
              </Button>
              
              <div className="relative flex-1">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSendMessage();
                    }
                  }}
                  placeholder="How can I help you?"
                  className="pr-10 py-6"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-1 top-1/2 -translate-y-1/2"
                  onClick={() => handleSendMessage()}
                  disabled={inputValue.trim() === ''}
                  aria-label="Send message"
                >
                  <Send size={20} className={inputValue.trim() ? "text-arogya-primary" : ""} />
                </Button>
              </div>
              
              <VoiceAssistant onRecordingComplete={handleVoiceInput} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chat;