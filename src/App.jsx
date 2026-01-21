import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <Router>
      <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
        {/* Navigation */}
        <motion.nav 
          className={`nav ${isScrolled ? 'nav-dark' : ''} ${isDarkMode ? 'nav-dark' : ''}`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container">
            <div className="flex justify-between items-center py-3">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <Link to="/" className="text-xl font-bold" style={{ color: '#3b82f6' }}>孔寅</Link>
              </motion.div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                <NavLink to="/">首页</NavLink>
                <NavLink to="/about">关于我</NavLink>
                <NavLink to="/portfolio">作品集</NavLink>
                <NavLink to="/blog">博客</NavLink>
                <NavLink to="/contact">联系我</NavLink>
                <NavLink to="/resume">简历</NavLink>
                <button 
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  style={{ color: isDarkMode ? '#f3f4f6' : '#374151' }}
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
              
              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center gap-2">
                <button 
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  style={{ color: isDarkMode ? '#f3f4f6' : '#374151' }}
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  style={{ color: isDarkMode ? '#f3f4f6' : '#374151' }}
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
            
            {/* Mobile Navigation Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`md:hidden py-4 ${isDarkMode ? 'dark' : ''}`}
                  style={{ backgroundColor: isDarkMode ? '#111827' : 'white' }}
                >
                  <div className="flex flex-col space-y-4 px-4">
                    <MobileNavLink to="/" onClick={() => setIsMobileMenuOpen(false)} isDarkMode={isDarkMode}>首页</MobileNavLink>
                    <MobileNavLink to="/about" onClick={() => setIsMobileMenuOpen(false)} isDarkMode={isDarkMode}>关于我</MobileNavLink>
                    <MobileNavLink to="/portfolio" onClick={() => setIsMobileMenuOpen(false)} isDarkMode={isDarkMode}>作品集</MobileNavLink>
                    <MobileNavLink to="/blog" onClick={() => setIsMobileMenuOpen(false)} isDarkMode={isDarkMode}>博客</MobileNavLink>
                    <MobileNavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)} isDarkMode={isDarkMode}>联系我</MobileNavLink>
                    <MobileNavLink to="/resume" onClick={() => setIsMobileMenuOpen(false)} isDarkMode={isDarkMode}>简历</MobileNavLink>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>

        {/* Main content with page transitions */}
        <main style={{ paddingTop: '64px' }}>
          <PageLayout>
            <Routes>
              <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
              <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
              <Route path="/portfolio" element={<Portfolio isDarkMode={isDarkMode} />} />
              <Route path="/blog" element={<Blog isDarkMode={isDarkMode} />} />
              <Route path="/contact" element={<Contact isDarkMode={isDarkMode} />} />
              <Route path="/resume" element={<Resume isDarkMode={isDarkMode} />} />
            </Routes>
          </PageLayout>
        </main>

        {/* Footer */}
        <motion.footer 
          className={`py-8 border-t ${isDarkMode ? 'dark' : ''}`}
          style={{ backgroundColor: isDarkMode ? '#1f2937' : '#f9fafb', borderColor: isDarkMode ? '#374151' : '#e5e7eb' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="container text-center">
            <p className="text-sm" style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>
              © 2024 孔寅. 保留所有权利.
            </p>
          </div>
        </motion.footer>
      </div>
    </Router>
  );
}

// Navigation link component with hover effects
function NavLink({ to, children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <Link 
        to={to} 
        className="text-sm font-medium transition-colors"
        style={{ color: '#374151' }}
      >
        {children}
      </Link>
    </motion.div>
  );
}

// Mobile navigation link component
function MobileNavLink({ to, children, onClick, isDarkMode }) {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
    >
      <Link 
        to={to} 
        onClick={onClick}
        className="block text-sm font-medium py-2 transition-colors"
        style={{ color: isDarkMode ? '#f3f4f6' : '#374151' }}
      >
        {children}
      </Link>
    </motion.div>
  );
}

// Page layout component with transitions
function PageLayout({ children }) {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default App;