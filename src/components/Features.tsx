import { Zap, Palette, Smartphone, Bot, Target, DollarSign } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: Zap,
    title: "Lightning-Fast Generation",
    description: "Generate professional ad videos in 8-32 seconds. No waiting, just results.",
  },
  {
    icon: Palette,
    title: "Custom Backgrounds & Models",
    description: "Choose from studio, gradient, nature, urban styles or upload your own.",
  },
  {
    icon: Smartphone,
    title: "Optimized for Social Media & TV",
    description: "Perfect formats for Instagram, TikTok, YouTube, and TV commercials.",
  },
  {
    icon: Bot,
    title: "AI-Powered Professional Results",
    description: "Advanced AI creates engaging scripts and stunning visuals automatically.",
  },
  {
    icon: Target,
    title: "Multiple Ad Formats",
    description: "9:16 for Stories, 1:1 for Feed, 16:9 for TV. All formats covered.",
  },
  {
    icon: DollarSign,
    title: "No Credit Card Required",
    description: "Start creating amazing ad videos today. Free trial, no strings attached.",
  },
];

export const Features = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = featureRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1 && !visibleCards.includes(index)) {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 100);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleCards]);

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Choose <span className="text-gradient">AI Ad Generator</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create viral advertising content in minutes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (featureRefs.current[index] = el)}
              className={`group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 ${
                visibleCards.includes(index) ? "animate-slide-up" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-glow-sm transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
