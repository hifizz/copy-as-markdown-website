"use client";

import { MousePointer, Type, Keyboard, Copy } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Badge } from "@/components/ui/badge";

export default function GlowingEffectFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      <GridItem
        icon={<MousePointer className="h-4 w-4 text-slate-700 dark:text-neutral-400" />}
        title="选取元素复制"
        description="点击页面上的任何元素，一键转换为 Markdown 格式"
        badge={{ text: "Ctrl + Shift + E", color: "blue" }}
        feature="支持表格、列表、图片、链接等各种HTML元素的智能转换"
      />

      <GridItem
        icon={<Type className="h-4 w-4 text-slate-700 dark:text-neutral-400" />}
        title="划选文本复制"
        description="选中任何文本内容，保持格式转换为 Markdown"
        badge={{ text: "Ctrl + Shift + C", color: "green" }}
        feature="保留文本样式、链接和基本格式，完美适配 Markdown 语法"
      />

      <GridItem
        icon={<Keyboard className="h-4 w-4 text-slate-700 dark:text-neutral-400" />}
        title="右键菜单 & 快捷键"
        description="多种触发方式，符合各种使用习惯"
        badge={{ text: "快捷操作", color: "purple" }}
        feature="无论是鼠标操作还是键盘操作，都能快速完成复制任务"
      />

      <GridItem
        icon={<Copy className="h-4 w-4 text-slate-700 dark:text-neutral-400" />}
        title="标签页信息管理"
        description="一键复制标签页标题、URL 或 Markdown 链接格式"
        badge={{ text: "Popup 面板", color: "orange" }}
        feature="支持单个或批量复制标签页信息，完美整理研究资料"
      />
    </div>
  );
}

interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  badge: {
    text: string;
    color: "blue" | "green" | "purple" | "orange" | "default";
  };
  feature: string;
}

const GridItem = ({ icon, title, description, badge, feature }: GridItemProps) => {
  const getBadgeColor = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800";
      case "green":
        return "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800";
      case "purple":
        return "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800";
      case "orange":
        return "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800";
      default:
        return "bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-900/20 dark:text-slate-300 dark:border-slate-800";
    }
  };

  return (
    <div className="relative h-full min-h-[300px] rounded-2xl border border-slate-200/60 dark:border-neutral-700/60 p-2 md:rounded-3xl md:p-3 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
        <div className="relative flex flex-1 flex-col justify-between gap-3">
          <div className="w-fit rounded-lg border border-slate-300 dark:border-neutral-600 p-2">
            {icon}
          </div>
          <div className="space-y-3">
            <h3 className="font-sans text-xl/[1.375rem] font-semibold text-balance text-slate-900 md:text-2xl/[1.875rem] dark:text-white">
              {title}
            </h3>
            <p className="font-sans text-sm/[1.125rem] text-slate-600 md:text-base/[1.375rem] dark:text-neutral-400">
              {description}
            </p>
            <Badge
              variant="secondary"
              className={getBadgeColor(badge.color)}
            >
              {badge.text}
            </Badge>
            <p className="text-sm text-slate-600 dark:text-neutral-400 leading-relaxed">
              {feature}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}; 