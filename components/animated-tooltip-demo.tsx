"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const users = [
  {
    id: 1,
    name: "张小明",
    designation: "前端开发工程师",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
  },
  {
    id: 2,
    name: "李小红",
    designation: "技术文档写作者",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
  },
  {
    id: 3,
    name: "王小强",
    designation: "产品经理",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
  },
  {
    id: 4,
    name: "刘小芳",
    designation: "内容研究员",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
  },
  {
    id: 5,
    name: "陈小军",
    designation: "博客作者",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
  },
  {
    id: 6,
    name: "赵小美",
    designation: "学术研究者",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
  },
];

export default function AnimatedTooltipDemo() {
  return (
    <div className="flex flex-col items-center justify-center mb-8 w-full">
      <div className="text-center mb-6">
        <p className="text-lg md:text-xl text-slate-600 dark:text-neutral-400 mb-4">
          已有 <span className="font-semibold text-slate-900 dark:text-neutral-100">10,000+</span> 用户信赖
        </p>
      </div>
      <div className="flex flex-row items-center justify-center">
        <AnimatedTooltip items={users} />
      </div>
    </div>
  );
} 