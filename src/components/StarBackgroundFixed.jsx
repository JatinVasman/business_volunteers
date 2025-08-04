import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/useTheme";

export const StarBackgroundFixed = () => {
  const [stars, setStars] = useState([]);
  const isDarkMode = useTheme();

  useEffect(() => {
    console.log('🚀 StarBackgroundFixed: Theme is', isDarkMode ? 'DARK' : 'LIGHT');
    
    // Generate simple stars for testing
    const testStars = [];
    for (let i = 0; i < 20; i++) {
      testStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 2,
        animationClass: isDarkMode ? 'star-twinkling' : 'star-static'
      });
    }
    setStars(testStars);
    console.log('🌟 Generated', testStars.length, 'test stars');
  }, [isDarkMode]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Simple test stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute rounded-full bg-white ${star.animationClass}`}
          style={{
            left: star.x + '%',
            top: star.y + '%',
            width: star.size + 'px',
            height: star.size + 'px',
          }}
        />
      ))}
      
      {/* Debug info */}
      <div className="absolute top-10 left-10 text-white bg-black/50 p-2 rounded text-sm">
        Theme: {isDarkMode ? 'DARK' : 'LIGHT'}<br/>
        Stars: {stars.length}<br/>
        Animation: {isDarkMode ? 'ON' : 'OFF'}
      </div>
    </div>
  );
};
