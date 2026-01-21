import { motion } from 'framer-motion';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "React 18 新特性详解",
      excerpt: "React 18 带来了许多令人兴奋的新特性，包括自动批处理、Suspense 改进和新的并发特性。本文将详细介绍这些新特性及其使用方法。",
      date: "2024-01-15",
      category: "前端开发",
      readTime: "8 分钟",
      image: "https://neeko-copilot.bytedance.net/api/text2image?prompt=react%2018%20features%20blog%20thumbnail&size=1024x1024"
    },
    {
      id: 2,
      title: "TailwindCSS v4 深度解析",
      excerpt: "TailwindCSS v4 带来了许多重大改进，包括更好的性能、更灵活的配置和新的功能。本文将深入探讨这些变化，并展示如何充分利用它们。",
      date: "2024-01-10",
      category: "CSS",
      readTime: "10 分钟",
      image: "https://neeko-copilot.bytedance.net/api/text2image?prompt=tailwindcss%20v4%20blog%20thumbnail&size=1024x1024"
    },
    {
      id: 3,
      title: "前端性能优化最佳实践",
      excerpt: "性能优化是前端开发中不可或缺的一部分。本文将分享一些前端性能优化的最佳实践，帮助你构建更快、更响应的网站。",
      date: "2024-01-05",
      category: "性能优化",
      readTime: "6 分钟",
      image: "https://neeko-copilot.bytedance.net/api/text2image?prompt=frontend%20performance%20optimization%20blog%20thumbnail&size=1024x1024"
    },
    {
      id: 4,
      title: "TypeScript 高级类型技巧",
      excerpt: "TypeScript 提供了强大的类型系统，本文将介绍一些高级类型技巧，帮助你写出更类型安全、更可维护的代码。",
      date: "2023-12-28",
      category: "TypeScript",
      readTime: "7 分钟",
      image: "https://neeko-copilot.bytedance.net/api/text2image?prompt=typescript%20advanced%20types%20blog%20thumbnail&size=1024x1024"
    },
    {
      id: 5,
      title: "响应式设计原则与实践",
      excerpt: "响应式设计已成为现代Web开发的标准。本文将介绍响应式设计的核心原则，并通过实际例子展示如何实现高质量的响应式网站。",
      date: "2023-12-20",
      category: "设计",
      readTime: "9 分钟",
      image: "https://neeko-copilot.bytedance.net/api/text2image?prompt=responsive%20design%20blog%20thumbnail&size=1024x1024"
    },
    {
      id: 6,
      title: "如何构建可维护的前端项目",
      excerpt: "随着项目规模的增长，代码维护变得越来越重要。本文将分享一些构建可维护前端项目的最佳实践，包括代码组织、命名规范和工具选择。",
      date: "2023-12-15",
      category: "前端开发",
      readTime: "11 分钟",
      image: "https://neeko-copilot.bytedance.net/api/text2image?prompt=maintainable%20frontend%20project%20blog%20thumbnail&size=1024x1024"
    }
  ];

  const categories = ["全部", "前端开发", "CSS", "性能优化", "TypeScript", "设计"];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            博客
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '5rem' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary mx-auto"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            分享我的技术见解、学习心得和项目经验。
          </motion.p>
        </div>
        
        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                index === 0 
                  ? 'bg-primary text-white' 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        {/* Blog Posts */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {post.date} · {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  阅读全文
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Pagination */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center mt-12"
        >
          <div className="flex gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              2
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              3
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;