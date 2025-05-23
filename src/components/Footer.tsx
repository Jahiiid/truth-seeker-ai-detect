
import React from 'react';
import { cn } from '@/lib/utils';
import { ShieldCheckIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const { t } = useLanguage();
  
  return (
    <footer className={cn("py-6 px-6 bg-truthseeker-blue text-white mt-auto", className)}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <ShieldCheckIcon className="h-6 w-6" />
            <h2 className="text-lg font-bold">{t('siteName')}</h2>
          </div>
          <div className="text-sm text-gray-300">
            <p>{t('footerDesc')}</p>
            <p className="mt-1">{t('footerDesc2')}</p>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-gray-300">{t('copyright')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
