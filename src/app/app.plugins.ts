import { registerPlugin } from '@capacitor/core';

interface LibGoPluginModel {
  GoodMorning(): Promise<{ answer: string }>;
}

const LibGoPlugin = registerPlugin<LibGoPluginModel>('LibGoPlugin');

export { LibGoPlugin, LibGoPluginModel };
