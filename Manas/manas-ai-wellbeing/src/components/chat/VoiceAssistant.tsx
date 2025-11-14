
import React, { useState, useEffect } from 'react';
import { Mic, MicOff } from 'lucide-react';

interface VoiceAssistantProps {
  onRecordingComplete: (text: string) => void;
}

const VoiceAssistant = ({ onRecordingComplete }: VoiceAssistantProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);

  // In a real implementation, we would use the Web Speech API
  // For now this is just a UI simulation
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    
    if (isRecording) {
      timer = setInterval(() => {
        setRecordingTime(prevTime => prevTime + 1);
        
        // Auto-stop after 10 seconds for the demo
        if (recordingTime >= 10) {
          handleStopRecording();
        }
      }, 1000);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isRecording, recordingTime]);

  const handleStartRecording = () => {
    setIsRecording(true);
    setRecordingTime(0);
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    
    // Simulate transcription
    const mockTexts = [
      "I've been feeling anxious lately.",
      "How can I improve my sleeping habits?",
      "Tell me about breathing exercises for stress.",
      "I need some meditation techniques.",
    ];
    
    setTimeout(() => {
      onRecordingComplete(mockTexts[Math.floor(Math.random() * mockTexts.length)]);
    }, 500);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={isRecording ? handleStopRecording : handleStartRecording}
        className={`voice-assistant ${isRecording ? 'animate-pulse-glow' : ''}`}
        aria-label={isRecording ? "Stop recording" : "Start recording"}
      >
        {isRecording ? (
          <MicOff size={24} className="text-white" />
        ) : (
          <Mic size={24} className="text-white" />
        )}
      </button>
      
      <div className="mt-2 text-sm font-medium">
        {isRecording ? (
          <span className="text-arogya-primary animate-pulse">
            Recording... {recordingTime}s
          </span>
        ) : (
          <span>Manas</span>
        )}
      </div>
    </div>
  );
};

export default VoiceAssistant;
