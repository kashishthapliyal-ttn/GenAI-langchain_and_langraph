import { GeminiProvider } from '../providers/GeminiProvider.js';
import { GroqProvider } from '../providers/GroqProvider.js';

export type ProviderType = 'gemini' | 'groq';

const PROVIDER = process.env.PROVIDER;

export function createLLM() {
  switch (PROVIDER) {
    case 'gemini':
      return new GeminiProvider().getModel();
    case 'groq':
      return new GroqProvider().getModel();
    default:
      throw new Error('Invalid provider type');
  }
}
