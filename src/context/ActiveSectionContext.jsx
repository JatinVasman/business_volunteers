import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { SectionContext } from "./SectionContextDefinition";

export function ActiveSectionProvider({ children }) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "services", "work-section", "contact"];
    
    // Function to determine active section based on scroll position
    const determineActiveSection = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const viewportCenter = scrollY + windowHeight / 2;
      
      // If at the very top (within first 100px), always return home
      if (scrollY < 100) {
        return "home";
      }
      
      // Find which section the center of the viewport is in
      let activeId = "home";
      
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          
          // Check if viewport center is within this section
          if (viewportCenter >= elementTop && viewportCenter < elementBottom) {
            activeId = id;
            break; // Found the section, exit loop
          }
        }
      }
      
      return activeId;
    };

    // Simplified scroll listener - this will be our primary detection method
    let scrollTimeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollBasedSection = determineActiveSection();
        setActiveSection(scrollBasedSection);
      }, 30); // Fast response
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial detection on mount
    const initialSection = determineActiveSection();
    setActiveSection(initialSection);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []); // Remove getActiveSection dependency to prevent re-initialization

  return (
    <SectionContext.Provider value={activeSection}>
      {children}
    </SectionContext.Provider>
  );
}

ActiveSectionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
