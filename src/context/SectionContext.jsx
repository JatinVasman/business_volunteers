import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { SectionContext } from "./SectionContextDefinition";

export function SectionProvider({ children }) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { threshold: 0.4, rootMargin: "0px 0px -40% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  return (
    <SectionContext.Provider value={{ activeSection }}>
      {children}
    </SectionContext.Provider>
  );
}

SectionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
