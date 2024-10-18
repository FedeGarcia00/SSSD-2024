import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

class VacasRepository {
    async getVacas() {
        const vacas = JSON.parse(fs.readFileSync('./db/vacas.json', 'utf8'));
        return vacas.map(vaca => ({ id: vaca.id, name: vaca.name, id_collar: vaca.id_collar}));
    }

    //To do
    // async createVaca(vaca) {
    // }
}

const vacasRepository = new VacasRepository();
export default vacasRepository