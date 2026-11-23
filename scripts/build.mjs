import { cp, copyFile } from 'node:fs/promises';
await cp('node_modules/@tunnelde/assistant-runtime/runtime/lib','lib',{recursive:true,filter:source=>!source.endsWith('/identity.mjs')});
for(const name of ['index.mjs','remote-entry.mjs','stdio-entry.mjs']) await copyFile(`node_modules/@tunnelde/assistant-runtime/runtime/${name}`,name);
