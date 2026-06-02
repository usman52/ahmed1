import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmad Bin Sadiq | AI-Powered Manufacturing Consultant",
  description: "Lean Six Sigma Master Black Belt | Industrial Engineer | Smart Factory & Operational Excellence Specialist. Helping manufacturing industries reduce cost, improve OEE, optimize production systems, and digitally transform operations through AI, Lean Manufacturing, and Industry 5.0 solutions.",
  keywords: "AI Manufacturing, Lean Six Sigma, Industrial Engineer, Smart Factory, OEE Improvement, Operational Excellence, Industry 5.0, Predictive Maintenance, Manufacturing Consultant",
  authors: [{ name: "Ahmad Bin Sadiq" }],
  openGraph: {
    title: "Ahmad Bin Sadiq | AI-Powered Manufacturing Consultant",
    description: "Lean Six Sigma Master Black Belt | Industrial Engineer | Smart Factory & Operational Excellence Specialist",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
