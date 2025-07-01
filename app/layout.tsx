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
  title: "Copy as Markdown - 精确复制网页内容的Markdown神器",
  description: "专业的网页内容转Markdown插件，解决Context7和Deepwiki无法处理的精确选择场景。支持选取页面任意部分，完美适配Markdown写作需求。无论是技术文档、博客写作还是内容整理，一键获得高质量Markdown格式。",
  keywords: [
    "Copy as Markdown",
    "Markdown转换工具",
    "网页内容复制",
    "精确选择复制",
    "Context7替代",
    "Deepwiki增强",
    "Markdown写作工具",
    "技术文档工具",
    "博客写作助手",
    "内容整理工具",
    "网页转Markdown",
    "浏览器插件",
    "文档编写工具",
    "内容创作工具"
  ],
  authors: [{ name: "子林", url: "https://zilin.im" }],
  creator: "子林",
  publisher: "子林",
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
    title: "Copy as Markdown - 精确复制网页内容的Markdown神器",
    description: "专业的网页内容转Markdown插件，解决Context7和Deepwiki无法处理的精确选择场景。支持选取页面任意部分，完美适配Markdown写作需求，一键获得高质量格式。",
    siteName: "Copy as Markdown",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Copy as Markdown - 精确复制网页内容的Markdown神器",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Copy as Markdown - 精确复制网页内容的Markdown神器",
    description: "专业的网页内容转Markdown插件，解决Context7和Deepwiki无法处理的精确选择场景，完美适配Markdown写作需求",
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
  icons: {
    icon: [
      {
        url: "/icon/dark_128.png",
        media: "(prefers-color-scheme: light)",
        sizes: "128x128",
        type: "image/png",
      },
      {
        url: "/icon/light_128.png", 
        media: "(prefers-color-scheme: dark)",
        sizes: "128x128",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/icon/dark_128.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon/light_128.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
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
