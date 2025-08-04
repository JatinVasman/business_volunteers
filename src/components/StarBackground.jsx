import { useEffect, useState, useCallback } from "react";
import { useTheme } from "@/hooks/useTheme";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [rockets, setRockets] = useState([]);
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

  const generateRockets = useCallback(() => {
    const numberOfRockets = 3;
    const newRockets = [];

    for (let i = 0; i < numberOfRockets; i++) {
      const direction = Math.random() > 0.5 ? 'right' : 'left';
      const path = Math.random() > 0.5 ? 'straight' : 'curved';
      
      newRockets.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 10 + 5,
        duration: Math.random() * 15 + 10,
        direction,
        path,
        // Add CSS class for animation
        animationClass: `rocket-${direction}-${path}`
      });
    }
    setRockets(newRockets);
  }, []);

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
    generateRockets();
    generateShootingStars();

    const handleResize = () => {
      // Debounce resize events for better performance
      clearTimeout(window.resizeTimeout);
      window.resizeTimeout = setTimeout(() => {
        generateStars();
        generateRockets();
        generateShootingStars();
      }, 100);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(window.resizeTimeout);
    };
  }, [generateStars, generateRockets, generateShootingStars]);

  // Get theme-appropriate rocket colors
  const getRocketColors = useCallback((isDark) => ({
    body: isDark 
      ? 'linear-gradient(to top, #4a5568, #2d3748, #1a202c)'
      : 'linear-gradient(to top, #9ca3af, #e5e7eb, #ffffff)',
    window: isDark ? 'rgba(96, 165, 250, 0.6)' : '#60a5fa',
    fins: isDark ? '#e53e3e' : '#ef4444',
    flame: isDark 
      ? 'linear-gradient(to bottom, rgba(251, 191, 36, 0.8), rgba(249, 115, 22, 0.7), rgba(220, 38, 38, 0.6))'
      : 'linear-gradient(to bottom, #fbbf24, #f97316, #dc2626)'
  }), []);

  const rocketColors = getRocketColors(isDarkMode);

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

      {/* Floating Rockets - Only visible in dark mode */}
      {isDarkMode && rockets.map((rocket) => {
        return (
          <div
            key={`rocket-${rocket.id}`}
            className={`absolute ${rocket.animationClass}`}
            style={{
              left: rocket.x + "%",
              top: rocket.y + "%",
            }}
          >
            <div className="relative">
              {/* Rocket Body - Dark theme appropriate colors */}
              <div 
                className="w-8 h-12 rounded-t-full rounded-b-sm relative"
                style={{
                  background: rocketColors.body,
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
                }}
              >
                {/* Rocket Window */}
                <div 
                  className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: rocketColors.window,
                    boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.2)'
                  }}
                ></div>
                {/* Rocket Fins */}
                <div 
                  className="absolute bottom-0 -left-1 w-2 h-3 rounded-bl-lg"
                  style={{
                    backgroundColor: rocketColors.fins,
                    opacity: 0.8
                  }}
                ></div>
                <div 
                  className="absolute bottom-0 -right-1 w-2 h-3 rounded-br-lg"
                  style={{
                    backgroundColor: rocketColors.fins,
                    opacity: 0.8
                  }}
                ></div>
              </div>
              {/* Rocket Flame - Muted for dark theme */}
              <div 
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full animate-pulse"
                style={{
                  background: rocketColors.flame,
                  opacity: 0.7
                }}
              ></div>
              {/* Trail particles */}
              <div 
                className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full animate-ping"
                style={{
                  backgroundColor: 'rgba(251, 191, 36, 0.6)',
                  opacity: 0.6
                }}
              ></div>
            </div>
          </div>
        );
      })}

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