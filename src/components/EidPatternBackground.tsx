
import React from 'react';
import { Star, Moon, Sparkles, SunMoon, CloudMoon } from 'lucide-react';

interface EidPatternBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const EidPatternBackground = ({ children, className = "" }: EidPatternBackgroundProps) => {
  return (
    <div className={`min-h-screen bg-eid-cream bg-eid-pattern relative overflow-hidden ${className}`}>
      {/* RGB overlay effects */}
      <div className="absolute inset-0 bg-rainbow-gradient opacity-10 mix-blend-overlay animate-rainbow-glow"></div>
      <div className="absolute inset-0 bg-aurora-gradient opacity-15 mix-blend-color animate-color-pulse"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating stars with RGB effects */}
        {[...Array(25)].map((_, i) => (
          <div 
            key={`star-${i}`}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.5 + Math.random() * 0.5,
              transform: `scale(${0.5 + Math.random() * 0.8})`,
              animation: `twinkle ${3 + Math.random() * 5}s ease-in-out infinite, float ${5 + Math.random() * 7}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              filter: `hue-rotate(${Math.random() * 360}deg)`
            }}
          >
            <Star 
              size={10 + Math.random() * 15} 
              className="text-eid-gold animate-rainbow-glow" 
              style={{ 
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 8}s`
              }}
            />
          </div>
        ))}

        {/* RGB animated particles */}
        {[...Array(30)].map((_, i) => (
          <div 
            key={`particle-${i}`}
            className="absolute rounded-full animate-rainbow-glow"
            style={{
              height: `${Math.random() * 8 + 2}px`,
              width: `${Math.random() * 8 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: `hsla(${Math.random() * 360}, 80%, 70%, 0.4)`,
              animation: `float ${6 + Math.random() * 10}s ease-in-out infinite, pulse ${3 + Math.random() * 5}s ease-in-out infinite alternate`,
              animationDelay: `${Math.random() * 5}s`,
              boxShadow: `0 0 ${Math.random() * 8 + 2}px hsla(${Math.random() * 360}, 80%, 70%, 0.6)`
            }}
          />
        ))}

        {/* Moon icons with RGB glow */}
        {[...Array(8)].map((_, i) => (
          <div 
            key={`moon-${i}`}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.3 + Math.random() * 0.4,
              animation: `float ${8 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
              transform: `rotate(${Math.random() * 360}deg) scale(${0.6 + Math.random() * 0.8})`,
              filter: `drop-shadow(0 0 3px hsla(${Math.random() * 360}, 80%, 70%, 0.8))`
            }}
          >
            <Moon 
              size={20 + Math.random() * 15} 
              className="text-eid-green animate-rainbow-glow" 
              style={{ animationDelay: `${Math.random() * 8}s` }}
            />
          </div>
        ))}

        {/* RGB sparkle effects */}
        {[...Array(15)].map((_, i) => (
          <div 
            key={`sparkle-${i}`}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.4 + Math.random() * 0.6,
              animation: `ping ${2 + Math.random() * 3}s cubic-bezier(0, 0, 0.2, 1) infinite`,
              animationDelay: `${Math.random() * 3}s`,
              filter: `hue-rotate(${Math.random() * 360}deg) brightness(1.5)`
            }}
          >
            <Sparkles 
              size={12 + Math.random() * 10} 
              className="text-eid-gold animate-rainbow-glow" 
              style={{ animationDelay: `${Math.random() * 5}s` }}
            />
          </div>
        ))}

        {/* Alternating element with RGB effects */}
        {[...Array(5)].map((_, i) => (
          <div 
            key={`alt-${i}`}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.3 + Math.random() * 0.4,
              animation: `spin-slow ${15 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              filter: `hue-rotate(${Math.random() * 360}deg) drop-shadow(0 0 5px rgba(150, 150, 250, 0.8))`
            }}
          >
            {i % 2 === 0 ? (
              <SunMoon 
                size={25 + Math.random() * 15} 
                className="text-eid-green/40 animate-rainbow-glow" 
                style={{ animationDelay: `${Math.random() * 7}s` }}
              />
            ) : (
              <CloudMoon 
                size={25 + Math.random() * 15} 
                className="text-eid-gold/40 animate-rainbow-glow" 
                style={{ animationDelay: `${Math.random() * 7}s` }}
              />
            )}
          </div>
        ))}

        {/* RGB light beam effects */}
        <div className="absolute h-96 w-96 rounded-full bg-gradient-radial from-red-300/20 to-transparent animate-rainbow-glow"
             style={{ top: '10%', left: '20%', animationDuration: '15s' }}></div>
        <div className="absolute h-80 w-80 rounded-full bg-gradient-radial from-green-300/20 to-transparent animate-rainbow-glow"
             style={{ bottom: '15%', right: '15%', animationDuration: '18s', animationDelay: '2s' }}></div>
        <div className="absolute h-64 w-64 rounded-full bg-gradient-radial from-blue-300/20 to-transparent animate-rainbow-glow"
             style={{ top: '40%', right: '25%', animationDuration: '20s', animationDelay: '4s' }}></div>
        <div className="absolute h-72 w-72 rounded-full bg-gradient-radial from-purple-300/20 to-transparent animate-rainbow-glow"
             style={{ bottom: '30%', left: '10%', animationDuration: '17s', animationDelay: '6s' }}></div>
        
        {/* RGB flowing light trails */}
        <div className="absolute h-1 w-[80%] bg-rainbow-gradient rounded-full animate-drift-x opacity-30"
             style={{ top: '25%', left: '10%', animationDuration: '25s' }}></div>
        <div className="absolute h-1 w-[60%] bg-rainbow-gradient rounded-full animate-drift-x opacity-30"
             style={{ top: '45%', right: '5%', animationDuration: '20s', animationDirection: 'reverse' }}></div>
        <div className="absolute h-1 w-[70%] bg-rainbow-gradient rounded-full animate-drift-x opacity-30"
             style={{ bottom: '35%', left: '15%', animationDuration: '22s' }}></div>
        
        {/* RGB glowing orbs */}
        {[...Array(8)].map((_, i) => (
          <div 
            key={`rgb-orb-${i}`}
            className="absolute rounded-full animate-pulse"
            style={{
              height: `${Math.random() * 16 + 8}px`,
              width: `${Math.random() * 16 + 8}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: `hsla(${Math.random() * 360}, 100%, 70%, 0.3)`,
              boxShadow: `0 0 20px 5px hsla(${Math.random() * 360}, 100%, 70%, 0.4)`,
              animationDuration: `${5 + Math.random() * 7}s`,
              filter: 'blur(2px)'
            }}
          />
        ))}
      </div>
      
      {children}
    </div>
  );
};

export default EidPatternBackground;
