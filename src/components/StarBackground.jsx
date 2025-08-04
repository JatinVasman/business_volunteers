import { useEffect, useState, useCallback } from "react";
import { useTheme } from "@/hooks/useTheme";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);
  const isDarkMode = useTheme();

  // Debug logging
  useEffect(() => {
    console.log('🌙 StarBackground Theme detected:', isDarkMode ? 'dark' : 'light');
    console.log('📄 Document classes:', document.documentElement.className);
    console.log('⭐ Stars array length:', stars.length);
  }, [isDarkMode, stars.length]);

  const generateStars = useCallback(() => {
    const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 8000);
    const newStars = [];

    console.log(`🌟 Generating ${numberOfStars} stars`);

    for (let i = 0; i < numberOfStars; i++) {
      const star = {
        id: i,
        size: Math.random() * 4 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleDelay: Math.random() * 5,
        twinkleDuration: Math.random() * 3 + 2,
        color: Math.random() > 0.7 ? 'blue' : Math.random() > 0.5 ? 'yellow' : 'white',
        // Add CSS class for animation
        animationClass: Math.random() > 0.5 ? 'star-twinkling' : 'star-twinkling-slow'
      };
      
      newStars.push(star);
    }
    setStars(newStars);
  }, []);

  // Rocket generation removed

  const generateShootingStars = useCallback(() => {
    // Maximum 2 shooting stars at a time
    const numberOfShootingStars = isDarkMode ? 2 : 1;
    const newShootingStars = [];

    for (let i = 0; i < numberOfShootingStars; i++) {
      const meteorType = (i % 2) + 1; // Only use meteor-1 and meteor-2
      
      // Create well-spaced positions for elegant appearance
      let startX, startY;
      if (i === 0) {
        // First meteor: top-left to middle area
        startX = Math.random() * 25; // 0-25% of screen width
        startY = Math.random() * 20; // 0-20% of screen height
      } else {
        // Second meteor: middle-right to bottom area, well separated
        startX = Math.random() * 25 + 50; // 50-75% of screen width
        startY = Math.random() * 30 + 40; // 40-70% of screen height
      }
      
      newShootingStars.push({
        id: i,
        delay: isDarkMode ? (i * 4) + Math.random() * 3 + 2 : Math.random() * 10 + 3, // Staggered timing
        duration: Math.random() * 3 + 2, // Slightly longer duration
        startX,
        startY,
        // Add CSS class for animation
        animationClass: `meteor-${meteorType}`
      });
    }
    setShootingStars(newShootingStars);
  }, [isDarkMode]);

  useEffect(() => {
    generateStars();
    generateShootingStars();

    const handleResize = () => {
      // Debounce resize events for better performance
      clearTimeout(window.resizeTimeout);
      window.resizeTimeout = setTimeout(() => {
        generateStars();
        generateShootingStars();
      }, 100);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(window.resizeTimeout);
    };
  }, [generateStars, generateShootingStars]);

  // Rocket colors removed

  const getStarColor = (color) => {
    switch(color) {
      case 'blue': return '#60A5FA';
      case 'yellow': return '#FDE047';
      default: return '#FFFFFF';
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Twinkling Stars - CSS class based animation */}
      {stars.map((star) => {
        const animationClass = isDarkMode ? star.animationClass : 'star-static';
        
        return (
          <div
            key={`star-${star.id}`}
            className={`absolute rounded-full ${animationClass}`}
            style={{
              width: star.size + "px",
              height: star.size + "px",
              left: star.x + "%",
              top: star.y + "%",
              backgroundColor: getStarColor(star.color),
              opacity: star.opacity,
              boxShadow: `0 0 ${star.size * 2}px ${getStarColor(star.color)}`,
            }}
          />
        );
      })}

      {/* Rockets removed */}

      {/* Shooting Stars - Enhanced in dark mode */}
      {shootingStars.map((shootingStar) => {
        return (
          <div
            key={`shooting-${shootingStar.id}`}
            className={`absolute w-1 h-1 bg-white rounded-full ${shootingStar.animationClass}`}
            style={{
              left: shootingStar.startX + "%",
              top: shootingStar.startY + "%",
              boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.8)",
            }}
          >
            <div className="absolute inset-0 w-20 h-0.5 bg-gradient-to-r from-white via-blue-200 to-transparent -translate-y-0.5"></div>
          </div>
        );
      })}
    </div>
  );
};