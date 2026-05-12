import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Averix Commerce — Xây Dựng Thương Hiệu Commerce Có Giá Trị Thực",
  description:
    "Averix Commerce là công ty thương mại điện tử chuyên phát triển sản phẩm cá nhân hóa POD cho thị trường Mỹ. 5+ năm kinh nghiệm Shopify & Amazon.",
  keywords: [
    "ecommerce",
    "POD",
    "print on demand",
    "Shopify",
    "Amazon",
    "thương mại điện tử",
    "Averix Commerce",
  ],
  authors: [{ name: "Averix Commerce" }],
  openGraph: {
    title: "Averix Commerce — Apex × The X Factor",
    description:
      "Nơi khát vọng tạo nên GIÁ TRỊ, dữ liệu dẫn lối TĂNG TRƯỞNG. 5+ năm POD US market.",
    type: "website",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Averix Commerce",
    description: "Xây dựng thương hiệu commerce có giá trị thực.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-dark-950 text-foreground antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
