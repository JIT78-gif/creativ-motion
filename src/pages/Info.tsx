import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check } from "lucide-react";

const Info = () => {
  const formats = [
    { name: "Instagram Reels", ratio: "9:16", description: "Perfect for stories and reels" },
    { name: "YouTube Shorts", ratio: "9:16", description: "Optimized for short-form content" },
    { name: "TikTok", ratio: "9:16", description: "Viral-ready vertical videos" },
    { name: "Facebook/Instagram Feed", ratio: "1:1", description: "Square format for feeds" },
    { name: "TV Commercial", ratio: "16:9", description: "Broadcast-quality commercials" },
  ];

  const faqs = [
    {
      question: "How long does it take to generate a video?",
      answer: "Our AI generates professional ad videos in 8-32 seconds depending on complexity and duration. Most videos are ready within 45 seconds.",
    },
    {
      question: "What image formats do you support?",
      answer: "We support JPG, PNG, and WebP formats. Maximum file size is 10MB per image. For best results, use high-quality product photos.",
    },
    {
      question: "Can I customize the background and music?",
      answer: "Yes! Choose from studio, gradient, nature, urban, or abstract backgrounds. You can also upload custom backgrounds. Music styles range from upbeat to dramatic.",
    },
    {
      question: "What video formats do you export?",
      answer: "We export in MP4 format with H.264 encoding, optimized for each platform. Quality ranges from 1080p to 4K depending on your settings.",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! Start creating immediately with no credit card required. Experience the full power of AI ad generation risk-free.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-24 px-4">
        <div className="max-w-4xl mx-auto space-y-24">
          {/* What We Do */}
          <section className="space-y-6 animate-fade-in">
            <h1 className="text-5xl font-bold">
              About <span className="text-gradient">AI Ad Studio</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We leverage cutting-edge artificial intelligence to transform your product images
              into professional advertising videos. Our platform combines computer vision,
              natural language processing, and advanced video generation to create engaging
              content that converts.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're a small business owner, marketing agency, or enterprise brand,
              our AI-powered solution eliminates the need for expensive video production teams
              and complex editing software.
            </p>
          </section>

          {/* Supported Formats */}
          <section className="space-y-8" id="specs">
            <h2 className="text-4xl font-bold">
              Supported <span className="text-gradient">Formats</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {formats.map((format, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold">{format.name}</h3>
                    <span className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm font-mono">
                      {format.ratio}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{format.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Specs */}
          <section className="space-y-8">
            <h2 className="text-4xl font-bold">
              Technical <span className="text-gradient">Specifications</span>
            </h2>
            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-lg font-semibold mb-4">Video Quality</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Resolution: Up to 4K (3840 × 2160)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Frame Rate: 30 or 60 fps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Codec: H.264/H.265</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Audio: AAC 320kbps stereo</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-lg font-semibold mb-4">Duration & Limits</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Video Length: 8-32 seconds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Max Image Size: 10MB per file</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Additional Images: Up to 3</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Generation Time: ~45 seconds average</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="space-y-8" id="faq">
            <h2 className="text-4xl font-bold">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-xl px-6 bg-card"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-lg font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Info;
