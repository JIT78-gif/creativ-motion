import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductDetailsProps {
  formData: any;
  setFormData: (data: any) => void;
}

export const ProductDetails = ({ formData, setFormData }: ProductDetailsProps) => {
  return (
    <div className="space-y-6 p-8 rounded-2xl bg-card border border-border animate-fade-in">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Product Details</h2>
        <p className="text-muted-foreground">Tell us about your product</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="productName">Product Name *</Label>
          <Input
            id="productName"
            placeholder="e.g., Premium Wireless Headphones"
            value={formData.productName}
            onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
            className="bg-input"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="productCategory">Product Category *</Label>
          <Select
            value={formData.productCategory}
            onValueChange={(value) => setFormData({ ...formData, productCategory: value })}
          >
            <SelectTrigger className="bg-input">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fashion">Fashion & Apparel</SelectItem>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="food">Food & Beverage</SelectItem>
              <SelectItem value="beauty">Beauty & Cosmetics</SelectItem>
              <SelectItem value="home">Home & Garden</SelectItem>
              <SelectItem value="sports">Sports & Fitness</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="productDescription">Product Description *</Label>
          <Textarea
            id="productDescription"
            placeholder="Describe your product in a few sentences..."
            value={formData.productDescription}
            onChange={(e) => setFormData({ ...formData, productDescription: e.target.value })}
            className="bg-input min-h-24"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="keyFeatures">Key Features</Label>
          <Textarea
            id="keyFeatures"
            placeholder="• Noise-canceling technology&#10;• 40-hour battery life&#10;• Premium sound quality"
            value={formData.keyFeatures}
            onChange={(e) => setFormData({ ...formData, keyFeatures: e.target.value })}
            className="bg-input min-h-24"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="targetAudience">Target Audience</Label>
          <Input
            id="targetAudience"
            placeholder="e.g., Young professionals, fitness enthusiasts"
            value={formData.targetAudience}
            onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
            className="bg-input"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="brandTone">Brand Tone</Label>
          <Select
            value={formData.brandTone}
            onValueChange={(value) => setFormData({ ...formData, brandTone: value })}
          >
            <SelectTrigger className="bg-input">
              <SelectValue placeholder="Select tone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="professional">Professional</SelectItem>
              <SelectItem value="fun">Fun & Playful</SelectItem>
              <SelectItem value="luxury">Luxury & Premium</SelectItem>
              <SelectItem value="energetic">Energetic & Bold</SelectItem>
              <SelectItem value="minimal">Minimal & Clean</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
