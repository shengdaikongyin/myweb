import { motion } from 'framer-motion';

const About = () => {
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
            关于我
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '5rem' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary mx-auto"
          ></motion.div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Personal Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col md:flex-row gap-8 mb-16"
          >
            <div className="md:w-1/3">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto">
                <span className="text-white text-4xl md:text-5xl font-bold">孔</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">孔寅</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                前端开发工程师 | UI/UX设计师 | 技术爱好者
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                我是一名充满激情的前端开发工程师，拥有多年的Web开发经验。我热爱创造美观、实用的数字产品，并且不断学习新技术来提升自己的技能。
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                我的专业领域包括React、Vue、JavaScript/TypeScript、TailwindCSS等现代前端技术。我注重代码质量和用户体验，致力于构建高性能、响应式的Web应用。
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">年龄</p>
                  <p className="text-gray-900 dark:text-white">25</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">所在地</p>
                  <p className="text-gray-900 dark:text-white">中国，北京</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">邮箱</p>
                  <p className="text-gray-900 dark:text-white">your.email@example.com</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">电话</p>
                  <p className="text-gray-900 dark:text-white">+86 123 4567 8910</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Skills */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">专业技能</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">React</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">90%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">JavaScript / TypeScript</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">85%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">TailwindCSS / CSS</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">95%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">UI/UX 设计</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">80%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Node.js</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">75%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </motion.section>
          
          {/* Experience */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">工作经历</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-1 bg-primary rounded-full">
                  <div className="w-4 h-4 bg-primary rounded-full -ml-[0.35rem] mt-2"></div>
                </div>
                <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">前端开发工程师</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">2022 - 至今</span>
                  </div>
                  <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-2">科技公司</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    负责公司产品的前端开发，使用React、TypeScript和TailwindCSS构建现代化、响应式的Web应用。参与产品设计和用户体验优化，确保产品质量和性能。
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-primary rounded-full">
                  <div className="w-4 h-4 bg-primary rounded-full -ml-[0.35rem] mt-2"></div>
                </div>
                <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">UI/UX设计师</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">2020 - 2022</span>
                  </div>
                  <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-2">设计工作室</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    负责客户项目的UI/UX设计，包括用户研究、原型设计、视觉设计和交互设计。与开发团队紧密合作，确保设计方案的顺利实施。
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
          
          {/* Education */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">教育背景</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-1 bg-primary rounded-full">
                  <div className="w-4 h-4 bg-primary rounded-full -ml-[0.35rem] mt-2"></div>
                </div>
                <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">计算机科学</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">2016 - 2020</span>
                  </div>
                  <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-2">大学</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    主修计算机科学，学习了数据结构、算法、数据库、操作系统等基础课程，以及Web开发、移动应用开发等专业课程。
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default About;