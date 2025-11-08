import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

const tips = [
  "AI-generated ads have 3x higher engagement rates!",
  "Video content gets 1200% more shares than text and images combined",
  "Short-form videos are the #1 trend in social media marketing",
  "80% of users recall a video ad they've seen in the past month",
  "Mobile video consumption rises by 100% every year",
];

const steps = [
  "Uploading your images... ✓",
  "Analyzing product features... 🔍",
  "Generating AI script... 📝",
  "Creating visual elements... 🎨",
  "Rendering video... 🎬",
  "Adding final touches... ✨",
  "Almost there... 🚀",
];

export const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [currentTip, setCurrentTip] = useState(0);

  useEffect(() => {
    // Progress simulation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return prev;
        return prev + Math.random() * 3;
      });
    }, 500);

    // Step progression
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    // Tip rotation
    const tipInterval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length);
    }, 5000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
      clearInterval(tipInterval);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-hero opacity-50" />
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-2xl w-full space-y-8 animate-fade-in">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-primary animate-pulse-glow">
            <Sparkles className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold">Creating Your Masterpiece...</h1>
          <p className="text-xl text-muted-foreground">{steps[currentStep]}</p>
        </div>

        {/* Progress Circle */}
        <div className="flex justify-center">
          <div className="relative w-48 h-48">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-card"
              />
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                className="text-primary transition-all duration-500"
                style={{
                  strokeDasharray: `${2 * Math.PI * 88}`,
                  strokeDashoffset: `${2 * Math.PI * 88 * (1 - progress / 100)}`,
                }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl font-bold text-gradient">{Math.round(progress)}%</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="w-full h-3 bg-card rounded-full overflow-hidden">
            <div
              className="h-full gradient-primary transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-center text-sm text-muted-foreground">
            Your video will be ready in ~{Math.max(5, Math.round((100 - progress) / 2))} seconds
          </p>
        </div>

        {/* Tips */}
        <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-glass border border-primary/20">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div className="space-y-1 flex-1">
              <p className="font-semibold">Did you know?</p>
              <p className="text-muted-foreground animate-fade-in" key={currentTip}>
                {tips[currentTip]}
              </p>
            </div>
          </div>
        </div>

        {/* Processing Steps */}
        <div className="space-y-2">
          {steps.slice(0, currentStep + 1).map((step, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-sm text-muted-foreground animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
