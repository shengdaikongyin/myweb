import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Loader2, Sparkles, Settings, Save, Cpu } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToAI, configureModel, loadConfig, AVAILABLE_MODELS } from '../services/geminiService';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '你好！我是孔寅的智能助手。有什么关于嵌入式开发或 AI 的问题可以问我！' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Settings State
  const [showSettings, setShowSettings] = useState(false);
  const [model, setModel] = useState('');

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, showSettings]);

  // Load config on mount
  useEffect(() => {
    const config = loadConfig();
    setModel(config.model);
  }, []);

  const handleSaveSettings = () => {
    configureModel(model);
    setShowSettings(false);
    setMessages(prev => [...prev, {role: 'model', text: `已切换模型为: ${AVAILABLE_MODELS.find(m => m.id === model)?.name || model}`}]);
  };

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToAI(userMsg.text, messages);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error: any) {
      const errorMessage = error.message || "系统繁忙，请稍后再试。";
      setMessages(prev => [...prev, { role: 'model', text: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 h-[500px] bg-slate-900/95 backdrop-blur-xl border border-indigo-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up transition-all">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-2 text-white">
              <Bot size={20} />
              <span className="font-semibold">星际助手</span>
            </div>
            <div className="flex items-center gap-2">
                <button 
                    onClick={() => setShowSettings(!showSettings)} 
                    className={`p-1.5 rounded-full hover:bg-white/10 transition-colors ${showSettings ? 'bg-white/20' : ''}`}
                    title="切换模型"
                >
                    <Settings size={18} className="text-white" />
                </button>
                <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                  <X size={20} />
                </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-hidden relative flex flex-col">
            
            {showSettings ? (
                // Settings Panel
                <div className="absolute inset-0 bg-slate-800 p-6 flex flex-col gap-4 animate-fade-in z-10">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <Cpu size={18} className="text-indigo-400"/> 模型设置
                    </h3>
                    <p className="text-sm text-gray-400">
                        您可以自由选择不同的 AI 模型来获得最佳的对话体验。
                    </p>

                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-400 uppercase">选择模型</label>
                        <div className="relative">
                            <select 
                                value={model}
                                onChange={(e) => setModel(e.target.value)}
                                className="w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-3 text-white text-sm focus:border-indigo-500 outline-none appearance-none cursor-pointer hover:bg-slate-800 transition-colors"
                            >
                                {AVAILABLE_MODELS.map(m => (
                                    <option key={m.id} value={m.id}>{m.name}</option>
                                ))}
                            </select>
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                            DeepSeek-R1 擅长复杂推理，DeepSeek-V3 响应速度更快。
                        </p>
                    </div>

                    <div className="mt-auto pt-4">
                        <button 
                            onClick={handleSaveSettings}
                            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
                        >
                            <Save size={18} /> 确认修改
                        </button>
                    </div>
                </div>
            ) : (
                // Messages List
                <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-indigo-500/20 scrollbar-track-transparent">
                    {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
                        msg.role === 'user' 
                            ? 'bg-indigo-600 text-white rounded-br-none' 
                            : 'bg-slate-800 border border-white/10 text-gray-200 rounded-bl-none'
                        }`}>
                        {msg.text}
                        </div>
                    </div>
                    ))}
                    {isLoading && (
                    <div className="flex justify-start">
                        <div className="bg-slate-800 border border-white/10 rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-2">
                        <Loader2 size={16} className="animate-spin text-indigo-400" />
                        <span className="text-xs text-gray-400">思考中...</span>
                        </div>
                    </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
            )}
          </div>

          {/* Input Area (Only show when not in settings) */}
          {!showSettings && (
            <div className="p-4 bg-slate-900 border-t border-white/5 shrink-0">
                <div className="flex items-center gap-2 bg-slate-800 rounded-full px-4 py-2 border border-indigo-500/20 focus-within:border-indigo-500/50 transition-colors">
                <input 
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="问点什么..."
                    className="flex-1 bg-transparent text-sm text-white placeholder-gray-500 outline-none"
                />
                <button 
                    onClick={handleSend}
                    disabled={!inputValue.trim() || isLoading}
                    className={`p-1.5 rounded-full transition-all ${
                    inputValue.trim() ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30' : 'text-gray-500'
                    }`}
                >
                    <Send size={16} />
                </button>
                </div>
                <div className="text-[10px] text-center text-gray-600 mt-2 flex items-center justify-center gap-1">
                <Sparkles size={10} /> Powered by SiliconFlow
                </div>
            </div>
          )}
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-300 ${
          isOpen ? 'bg-slate-700 rotate-90' : 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-110 animate-pulse-slow'
        }`}
      >
        {isOpen ? <X size={24} className="text-white" /> : <MessageSquare size={24} className="text-white" />}
        
        {/* Tooltip hint if closed */}
        {!isOpen && (
          <span className="absolute right-16 bg-white text-slate-900 px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            和我聊天
          </span>
        )}
      </button>
    </div>
  );
};

export default AIChat;