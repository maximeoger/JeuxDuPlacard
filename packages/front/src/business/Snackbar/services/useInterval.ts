import React, { useMemo } from 'react';

export function useInterval (callback: () => any, delay: number) {
  
  React.useEffect(() => {
    if (delay !== null) {
      let id = setInterval(
        () => callback(),
        delay
      );
      return () => clearInterval(id);
    }
  }, [delay]);

};