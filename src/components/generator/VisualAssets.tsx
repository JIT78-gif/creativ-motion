import { Label } from "@/components/ui/label";
import { Upload, X, Image as ImageIcon } from "lucide-react";
import { useRef, useState } from "react";

interface VisualAssetsProps {
  formData: any;
  setFormData: (data: any) => void;
}

export const VisualAssets = ({ formData, setFormData }: VisualAssetsProps) => {
  const productImageRef = useRef<HTMLInputElement>(null);
  const modelImageRef = useRef<HTMLInputElement>(null);
  const bgImageRef = useRef<HTMLInputElement>(null);
  const additionalImagesRef = useRef<HTMLInputElement>(null);

  const [productPreview, setProductPreview] = useState<string | null>(null);
  const [modelPreview, setModelPreview] = useState<string | null>(null);
  const [bgPreview, setBgPreview] = useState<string | null>(null);
  const [additionalPreviews, setAdditionalPreviews] = useState<string[]>([]);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string,
    setPreview?: (url: string | null) => void
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, [field]: file });
      if (setPreview) {
        const reader = new FileReader();
        reader.onloadend = () => setPreview(reader.result as string);
        reader.readAsDataURL(file);
      }
    }
  };

  const handleAdditionalImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData({ ...formData, additionalImages: files });
    
    const previews: string[] = [];
    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        previews.push(reader.result as string);
        if (previews.length === files.length) {
          setAdditionalPreviews(previews);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="space-y-6 p-8 rounded-2xl bg-card border border-border animate-fade-in">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Upload Images</h2>
        <p className="text-muted-foreground">Add your product and optional model images</p>
      </div>

      <div className="space-y-6">
        {/* Product Image */}
        <div className="space-y-2">
          <Label>Product Image *</Label>
          <div
            onClick={() => productImageRef.current?.click()}
            className="border-2 border-dashed border-border rounded-xl p-8 hover:border-primary/50 transition-all cursor-pointer group relative overflow-hidden"
          >
            <input
              ref={productImageRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFileChange(e, "productImage", setProductPreview)}
            />
            {productPreview ? (
              <div className="relative">
                <img src={productPreview} alt="Product" className="w-full h-48 object-contain rounded-lg" />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setProductPreview(null);
                    setFormData({ ...formData, productImage: null });
                  }}
                  className="absolute top-2 right-2 w-8 h-8 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="text-center space-y-2">
                <Upload className="w-12 h-12 mx-auto text-muted-foreground group-hover:text-primary transition-colors" />
                <div>
                  <p className="font-medium">Click to upload product image</p>
                  <p className="text-sm text-muted-foreground">JPG, PNG, or WebP • Max 10MB</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Model Image */}
        <div className="space-y-2">
          <Label>Model Image (Optional)</Label>
          <p className="text-sm text-muted-foreground">For fashion or lifestyle products</p>
          <div
            onClick={() => modelImageRef.current?.click()}
            className="border-2 border-dashed border-border rounded-xl p-8 hover:border-primary/50 transition-all cursor-pointer group"
          >
            <input
              ref={modelImageRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFileChange(e, "modelImage", setModelPreview)}
            />
            {modelPreview ? (
              <div className="relative">
                <img src={modelPreview} alt="Model" className="w-full h-48 object-contain rounded-lg" />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setModelPreview(null);
                    setFormData({ ...formData, modelImage: null });
                  }}
                  className="absolute top-2 right-2 w-8 h-8 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="text-center space-y-2">
                <ImageIcon className="w-12 h-12 mx-auto text-muted-foreground group-hover:text-primary transition-colors" />
                <div>
                  <p className="font-medium">Click to upload model image</p>
                  <p className="text-sm text-muted-foreground">Optional for fashion/lifestyle ads</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Additional Images */}
        <div className="space-y-2">
          <Label>Additional Images (Optional)</Label>
          <p className="text-sm text-muted-foreground">Up to 3 additional product images</p>
          <div
            onClick={() => additionalImagesRef.current?.click()}
            className="border-2 border-dashed border-border rounded-xl p-6 hover:border-primary/50 transition-all cursor-pointer"
          >
            <input
              ref={additionalImagesRef}
              type="file"
              accept="image/*"
              multiple
              max={3}
              className="hidden"
              onChange={handleAdditionalImages}
            />
            {additionalPreviews.length > 0 ? (
              <div className="grid grid-cols-3 gap-4">
                {additionalPreviews.map((preview, i) => (
                  <img key={i} src={preview} alt={`Additional ${i + 1}`} className="w-full h-24 object-cover rounded-lg" />
                ))}
              </div>
            ) : (
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Click to add more images</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
