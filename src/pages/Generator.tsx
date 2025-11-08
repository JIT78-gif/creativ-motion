import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { ProductDetails } from "@/components/generator/ProductDetails";
import { VisualAssets } from "@/components/generator/VisualAssets";
import { AdCustomization } from "@/components/generator/AdCustomization";
import { LoadingScreen } from "@/components/generator/LoadingScreen";
import { HeroButton } from "@/components/ui/button-variants";
import { Sparkles } from "lucide-react";

const Generator = () => {
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [formData, setFormData] = useState({
    productName: "",
    productCategory: "",
    productDescription: "",
    keyFeatures: "",
    targetAudience: "",
    brandTone: "",
    productImage: null as File | null,
    modelImage: null as File | null,
    customBackground: null as File | null,
    additionalImages: [] as File[],
    videoDuration: 20,
    adFormat: "9:16",
    backgroundStyle: "studio",
    musicStyle: "upbeat",
    ctaText: "Shop Now",
    additionalInstructions: "",
  });

  const handleSubmit = async () => {
    setIsGenerating(true);
    // TODO: Implement n8n webhook integration
    console.log("Generating video with:", formData);
  };

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  if (isGenerating) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Progress Header */}
          <div className="mb-12 space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">Create Your Ad Video</h1>
              <span className="text-sm text-muted-foreground">
                Step {step} of {totalSteps}
              </span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full h-2 bg-card rounded-full overflow-hidden">
              <div
                className="h-full gradient-primary transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Form Steps */}
          <div className="space-y-8">
            {step === 1 && (
              <ProductDetails formData={formData} setFormData={setFormData} />
            )}
            {step === 2 && (
              <VisualAssets formData={formData} setFormData={setFormData} />
            )}
            {step === 3 && (
              <AdCustomization formData={formData} setFormData={setFormData} />
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-8">
              {step > 1 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-3 rounded-xl border border-border hover:bg-card transition-all"
                >
                  Previous
                </button>
              ) : (
                <div />
              )}

              {step < totalSteps ? (
                <button
                  onClick={() => setStep(step + 1)}
                  className="px-8 py-3 rounded-xl gradient-primary hover:shadow-glow-sm transition-all"
                >
                  Next Step
                </button>
              ) : (
                <HeroButton onClick={handleSubmit} size="lg">
                  Generate My Ad Video
                  <Sparkles className="ml-2 w-5 h-5" />
                </HeroButton>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Generator;
