import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Creative & Design
  { 
    name: "Creative Designing", 
    level: 95, 
    category: "creative",
    onClick: () => {
      document.getElementById("work-section")?.scrollIntoView({ behavior: "smooth" });
    }
  },
  { 
    name: "Branding", 
    level: 90, 
    category: "creative",
    onClick: () => {
      document.getElementById("work-section")?.scrollIntoView({ behavior: "smooth" });
    }
  },
  { 
    name: "Graphic Design", 
    level: 95, 
    category: "creative",
    onClick: () => {
      document.getElementById("work-section")?.scrollIntoView({ behavior: "smooth" });
    }
  },
  { 
    name: "Logo Design", 
    level: 90, 
    category: "creative",
    onClick: () => {
      document.getElementById("work-section")?.scrollIntoView({ behavior: "smooth" });
    }
  },
  { 
    name: "Social Media Creative", 
    level: 95, 
    category: "creative",
    onClick: () => {
      document.getElementById("work-section")?.scrollIntoView({ behavior: "smooth" });
    }
  },
  { 
    name: "Poster Design", 
    level: 92, 
    category: "creative",
    onClick: () => {
      document.getElementById("work-section")?.scrollIntoView({ behavior: "smooth" });
    }
  },

  // UI & Digital
  { 
    name: "UI Design", 
    level: 85, 
    category: "digital",
    onClick: () => {
      document.getElementById("work-section")?.scrollIntoView({ behavior: "smooth" });
    }
  },
  { 
    name: "UI Concept Design", 
    level: 88, 
    category: "digital",
    onClick: () => {
      document.getElementById("work-section")?.scrollIntoView({ behavior: "smooth" });
    }
  },
  { 
    name: "Visual Storytelling", 
    level: 85, 
    category: "digital",
    onClick: () => {
      document.getElementById("work-section")?.scrollIntoView({ behavior: "smooth" });
    }
  },

  // Motion & Video
  { 
    name: "Motion Graphics", 
    level: 80, 
    category: "motion",
    onClick: () => {
      document.getElementById("work-section")?.scrollIntoView({ behavior: "smooth" });
    }
  },
  { 
    name: "CGI Animation", 
    level: 82, 
    category: "motion",
    onClick: () => {
      document.getElementById("work-section")?.scrollIntoView({ behavior: "smooth" });
    }
  },

  // Analytics & Data
  { 
    name: "Data Analytics", 
    level: 85, 
    category: "analytics",
    onClick: () => {
      document.getElementById("work-section")?.scrollIntoView({ behavior: "smooth" });
    }
  },
];

const categories = ["all", "creative", "digital", "motion", "analytics"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Expertise That Powers <span className="text-primary">Our Work</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className={cn(
                "bg-card p-6 rounded-lg shadow-xs card-hover",
                skill.onClick ? "cursor-pointer hover:bg-card/80 transition-colors" : ""
              )}
              onClick={skill.onClick}
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
