import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
export default function Index() {
  return (
    <>
      {/* Background - Fixed and behind everything */}
      <div className="fixed inset-0 bg-scene-pic -z-10"></div>

      {/* Scrollable Content */}
      <div className="relative w-full min-h-screen space-y-6 overflow-y-auto pt-6">
        <div className="transpar-home-card">
          <h1 className="text-h4 font-bold">JSL Connect</h1>
          <p className="text-body-md">
            Easily access important information from the Jewish Home | Rochester
            campus
          </p>
        </div>

        <div className="transpar-home-card">
          <div className="flex flex-row space-x-1">
            <p>
              Explore activities and events across our campus. Visitors are
              always welcome.
            </p>
          </div>
        </div>

        <div className="transpar-home-card">
          <div className="flex flex-row">
            <p>See a QR code? Scan to learn more about special places here.</p>
          </div>
        </div>

        <div className="transpar-home-card">
          <div className="flex flex-row">
            <p>See a QR code? Scan to learn more about special places here.</p>
          </div>
        </div>

        <div className="transpar-home-card">
          <div className="flex flex-row">
            <p>See a QR code? Scan to learn more about special places here.</p>
          </div>
        </div>

        {/* Push content to ensure scrolling */}
        <div className="h-32"></div>
      </div>
    </>
  );
}
