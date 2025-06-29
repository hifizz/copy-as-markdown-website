"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Icon } from "@iconify/react";
// import AnimatedTooltipDemo from "@/components/animated-tooltip-demo";
import { Logo } from "@/components/Logo";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // 检测系统主题偏好
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // 设置初始主题
    setIsDarkMode(mediaQuery.matches);
    document.documentElement.classList.toggle("dark", mediaQuery.matches);

    // 监听系统主题变化
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
      document.documentElement.classList.toggle("dark", e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    // 清理监听器
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const buttonStyle =
    "w-full sm:w-auto sm:min-w-[200px] px-6 md:px-8 py-6 md:py-6 text-base md:text-lg border-2 border-slate-300 dark:border-neutral-600 hover:border-slate-600 dark:hover:border-neutral-400 hover:text-slate-900 dark:hover:text-neutral-200 transition-all duration-300 font-medium cursor-pointer";
  const buttonStyleHighlight =
    "dark:bg-neutral-100 dark:hover:bg-white dark:text-neutral-900 text-white dark:hover:text-neutral-900 hover:bg-slate-800";

  const iconStyle = "w-[24px]! h-[24px]! md:w-[32px]! md:h-[32px]! mr-1";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-stone-900">
      {/* 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Copy as Markdown",
            "description": "专为AI编程工具设计的Chrome插件，一键将网页内容转换为Markdown格式。解决Context7、Deepwiki不便的场景，为Claude、ChatGPT等AI工具提供完美的上下文内容。",
            "applicationCategory": "BrowserApplication",
            "operatingSystem": "Chrome, Firefox, Edge",
            "offers": {
              "@type": "Offer",
              "price": 0,
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "1250"
            },
            "author": {
              "@type": "Organization",
              "name": "Copy as Markdown Team"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://copy-as-markdown.com"
            },
            "keywords": "AI编程工具,上下文获取,Context7替代,Deepwiki替代,Claude工具,ChatGPT工具,Chrome插件,Markdown转换",
            "screenshot": "https://copy-as-markdown.com/screenshot.jpg",
            "softwareVersion": "2.0.0",
            "datePublished": "2024-01-01",
            "dateModified": "2024-12-01",
            "downloadUrl": "https://chrome.google.com/webstore/detail/copy-as-markdown",
            "installUrl": "https://chrome.google.com/webstore/detail/copy-as-markdown",
            "supportedBrowser": ["Chrome", "Firefox", "Edge"],
            "applicationSubCategory": "DeveloperTools"
          })
        }}
      />
      {/* Header */}
      <header className="border-b border-slate-200/60 dark:border-neutral-700/60 bg-white/80 backdrop-blur-md dark:bg-neutral-900/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#features"
              className="text-slate-600 hover:text-slate-900 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors text-sm"
            >
              功能特色
            </a>
            <a
              href="#install"
              className="text-slate-600 hover:text-slate-900 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors text-sm"
            >
              安装
            </a>
            <a
              href="#legal"
              className="text-slate-600 hover:text-slate-900 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors text-sm"
            >
              关于
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 lg:pb-40 lg:pt-32 px-4 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_40%,rgba(75,85,99,0.4),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.3),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(120,113,108,0.4),transparent_50%)]"></div>

        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-6xl lg:text-8xl xl:text-9xl font-black text-slate-900 dark:text-neutral-100 mb-6 md:mb-8 leading-[0.9] tracking-tight">
            Copy as Markdown
            <br />
            <span className="text-slate-600 dark:text-neutral-400 font-light">
              as what you see
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-slate-600 dark:text-neutral-400 mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed font-light px-4">
            专为 AI 编程工具设计的上下文获取利器
            <br className="hidden md:block" />
            解决 Context7、Deepwiki 不便场景
          </p>

          {/* User Testimonials，算了，先不加，等我的插件多点数据再加*/}
          {/* <AnimatedTooltipDemo /> */}

          {/* Install Buttons */}
          <div
            id="install"
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-16 px-4"
          >
            <Button size="lg" className={buttonStyle + buttonStyleHighlight}>
              <Icon icon="logos:chrome" className={iconStyle} />
              安装到 Chrome
            </Button>
            <Button size="lg" variant="outline" className={buttonStyle}>
              <Icon icon="logos:firefox" className={iconStyle} />
              安装到 Firefox
            </Button>
            <Button size="lg" variant="outline" className={buttonStyle}>
              <Icon icon="logos:microsoft-edge" className={iconStyle} />
              安装到 Edge
            </Button>
          </div>

          {/* Demo Screenshot */}
          <div className="relative max-w-5xl mx-auto px-4">
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-400/30 via-gray-400/30 to-slate-400/30 dark:from-neutral-600/30 dark:via-stone-600/30 dark:to-neutral-600/30 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-r from-slate-600 via-gray-600 to-slate-600 dark:from-neutral-600 dark:via-stone-600 dark:to-neutral-600 p-[2px] rounded-3xl shadow-2xl">
              <div className="bg-white dark:bg-neutral-900/95 backdrop-blur-sm rounded-3xl p-6 md:p-8 lg:p-10 border border-slate-200/50 dark:border-neutral-700/50">
                <div className="aspect-video bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-neutral-800 dark:via-stone-800 dark:to-neutral-700 rounded-xl flex items-center justify-center shadow-inner border border-slate-100 dark:border-neutral-700/50">
                  <div className="text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-slate-100 to-gray-200 dark:from-neutral-700/60 dark:to-stone-700/60 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border border-slate-200 dark:border-neutral-600/50">
                      <svg
                        className="w-8 h-8 md:w-10 md:h-10 text-slate-600 dark:text-neutral-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <p className="text-slate-600 dark:text-neutral-300 text-lg md:text-xl font-medium">
                      插件演示截图
                    </p>
                    <p className="text-slate-500 dark:text-neutral-400 text-sm md:text-base mt-2">
                      即将添加真实的插件使用截图
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-16 md:py-24 lg:py-32 px-4 bg-slate-50/50 dark:bg-neutral-800/30"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-neutral-100 mb-4 md:mb-6">
              强大的功能特色
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              比Context7更灵活，比Deepwiki更便捷，专为AI编程场景优化
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Feature 1: Element Selection */}
            <Card className="group hover:shadow-xl transition-all duration-300 border border-slate-200/60 dark:border-neutral-700/60 hover:border-slate-300 dark:hover:border-neutral-600 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-7 h-7 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    />
                  </svg>
                </div>
                <CardTitle className="text-lg font-semibold">
                  选取元素复制
                </CardTitle>
                <CardDescription className="text-sm text-slate-600 dark:text-neutral-400 leading-relaxed">
                  点击页面上的任何元素，一键转换为 Markdown 格式
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <Badge
                    variant="secondary"
                    className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                  >
                    Alt + P
                  </Badge>
                  <p className="text-sm text-slate-600 dark:text-neutral-400 leading-relaxed">
                    支持表格、列表、图片、链接等各种HTML元素的智能转换
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Feature 2: Text Selection */}
            <Card className="group hover:shadow-xl transition-all duration-300 border border-slate-200/60 dark:border-neutral-700/60 hover:border-slate-300 dark:hover:border-neutral-600 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-7 h-7 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <CardTitle className="text-lg font-semibold">
                  划选文本复制
                </CardTitle>
                <CardDescription className="text-sm text-slate-600 dark:text-neutral-400 leading-relaxed">
                  选中任何文本内容，保持格式转换为 Markdown
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <Badge
                    variant="secondary"
                    className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800"
                  >
                    Alt + C
                  </Badge>
                  <p className="text-sm text-slate-600 dark:text-neutral-400 leading-relaxed">
                    保留文本样式、链接和基本格式，完美适配 Markdown 语法
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Feature 3: Context Menu & Shortcuts */}
            <Card className="group hover:shadow-xl transition-all duration-300 border border-slate-200/60 dark:border-neutral-700/60 hover:border-slate-300 dark:hover:border-neutral-600 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-7 h-7 text-purple-600 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                    />
                  </svg>
                </div>
                <CardTitle className="text-lg font-semibold">
                  右键菜单 & 快捷键
                </CardTitle>
                <CardDescription className="text-sm text-slate-600 dark:text-neutral-400 leading-relaxed">
                  多种触发方式，符合各种使用习惯
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    <Badge
                      variant="outline"
                      className="text-xs bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800"
                    >
                      右键菜单
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-xs bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800"
                    >
                      键盘快捷键
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-neutral-400 leading-relaxed">
                    无论是鼠标操作还是键盘操作，都能快速完成复制任务
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Feature 4: Tab Management */}
            <Card className="group hover:shadow-xl transition-all duration-300 border border-slate-200/60 dark:border-neutral-700/60 hover:border-slate-300 dark:hover:border-neutral-600 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-7 h-7 text-orange-600 dark:text-orange-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2v0a2 2 0 01-2-2v-2a2 2 0 00-2-2H8z M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                    />
                  </svg>
                </div>
                <CardTitle className="text-lg font-semibold">
                  标签页信息管理
                </CardTitle>
                <CardDescription className="text-sm text-slate-600 dark:text-neutral-400 leading-relaxed">
                  一键复制标签页标题、URL 或 Markdown 链接格式
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <Badge
                    variant="secondary"
                    className="bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800"
                  >
                    Popup 面板
                  </Badge>
                  <p className="text-sm text-slate-600 dark:text-neutral-400 leading-relaxed">
                    支持单个或批量复制标签页信息，完美整理研究资料
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats & Social Proof */}
      {/* <section className="py-16 md:py-24 lg:py-32 px-4 bg-slate-50/50 dark:bg-neutral-800/30">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-neutral-100 mb-8 md:mb-12 lg:mb-16">
            深受用户喜爱
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-neutral-100 mb-2">
                10K+
              </div>
              <div className="text-slate-600 dark:text-neutral-300 text-lg font-medium">
                活跃用户
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-neutral-100 mb-2">
                ⭐ 4.8
              </div>
              <div className="text-slate-600 dark:text-neutral-300 text-lg font-medium">
                用户评分
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-neutral-100 mb-2">
                50K+
              </div>
              <div className="text-slate-600 dark:text-neutral-300 text-lg font-medium">
                月度复制次数
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 py-6 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Logo />

            <div className="flex space-x-6 text-sm text-slate-600 dark:text-neutral-400">
              <a
                href="#features"
                className="hover:text-slate-900 dark:hover:text-neutral-100 transition-colors"
              >
                功能特色
              </a>
              <a
                href="#install"
                className="hover:text-slate-900 dark:hover:text-neutral-100 transition-colors"
              >
                安装
              </a>
              <a
                href="https://github.com"
                className="hover:text-slate-900 dark:hover:text-neutral-100 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
