import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import EidPatternBackground from "@/components/EidPatternBackground";
import EidHeading from "@/components/EidHeading";
import CrescentMoon from "@/components/CrescentMoon";
import GreetingCard from "@/components/GreetingCard";
import { useEidGreeting } from "@/context/EidGreetingContext";
import { useToast } from "@/components/ui/use-toast";
import { Share, Star, Moon, Sparkles } from "lucide-react";

const GreetingCardPage = () => {
  const { name, isCardReady } = useEidGreeting();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!isCardReady) {
      navigate('/');
    }
  }, [isCardReady, navigate]);

  const copyWebsiteUrl = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        toast({
          title: "Link copied!",
          description: "Share this link with your friends and family",
        });
      })
      .catch(() => {
        toast({
          title: "Copy failed",
          description: "Could not copy the link to clipboard",
        });
      });
  };

  return (
    <EidPatternBackground>
      <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute top-10 left-10 md:left-20 animate-float">
          <CrescentMoon className="animate-glow" />
        </div>
        
        <div className="absolute top-20 left-[30%] animate-drift-x">
          <Sparkles size={24} className="text-eid-gold animate-twinkle" />
        </div>
        
        <div className="absolute top-[40%] right-[20%] animate-drift-y">
          <Star size={28} className="text-eid-gold animate-pulse" />
        </div>
        
        <div className="w-full max-w-2xl animate-fade-in">
          <div className="text-center mb-8">
            <EidHeading className="animate-scale-in text-5xl">Eid Mubarak</EidHeading>
          </div>
          
          <GreetingCard 
            name={name}
            className="mb-8 animate-scale-in"
          />
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              type="button" 
              className="bg-eid-green hover:bg-eid-darkgreen text-white group"
              onClick={copyWebsiteUrl}
            >
              <Share size={18} className="mr-2 group-hover:animate-ping" />
              Share Greeting
            </Button>
            
            <Button 
              type="button" 
              variant="outline"
              className="border-eid-gold text-eid-darkgreen hover:bg-eid-gold/20 group"
              onClick={() => navigate('/')}
            >
              <Star size={18} className="mr-2 text-eid-gold group-hover:animate-spin-slow" />
              Create New
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-10 right-10 md:right-20 animate-float" style={{ animationDelay: '1s' }}>
          <CrescentMoon className="animate-glow" />
        </div>
        
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-eid-gold/60"
                style={{
                  height: `${Math.random() * 4 + 2}px`,
                  width: `${Math.random() * 4 + 2}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
            
            {[...Array(5)].map((_, i) => (
              <div 
                key={`star-${i}`}
                className="absolute"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${4 + Math.random() * 5}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              >
                <Star 
                  size={10 + Math.random() * 15} 
                  className="text-eid-gold animate-pulse" 
                  style={{ animationDuration: `${2 + Math.random() * 3}s` }}
                />
              </div>
            ))}
            
            {[...Array(3)].map((_, i) => (
              <div 
                key={`moon-${i}`}
                className="absolute"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${5 + Math.random() * 3}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                  opacity: 0.7
                }}
              >
                <Moon 
                  size={15 + Math.random() * 10} 
                  className="text-eid-gold" 
                />
              </div>
            ))}
            
            <div className="absolute h-96 w-96 rounded-full bg-gradient-radial from-yellow-200/20 to-transparent animate-pulse"
                 style={{ top: '10%', left: '20%', animationDuration: '8s' }}></div>
            <div className="absolute h-64 w-64 rounded-full bg-gradient-radial from-yellow-200/10 to-transparent animate-pulse"
                 style={{ bottom: '10%', right: '20%', animationDuration: '10s' }}></div>
          </div>
        </div>
      </div>
    </EidPatternBackground>
  );
};

export default GreetingCardPage;
