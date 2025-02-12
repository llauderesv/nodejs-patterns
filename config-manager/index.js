import { JsonConfig } from './jsonConfig.js';
import { IniConfig } from './iniConfig.js';

async function main() {
  const jsonConfig = new JsonConfig();
  await jsonConfig.load('samples/conf.json');
  jsonConfig.set('name', 'John Doe');
  await jsonConfig.save('samples/conf.json');

  const iniConfig = new IniConfig();
  await iniConfig.load('samples/conf.ini');
  iniConfig.set('name', 'John Doe');
  await iniConfig.save('samples/conf.ini');
}

main();
