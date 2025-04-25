
import React from 'react';
import { ImageIcon, XIcon } from 'lucide-react';

const ImageUpload = ({
  imagePreview,
  fileInputRef,
  handleImageChange,
  handleRemoveImage,
}) => {
  return (
    <>
      {!imagePreview ? (
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-truthseeker-blue transition-colors"
          onClick={() => fileInputRef.current?.click()}
        >
          <ImageIcon className="h-10 w-10 text-gray-400 mb-3" />
          <p className="text-gray-600 mb-1">ছবি আপলোড করতে ক্লিক করুন বা টেনে আনুন</p>
          <p className="text-xs text-gray-500">সমর্থিত: JPG, PNG, GIF (সর্বোচ্চ 5MB)</p>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            className="hidden"
            accept="image/*"
          />
        </div>
      ) : (
        <div className="relative">
          <div className="rounded-lg overflow-hidden border border-gray-200">
            <img src={imagePreview} alt="Preview" className="w-full h-auto max-h-64 object-contain" />
          </div>
          <button
            className="absolute top-2 right-2 bg-black bg-opacity-60 rounded-full p-1 text-white hover:bg-opacity-80 transition-opacity"
            onClick={handleRemoveImage}
            type="button"
          >
            <XIcon className="h-4 w-4" />
          </button>
        </div>
      )}
    </>
  );
};
export default ImageUpload;
