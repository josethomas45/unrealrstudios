import Navbar from "./_components/navbar/navbar";
import "./globals.css";

export const metadata = {
  title: "Unrealr Studios — AI Hybrid Film & Advertising Production",
  description: "Unrealr Studios blends AI, VFX, and live-action filmmaking to deliver cinematic advertising at 60–80% less than traditional studios. Based in Manchester, UK. Fast turnaround. Scalable content.",
  keywords: "AI advertising, hybrid film production, brand films, social media content, VFX, Manchester, UK studio, affordable ads",
  openGraph: {
    title: "Unrealr Studios — Where Imagination Meets Scalable Production",
    description: "AI-powered hybrid advertising studio. Cinematic quality. Startup budgets. Based in the UK.",
    type: "website",
  },
};

import SmoothScroll from "./_components/SmoothScroll";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}