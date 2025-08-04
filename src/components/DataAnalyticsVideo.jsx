export default function DataAnalyticsVideo() {
  return (
    <section id="data-analytics-project" className="my-12 scroll-mt-20 px-4">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Data Analytics: Motorola Sales Visualization
      </h2>
      <p className="mb-8 text-muted-foreground text-center max-w-3xl mx-auto">
        Raw Motorola sales data transformed into clear, insightful visualizations using analytics tools.
        Below are two versions of the project for different perspectives.
      </p>

      <div className="grid gap-10 lg:grid-cols-2 max-w-6xl mx-auto">
        {/* Video 1 */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Version 1 – Overview</h3>
          <video
            controls
            preload="none"
            poster="/thumbnails/data-analytics-thumbnail.jpg"
            className="rounded-xl shadow-md w-full max-w-md bg-card"
          >
            <source src="/videos/motorola-sales-v1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Video 2 */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Version 2 – Detailed Walkthrough</h3>
          <video
            controls
            preload="none"
            poster="/thumbnails/data-analytics-thumbnail.jpg"
            className="rounded-xl shadow-md w-full max-w-md bg-card"
          >
            <source src="/videos/motorola-sales-v2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
