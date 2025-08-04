import { useState } from "react";

export default function WorkSection() {
  const [filter, setFilter] = useState("all");

  const filters = ["all", "posters", "cgi", "analytics"];
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
              : "Data Analytics"}
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
          ].map(({ title, desc, file }, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <h4 className="text-lg font-semibold mb-2">{title}</h4>
              <img
                src={`/images/${file}`}
                alt={title}
                className="rounded-xl shadow-md w-full max-w-md object-cover transition-transform duration-300 hover:scale-105"
              />
              <p className="text-sm text-gray-500 mt-2">{desc}</p>
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
                poster: "/thumbnails/data-analytics-thumbnail.jpg",
                desc: "Concise dashboard highlighting Motorola's key metrics.",
              },
              {
                title: "Detailed Walkthrough",
                src: "/videos/motorola-sales-v2.mp4",
                poster: "/thumbnails/data-analytics-thumbnail.jpg",
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
                src: "`public/videos/CGI-video1.mp4`",
                poster: "/thumbnails/CGI1-thumbnail.jpg",
                desc: "Animated rocket launch sequence built with CGI.",
              },
              {
                title: "CGI Planet Flythrough",
                src: "`public/videos/CGI-video2.mp4`",
                poster: "/thumbnails/CGI2-thumbnail.jpg",
                desc: "Cinematic flyover of a 3D-modeled alien planet.",
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
    </section>
  );
}
