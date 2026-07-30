import 'dotenv/config';
import { execSync } from 'node:child_process';
import { Client } from 'basic-ftp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const localDir = path.resolve(__dirname, '..', 'dist', 'DrgConstruct', 'browser');
const remoteDir = process.env.FTP_REMOTE_DIR || '/public_html';

console.log('Construiesc aplicatia Angular pentru productie...');
execSync('npm run build:namecheap', { stdio: 'inherit' });

const client = new Client();

async function deploy() {
  try {
    console.log(`Ma conectez la ${process.env.FTP_HOST}...`);
    await client.access({
      host: process.env.FTP_HOST,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASSWORD,
      secure: true,
    });

    console.log(`Urc fisierele din ${localDir} in ${remoteDir}...`);
    await client.ensureDir(remoteDir);
    await client.uploadFromDir(localDir);

    console.log('Deploy finalizat cu succes!');
  } catch (err) {
    console.error('Deploy esuat:', err);
    process.exitCode = 1;
  } finally {
    client.close();
  }
}

deploy();
