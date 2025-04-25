import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import TabContent from '@/components/TabContent';
import HowItWorks from '@/components/HowItWorks';
import About from '@/components/About';
import FoundersProfile from '@/components/FoundersProfile';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        {/* নতুন ডেমো ডাটাসেট সেকশন */}
        <section>
          <div className="container mx-auto">
            <div className="my-12">
              {/* DemoNewsDataset কম্পোনেন্ট এখানে যুক্ত */}
              {/** এখানে বাংলা ও ইংরেজি ভাষার জন্য চাইলে শিরোনাম পরিবর্তন করতে পারেন, বর্তমানে বাংলা ডেমো শিরোনাম দেওয়া আছে */}
              <React.Suspense fallback={null}>
                {React.createElement(require('@/components/DemoNewsDataset.jsx').default)}
              </React.Suspense>
            </div>
          </div>
        </section>
        {/* আগের analyzeContent, TabContent এবং অন্যান্য সেকশন */}
        
        <section id="content-analyzer" className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-truthseeker-blue mb-8">
              {t('analyzeContent')}
            </h2>
            <TabContent />
          </div>
        </section>
        
        <HowItWorks />
        <About />
        <FoundersProfile />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
