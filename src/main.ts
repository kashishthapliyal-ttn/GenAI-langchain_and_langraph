import './config/env';
import { createLLM } from './langchain/llmFactory.js';

async function run() {
  const llm = createLLM();

  const response = await llm.invoke('Explain LangGraph in simple words');

  console.log(response.content);
}

run();
