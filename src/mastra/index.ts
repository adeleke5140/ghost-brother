
import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';

import { catAgent, factAgent } from './agents';

export const mastra = new Mastra({
  agents: { catAgent, factAgent },
  logger: createLogger({
    name: 'Mastra',
    level: 'info',
  }),
});
