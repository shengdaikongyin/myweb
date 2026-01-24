import React from 'react';
import { SKILLS } from '../constants';
import { Code, Server, Cpu, Globe, Database, Layout } from 'lucide-react';

const iconMap: any = {
  Code, Server, Cpu, Globe, Database, Layout
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">关于我与技能</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio Side */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-white/5 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-indigo-300 mb-6">探索技术与艺术的边界</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              我是一名充满激情的前端工程师，拥有5年的开发经验。我不仅关注代码的质量与可维护性，更执着于用户界面的微小细节。
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              在我的职业生涯中，我参与过从初创产品到大型企业级平台的各种项目。我相信，好的软件应该是直观、快速且令人愉悦的。
            </p>
            <p className="text-gray-300 leading-relaxed">
              当我不写代码时，我喜欢摄影、阅读科幻小说，或者研究最新的AI技术趋势。
            </p>
          </div>

          {/* Skills Side */}
          <div className="space-y-6">
            {SKILLS.map((skill, index) => {
              const Icon = iconMap[skill.icon] || Code;
              return (
                <div key={index} className="group">
                  <div className="flex justify-between items-end mb-2">
                    <div className="flex items-center gap-3 text-white font-medium">
                      <Icon size={18} className="text-indigo-400" />
                      {skill.name}
                    </div>
                    <span className="text-sm text-gray-500 font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-700/50 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transform origin-left transition-transform duration-1000 ease-out group-hover:scale-x-105"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;