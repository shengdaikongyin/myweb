import { motion } from 'framer-motion';
import { Download, FileText, Award, Briefcase, GraduationCap } from 'lucide-react';

const Resume = () => {
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
            简历
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
            以下是我的个人简历，包含教育背景、工作经历和专业技能。
          </motion.p>
        </div>
        
        {/* Download Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mb-12"
        >
          <a 
            href="#" 
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-md"
          >
            <Download className="h-5 w-5" />
            下载PDF简历
          </a>
        </motion.div>
        
        {/* Resume Content */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          {/* Personal Info */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">
              个人信息
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">姓名</p>
                <p className="text-gray-900 dark:text-white">孔寅</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">职位</p>
                <p className="text-gray-900 dark:text-white">前端开发工程师</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">邮箱</p>
                <p className="text-gray-900 dark:text-white">your.email@example.com</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">电话</p>
                <p className="text-gray-900 dark:text-white">+86 123 4567 8910</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">地址</p>
                <p className="text-gray-900 dark:text-white">中国，北京</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">网站</p>
                <p className="text-gray-900 dark:text-white">www.example.com</p>
              </div>
            </div>
          </motion.section>
          
          {/* Professional Summary */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">
              专业 summary
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              我是一名充满激情的前端开发工程师，拥有多年的Web开发经验。我热爱创造美观、实用的数字产品，并且不断学习新技术来提升自己的技能。
              我的专业领域包括React、Vue、JavaScript/TypeScript、TailwindCSS等现代前端技术。我注重代码质量和用户体验，致力于构建高性能、响应式的Web应用。
            </p>
          </motion.section>
          
          {/* Work Experience */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              工作经历
            </h2>
            <div className="space-y-8">
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">前端开发工程师</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">2022 - 至今</span>
                </div>
                <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-2">科技公司</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 pl-4">
                  <li>负责公司产品的前端开发，使用React、TypeScript和TailwindCSS构建现代化、响应式的Web应用</li>
                  <li>参与产品设计和用户体验优化，确保产品质量和性能</li>
                  <li>与后端团队协作，实现前后端数据交互和功能集成</li>
                  <li>编写技术文档和代码注释，提高代码可维护性</li>
                </ul>
              </div>
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">UI/UX设计师</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">2020 - 2022</span>
                </div>
                <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-2">设计工作室</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 pl-4">
                  <li>负责客户项目的UI/UX设计，包括用户研究、原型设计、视觉设计和交互设计</li>
                  <li>使用Figma、Sketch等设计工具创建设计稿和交互原型</li>
                  <li>与开发团队紧密合作，确保设计方案的顺利实施</li>
                  <li>参与设计评审和用户测试，不断优化设计方案</li>
                </ul>
              </div>
            </div>
          </motion.section>
          
          {/* Education */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              教育背景
            </h2>
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">计算机科学</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">2016 - 2020</span>
              </div>
              <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-2">大学</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 pl-4">
                <li>主修计算机科学，学习了数据结构、算法、数据库、操作系统等基础课程</li>
                <li>学习了Web开发、移动应用开发等专业课程</li>
                <li>参与了多个校园项目，积累了实践经验</li>
                <li>获得了优秀学生奖学金</li>
              </ul>
            </div>
          </motion.section>
          
          {/* Skills */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2">
              <Award className="h-5 w-5" />
              专业技能
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">技术技能</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">React</span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">JavaScript / TypeScript</span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">TailwindCSS / CSS</span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Node.js</span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">软技能</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">沟通能力</span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">团队协作</span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">问题解决</span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">时间管理</span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">80%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Resume;