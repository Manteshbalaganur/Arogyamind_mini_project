
import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatMessage = ({ message, isUser, timestamp }: ChatMessageProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Animation delay for message appearance
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  }).format(timestamp);

  return (
    <div 
      className={cn(
        "flex w-full mb-4 transition-opacity duration-300 ease-in",
        visible ? "opacity-100" : "opacity-0",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div className={cn(
        "flex items-start max-w-[80%]",
        isUser ? "flex-row-reverse" : "flex-row"
      )}>
        <Avatar className={cn(
          "h-8 w-8 mt-1",
          isUser ? "ml-2" : "mr-2"
        )}>
          {isUser ? (
            <>
              <AvatarImage src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ydldtcGljWVlHbmh6NHQzUEpLNXBEMjhOT08ifQ" />
              <AvatarFallback>U</AvatarFallback>
            </>
          ) : (
            <>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="bg-gradient-to-br from-arogya-primary to-arogya-accent text-white">
                AI
              </AvatarFallback>
            </>
          )}
        </Avatar>

        <div className={cn(
          "px-4 py-3 rounded-2xl",
          isUser 
            ? "bg-arogya-primary text-white rounded-tr-none" 
            : "bg-muted dark:bg-muted/30 rounded-tl-none"
        )}>
          <div className="text-sm">{message}</div>
          <div className={cn(
            "text-xs mt-1 opacity-70 text-right",
            isUser ? "text-white/70" : "text-muted-foreground"
          )}>
            {formattedTime}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
