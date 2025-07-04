"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
// import AnimatedTooltipDemo from "@/components/animated-tooltip-demo";
import GlowingEffectFeatures from "@/components/glowing-effect-features";
import { Logo } from "@/components/Logo";

export default function Home() {
  useEffect(() => {
    // 检测系统主题偏好
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // 设置初始主题
    document.documentElement.classList.toggle("dark", mediaQuery.matches);

    // 监听系统主题变化
    const handleChange = (e: MediaQueryListEvent) => {
      document.documentElement.classList.toggle("dark", e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    // 清理监听器
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // 基础按钮样式
  const baseButtonStyle =
    "w-full sm:w-auto sm:min-w-[200px] px-6 md:px-8 py-6 md:py-6 text-base md:text-lg transition-all duration-300 font-medium cursor-pointer";
  
  // Chrome主按钮样式（有背景色）
  const chromeButtonStyle =
    baseButtonStyle + 
    " bg-slate-900 hover:bg-slate-800 text-white hover:text-white border-2 border-slate-900 hover:border-slate-800" +
    " dark:bg-neutral-100 dark:hover:bg-white dark:text-neutral-900 dark:hover:text-neutral-900 dark:border-neutral-100 dark:hover:border-white";
  
  // 其他按钮样式（outline风格）
  const outlineButtonStyle =
    baseButtonStyle +
    " bg-transparent hover:bg-slate-50 text-slate-900 hover:text-slate-900 border-2 border-slate-300 hover:border-slate-400" +
    " dark:bg-transparent dark:hover:bg-neutral-800/50 dark:text-neutral-100 dark:hover:text-neutral-100 dark:border-neutral-600 dark:hover:border-neutral-500";

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
            name: "Copy as Markdown",
            description:
              "专业的网页内容转Markdown插件，解决Context7和Deepwiki无法处理的精确选择场景。支持选取页面任意部分，完美适配Markdown写作需求。无论是技术文档、博客写作还是内容整理，一键获得高质量Markdown格式。",
            applicationCategory: "BrowserApplication",
            operatingSystem: "Chrome, Firefox, Edge",
            offers: {
              "@type": "Offer",
              price: 0,
              priceCurrency: "USD",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              ratingCount: "1250",
            },
            author: {
              "@type": "Person",
              name: "子林",
              url: "https://zilin.im",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://copy-as-markdown.com",
            },
            keywords:
              "Markdown转换工具,网页内容复制,精确选择复制,Context7替代,Deepwiki增强,Markdown写作工具,技术文档工具,博客写作助手,内容整理工具",
            screenshot: "https://copy-as-markdown.com/screenshot.jpg",
            softwareVersion: "2.0.0",
            datePublished: "2024-01-01",
            dateModified: "2024-12-01",
            downloadUrl:
              "https://chrome.google.com/webstore/detail/copy-as-markdown",
            installUrl:
              "https://chrome.google.com/webstore/detail/copy-as-markdown",
            supportedBrowser: ["Chrome", "Firefox", "Edge"],
            applicationSubCategory: "DeveloperTools",
          }),
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
              href="#about"
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
            精确复制网页任意部分内容
            <br className="hidden md:block" />
            专为频繁 Markdown 写作场景优化
          </p>

          {/* User Testimonials，算了，先不加，等我的插件多点数据再加*/}
          {/* <AnimatedTooltipDemo /> */}

          {/* Install Buttons */}
          <div
            id="install"
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-16 px-4"
          >
            <Button size="lg" className={chromeButtonStyle}>
              <Icon icon="logos:chrome" className={iconStyle} />
              安装到 Chrome
            </Button>
            <Button size="lg" variant="outline" className={outlineButtonStyle}>
              <Icon icon="logos:firefox" className={iconStyle} />
              安装到 Firefox
            </Button>
            <Button size="lg" variant="outline" className={outlineButtonStyle}>
              <Icon icon="logos:microsoft-edge" className={iconStyle} />
              安装到 Edge
            </Button>
          </div>

          {/* Demo Screenshot */}
          <div className="relative max-w-5xl mx-auto px-4">
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-400/30 via-gray-400/30 to-slate-400/30 dark:from-neutral-600/30 dark:via-stone-600/30 dark:to-neutral-600/30 rounded-3xl blur-2xl"></div>
            
            {/* Border container with gradient */}
            <div className="relative bg-gradient-to-r from-slate-600 via-gray-600 to-slate-600 dark:from-neutral-600 dark:via-stone-600 dark:to-neutral-600 p-[2px] rounded-3xl shadow-2xl">
              {/* Inner content container */}
              <div className="relative bg-white dark:bg-neutral-900 rounded-[calc(1.5rem-2px)] overflow-hidden">
                <img 
                  src="/live/preview.png" 
                  alt="Copy as Markdown 插件预览截图" 
                  className="w-full h-auto block object-cover"
                />
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
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-slate-900 dark:text-neutral-100 mb-4 md:mb-6">
              强大的功能特色
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              解决 Context7 和 Deepwiki 无法处理的精确选择场景，完美适配 Markdown 写作需求
            </p>
          </div>

          <GlowingEffectFeatures />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 md:py-24 lg:py-32 px-4"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-neutral-100 mb-4 md:mb-6">
              为什么开发这个插件？
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              一个源于真实痛点的解决方案
            </p>
          </div>

          <div className="space-y-8 md:space-y-12 text-left">
            {/* Problem Statement */}
            <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-neutral-700">
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-neutral-100 mb-4">
                🤔 遇到的问题
              </h3>
              <div className="space-y-4 text-slate-600 dark:text-neutral-300">
                <p className="leading-relaxed">
                  作为一个经常需要写技术文档和博客的开发者，我发现现有的工具都有各自的局限性：
                </p>
                <ul className="space-y-2 pl-4">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    <span><strong>Context7</strong>：只能复制整个页面，无法选择特定区域，经常包含大量无关内容</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    <span><strong>Deepwiki</strong>：选择功能不够精确，对复杂页面结构支持有限</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    <span><strong>手动复制粘贴</strong>：格式丢失，需要大量后期调整，效率极低</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Solution */}
            <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-neutral-700">
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-neutral-100 mb-4">
                💡 我们的解决方案
              </h3>
              <div className="space-y-4 text-slate-600 dark:text-neutral-300">
                <p className="leading-relaxed">
                  Copy as Markdown 专门为频繁的 Markdown 写作场景而设计：
                </p>
                                 <ul className="space-y-2 pl-4">
                   <li className="flex items-start">
                     <span className="text-green-500 mr-2 mt-1">•</span>
                     <span><strong>精确选择</strong>：支持选取页面任意部分，甚至是单个段落或表格</span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-green-500 mr-2 mt-1">•</span>
                     <span><strong>智能识别</strong>：自动识别页面结构，保持内容层次和格式</span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-green-500 mr-2 mt-1">•</span>
                     <span><strong>可见元素优化</strong>：只复制用户实际可见的元素，过滤隐藏内容和干扰元素</span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-green-500 mr-2 mt-1">•</span>
                     <span><strong>快速操作</strong>：右键菜单、快捷键、工具栏按钮，多种触发方式</span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-green-500 mr-2 mt-1">•</span>
                     <span><strong>高质量输出</strong>：生成标准 Markdown 格式，直接可用于文档编写</span>
                   </li>
                 </ul>
              </div>
            </div>

            {/* Use Cases */}
            <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-neutral-700">
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-neutral-100 mb-4">
                🎯 适用场景
              </h3>
              <div className="space-y-4 text-slate-600 dark:text-neutral-300">
                <p className="leading-relaxed">
                  特别适合以下工作场景：
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-slate-900 dark:text-neutral-100">技术文档编写</h4>
                    <p className="text-sm">整理技术资料、API 文档、代码示例</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-slate-900 dark:text-neutral-100">博客内容创作</h4>
                    <p className="text-sm">收集参考资料、引用文章片段</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-slate-900 dark:text-neutral-100">学习笔记整理</h4>
                    <p className="text-sm">保存课程内容、研究资料</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-slate-900 dark:text-neutral-100">内容策展</h4>
                    <p className="text-sm">收集整理行业资讯、精选内容</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Philosophy */}
            <div className="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-neutral-800/30 dark:to-stone-800/30 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-neutral-700">
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-neutral-100 mb-4">
                🚀 设计理念
              </h3>
              <p className="text-slate-600 dark:text-neutral-300 leading-relaxed">
                我们坚信工具应该<strong>简单而强大</strong>。Copy as Markdown 不试图成为一个复杂的全能工具，
                而是专注于做好一件事：<strong>让网页内容到 Markdown 的转换变得简单、精确、高效</strong>。
                每一个功能的设计都围绕着真实的使用场景，让频繁进行 Markdown 写作的用户能够显著提升工作效率。
              </p>
            </div>

            {/* Author */}
            <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-neutral-700">
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-neutral-100 mb-4">
                👨‍💻 关于作者
              </h3>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-200 to-gray-300 dark:from-neutral-600 dark:to-stone-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-slate-700 dark:text-neutral-200">子</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 dark:text-neutral-100 mb-2">子林</h4>
                  <p className="text-slate-600 dark:text-neutral-300 leading-relaxed mb-3">
                    一名热爱工具开发的程序员，专注于创建简单实用的生产力工具。
                    相信好的工具应该让复杂的事情变得简单，让重复的工作变得高效。
                  </p>
                  <a 
                    href="https://zilin.im?ref=copy-as-markdown" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-slate-600 hover:text-slate-900 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors text-sm"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    访问个人网站：https://zilin.im
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
