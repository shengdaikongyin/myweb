import { SYSTEM_INSTRUCTION } from '../constants';
import { ChatMessage } from '../types';

const API_URL = "https://api.siliconflow.cn/v1/chat/completions";
// 默认使用 DeepSeek-V3，您也可以在设置中改为 deepseek-ai/DeepSeek-R1 或 Qwen/Qwen2.5-72B-Instruct
const DEFAULT_MODEL = "deepseek-ai/DeepSeek-V3"; 

let apiKey = ""; 
let currentModel = DEFAULT_MODEL;

export const configureAI = (key: string, model: string) => {
  apiKey = key;
  currentModel = model || DEFAULT_MODEL;
  if (typeof window !== 'undefined') {
    localStorage.setItem('sf_api_key', key);
    localStorage.setItem('sf_model', currentModel);
  }
};

export const loadConfig = () => {
    if (typeof window !== 'undefined') {
        apiKey = localStorage.getItem('sf_api_key') || "";
        currentModel = localStorage.getItem('sf_model') || DEFAULT_MODEL;
    }
    return { apiKey, model: currentModel };
}

export const sendMessageToAI = async (message: string, history: ChatMessage[]): Promise<string> => {
  const config = loadConfig();
  if (!config.apiKey) {
    throw new Error("请点击右上角设置图标配置 API Key");
  }

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
        throw new Error(err.error?.message || "请求失败，请检查 API Key");
    }

    const data = await response.json();
    return data.choices[0].message.content;

  } catch (error: any) {
    console.error("AI Service Error:", error);
    throw error; // 将错误抛出给 UI 处理
  }
};
