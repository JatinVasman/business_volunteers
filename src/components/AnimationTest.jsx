export const AnimationTest = () => {
  return (
    <div className="fixed top-20 right-5 z-[70] p-4 bg-black/80 text-white rounded-md">
      <h3>Animation Test</h3>
      
      {/* Test star animation */}
      <div 
        className="w-4 h-4 bg-white rounded-full my-2"
        style={{
          animation: 'twinkle 2s ease-in-out infinite'
        }}
      >
      </div>
      
      {/* Test rocket animation */}
      <div 
        className="w-8 h-8 bg-gray-400 my-2"
        style={{
          animation: 'rocket-right-straight 5s linear infinite'
        }}
      >
        🚀
      </div>
      
      {/* Test shooting star */}
      <div 
        className="w-2 h-2 bg-white rounded my-2"
        style={{
          animation: 'meteor-shower-1 3s linear infinite'
        }}
      >
      </div>
    </div>
  );
};
