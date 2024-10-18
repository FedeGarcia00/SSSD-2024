import vacasRepository from "../repositories/VacasRepository.js";

export const getAllVacas = async (req, res) => {
    try {
        const result = await vacasRepository.getVacas();
        res.setHeader('Content-Type', 'application/json')
        const response = {
            data: result
        }
        //console.log(response)
        res.end(JSON.stringify(response));
        
    } catch (e) {
        console.log(e)
        res.writeHead(500)
        res.end('Error')
    }
}

// Aca iria el metodo para agregar vacas