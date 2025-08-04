import { 
  Palette, 
  Smartphone, 
  Video, 
  FileText, 
  Globe, 
  BarChart3, 
  Layers, 
  Plus,
  Figma,
  BookOpen
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Logo Designing",
    description: "Custom logo design that captures your brand identity and makes a lasting impression.",
    onClick: () => {
      document.getElementById("work-section")?.scrollIntoView({ behavior: "smooth" });
    }
  },
  {
    icon: Layers,
    title: "Graphic Design",
    description: "Creative visual solutions for all your branding and marketing needs.",
    onClick: () => {
      document.getElementById("work-section")?.scrollIntoView({ behavior: "smooth" });
    }
  },
  {
    icon: Smartphone,
    title: "Social Media Handling",
    description: "Complete social media management to grow your online presence and engagement."
  },
  {
    icon: Video,
    title: "Video Editing & Animations",
    description: "Professional video editing and motion graphics to bring your stories to life.",
    onClick: () => {
      document.getElementById("work-section")?.scrollIntoView({ behavior: "smooth" });
    }
  },
  {
    icon: FileText,
    title: "Corporate Presentations",
    description: "Compelling presentations that communicate your message effectively and professionally."
  },
  {
    icon: Globe,
    title: "Website Designing",
    description: "Modern, responsive websites that deliver exceptional user experiences."
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform raw data into impactful visuals for business insights.",
    onClick: () => {
      document.getElementById("work-section")?.scrollIntoView({ behavior: "smooth" });
    }
  },
  {
    icon: Figma,
    title: "UI Design",
    description: "Sophisticated interface designs optimized for usability and design consistency.",
    onClick: () => {
      document.getElementById("work-section")?.scrollIntoView({ behavior: "smooth" });
    }
  },
  {
    icon: BookOpen,
    title: "Visual Storytelling",
    description: "Engage your audience through story-driven visual content and animations.",
    onClick: () => {
      document.getElementById("work-section")?.scrollIntoView({ behavior: "smooth" });
    }
  },
  {
    icon: Plus,
    title: "And Many More",
    description: "Comprehensive digital solutions tailored to your unique business requirements."
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Solutions We Offer to <span className="text-primary">Elevate Your Brand</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          We offer a comprehensive range of digital services to help bring your ideas to life 
          and elevate your brand in the digital landscape.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`bg-card p-6 rounded-lg shadow-xs card-hover group ${
                  service.onClick ? "cursor-pointer hover:bg-card/80 transition-colors" : ""
                }`}
                onClick={service.onClick}
              >
                <div className="mb-4">
                  <div className="p-3 rounded-full bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
