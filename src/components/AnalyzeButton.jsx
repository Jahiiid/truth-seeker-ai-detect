
import React from 'react';
import { UploadIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AnalyzeButton = ({ onClick, isLoading, disabled }) => (
  <Button
    onClick={onClick}
    disabled={disabled}
    className="bg-truthseeker-blue hover:bg-truthseeker-lightblue"
    type="button"
  >
    {isLoading ? (
      <>
        <div className="spinner w-4 h-4 mr-2 border-2 border-white border-l-transparent"></div>
        <span>বিশ্লেষণ করা হচ্ছে...</span>
      </>
    ) : (
      <>
        <UploadIcon className="mr-2 h-4 w-4" />
        <span>ছবি বিশ্লেষণ করুন</span>
      </>
    )}
  </Button>
);

export default AnalyzeButton;
