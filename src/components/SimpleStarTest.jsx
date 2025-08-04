import { useEffect, useState } from "react";

export const SimpleStarTest = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    console.log('🌟 Simple star test mounted');
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Test single star with forced animation */}
      <div
        className="absolute w-4 h-4 bg-yellow-400 rounded-full"
        style={{
          left: '50%',
          top: '30%',
          animation: 'twinkle 2s ease-in-out infinite',
          animationFillMode: 'both'
        }}
      />
      
      {/* Test multiple stars */}
      {[1, 2, 3, 4, 5].map(id => (
        <div
          key={id}
          className="absolute w-3 h-3 bg-white rounded-full"
          style={{
            left: (20 + id * 15) + '%',
            top: (20 + id * 10) + '%',
            animation: `twinkle ${2 + id * 0.5}s ease-in-out ${id * 0.2}s infinite`,
            animationFillMode: 'both'
          }}
        />
      ))}
      
      {/* Test shooting star */}
      <div
        className="absolute w-2 h-2 bg-blue-400 rounded-full"
        style={{
          left: '10%',
          top: '10%',
          animation: 'meteor-shower-1 4s linear infinite',
          animationFillMode: 'both'
        }}
      />
    </div>
  );
};
