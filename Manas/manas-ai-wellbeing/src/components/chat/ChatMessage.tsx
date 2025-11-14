import { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface FormattedContent {
  type: 'formatted';
  content: {
    greeting?: string;
    mainMessage?: string;
    sections?: Array<{
      title: string;
      points: string[];
    }>;
    quote?: string;
    prompt?: string;
  };
}

type MessageContent = string | FormattedContent;

interface ChatMessageProps {
  message: MessageContent;
  isUser: boolean;
  timestamp: Date;
}

const ChatMessage = ({ message, isUser, timestamp }: ChatMessageProps) => {
  const [visible, setVisible] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  }).format(timestamp);

  const userProfileImage = user?.imageUrl;

  // Check if message is formatted
  const isFormatted = typeof message !== 'string' && message.type === 'formatted';
  const formattedData = isFormatted ? message.content : null;

  const renderFormattedMessage = (content: any) => (
    <div className="space-y-3">
      {/* Greeting */}
      {content.greeting && (
        <div className="font-semibold text-blue-300 text-sm">{content.greeting}</div>
      )}
      
      {/* Main Message */}
      {content.mainMessage && (
        <div className="text-white/90 text-sm leading-relaxed">{content.mainMessage}</div>
      )}
      
      {/* Sections with Points */}
      {content.sections?.map((section, index) => (
        <div key={index} className="space-y-2">
          <div className="font-semibold text-yellow-300 text-sm flex items-center gap-2">
            {section.title}
          </div>
          <ul className="space-y-1 ml-2">
            {section.points.map((point, pointIndex) => (
              <li key={pointIndex} className="flex items-start gap-2 text-sm">
                <span className="text-green-400 mt-1 flex-shrink-0">•</span>
                <span className="text-white/80 flex-1">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
      
      {/* Quote */}
      {content.quote && (
        <div className="bg-white/10 p-3 rounded-lg border-l-4 border-purple-400">
          <div className="text-white/70 italic text-sm">"{content.quote}"</div>
        </div>
      )}
      
      {/* Prompt */}
      {content.prompt && (
        <div className="text-blue-300 font-medium text-sm mt-2">{content.prompt}</div>
      )}
    </div>
  );

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
              <AvatarImage src={userProfileImage} />
              <AvatarFallback>
                {user?.firstName?.[0] || user?.username?.[0] || 'U'}
              </AvatarFallback>
            </>
          ) : (
            <>
              <AvatarImage src="/favicon.ico" />
              <AvatarFallback className="bg-gradient-to-br from-arogya-primary to-arogya-accent text-white">
                AI
              </AvatarFallback>
            </>
          )}
        </Avatar>

        <div className={cn(
          "px-4 py-3 rounded-2xl max-w-full",
          isUser 
            ? "bg-arogya-primary text-white rounded-tr-none" 
            : "bg-muted dark:bg-muted/30 rounded-tl-none"
        )}>
          {/* Render formatted or plain text */}
          {isFormatted ? (
            renderFormattedMessage(formattedData)
          ) : (
            <div className="text-sm whitespace-pre-wrap">{message as string}</div>
          )}
          
          <div className={cn(
            "text-xs mt-2 opacity-70 text-right",
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

// import { useState, useEffect } from 'react';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { cn } from '@/lib/utils';

// interface ChatMessageProps {
//   message: string;
//   isUser: boolean;
//   timestamp: Date;
// }

// const ChatMessage = ({ message, isUser, timestamp }: ChatMessageProps) => {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     // Animation delay for message appearance
//     const timer = setTimeout(() => {
//       setVisible(true);
//     }, 100);

//     return () => clearTimeout(timer);
//   }, []);

//   const formattedTime = new Intl.DateTimeFormat('en-US', {
//     hour: '2-digit',
//     minute: '2-digit'
//   }).format(timestamp);

//   return (
//     <div 
//       className={cn(
//         "flex w-full mb-4 transition-opacity duration-300 ease-in",
//         visible ? "opacity-100" : "opacity-0",
//         isUser ? "justify-end" : "justify-start"
//       )}
//     >
//       <div className={cn(
//         "flex items-start max-w-[80%]",
//         isUser ? "flex-row-reverse" : "flex-row"
//       )}>
//         <Avatar className={cn(
//           "h-8 w-8 mt-1",
//           isUser ? "ml-2" : "mr-2"
//         )}>
//           {isUser ? (
//             <>
//               <AvatarImage src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ydldtcGljWVlHbmh6NHQzUEpLNXBEMjhOT08ifQ" />
//               <AvatarFallback>U</AvatarFallback>
//             </>
//           ) : (
//             <>
//               <AvatarImage src="/.public/favicon.ico" />
//               <AvatarFallback className="bg-gradient-to-br from-arogya-primary to-arogya-accent text-white">
//                 AI
//               </AvatarFallback>
//             </>
//           )}
//         </Avatar>

//         <div className={cn(
//           "px-4 py-3 rounded-2xl",
//           isUser 
//             ? "bg-arogya-primary text-white rounded-tr-none" 
//             : "bg-muted dark:bg-muted/30 rounded-tl-none"
//         )}>
//           <div className="text-sm">{message}</div>
//           <div className={cn(
//             "text-xs mt-1 opacity-70 text-right",
//             isUser ? "text-white/70" : "text-muted-foreground"
//           )}>
//             {formattedTime}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatMessage;
