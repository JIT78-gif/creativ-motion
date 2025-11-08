import { Upload, Wand2, Download } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Product & Model Images",
    description: "Simply drag and drop your product photos and optional model images. We support JPG, PNG, and WebP formats.",
    number: "01",
  },
  {
    icon: Wand2,
    title: "Describe Your Vision",
    description: "Tell us about your product, target audience, and preferences. Our AI will craft the perfect ad for you.",
    number: "02",
  },
  {
    icon: Download,
    title: "Get Your Professional Ad",
    description: "Download your stunning video in seconds. Ready to post on Instagram, TikTok, YouTube, or TV.",
    number: "03",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Three simple steps to viral ad content
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full">
                <div className="absolute -top-6 left-8 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                  {step.number}
                </div>

                <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-glow-sm transition-all duration-300">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
