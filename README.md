# vite-plugin-adsense

## Install

```bash
npm i vite-plugin-adsense
```

## Usage

```ini
# .env
VITE_ADSENSE_CLIENT=ca-pub-1234567890123456
```

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import adsense from 'vite-plugin-adsense';

export default defineConfig({
  plugins: [adsense()],
});
```
