import React, { useState } from 'react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Loader2 } from 'lucide-react';
import VerificationResult from './VerificationResult';
import { useLanguage } from '@/contexts/LanguageContext';
import DemoNewsDataset from './DemoNewsDataset.jsx';

interface TextAnalyzerProps {
  className?: string;
}

const TextAnalyzer: React.FC<TextAnalyzerProps> = ({ className }) => {
  const [content, setContent] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<any | null>(null);
  
  const { t } = useLanguage();
  
  const handleAnalyze = async () => {
    if (!content.trim()) {
      setError(t('contentRequired') as string);
      return;
    }
    
    setError(null);
    setIsAnalyzing(true);
    
    try {
      // Simulate API call with a delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate mock results
      let analysisText = "This content appears to be generally reliable, though some claims would benefit from additional verification. The tone is measured, and the information presented aligns with known facts in most areas.";
      let reliability = Math.random() > 0.5 ? 'reliable' : 'potentially-misleading';
      
      setResult({
        content: content,
        score: 0.78,
        codeType: 'text',
        analysis: analysisText,
        sources: [
          {
            url: "https://example.com/reliable-source-1",
            relevance: "high",
            reliability: reliability
          },
          {
            url: "https://example.com/source-2",
            relevance: "medium",
            reliability: "potentially-misleading"
          }
        ]
      });
    } catch (err) {
      setError(t('analysisFailed') as string);
      console.error(err);
    } finally {
      setIsAnalyzing(false);
    }
  };
  
  if (result) {
    return (
      <div className={className}>
        <VerificationResult 
          type="text"
          status={result.sources.some(s => s.reliability === "potentially-misleading") ? "potentially-misleading" : "reliable"}
          confidenceScore={result.score * 100}
          explanation={result.analysis}
          contentPreview={result.content.substring(0, 200) + (result.content.length > 200 ? '...' : '')}
          sources={result.sources.map(s => ({
            name: new URL(s.url).hostname.replace('www.', ''),
            url: s.url,
            relevance: s.relevance as 'high' | 'medium' | 'low'
          }))}
        />
        {/* বিশ্লেষণের পর নিচে ডেমো বাংলা সংবাদ ডেটাসেট দেখানো হচ্ছে */}
        <div className="mt-8">
          <DemoNewsDataset />
        </div>
        <div className="mt-4">
          <Button onClick={() => setResult(null)} variant="outline">
            {t('newAnalysis')}
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className={className}>
      <div className="space-y-4">
        <Textarea
          placeholder={t('textPlaceholder') as string}
          className="min-h-[200px] resize-y"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        
        {error && (
          <Alert variant="destructive">
            <AlertTitle>{t('contentRequired') as string}</AlertTitle>
            <AlertDescription>
              {t('contentRequiredDesc') as string}
            </AlertDescription>
          </Alert>
        )}
        
        <Button 
          className="w-full"
          onClick={handleAnalyze}
          disabled={isAnalyzing}
        >
          {isAnalyzing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {t('analyzing') as string}
            </>
          ) : (
            t('analyzeContentBtn') as string
          )}
        </Button>
      </div>
    </div>
  );
};

export default TextAnalyzer;
