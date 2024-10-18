import http from 'http';
import { getAllVacas } from './controllers/VacasController.js';
import { v4 as uuidv4 } from 'uuid';

const HTTP_PORT = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Permitir todas las fuentes
    if (req.url === '/getVacas') {
        if (req.method === 'GET') {
            getAllVacas(req, res);
        } 
    } else {
        res.writeHead(404, 'Ruta no encontrada');
        res.end()
    }
});

server.listen(HTTP_PORT, () => {
    console.log(`Servidor escuchando en puerto ${HTTP_PORT}`)
})