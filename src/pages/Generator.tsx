import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { ProductDetails } from "@/components/generator/ProductDetails";
import { VisualAssets } from "@/components/generator/VisualAssets";
import { AdCustomization } from "@/components/generator/AdCustomization";
import { LoadingScreen } from "@/components/generator/LoadingScreen";
import { ErrorScreen } from "@/components/generator/ErrorScreen";
import { HeroButton } from "@/components/ui/button-variants";
import { Sparkles } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Generator = () => {
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
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
    // Validate required fields
    if (!formData.productName || !formData.productDescription || !formData.productImage) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and upload a product image.",
        variant: "destructive",
      });
      return;
    }

    // Check for webhook URL - in production, this would be an environment variable
    const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;
    
    if (!webhookUrl) {
      setError("Webhook not configured. Please contact support.");
      return;
    }

    setIsGenerating(true);
    setError(null);

    try {
      // Prepare FormData for binary image upload to n8n
      const formDataToSend = new FormData();
      
      // Add text fields as JSON metadata
      const metadata = {
        productName: formData.productName,
        productDescription: formData.productDescription,
        productCategory: formData.productCategory,
        keyFeatures: formData.keyFeatures,
        targetAudience: formData.targetAudience,
        brandTone: formData.brandTone,
        videoDuration: formData.videoDuration,
        adFormat: formData.adFormat,
        backgroundStyle: formData.backgroundStyle,
        musicStyle: formData.musicStyle,
        ctaText: formData.ctaText,
        additionalInstructions: formData.additionalInstructions,
      };
      
      formDataToSend.append('metadata', JSON.stringify(metadata));
      
      // Add images as binary files
      if (formData.productImage) {
        formDataToSend.append('productImage', formData.productImage, formData.productImage.name);
      }
      
      if (formData.modelImage) {
        formDataToSend.append('modelImage', formData.modelImage, formData.modelImage.name);
      }
      
      if (formData.customBackground) {
        formDataToSend.append('customBackground', formData.customBackground, formData.customBackground.name);
      }
      
      // Add additional images as binary files
      formData.additionalImages.forEach((image, index) => {
        formDataToSend.append(`additionalImage_${index}`, image, image.name);
      });

      // Call n8n webhook with binary data
      const response = await fetch(webhookUrl, {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error(`Webhook error: ${response.statusText}`);
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      // Success - LoadingScreen will show
      // In production, you might want to poll for completion or use websockets
      
    } catch (err) {
      setIsGenerating(false);
      const errorMessage = err instanceof Error ? err.message : 'Failed to generate video';
      setError(errorMessage);
      
      toast({
        title: "Generation Failed",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  if (error) {
    return <ErrorScreen error={error} onRetry={() => { setError(null); setStep(1); }} />;
  }

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
