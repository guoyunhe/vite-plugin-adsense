# vite-plugin-adsense

Insert Google AdSense script to `index.html` and create `ads.txt` file.

## Why or who need it?

If your code powers many different websites, and each site use a different AdSense account, this
plugin is made for you. You can configure different AdSense account in `.env` file for each site.

## Install

```bash
npm i vite-plugin-adsense
```

## Usage

It is recommended to save your client id into `.env` file.

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

If you have more advanced usage, you can also pass `client` to plugin options.

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import adsense from 'vite-plugin-adsense';

export default defineConfig({
  plugins: [adsense({
    client: 'ca-pub-1234567890123456',
  })],
});
```
