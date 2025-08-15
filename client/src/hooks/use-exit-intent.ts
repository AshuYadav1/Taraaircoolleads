import { useState, useEffect } from "react";

export function useExitIntent() {
  const [showExitIntent, setShowExitIntent] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !showExitIntent) {
        setShowExitIntent(true);
      }
    };

    const handleBeforeUnload = () => {
      if (!showExitIntent) {
        setShowExitIntent(true);
      }
    };

    // Show after 30 seconds of inactivity
    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (!showExitIntent) {
          setShowExitIntent(true);
        }
      }, 30000);
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('mousemove', resetTimer);
    document.addEventListener('keypress', resetTimer);

    resetTimer();

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('mousemove', resetTimer);
      document.removeEventListener('keypress', resetTimer);
      clearTimeout(timer);
    };
  }, [showExitIntent]);

  const closeExitIntent = () => setShowExitIntent(false);

  return { showExitIntent, closeExitIntent };
}