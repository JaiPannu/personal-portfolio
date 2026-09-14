import sharp from 'sharp';
import { readdir, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.resolve(root, '../src/assets/images');
const outDir = path.resolve(srcDir, 'optimized');

// project grid thumbnails are shown ~410px wide -> 820px covers retina
const PROJECT_WIDTH = 820;
const PROJECT_QUALITY = 78;

// avatar is shown ~64px -> 200px covers retina
const AVATAR_WIDTH = 200;
const AVATAR_QUALITY = 82;

const projects = [
  'Bucky.png', 'CoCare.png', 'Speechdojo.jpg', 'Captur.jpg',
  'Divergence.webp', 'AWISSA.png', 'Kobe.png', 'AlbertaSat.png', 'BIFI.png',
];
const avatars = ['My-image-new.jpg'];

const kb = (bytes) => (bytes / 1024).toFixed(0) + ' kB';

async function convert(file, width, quality) {
  const input = path.join(srcDir, file);
  const outName = path.parse(file).name + '.webp';
  const output = path.join(outDir, outName);
  const before = (await stat(input)).size;
  await sharp(input)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(output);
  const after = (await stat(output)).size;
  console.log(`${file.padEnd(20)} ${kb(before).padStart(9)} -> ${kb(after).padStart(8)}  (${outName})`);
}

await mkdir(outDir, { recursive: true });
console.log('Optimizing project images...');
for (const f of projects) await convert(f, PROJECT_WIDTH, PROJECT_QUALITY);
console.log('\nOptimizing avatar...');
for (const f of avatars) await convert(f, AVATAR_WIDTH, AVATAR_QUALITY);
console.log('\nDone. Output in src/assets/images/optimized/');
