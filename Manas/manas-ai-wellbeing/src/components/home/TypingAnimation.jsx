
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const TypingAnimation = ({ phrases, typingSpeed = 100, pauseTime = 2000 }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isTyping) {
      if (currentText.length < currentPhrase.length) {
        // Still typing the current phrase
        const timeout = setTimeout(() => {
          setCurrentText(currentPhrase.substring(0, currentText.length + 1));
        }, typingSpeed);
        
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, pause before deleting
        setIsTyping(false);
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseTime);
        
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length === 0) {
        // Move to next phrase
        setIsTyping(true);
        setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
      } else {
        // Deleting the current phrase
        const timeout = setTimeout(() => {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        }, typingSpeed / 2);
        
        return () => clearTimeout(timeout);
      }
    }
  }, [currentText, currentPhraseIndex, isTyping, phrases, pauseTime, typingSpeed]);

  return (
    <div className="inline-block">
      <span className="relative">{currentText}</span>
      <span className="typewriter-cursor">|</span>
    </div>
  );
};

export default TypingAnimation;
