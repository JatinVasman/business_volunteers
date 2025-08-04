import { useState } from "react";

export default function WorkSection() {
  const [filter, setFilter] = useState("all");

  const filters = ["all", "posters", "cgi", "analytics", "logo"];
  const active = (val) =>
    filter === val ? "bg-white text-black" : "bg-black text-white";

  return (
    <section id="work-section" className="py-24 px-4 scroll-mt-20">
      <h2 className="text-4xl font-bold text-center mb-6">Projects That Reflect <span className="text-primary">Our Passion</span></h2>

      <div className="flex justify-center flex-wrap gap-3 mb-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full transition border border-white ${active(f)}`}
          >
            {f === "all"
              ? "All"
              : f === "posters"
              ? "Posters & Designs"
              : f === "cgi"
              ? "CGI"
              : f === "analytics"
              ? "Data Analytics"
              : "Logo"}
          </button>
        ))}
      </div>

      {/* 🎨 POSTERS & DESIGNS */}
      {(filter === "all" || filter === "posters") && (
        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-2 mb-16">
          {[
            {
              title: "Brand Identity Poster",
              desc: "Clean visual layout for a modern branding campaign.",
              file: "poster1.jpg",
            },
            {
              title: "Product Promotion Poster",
              desc: "Vibrant and bold poster for social media product launch.",
              file: "poster2.jpg",
            },
            {
              title: "Futuristic UI Thumbnail",
              desc: "Sleek dark-mode inspired UI design concept.",
              file: "thumbnail-design1.jpg",
            },
            {
              title: "Concept Art Promo",
              desc: "Minimalist concept art design for a fictional service.",
              file: "thumbnail-design2.jpg",
            },
          ].map(({ file }, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={`/images/${file}`}
                alt={`Design ${i + 1}`}
                className="rounded-xl shadow-md w-full max-w-md object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      )}

      {/* 📊 DATA ANALYTICS */}
      {(filter === "all" || filter === "analytics") && (
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">Motorola Sales - Data Analytics</h3>
          <div className="grid gap-10 lg:grid-cols-2">
            {[
              {
                title: "Visual Summary",
                src: "/videos/motorola-sales-v1.mp4",
                poster: "/thumbnails/data-analytics-thumbnail1.jpg",
                desc: "Concise dashboard highlighting Motorola's key metrics.",
              },
              {
                title: "Detailed Walkthrough",
                src: "/videos/motorola-sales-v2.mp4",
                poster: "/thumbnails/data-analytics-thumbnail2.jpg",
                desc: "Step-by-step breakdown of raw data turned into insights.",
              },
            ].map(({ title, src, poster, desc }, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <h4 className="text-lg font-semibold mb-2">{title}</h4>
                <video
                  controls
                  preload="none"
                  poster={poster}
                  className="rounded-xl shadow-md w-full max-w-md"
                >
                  <source src={src} type="video/mp4" />
                </video>
                <p className="text-sm text-gray-500 mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 🧪 CGI SECTION */}
      {(filter === "all" || filter === "cgi") && (
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">CGI Animation Work</h3>
          <div className="grid gap-10 lg:grid-cols-2">
            {[
              {
                title: "CGI Rocket Launch",
                src: "public/videos/CGI-video1.mp4",
                poster: "/thumbnails/CGI1-thumbnail.jpg",
                desc: "Animated rocket launch sequence built with CGI.",
              },
              {
                title: "CGI Flythrough",
                src: "public/videos/CGI-video2.mp4",
                poster: "/thumbnails/CGI2-thumbnail.jpg",
                desc: "Cinematic flyover With CGI.",
              },
            ].map(({ title, src, poster, desc }, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <h4 className="text-lg font-semibold mb-2">{title}</h4>
                <video
                  controls
                  preload="none"
                  poster={poster}
                  className="rounded-xl shadow-md w-full max-w-md"
                >
                  <source src={src} type="video/mp4" />
                </video>
                <p className="text-sm text-gray-500 mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 🖼️ LOGO SHOWCASE */}
      {(filter === "all" || filter === "logo") && (
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">Logos</h3>
          <div className="flex flex-col gap-10">
            {/* Top row - 3 logos */}
            <div className="grid grid-cols-3 gap-10">
              {["logo1.png", "logo2.png", "logo3.jpg"].map((logo, i) => (
                <div key={i} className="flex justify-center items-center">
                  <img
                    src={`/logo/${logo}`}
                    alt={`Logo ${i + 1}`}
                    className="rounded-xl shadow-md w-full max-w-xs object-contain"
                  />
                </div>
              ))}
            </div>
            
            {/* Bottom row - 2 logos */}
            <div className="grid grid-cols-2 gap-10">
              {["logo4.jpg", "Weblogo.png"].map((logo, i) => (
                <div key={i} className="flex justify-center items-center">
                  <img
                    src={`/logo/${logo}`}
                    alt={`Logo ${i + 4}`}
                    className="rounded-xl shadow-md w-full max-w-xs object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
