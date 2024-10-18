import path from 'path';
import { fileURLToPath } from 'url';
import { join, resolve } from 'path';
import express from 'express';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/static", express.static(join(__dirname, 'static')));

app.get("/*", (req, res) => {
  res.sendFile(resolve(__dirname, "index.html"));
});

app.listen(8080, () => {
    console.log('Servidor iniciado en el puerto 8080');
});
