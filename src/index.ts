import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';
import { loadEnv, Plugin } from 'vite';

export interface AdSenseOptions {
  /** Google AdSense publisher ID, e.g. ca-pub-1234567890123456 */
  client?: string;
}

export default function adsense({ client }: AdSenseOptions = {}): Plugin {
  const env = loadEnv(process.env.NODE_ENV || '', process.cwd());
  const actualClient = client || env.VITE_ADSENSE_CLIENT;
  let outDir = 'dist';
  return {
    name: 'vite:plugin-adsense',
    configResolved(resolvedConfig) {
      // store the resolved outDir
      outDir = resolvedConfig.build.outDir;
    },
    transformIndexHtml: (html) => {
      if (!actualClient) {
        return html;
      }
      // insert adsense script to the end of index.html
      return html.replace(
        /<\/body>/,
        `  <script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${actualClient}" crossorigin="anonymous" defer></script>\n</body>`,
      );
    },
    closeBundle: async () => {
      if (!actualClient) {
        return;
      }
      // create ads.txt file
      await mkdir(outDir, { recursive: true });
      await writeFile(
        join(outDir, 'ads.txt'),
        `google.com, ${actualClient.substring(3)}, DIRECT, f08c47fec0942fa0\n`,
      );
    },
  };
}
