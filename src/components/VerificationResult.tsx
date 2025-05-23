
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangleIcon, CheckCircleIcon, HelpCircleIcon, InfoIcon, LinkIcon, XCircleIcon } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useLanguage } from '@/contexts/LanguageContext';

export interface VerificationResultProps {
  className?: string;
  type: 'text' | 'image';
  status: 'reliable' | 'potentially-misleading' | 'misleading' | 'unknown';
  confidenceScore: number;
  explanation: string;
  contentPreview?: string;
  imageUrl?: string;
  sources?: {
    name: string;
    url: string;
    relevance: 'high' | 'medium' | 'low';
  }[];
}

const VerificationResult: React.FC<VerificationResultProps> = ({
  className,
  type,
  status,
  confidenceScore,
  explanation,
  contentPreview,
  imageUrl,
  sources = []
}) => {
  const { t } = useLanguage();
  
  const getStatusColor = () => {
    switch (status) {
      case 'reliable':
        return 'bg-truthseeker-green text-white';
      case 'potentially-misleading':
        return 'bg-truthseeker-orange text-white';
      case 'misleading':
        return 'bg-truthseeker-red text-white';
      case 'unknown':
      default:
        return 'bg-gray-400 text-white';
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'reliable':
        return <CheckCircleIcon className="h-5 w-5" />;
      case 'potentially-misleading':
        return <AlertTriangleIcon className="h-5 w-5" />;
      case 'misleading':
        return <XCircleIcon className="h-5 w-5" />;
      case 'unknown':
      default:
        return <HelpCircleIcon className="h-5 w-5" />;
    }
  };

  const getStatusLabel = () => {
    switch (status) {
      case 'reliable':
        return t('likelyReliable');
      case 'potentially-misleading':
        return t('potentiallyMisleading');
      case 'misleading':
        return t('likelyMisleading');
      case 'unknown':
      default:
        return t('unknown');
    }
  };

  const getProgressColor = () => {
    if (status === 'reliable') return 'bg-truthseeker-green';
    if (status === 'potentially-misleading') return 'bg-truthseeker-orange';
    if (status === 'misleading') return 'bg-truthseeker-red';
    return 'bg-gray-400';
  };

  const getRelevanceLabel = (relevance: string) => {
    switch (relevance) {
      case 'high':
        return t('highRelevance');
      case 'medium':
        return t('mediumRelevance');
      case 'low':
        return t('lowRelevance');
      default:
        return relevance;
    }
  };

  return (
    <Card className={cn("w-full max-w-3xl mx-auto fade-in", className)}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl text-truthseeker-blue">{t('verificationResult')}</CardTitle>
          <Badge className={cn("flex items-center gap-1", getStatusColor())}>
            {getStatusIcon()}
            <span>{getStatusLabel()}</span>
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {type === 'image' && imageUrl && (
            <div className="mt-2 rounded-md overflow-hidden border border-gray-200">
              <img src={imageUrl} alt="যাচাইকৃত কন্টেন্ট" className="w-full h-auto max-h-64 object-contain" />
            </div>
          )}
          
          {type === 'text' && contentPreview && (
            <div className="mt-2 p-3 bg-gray-50 rounded-md border border-gray-200 text-gray-700">
              <p className="italic">{contentPreview}</p>
            </div>
          )}
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">{t('reliabilityScore')}</span>
              <span className="text-sm font-medium text-gray-700">{confidenceScore}%</span>
            </div>
            <Progress value={confidenceScore} className={getProgressColor()} />
          </div>
          
          <div>
            <h4 className="font-medium text-truthseeker-blue mb-2">{t('analysis')}</h4>
            <p className="text-gray-700">{explanation}</p>
          </div>
          
          {sources && sources.length > 0 && (
            <div className="mt-2">
              <h4 className="font-medium text-truthseeker-blue mb-2 flex items-center">
                <InfoIcon className="h-4 w-4 mr-1" />
                {t('sources')}
              </h4>
              <div className="space-y-2">
                {sources.map((source, index) => (
                  <div key={index} className="flex items-start gap-2 p-2 bg-gray-50 rounded-md border border-gray-200">
                    <LinkIcon className="h-4 w-4 text-truthseeker-lightblue mt-0.5" />
                    <div>
                      <div className="flex items-center gap-2">
                        <a 
                          href={source.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-truthseeker-blue hover:underline"
                        >
                          {source.name}
                        </a>
                        <Badge 
                          variant="outline"
                          className={cn(
                            "text-xs",
                            source.relevance === 'high' ? "bg-green-50 text-green-700 border-green-200" :
                            source.relevance === 'medium' ? "bg-blue-50 text-blue-700 border-blue-200" : 
                            "bg-gray-50 text-gray-700 border-gray-200"
                          )}
                        >
                          {getRelevanceLabel(source.relevance)}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="mt-4 text-sm text-gray-500 bg-gray-50 p-3 rounded-md">
            <p className="font-medium text-truthseeker-lightblue mb-1">{t('specialNote')}</p>
            <p>{t('specialNoteText')}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VerificationResult;
