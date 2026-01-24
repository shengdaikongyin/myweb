import { SYSTEM_INSTRUCTION } from '../constants';
import { ChatMessage } from '../types';

const API_URL = "https://api.siliconflow.cn/v1/chat/completions";

// 硬编码您的 API Key
const API_KEY = "sk-bplvwtsusuoohmkcfxckxydyfffqcvyngpdsrwpvwngimros";

// 可选模型列表
export const AVAILABLE_MODELS = [
  { id: "deepseek-ai/DeepSeek-V3", name: "DeepSeek V3 (默认 - 智能快速)" },
  { id: "deepseek-ai/DeepSeek-R1", name: "DeepSeek R1 (深度推理)" },
  { id: "Qwen/Qwen2.5-72B-Instruct", name: "Qwen 2.5 72B (通义千问)" }
];

const DEFAULT_MODEL = AVAILABLE_MODELS[0].id;

let currentModel = DEFAULT_MODEL;

// 仅配置模型
export const configureModel = (model: string) => {
  currentModel = model || DEFAULT_MODEL;
  if (typeof window !== 'undefined') {
    localStorage.setItem('sf_model', currentModel);
  }
};

export const loadConfig = () => {
    if (typeof window !== 'undefined') {
        currentModel = localStorage.getItem('sf_model') || DEFAULT_MODEL;
    }
    return { apiKey: API_KEY, model: currentModel };
}

export const sendMessageToAI = async (message: string, history: ChatMessage[]): Promise<string> => {
  const config = loadConfig();
  
  // 转换历史记录格式
  const messages = [
    { role: "system", content: SYSTEM_INSTRUCTION },
    ...history.filter(msg => !msg.isLoading).map(msg => ({
        role: msg.role === 'model' ? 'assistant' : 'user',
        content: msg.text
    })),
    { role: "user", content: message }
  ];

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${config.apiKey}`
      },
      body: JSON.stringify({
        model: config.model,
        messages: messages,
        stream: false,
        max_tokens: 1024,
        temperature: 0.7
      })
    });

    if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error?.message || "请求失败，请稍后再试");
    }

    const data = await response.json();
    // 兼容 DeepSeek R1 的推理过程输出（如果有）
    const content = data.choices[0].message.content;
    const reasoning = data.choices[0].message.reasoning_content;
    
    if (reasoning) {
        return `> **思维链**:\n${reasoning.replace(/^/gm, '> ')}\n\n${content}`;
    }
    
    return content;

  } catch (error: any) {
    console.error("AI Service Error:", error);
    throw error;
  }
};
