// Entry for make.fun "Sum up 20 November's world news in one image" (news-image-20261120).
// The front page is drawn as HTML/SVG in src/page.html and rendered once to entry.png;
// this program copies that PNG to /output/entry.png (no network, standard library only).

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
