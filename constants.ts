import { Project, Skill, BlogPost } from './types';
import { Cpu, Server, Radio, Database, Activity, Code2 } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "孔寅",
  title: "嵌入式 AI 工程师 & 极客开发者",
  description: "专注于将人工智能算法部署在边缘设备上。热爱开源硬件，擅长从底层驱动到上层算法的全栈式开发。",
  email: "shengdaikongyin@qq.com",
  github: "https://github.com/shengdaikongyin",
  csdn: "https://blog.csdn.net/2501_91227323?spm=1000.2115.3001.5343",
  location: "中国，洛阳"
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "EdgeVision 边缘计算目标检测系统",
    description: "基于 Jetson Nano 与 YOLOv5 的实时目标检测系统，优化了 TensorRT 推理加速，实现了在低功耗设备上的 30FPS 视频流分析。",
    tags: ["Python", "PyTorch", "TensorRT", "OpenCV"],
    imageUrl: "https://picsum.photos/600/400?random=1",
    link: "https://github.com/shengdaikongyin"
  },
  {
    id: 2,
    title: "基于 STM32 的自平衡机器人",
    description: "设计并制作了一款双轮自平衡小车。使用 PID 算法进行姿态控制，集成了 MPU6050 传感器，支持蓝牙遥控。",
    tags: ["C/C++", "STM32", "FreeRTOS", "PID Control"],
    imageUrl: "https://picsum.photos/600/400?random=2",
    link: "https://github.com/shengdaikongyin"
  },
  {
    id: 3,
    title: "工业级 AIoT 智能网关",
    description: "一款基于嵌入式 Linux 的多协议转换网关。支持 Modbus、MQTT 协议，内置 TensorFlow Lite 模型用于设备故障预测。",
    tags: ["Embedded Linux", "C++", "MQTT", "TinyML"],
    imageUrl: "https://picsum.photos/600/400?random=3",
    link: "https://github.com/shengdaikongyin"
  }
];

export const SKILLS: Skill[] = [
  { name: "C / C++", level: 95, icon: "Code2" },
  { name: "Python / AI", level: 90, icon: "Database" },
  { name: "Embedded Linux", level: 85, icon: "Server" },
  { name: "STM32 / RTOS", level: 90, icon: "Cpu" },
  { name: "PyTorch / TF", level: 80, icon: "Activity" },
  { name: "PCB Design", level: 75, icon: "Radio" },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "TinyML 实战：在微控制器上运行神经网络",
    excerpt: "随着物联网的发展，将 AI 模型部署在资源受限的 MCU 上成为趋势。本文介绍如何使用 TensorFlow Lite for Microcontrollers 将模型部署到 ESP32。",
    content: `
在嵌入式设备上运行 AI 模型（TinyML）正在改变物联网的格局。它允许设备在本地处理数据，无需上传云端，从而降低延迟并保护隐私。

### 为什么选择 TinyML？

传统的 AI 依赖强大的 GPU，而 TinyML 旨在让模型在只有 KB 级内存的微控制器上运行。这对于电池供电的边缘设备至关重要。

### 实战步骤

1.  **模型训练**：使用 TensorFlow Keras 训练一个简单的分类模型。
2.  **量化（Quantization）**：将 32 位浮点数模型转换为 8 位整数，大幅减小模型体积。
3.  **转换**：使用 \`xxd\` 工具将 \`.tflite\` 文件转换为 C 语言数组。
4.  **部署**：在 ESP32 上加载模型并进行推理。

### 总结

虽然性能有限，但 TinyML 使得“万物智能”成为可能。从语音唤醒到异常震动检测，应用场景无限广阔。
    `,
    date: "2024-05-20",
    category: "嵌入式AI",
    imageUrl: "https://picsum.photos/800/400?random=20",
    readTime: "8 min",
    comments: [
      { id: 1, author: "GeekBoy", date: "2024-05-21", content: "量化那一步经常掉精度，博主有什么优化建议吗？" }
    ]
  },
  {
    id: 2,
    title: "深入理解 FreeRTOS 任务调度机制",
    excerpt: "在复杂的嵌入式系统中，裸机开发往往力不从心。FreeRTOS 提供了轻量级的多任务管理。本文深入源码分析其上下文切换原理。",
    content: `
当项目逻辑变得复杂，仅仅使用 \`while(1)\` 和中断已经无法满足实时性需求。这时候，RTOS（实时操作系统）就派上用场了。

### 任务状态机

FreeRTOS 中的任务主要有四种状态：运行（Running）、就绪（Ready）、阻塞（Blocked）和挂起（Suspended）。理解状态之间的转换是掌握 RTOS 的关键。

### 抢占式调度

FreeRTOS 默认使用基于优先级的抢占式调度。高优先级的任务一旦就绪，会立即打断低优先级任务的执行。这保证了关键任务（如电机控制 loop）的实时性。

### 堆栈溢出检测

在开发中，栈溢出是常见的 Bug 来源。开启 \`configCHECK_FOR_STACK_OVERFLOW\` 可以帮助我们快速定位问题。
    `,
    date: "2024-04-15",
    category: "操作系统",
    imageUrl: "https://picsum.photos/800/400?random=21",
    readTime: "10 min",
    comments: []
  },
  {
    id: 3,
    title: "硬件设计心得：如何画出低噪声的 PCB",
    excerpt: "模拟电路与数字电路混合设计时，噪声干扰是一个头疼的问题。分享一些关于接地、去耦电容布局的实战经验。",
    content: `
优秀的原理图不代表优秀的电路板。PCB Layout 是决定硬件性能的关键一环。

### 单点接地 vs 多点接地

对于低频电路，单点接地可以避免地环路干扰；而对于高频电路（如嵌入式主控周边），多点接地（大面积铺铜）则能提供更低的阻抗。

### 去耦电容的摆放

电容必须尽可能靠近芯片引脚！这是金科玉律。线路越长，寄生电感越大，高频滤波效果就越差。

### 走线技巧

避免 90 度走线，减少信号反射。对于差分信号（如 USB、以太网），必须严格控制等长和阻抗匹配。
    `,
    date: "2024-03-08",
    category: "硬件设计",
    imageUrl: "https://picsum.photos/800/400?random=22",
    readTime: "6 min",
    comments: [
       { id: 3, author: "CircuitMaster", date: "2024-03-09", content: "非常实用的经验，特别是关于差分走线的部分。" }
    ]
  }
];

export const SYSTEM_INSTRUCTION = `
你是一个名为“星际助手”的AI，服务于"${PERSONAL_INFO.name}"的个人网站。
你的任务是代表${PERSONAL_INFO.name}回答访问者的问题。
请使用友好、专业且略带极客风格的中文语气。

关于作者的信息：
- 姓名：${PERSONAL_INFO.name}
- 职位：${PERSONAL_INFO.title}
- 简介：${PERSONAL_INFO.description}
- 地点：${PERSONAL_INFO.location}
- 邮箱：${PERSONAL_INFO.email}
- 技能：${SKILLS.map(s => s.name).join(', ')}
- 项目经历：${PROJECTS.map(p => p.title + " (" + p.description + ")").join('; ')}
- 博客文章：${BLOG_POSTS.map(b => b.title).join(', ')}
- CSDN博客：${PERSONAL_INFO.csdn}
- GitHub：${PERSONAL_INFO.github}

如果被问到你不知道的事情，请礼貌地建议访问者通过页面底部的邮箱联系作者，或者去CSDN看看他的文章。
不要编造虚假的工作经历。
`;