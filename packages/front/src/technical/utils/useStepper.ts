import React, { useState, useEffect } from 'react';


function useStepper (steps: string[]) {
  const [currentStep, setCurrentStep] = useState<string>(steps[0]);
  const [history, setHistory] = useState<string[]>([steps[0]]);

  const setNextStep = (stepId: string) => {
    let nextStep = steps.find(step => step === stepId);
    console.log({steps, nextStep});
    if(nextStep) {
      setHistory([...history, nextStep]);
      setCurrentStep(nextStep);
    }
  };

  const removeLastViewOfHistory = () => {
    let cancelledHistory = history;
    cancelledHistory.pop();
    setHistory(cancelledHistory);
  }

  const goToPreviousStep = () => {
    removeLastViewOfHistory();
    setCurrentStep(history[history.length-1]);
  };
  
  return {
    setNextStep,
    currentStep,
    goToPreviousStep
  }
}

export default useStepper;