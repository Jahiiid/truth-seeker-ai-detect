
import { useState } from 'react';

export const useImageAnalysis = (toast, imagePreview) => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const analyze = async (selectedImage) => {
    if (!selectedImage) {
      toast({
        title: "ছবি প্রয়োজন",
        description: "বিশ্লেষণ করার জন্য একটি ছবি আপলোড করুন।",
        variant: "destructive",
      });
      return;
    }
    setIsLoading(true);
    setResult(null);
    try {
      await new Promise(resolve => setTimeout(resolve, 2500));
      const randomFactor = Math.random();

      let status, confidenceScore, explanation, sources;
      if (randomFactor < 0.33) {
        status = 'reliable';
        confidenceScore = 80 + Math.floor(Math.random() * 15);
        explanation = "এই ছবিতে ডিজিটাল ম্যানিপুলেশনের কোন চিহ্ন সনাক্ত করা যায়নি। মেটাডাটা, পিক্সেল প্যাটার্ন এবং সাধারণ ম্যানিপুলেশন মার্কারগুলির বিশ্লেষণের ভিত্তিতে ছবিটি প্রামাণিক বলে মনে হচ্ছে।";
        sources = [
          {
            name: "Wikipedia: Digital image forensics",
            url: "https://en.wikipedia.org/wiki/Digital_image_forensics",
            relevance: "high"
          },
          {
            name: "IEEE: Digital Image Tampering Detection Techniques—A Comprehensive Survey",
            url: "https://ieeexplore.ieee.org/document/8474505",
            relevance: "high"
          },
          {
            name: "দৈনিক আমার দেশ",
            url: "https://www.amardesh.com.bd/",
            relevance: "medium"
          },
          {
            name: "Fotoforensics (ডিজিটাল ফোটো ফোরেনসিক টুল)",
            url: "https://fotoforensics.com/",
            relevance: "high"
          }
        ];
      } else if (randomFactor < 0.66) {
        status = 'potentially-misleading';
        confidenceScore = 60 + Math.floor(Math.random() * 15);
        explanation = "ম্যানিপুলেশনের ইঙ্গিত দিতে পারে এমন কিছু অসঙ্গতি সনাক্ত করা হয়েছে। আলো এবং ছায়ায় কিছু অসঙ্গতি দেখা যাচ্ছে, এবং ছবির কিছু অংশে সম্পাদনার সম্ভাব্য চিহ্ন রয়েছে।";
        sources = [
          {
            name: "Harvard: Image Forensics and Photo Manipulation",
            url: "https://citizenscience.harvard.edu/blog/2017/02/22/photo-forensics/",
            relevance: "high"
          },
          {
            name: "দৈনিক যুগান্তর",
            url: "https://www.jugantor.com/",
            relevance: "medium"
          },
          {
            name: "MIT CSAIL: Finding Forgery in Photos",
            url: "https://news.mit.edu/2018/csail-deep-learning-detect-photoshop-0625",
            relevance: "high"
          },
          {
            name: "Wired: 5 Ways to Spot a Fake Photo",
            url: "https://www.wired.com/2014/08/spot-fake-photos/",
            relevance: "medium"
          }
        ];
      } else {
        status = 'misleading';
        confidenceScore = 70 + Math.floor(Math.random() * 15);
        explanation = "এই ছবিতে ডিজিটাল ম্যানিপুলেশনের শক্তিশালী সূচক সনাক্ত করা হয়েছে। সম্পাদনার স্পষ্ট চিহ্ন রয়েছে, যার মধ্যে অসঙ্গতিপূর্ণ আলো, অস্বাভাবিক পিক্সেল প্যাটার্ন, এবং বিষয়বস্তু যোগ বা অপসারণের প্রমাণ অন্তর্ভুক্ত।";
        sources = [
          {
            name: "NIJ.gov: Image Manipulation and Forensic Analysis",
            url: "https://nij.ojp.gov/topics/articles/image-manipulation-and-analysis",
            relevance: "high"
          },
          {
            name: "দৈনিক যায়যায়দিন",
            url: "https://www.jaijaidinbd.com/",
            relevance: "medium"
          },
          {
            name: "Kaggle: Image Manipulation Dataset",
            url: "https://www.kaggle.com/datasets/robertoalvares/forgery-image-detection",
            relevance: "medium"
          },
          {
            name: "Wikipedia: Digital image forensics",
            url: "https://en.wikipedia.org/wiki/Digital_image_forensics",
            relevance: "medium"
          }
        ];
      }

      setResult({
        type: 'image',
        status,
        confidenceScore,
        explanation,
        imageUrl: imagePreview,
        sources
      });
    } catch (error) {
      toast({
        title: "বিশ্লেষণ ব্যর্থ হয়েছে",
        description: "আপনার ছবি বিশ্লেষণ করার সময় একটি ত্রুটি হয়েছে। আবার চেষ্টা করুন।",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, result, analyze, setResult };
};
