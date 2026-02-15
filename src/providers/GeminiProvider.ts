import { ChatGoogleGenerativeAI } from '@langchain/google-genai';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  throw new Error('GEMINI_API_KEY is missing');
}

export class GeminiProvider {
  private model: ChatGoogleGenerativeAI;

  constructor(modelName: string = 'gemini-3-flash-preview') {
    this.model = new ChatGoogleGenerativeAI({
      apiKey: GEMINI_API_KEY,
      model: modelName,
      temperature: 0.7,
    });
  }

  getModel() {
    console.log('Gemini Thinking...');
    return this.model;
  }
}
