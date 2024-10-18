export default class Home {
    constructor(selector) {
        console.log('homepage');
        console.log(selector);
        this.container = document.getElementById(selector);
        this.loadVacas();
    }

    async loadVacas() {
        try {   
            const response = await axios.get("http://localhost:3000/getVacas");
            this.vacas = response.data.data;

        } catch (e) {
            console.error('Error al cargar los datos:', e);
            this.vacas = [];
        } finally {
            this.render(); 
        }
    }

    render() {
        let vacasHtml = `
            <table class="home-vacas-table">
                <thead>
                    <tr>
                        <th>ID Vaca</th>
                        <th>Nombre Vaca</th>
                        <th>Id Collar</th>
                    </tr>
                </thead>
                <tbody>
        `;

        this.vacas?.forEach(vaca => {
            vacasHtml += `
                <tr>
                    <td>${vaca.id}</td>
                    <td>${vaca.name}</td>
                    <td>${vaca.id_collar}</td>
                </tr>
            `;
        });

        vacasHtml += `
                </tbody>
            </table>
        `;

        this.container.innerHTML = vacasHtml;
    }
}
