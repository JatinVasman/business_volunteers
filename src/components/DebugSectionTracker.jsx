import { useActiveSection } from '../hooks/useActiveSection';
import { useEffect, useState } from 'react';

export const DebugSectionTracker = () => {
  const activeSection = useActiveSection();
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show debug info only in development
  if (import.meta.env.PROD) {
    return null;
  }

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 z-50 bg-primary text-primary-foreground px-3 py-2 rounded-md text-sm"
      >
        Debug: {isVisible ? 'Hide' : 'Show'}
      </button>

      {/* Debug panel */}
      {isVisible && (
        <div className="fixed bottom-16 right-4 z-50 bg-background border border-border rounded-lg p-4 shadow-lg max-w-xs">
          <h3 className="font-semibold mb-2">Section Tracker Debug</h3>
          <div className="space-y-1 text-sm">
            <div>Active: <span className="font-mono text-primary">{activeSection}</span></div>
            <div>Scroll Y: <span className="font-mono">{Math.round(scrollY)}px</span></div>
            <div className="mt-2 pt-2 border-t border-border">
              <div className="text-xs space-y-1">
                {['home', 'about', 'skills', 'services', 'work-section', 'contact'].map(id => {
                  const element = document.getElementById(id);
                  if (!element) return <div key={id} className="text-red-500">{id}: Not Found</div>;
                  
                  const offset = Math.round(element.offsetTop);
                  const height = Math.round(element.offsetHeight);
                  const viewportCenter = scrollY + window.innerHeight / 2;
                  const isInSection = viewportCenter >= element.offsetTop && viewportCenter < (element.offsetTop + element.offsetHeight);
                  
                  return (
                    <div key={id} className={`${activeSection === id ? 'text-primary font-semibold' : ''} ${isInSection ? 'bg-primary/20 px-1 rounded' : ''}`}>
                      {id}: {offset}px (h:{height}px) {isInSection ? '← CENTER HERE' : ''}
                    </div>
                  );
                })}
                <div className="mt-1 pt-1 border-t border-border text-xs">
                  Viewport Center: {Math.round(scrollY + window.innerHeight / 2)}px
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
