import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Menu, X } from 'lucide-react';

const Home = ({ isDarkMode }) => {
  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`} style={{ 
      background: isDarkMode 
        ? 'linear-gradient(to bottom right, #111827, #1f2937)' 
        : 'linear-gradient(to bottom right, #f9fafb, #f3f4f6)' 
    }}>
      {/* Hero Section */}
      <section className="py-16 md:py-28">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full" style={{ 
                background: 'linear-gradient(to bottom right, #3b82f6, #6366f1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto'
              }}>
                <span className="text-white text-4xl md:text-5xl font-bold">孔</span>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={{ color: isDarkMode ? '#f3f4f6' : '#1f2937' }}
            >
              孔寅
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 max-w-2xl px-4"
              style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}
            >
              前端开发工程师 | UI/UX设计师 | 技术爱好者
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-10 max-w-xl px-4"
              style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}
            >
              专注于创建美观、响应式的现代网站，结合技术与设计，为用户提供卓越的体验。
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a 
                href="#contact" 
                className="btn btn-primary"
              >
                联系我
              </a>
              <a 
                href="#portfolio" 
                className="btn btn-secondary"
                style={{ backgroundColor: isDarkMode ? '#1f2937' : 'white', color: isDarkMode ? '#f3f4f6' : '#1f2937', borderColor: isDarkMode ? '#374151' : '#e5e7eb' }}
              >
                查看作品
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="social-links"
            >
              <a href="#" className="social-link" aria-label="GitHub">
                <Github size={24} />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="mailto:your.email@example.com" className="social-link" aria-label="Email">
                <Mail size={24} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* About Section Preview */}
      <section id="about" className="py-16" style={{ backgroundColor: isDarkMode ? '#1f2937' : 'white' }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: isDarkMode ? '#f3f4f6' : '#1f2937' }}>关于我</h2>
            <div className="w-20 h-1" style={{ backgroundColor: '#3b82f6', margin: '0 auto' }}></div>
          </div>
          <div className="max-w-3xl mx-auto text-center px-4">
            <p className="mb-8" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
              我是一名充满激情的前端开发工程师，拥有多年的Web开发经验。我热爱创造美观、实用的数字产品，并且不断学习新技术来提升自己的技能。
            </p>
            <a 
              href="/about" 
              className="inline-flex items-center"
              style={{ color: '#3b82f6' }}
            >
              了解更多 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      {/* Portfolio Section Preview */}
      <section id="portfolio" className="py-16" style={{ backgroundColor: isDarkMode ? '#111827' : '#f9fafb' }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: isDarkMode ? '#f3f4f6' : '#1f2937' }}>作品集</h2>
            <div className="w-20 h-1" style={{ backgroundColor: '#3b82f6', margin: '0 auto' }}></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {/* Portfolio Item 1 */}
            <div className="card" style={{ backgroundColor: isDarkMode ? '#1f2937' : 'white' }}>
              <div className="h-48" style={{ backgroundColor: isDarkMode ? '#374151' : '#e5e7eb' }}></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2" style={{ color: isDarkMode ? '#f3f4f6' : '#1f2937' }}>项目名称</h3>
                <p className="mb-4" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>项目描述</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: isDarkMode ? '#374151' : '#f3f4f6', color: isDarkMode ? '#d1d5db' : '#374151' }}>React</span>
                  <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: isDarkMode ? '#374151' : '#f3f4f6', color: isDarkMode ? '#d1d5db' : '#374151' }}>TailwindCSS</span>
                </div>
                <a href="#" style={{ color: '#3b82f6' }}>查看详情</a>
              </div>
            </div>
            
            {/* Portfolio Item 2 */}
            <div className="card" style={{ backgroundColor: isDarkMode ? '#1f2937' : 'white' }}>
              <div className="h-48" style={{ backgroundColor: isDarkMode ? '#374151' : '#e5e7eb' }}></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2" style={{ color: isDarkMode ? '#f3f4f6' : '#1f2937' }}>项目名称</h3>
                <p className="mb-4" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>项目描述</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: isDarkMode ? '#374151' : '#f3f4f6', color: isDarkMode ? '#d1d5db' : '#374151' }}>Vue</span>
                  <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: isDarkMode ? '#374151' : '#f3f4f6', color: isDarkMode ? '#d1d5db' : '#374151' }}>JavaScript</span>
                </div>
                <a href="#" style={{ color: '#3b82f6' }}>查看详情</a>
              </div>
            </div>
            
            {/* Portfolio Item 3 */}
            <div className="card" style={{ backgroundColor: isDarkMode ? '#1f2937' : 'white' }}>
              <div className="h-48" style={{ backgroundColor: isDarkMode ? '#374151' : '#e5e7eb' }}></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2" style={{ color: isDarkMode ? '#f3f4f6' : '#1f2937' }}>项目名称</h3>
                <p className="mb-4" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>项目描述</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: isDarkMode ? '#374151' : '#f3f4f6', color: isDarkMode ? '#d1d5db' : '#374151' }}>React</span>
                  <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: isDarkMode ? '#374151' : '#f3f4f6', color: isDarkMode ? '#d1d5db' : '#374151' }}>TypeScript</span>
                </div>
                <a href="#" style={{ color: '#3b82f6' }}>查看详情</a>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <a 
              href="/portfolio" 
              className="inline-flex items-center"
              style={{ color: '#3b82f6' }}
            >
              查看全部作品 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      {/* Contact Section Preview */}
      <section id="contact" className="py-16" style={{ backgroundColor: isDarkMode ? '#1f2937' : 'white' }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: isDarkMode ? '#f3f4f6' : '#1f2937' }}>联系我</h2>
            <div className="w-20 h-1" style={{ backgroundColor: '#3b82f6', margin: '0 auto' }}></div>
          </div>
          <div className="max-w-3xl mx-auto text-center px-4">
            <p className="mb-8" style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
              如果您有任何问题或合作意向，欢迎随时与我联系。我会尽快回复您。
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center"
              style={{ color: '#3b82f6' }}
            >
              联系我 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;