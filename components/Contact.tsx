import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Github, BookOpen, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Footer Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-slate-900 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">保持联系</h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          无论您是有硬件项目合作意向，还是想探讨嵌入式 AI 技术，我都非常欢迎。
          请随时通过邮件或 CSDN 博客联系我。
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
          <div className="flex items-center gap-3 text-gray-300 bg-white/5 px-6 py-4 rounded-xl border border-white/10 hover:border-indigo-500/50 transition-colors">
            <Mail className="text-indigo-400" />
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors">{PERSONAL_INFO.email}</a>
          </div>
          <div className="flex items-center gap-3 text-gray-300 bg-white/5 px-6 py-4 rounded-xl border border-white/10 hover:border-indigo-500/50 transition-colors">
            <MapPin className="text-purple-400" />
            <span>{PERSONAL_INFO.location}</span>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" title="GitHub"><Github size={20} /></a>
            <a href={PERSONAL_INFO.csdn} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" title="CSDN Blog"><BookOpen size={20} /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;