
import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import VerificationResult from './VerificationResult';
import { useToast } from '@/components/ui/use-toast';
import ImageUpload from './ImageUpload';
import AnalyzeButton from './AnalyzeButton';
import { useImageAnalysis } from './useImageAnalysis';
import { useLanguage } from '@/contexts/LanguageContext';

const ImageAnalyzer = ({ className }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const { toast } = useToast();
  const { t } = useLanguage();

  const { isLoading, result, analyze, setResult } = useImageAnalysis(toast, imagePreview);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      if (!file.type.match('image.*')) {
        toast({
          title: "অবৈধ ফাইল টাইপ",
          description: "অনুগ্রহ করে একটি ছবি ফাইল নির্বাচন করুন (JPEG, PNG, ইত্যাদি)",
          variant: "destructive",
        });
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "ফাইল খুব বড়",
          description: "অনুগ্রহ করে 5MB এর চেয়ে ছোট একটি ছবি নির্বাচন করুন",
          variant: "destructive",
        });
        return;
      }

      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
      setResult(null);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
    setResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleAnalyze = () => {
    analyze(selectedImage);
  };

  return (
    <div className={cn("w-full max-w-3xl mx-auto space-y-4", className)}>
      <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-truthseeker-blue mb-3">ছবি বিশ্লেষণ</h2>
        <ImageUpload
          imagePreview={imagePreview}
          fileInputRef={fileInputRef}
          handleImageChange={handleImageChange}
          handleRemoveImage={handleRemoveImage}
        />
        <div className="flex justify-end mt-3">
          <AnalyzeButton
            onClick={handleAnalyze}
            isLoading={isLoading}
            disabled={isLoading || !selectedImage}
          />
        </div>
      </div>
      {result && <VerificationResult {...result} />}
    </div>
  );
};

export default ImageAnalyzer;
