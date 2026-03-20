import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gamenic Virtual Studio Pvt Ltd",
  description: "We craft high-impact visuals through VFX, virtual production, animation, graphic design, UI/UX design, LP production, advertising and digital media.",
  keywords: "VFX, virtual production, 3D modelling, animation, UI UX design, graphic design, Kathmandu Nepal",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
