// Utility for reliable section detection
export const getSectionFromScrollPosition = () => {
  const sectionIds = ["home", "about", "skills", "services", "work-section", "contact"];
  const scrollY = window.scrollY + window.innerHeight / 2; // Middle of viewport
  
  let currentSection = "home";
  
  sectionIds.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      const { offsetTop, offsetHeight } = element;
      // Check if scroll position is within this section
      if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
        currentSection = id;
      }
    }
  });
  
  return currentSection;
};

export const getSectionElementInfo = () => {
  const sectionIds = ["home", "about", "skills", "services", "work-section", "contact"];
  return sectionIds.map(id => {
    const element = document.getElementById(id);
    if (element) {
      return {
        id,
        offsetTop: element.offsetTop,
        offsetHeight: element.offsetHeight,
        bottom: element.offsetTop + element.offsetHeight
      };
    }
    return null;
  }).filter(Boolean);
};
