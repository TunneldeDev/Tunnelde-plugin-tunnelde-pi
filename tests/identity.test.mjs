import { test } from 'node:test';import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';import { AiPlugin } from '../lib/engine.mjs';import { PLUGIN_ID, PROFILE_POLICY } from '../lib/identity.mjs';
test('package identity and primary protocol stay fixed without starting a process',async()=>{
 const manifest=JSON.parse(await readFile('tunnelde-plugin.json'));assert.equal(PLUGIN_ID,manifest.id);
 const engine=new AiPlugin({call:async(method)=>{if(method==='storage.get')return null;throw new Error('Unexpected host side effect: '+method);}});
 assert.ok(engine);assert.ok(PROFILE_POLICY.primaryProtocols.length);assert.equal(PROFILE_POLICY.primaryProtocols.includes(PROFILE_POLICY.defaultProtocol),true);
});
