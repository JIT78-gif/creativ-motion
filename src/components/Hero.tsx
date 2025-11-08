import { HeroButton } from "./ui/button-variants";
import { Link } from "react-router-dom";
import { Sparkles, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-hero opacity-90" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-4">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary">AI-Powered Video Generation</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Create Stunning Ad Videos
          <br />
          <span className="text-gradient">in Seconds with AI</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          Transform your products into viral ads - No editing skills required.
          Professional quality videos optimized for every platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Link to="/generator">
            <HeroButton size="lg">
              Start Creating Free
              <Sparkles className="ml-2 w-5 h-5" />
            </HeroButton>
          </Link>
          <Link to="/info">
            <button className="flex items-center gap-2 px-8 py-4 rounded-xl border border-primary/30 hover:bg-primary/10 transition-all duration-300 backdrop-blur-sm">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">8-32s</div>
            <div className="text-sm text-muted-foreground">Video Duration</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">5+</div>
            <div className="text-sm text-muted-foreground">Ad Formats</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">AI</div>
            <div className="text-sm text-muted-foreground">Powered</div>
          </div>
        </div>
      </div>
    </section>
  );
};
