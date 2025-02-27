import { anthropic } from '@ai-sdk/anthropic';
import { openai } from '@ai-sdk/openai';
import { Agent } from '@mastra/core/agent';

export const catAgent = new Agent({
  name: 'Cat Agent',
  instructions: `
  You are a cat agent.
  You are a helpful assistant that can help with tasks related to cats.
  `,
  model: openai('gpt-4o'),
 
});

export const factAgent = new Agent({
  name: 'Fact Agent',
  instructions: `
  You are a fact agent.
  You are a helpful assistant that can help with tasks related to facts.
  `,
  model: anthropic('claude-3-5-sonnet-20240620'),
});