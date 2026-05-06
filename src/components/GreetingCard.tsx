
import React, { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import CrescentMoon from "@/components/CrescentMoon";
import { cn } from "@/lib/utils";
import { Sparkles, Stars, Music, VolumeX, Star, MoonIcon } from "lucide-react";

interface GreetingCardProps {
  name: string;
  className?: string;
}

const GreetingCard = ({ name, className }: GreetingCardProps) => {
  const [colorIndex, setColorIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const rgbColors = [
    'from-purple-500 to-pink-500',
    'from-blue-500 to-cyan-500',
    'from-green-500 to-emerald-500',
    'from-yellow-500 to-amber-500',
    'from-red-500 to-rose-500'
  ];
  
  // Change colors every 3 seconds
  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % rgbColors.length);
    }, 3000);
    
    return () => clearInterval(colorInterval);
  }, []);

  // Initialize audio element and start playing automatically
  useEffect(() => {
    audioRef.current = new Audio("/sound.mp3");
    audioRef.current.loop = true;
    
    // Try to autoplay when component mounts
    const playPromise = audioRef.current.play();
    
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.error("Audio autoplay failed:", error);
        setIsPlaying(false);
        // User interaction may be required due to browser autoplay policy
      });
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Play/pause background music
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error("Audio playback failed:", error);
          });
        }
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  return (
    <Card className={cn(
      "w-full max-w-xl mx-auto overflow-hidden transition-all duration-700",
      "border-4 border-eid-gold shadow-xl shadow-yellow-300/30",
      `bg-gradient-to-br ${rgbColors[colorIndex]}`,
      className
    )}>
      <CardContent className="p-8 relative text-center">
        <div className="absolute top-2 right-2 flex gap-2">
          <button 
            onClick={toggleMusic}
            className="h-8 w-8 rounded-full bg-eid-gold/30 hover:bg-eid-gold flex items-center justify-center text-white"
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? <Music size={16} className="animate-pulse" /> : <VolumeX size={16} />}
          </button>
          <CrescentMoon size="sm" className="animate-float" />
        </div>
        
        <div className="absolute -left-2 top-10">
          <Sparkles size={20} className="text-yellow-300 animate-pulse" />
        </div>
        
        <div className="absolute -right-2 bottom-10">
          <Stars size={20} className="text-yellow-300 animate-pulse" />
        </div>
        
        <div className="mb-6 pt-4 animate-fade-in z-10 relative">
          <h2 className="text-5xl font-serif font-bold text-white drop-shadow-lg animate-scale-in">
            Eid Mubarak
          </h2>
          {name && (
            <p className="mt-6 text-3xl font-medium text-white/90 drop-shadow-md animate-float">
              {name}
            </p>
          )}
        </div>
        
        <div className="mt-8 text-base text-white/90 animate-fade-in">
          <p className="mb-2">May this special day bring peace, happiness, and prosperity to you and your family.</p>
          <p className="mb-2">Wishing you joy, health, and blessings on this auspicious occasion.</p>
          <p>May the divine blessings of Allah bring you hope, faith, and joy on Eid and forever.</p>
        </div>
        
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Animated stars in random positions */}
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-yellow-300/60"
              style={{
                height: `${Math.random() * 3 + 1}px`,
                width: `${Math.random() * 3 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
          
          {/* Animated particles */}
          {[...Array(15)].map((_, i) => (
            <div 
              key={`particle-${i}`}
              className="absolute rounded-full bg-white/40"
              style={{
                height: `${Math.random() * 6 + 2}px`,
                width: `${Math.random() * 6 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${4 + Math.random() * 6}s ease-in-out infinite, pulse ${2 + Math.random() * 4}s ease-in-out infinite alternate`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
          
          {/* Animated star icons */}
          {[...Array(8)].map((_, i) => (
            <div 
              key={`star-${i}`}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${4 + Math.random() * 5}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            >
              <Star 
                size={8 + Math.random() * 12} 
                className="text-yellow-200 animate-pulse" 
                style={{ animationDuration: `${2 + Math.random() * 3}s` }}
              />
            </div>
          ))}
          
          {/* Animated moon icons */}
          {[...Array(4)].map((_, i) => (
            <div 
              key={`moon-${i}`}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: 0.6,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            >
              <MoonIcon 
                size={10 + Math.random() * 8} 
                className="text-yellow-100" 
              />
            </div>
          ))}
          
          {/* Light beam effects */}
          <div className="absolute h-40 w-40 rounded-full bg-gradient-radial from-white/20 to-transparent animate-pulse"
               style={{ top: '20%', left: '30%', animationDuration: '7s' }}></div>
          <div className="absolute h-32 w-32 rounded-full bg-gradient-radial from-yellow-200/10 to-transparent animate-pulse"
               style={{ bottom: '20%', right: '20%', animationDuration: '9s' }}></div>
               
          {/* Sparkle effects */}
          <div className="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-yellow-300 animate-ping opacity-75"
               style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 right-1/3 h-2 w-2 rounded-full bg-yellow-300 animate-ping opacity-75"
               style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></div>
          <div className="absolute top-2/3 left-1/2 h-2 w-2 rounded-full bg-yellow-300 animate-ping opacity-75"
               style={{ animationDuration: '4s', animationDelay: '2s' }}></div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GreetingCard;
