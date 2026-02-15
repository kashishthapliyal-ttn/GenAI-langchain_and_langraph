import { ChatOpenAI } from '@langchain/openai';

const GROQ_API_KEY = process.env.GROQ_API_KEY;

export class GroqProvider {
  private model: ChatOpenAI;

  constructor(modelName: string = 'llama-3.1-8b-instant') {
    this.model = new ChatOpenAI({
      apiKey: GROQ_API_KEY,
      model: modelName,
      temperature: 0.7,
      configuration: {
        baseURL: 'https://api.groq.com/openai/v1',
      },
    });
  }

  getModel() {
    console.log('Groq Thinking...');
    return this.model;
  }
}
