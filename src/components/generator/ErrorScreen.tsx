import { AlertCircle } from "lucide-react";
import { HeroButton } from "@/components/ui/button-variants";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface ErrorScreenProps {
  error: string;
  onRetry: () => void;
}

export const ErrorScreen = ({ error, onRetry }: ErrorScreenProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full text-center space-y-6 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-destructive/10 border-2 border-destructive/20">
            <AlertCircle className="w-10 h-10 text-destructive" />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Generation Failed</h1>
            <p className="text-muted-foreground">
              We encountered an issue while creating your ad video.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-destructive/5 border border-destructive/20">
            <p className="text-sm text-destructive font-medium">{error}</p>
          </div>

          <div className="space-y-3 pt-4">
            <HeroButton onClick={onRetry} size="lg" className="w-full">
              Try Again
            </HeroButton>
            
            <p className="text-xs text-muted-foreground">
              If the problem persists, please contact support
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
