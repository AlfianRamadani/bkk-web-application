import clsx from 'clsx';
import React, { createContext, useContext, useEffect, useState } from 'react';

const PreloadContext = createContext(false);

export function PreloadProvider({ children }) {
  const [preloaded, setIsPreloaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsPreloaded(true);
    }, 200);
  }, []);

  return (
    <PreloadContext.Provider value={preloaded}>
      <div
        className={clsx(
          'fixed inset-0 flex items-center justify-center bg-white transition-opacity dark:bg-dark',
          preloaded && 'pointer-events-none opacity-0'
        )}
      />
      {children}
    </PreloadContext.Provider>
  );
}

export const usePreloadState = () => useContext(PreloadContext);
