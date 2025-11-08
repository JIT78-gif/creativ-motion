import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Smartphone, Square, Tv } from "lucide-react";

interface AdCustomizationProps {
  formData: any;
  setFormData: (data: any) => void;
}

export const AdCustomization = ({ formData, setFormData }: AdCustomizationProps) => {
  return (
    <div className="space-y-6 p-8 rounded-2xl bg-card border border-border animate-fade-in">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Ad Preferences</h2>
        <p className="text-muted-foreground">Customize your video ad settings</p>
      </div>

      <div className="space-y-6">
        {/* Video Duration */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label>Video Duration</Label>
            <span className="text-sm text-primary font-mono">{formData.videoDuration} seconds</span>
          </div>
          <Slider
            value={[formData.videoDuration]}
            onValueChange={([value]) => setFormData({ ...formData, videoDuration: value })}
            min={8}
            max={32}
            step={1}
            className="w-full"
          />
        </div>

        {/* Ad Format */}
        <div className="space-y-3">
          <Label>Ad Format</Label>
          <RadioGroup
            value={formData.adFormat}
            onValueChange={(value) => setFormData({ ...formData, adFormat: value })}
            className="grid grid-cols-3 gap-4"
          >
            <div>
              <RadioGroupItem value="9:16" id="vertical" className="peer sr-only" />
              <Label
                htmlFor="vertical"
                className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-border cursor-pointer hover:border-primary/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 transition-all"
              >
                <Smartphone className="w-8 h-8" />
                <span className="font-medium">Stories</span>
                <span className="text-xs text-muted-foreground">9:16</span>
              </Label>
            </div>
            <div>
              <RadioGroupItem value="1:1" id="square" className="peer sr-only" />
              <Label
                htmlFor="square"
                className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-border cursor-pointer hover:border-primary/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 transition-all"
              >
                <Square className="w-8 h-8" />
                <span className="font-medium">Feed</span>
                <span className="text-xs text-muted-foreground">1:1</span>
              </Label>
            </div>
            <div>
              <RadioGroupItem value="16:9" id="landscape" className="peer sr-only" />
              <Label
                htmlFor="landscape"
                className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-border cursor-pointer hover:border-primary/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 transition-all"
              >
                <Tv className="w-8 h-8" />
                <span className="font-medium">TV/YT</span>
                <span className="text-xs text-muted-foreground">16:9</span>
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Background Style */}
        <div className="space-y-2">
          <Label htmlFor="backgroundStyle">Background Style</Label>
          <Select
            value={formData.backgroundStyle}
            onValueChange={(value) => setFormData({ ...formData, backgroundStyle: value })}
          >
            <SelectTrigger className="bg-input">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="studio">Studio White</SelectItem>
              <SelectItem value="gradient">Gradient Colors</SelectItem>
              <SelectItem value="nature">Nature/Outdoor</SelectItem>
              <SelectItem value="urban">Urban/Street</SelectItem>
              <SelectItem value="abstract">Abstract/Artistic</SelectItem>
              <SelectItem value="custom">Custom Upload</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Music Style */}
        <div className="space-y-2">
          <Label htmlFor="musicStyle">Music Style</Label>
          <Select
            value={formData.musicStyle}
            onValueChange={(value) => setFormData({ ...formData, musicStyle: value })}
          >
            <SelectTrigger className="bg-input">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="upbeat">Upbeat & Energetic</SelectItem>
              <SelectItem value="chill">Chill & Relaxed</SelectItem>
              <SelectItem value="dramatic">Dramatic & Epic</SelectItem>
              <SelectItem value="corporate">Corporate & Professional</SelectItem>
              <SelectItem value="electronic">Electronic & Modern</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* CTA Text */}
        <div className="space-y-2">
          <Label htmlFor="ctaText">Call-to-Action Text</Label>
          <Input
            id="ctaText"
            placeholder="e.g., Shop Now, Learn More, Get Yours"
            value={formData.ctaText}
            onChange={(e) => setFormData({ ...formData, ctaText: e.target.value })}
            className="bg-input"
          />
        </div>

        {/* Additional Instructions */}
        <div className="space-y-2">
          <Label htmlFor="additionalInstructions">Additional Instructions</Label>
          <Textarea
            id="additionalInstructions"
            placeholder="Tell us your specific vision or any special requirements..."
            value={formData.additionalInstructions}
            onChange={(e) => setFormData({ ...formData, additionalInstructions: e.target.value })}
            className="bg-input min-h-24"
          />
        </div>
      </div>
    </div>
  );
};
