import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hydradata.fr"),
  title: "HYDRADATA | Power BI, Data Automation & Business Intelligence Consulting",
  description:
    "HYDRADATA helps B2B teams turn fragmented data into reliable Power BI dashboards, automated reporting systems, KPI frameworks and clearer business decisions.",
  keywords: [
    "Power BI consultant",
    "business intelligence consulting",
    "data automation",
    "KPI dashboard",
    "B2B reporting",
    "data governance",
    "AI workflows",
    "Microsoft data solutions",
  ],
  openGraph: {
    title: "HYDRADATA | Power BI, Data Automation & Business Intelligence Consulting",
    description:
      "Power BI dashboards, automated reporting systems, KPI frameworks and AI-assisted workflows for B2B teams.",
    type: "website",
    images: [
      {
        url: "/brand/linkedin-company-banner.png",
        width: 1128,
        height: 191,
        alt: "HYDRADATA brand banner",
      },
    ],
  },
  icons: {
    icon: "/brand/icon-light.png",
    apple: "/brand/icon-light.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A2D5A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
