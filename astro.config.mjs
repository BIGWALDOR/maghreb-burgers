import { defineConfig } from 'astro/config';

import sanity from 'astro-sanity';

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: 'zcbjf0lk',
      dataset: 'production',
      apiVersion: '2023-05-01',
      useCdn: true,
    }),
  ],
});
