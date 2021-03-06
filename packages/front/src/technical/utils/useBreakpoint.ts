import React, { useState, useEffect } from 'react';

enum BreakpointPixelSizes {
  BpMobileLarge = 480,
  BpTablet = 768,
  BpDesktopSmall = 1024,
  BpDesktop = 1200,
}

const getDeviceConfig = (width: number) => {
  if(width < BreakpointPixelSizes.BpMobileLarge) {
    return 'mobile-large'
  } else if(width >= BreakpointPixelSizes.BpMobileLarge && width < BreakpointPixelSizes.BpTablet ) {
    return 'tablet'
  } else if(width >= BreakpointPixelSizes.BpTablet && width < BreakpointPixelSizes.BpDesktopSmall) {
    return 'desktop-small'
  } else if(width >= BreakpointPixelSizes.BpDesktop) {
    return 'desktop'
  }
}

const useBreakpoint = (): string => {
  const [brkPnt, setBrkPnt] = useState<string>('mobile-large');
  
  
  useEffect(function onMount() {

    const calcInnerWidth = function() {
      setBrkPnt(getDeviceConfig(window.innerWidth))
    }; 

    calcInnerWidth();

    window.addEventListener('resize', calcInnerWidth);

    return () => window.removeEventListener('resize', calcInnerWidth) 

  },[]);

  return brkPnt;
}

export default useBreakpoint;