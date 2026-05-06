
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import EidHeading from "@/components/EidHeading";
import EidPatternBackground from "@/components/EidPatternBackground";
import CrescentMoon from "@/components/CrescentMoon";
import { useEidGreeting } from "@/context/EidGreetingContext";
import { useToast } from "@/components/ui/use-toast";
import { Sparkles, Star } from "lucide-react";

const NameForm = () => {
  const { name, setName, setIsCardReady } = useEidGreeting();
  const [inputName, setInputName] = useState(name);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputName.trim()) {
      toast({
        title: "Please enter your name",
        description: "Your name is required to create a personalized greeting",
        variant: "destructive"
      });
      return;
    }

    setName(inputName.trim());
    setIsCardReady(true);
    navigate('/card');
  };

  return (
    <EidPatternBackground className="flex min-h-screen flex-col justify-between">
      <div className="flex-1 flex items-center justify-center px-4 py-12 sm:py-16">
        <div className="relative w-full max-w-2xl">
          <div className="absolute -left-6 top-8 hidden md:block">
            <CrescentMoon size={42} className="text-eid-gold/80 animate-float" />
          </div>
          <div className="absolute -right-6 bottom-10 hidden md:block">
            <Sparkles size={32} className="text-eid-green/80 animate-pulse" />
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-eid-gold/20 bg-white/80 p-8 shadow-[0_35px_80px_-40px_rgba(15,23,42,0.6)] backdrop-blur-xl ring-1 ring-white/60 sm:p-10">
            <div className="absolute inset-0 bg-gradient-to-br from-eid-gold/10 via-transparent to-eid-green/10 opacity-80 pointer-events-none" />
            <div className="relative">
              <div className="mb-8 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-eid-gold/20 text-eid-gold shadow-inner shadow-eid-gold/20">
                  <Star size={22} />
                </div>
                <EidHeading className="text-4xl sm:text-5xl">Eid Mubarak</EidHeading>
                <p className="mt-2 text-sm uppercase tracking-[0.36em] text-eid-darkgreen/70">
                  Create your special Eid greeting
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-eid-darkgreen font-semibold text-sm md:text-base">
                    Your Name (or your loved one's name)
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your name or your loved one's name"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                    className="border-eid-green/40 bg-white/90 text-eid-darkgreen placeholder:text-eid-darkgreen/40 focus-visible:ring-eid-gold"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-eid-green hover:bg-eid-darkgreen text-white shadow-lg shadow-eid-green/20"
                >
                  Continue
                </Button>
              </form>

              <div className="mt-6 rounded-3xl border border-eid-green/20 bg-eid-green/5 p-4 text-center text-sm text-eid-darkgreen/80">
                Ready to share a beautiful Eid card with your loved ones.
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full border-t border-eid-gold/20 bg-white/70 py-4 text-center text-sm text-eid-darkgreen/80 backdrop-blur-xl">
        <p>With love and blessings made by Moeen ❤️</p>
      </footer>
    </EidPatternBackground>
  );
};

export default NameForm;
