import { useState, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';

export const useDemo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const startDemo = useCallback(async (demoType: string) => {
    setIsLoading(true);
    
    // Simulate demo loading
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    
    toast({
      title: "Demo Started",
      description: `${demoType} demo is now running. Experience the future of retail!`,
    });
  }, [toast]);

  const scheduleDemo = useCallback(async (demoType: string) => {
    setIsLoading(true);
    
    // Simulate scheduling
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    
    toast({
      title: "Demo Scheduled",
      description: `Your ${demoType} demo has been scheduled. We'll contact you shortly.`,
    });
  }, [toast]);

  return {
    isLoading,
    startDemo,
    scheduleDemo
  };
};