export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Who <span className="text-primary">We Are</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-primary mb-6 tracking-wide uppercase font-semibold">
              Business Volunteers – Turning Your Digital Mess into a Masterpiece
            </p>

            <p className="text-muted-foreground">
              We connect skilled professionals with businesses that need a helping hand.
              Our goal is to give businesses, big or small, the expert support they need
              to grow. Our volunteers offer their time and skills in areas like graphic
              design, website development, and data analytics — helping create lasting
              impact for brands and communities alike.
            </p>

            <p className="text-muted-foreground">
              With over 1.5 years of combined experience, we&apos;ve helped local startups,
              independent creators, and social ventures transform their digital presence.
              Our passion lies in making high-quality digital support accessible to all,
              regardless of budget.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Contact Us
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a4 4 0 004-4V5z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Creative Design</h4>
                  <p className="text-muted-foreground">
                    Visual storytelling through branding, social media graphics, posters,
                    and impactful design systems.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Solutions</h4>
                  <p className="text-muted-foreground">
                    Building fast, accessible, and elegant websites tailored for growing businesses.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data-Driven Support</h4>
                  <p className="text-muted-foreground">
                    Leveraging analytics and visual dashboards to help businesses make smarter decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
