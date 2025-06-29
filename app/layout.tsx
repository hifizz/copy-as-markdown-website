import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Copy as Markdown - AI编程工具的最佳上下文获取插件",
  description: "专为AI编程工具设计的Chrome插件，一键将网页内容转换为Markdown格式。解决Context7、Deepwiki不便的场景，为Claude、ChatGPT等AI工具提供完美的上下文内容。支持选取元素、划选文本，让AI编程更高效。",
  keywords: [
    "Copy as Markdown",
    "AI编程工具",
    "cursor 辅助工具",
    "windsurf 辅助工具",
    "上下文获取",
    "Context7辅助",
    "Deepwiki辅助", 
    "Claude工具",
    "ChatGPT工具",
    "Chrome插件",
    "Markdown转换",
    "网页内容提取",
    "AI助手工具",
    "编程效率工具"
  ],
  authors: [{ name: "Copy as Markdown Team" }],
  creator: "Copy as Markdown",
  publisher: "Copy as Markdown",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    alternateLocale: ["en_US"],
    url: "https://copy-as-markdown.com",
    title: "Copy as Markdown - AI编程工具的最佳上下文获取插件",
    description: "专为AI编程工具设计的Chrome插件，解决Context7、Deepwiki获取上下文不便的问题。一键转换网页内容为Markdown，为Claude、ChatGPT等AI工具提供完美上下文。",
    siteName: "Copy as Markdown",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Copy as Markdown - AI编程工具上下文获取插件",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Copy as Markdown - AI编程工具上下文获取插件",
    description: "解决Context7、Deepwiki不便场景，一键为AI编程工具提供完美Markdown上下文",
    images: ["/twitter-image.jpg"],
    creator: "@copyasmarkdown",
  },
  alternates: {
    canonical: "https://copy-as-markdown.com",
    languages: {
      'zh-CN': 'https://copy-as-markdown.com',
      'en': 'https://copy-as-markdown.com/en',
    },
  },
  category: "Technology",
  classification: "AI Tools, Browser Extensions, Productivity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
