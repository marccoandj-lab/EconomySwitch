import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '../dist/index.html');

if (!fs.existsSync(filePath)) {
    console.log('dist/index.html not found. Skipping CSS warning fixes.');
    process.exit(0);
}

let html = fs.readFileSync(filePath, 'utf8');

// Fix 1: "Property is ignored due to the display. With 'display: block', vertical-align should not be used."
// Tailwind preflight has: audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}
// We can just remove vertical-align:middle from this specific block, as it's ignored anyway.
html = html.replace(/display:block;vertical-align:middle/g, 'display:block');

// Fix 2: "Also define the standard property 'line-clamp' for compatibility"
// We need to find -webkit-line-clamp:value and add standard line-clamp property next to it.
html = html.replace(/-webkit-line-clamp:([^;\}]+)(?:;|\})/g, (match, p1) => {
    if (match.endsWith(';')) {
        return `-webkit-line-clamp:${p1};line-clamp:${p1};`;
    } else {
        return `-webkit-line-clamp:${p1};line-clamp:${p1}}`;
    }
});

fs.writeFileSync(filePath, html, 'utf8');
console.log('Fixed CSS warnings in dist/index.html safely!');
