import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "个人博客系统",
      description: "使用React和Node.js开发的个人博客系统，支持文章管理、分类标签和评论功能。",
      technologies: ["React", "Node.js", "MongoDB", "TailwindCSS"],
      image: "https://neeko-copilot.bytedance.net/api/text2image?prompt=modern%20blog%20website%20interface%20with%20clean%20design&size=1024x1024"
    },
    {
      id: 2,
      title: "电商网站",
      description: "响应式电商网站，包含产品展示、购物车和结算功能，使用Vue和Express开发。",
      technologies: ["Vue", "Express", "MySQL", "Bootstrap"],
      image: "https://neeko-copilot.bytedance.net/api/text2image?prompt=modern%20ecommerce%20website%20with%20product%20grid&size=1024x1024"
    },
    {
      id: 3,
      title: "任务管理应用",
      description: "基于React和Firebase的任务管理应用，支持实时同步和团队协作。",
      technologies: ["React", "Firebase", "Material UI"],
      image: "https://neeko-copilot.bytedance.net/api/text2image?prompt=task%20management%20application%20dashboard&size=1024x1024"
    },
    {
      id: 4,
      title: "个人作品集网站",
      description: "展示个人项目和技能的作品集网站，使用React和TailwindCSS开发。",
      technologies: ["React", "TailwindCSS", "Framer Motion"],
      image: "https://neeko-copilot.bytedance.net/api/text2image?prompt=portfolio%20website%20design%20with%20project%20cards&size=1024x1024"
    },
    {
      id: 5,
      title: "天气应用",
      description: "使用OpenWeather API的天气应用，支持实时天气查询和预报功能。",
      technologies: ["React", "TypeScript", "OpenWeather API"],
      image: "https://neeko-copilot.bytedance.net/api/text2image?prompt=weather%20application%20interface%20with%20weather%20icons&size=1024x1024"
    },
    {
      id: 6,
      title: "聊天应用",
      description: "实时聊天应用，支持文字消息和表情发送，使用React和Socket.io开发。",
      technologies: ["React", "Socket.io", "Node.js"],
      image: "https://neeko-copilot.bytedance.net/api/text2image?prompt=chat%20application%20interface%20with%20message%20bubbles&size=1024x1024"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            作品集
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
            以下是我最近完成的一些项目，展示了我的技术能力和设计风格。
          </motion.p>
        </div>
        
        {/* Project Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href="#" 
                    className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    查看详情
                  </a>
                  <a 
                    href="#" 
                    className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;