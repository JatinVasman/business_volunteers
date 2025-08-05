export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
      aria-label="Hero section introducing Business Volunteers"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-10"> {/* Increased spacing */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">We Are</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Business Volunteers
            </span>
            <span className="sr-only"> - Free Creative & Tech Support for Startups</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Empowering brands with impactful visuals, data-driven insights, and modern digital experiences.
          </p>
          
          <p className="text-sm uppercase tracking-widest text-primary opacity-0 animate-fade-in-delay-3">
            Design. Analytics. Creativity.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#work-section" className="cosmic-button">
              Explore Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
