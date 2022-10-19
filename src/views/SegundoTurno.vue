<template>
    <div class="home">
        <h1>Apuração 2º turno</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Ranking</th>
                    <th scope="col">Chapa</th>
                    <th scope="col">Número</th>
                    <th scope="col">Partido/Coligação</th>
                    <th scope="col">Votos</th>
                    <th scope="col">Porcentagem</th>
                    <th scope="col">Situação</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(candidato, index) in candidatos" :key="index">
                    <th scope="row">{{ candidato.seq }}º</th>
                    <td>{{ candidato.nm }} / {{ candidato.nv }}</td>
                    <td>{{ candidato.n }}</td>
                    <td>{{ candidato.cc }}</td>
                    <td>{{ candidato.vap }}</td>
                    <td>{{ candidato.pvap }}%</td>
                    <td v-if="candidato.st == 'Eleito'" class="bg-success text-light">{{ candidato.st }}</td>
                    <td v-else class="bg-danger text-light">{{ candidato.st }}</td>
                </tr>
            </tbody>
        </table>
        <div class="btn-recarregar">
            <button v-on:click="recarregar()" class="btn">Recarregar</button>
        </div>

        <div class="chartBox">
            <canvas id="myChart"></canvas>
        </div>

        <h2>Vencedor</h2>
        <div class="candidatos">
            <div class="candidato">
                <img v-show="eleito.nm == 'LULA'" src="/img/lula.webp" alt="Candidato eleito">
                <img v-show="eleito.nm == 'JAIR BOLSONARO'" src="/img/bolsonaro.webp" alt="Candidato eleito">
                <p>{{ eleito.nm }}</p>
                <p>{{ eleito.vap }} votos</p>
                <p>{{ eleito.pvap }} %</p>
                <p>Eleito</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Chart from 'chart.js/auto'

export default {
    name: 'SegundoTurno',

    data() {
        return {
            candidatos: [],
            eleito: []
        }
    },

    components: {

    },

    methods: {
        apuracao() {
            axios.get('https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/br/br-c0001-e000545-r.json').then(res => {
                this.candidatos = res.data.cand
                this.candidatoEleito(this.candidatos)
                this.grafico(this.candidatos)
            }).catch(error => {
                console.log(error)
            })
        },

        candidatoEleito(candidatos) {
            candidatos.forEach(candidato => {
                //Para teste:
                // candidato.nm == 'LULA'/'JAIR BOLSONARO'
                if (candidato.st == 'Eleito') {
                    this.eleito = candidato
                }
                console.log(candidato)
            });
        }, // segundo: https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/br/br-c0001-e000545-r.json

        grafico(candidatos) {
            const ctx = document.getElementById('myChart')
            const listaVotos = []
            const listaCandidatos = []

            candidatos.forEach(candidato => {
                listaVotos.push(candidato.vap)
                listaCandidatos.push(candidato.nm)
            })

            const myChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: listaCandidatos,
                    datasets: [{
                        label: 'dos votos',
                        data: listaVotos,
                        backgroundColor: [
                            'red',
                            'rgb(42, 57, 140)',
                            'rgba(255, 206, 86)',
                            'rgba(75, 192, 192)',
                            'rgba(153, 102, 255)',
                            'rgba(255, 159, 64)'
                        ]
                    }]
                }
            })
            myChart
        },

        recarregar() {
            location.reload()
        }
    },

    mounted() {
        this.apuracao()
    },

    created() {
        document.title = '2º turno'
    }
}
</script>

<style scoped>
.home h1 {
    text-align: center;
    margin-top: 5%;
    color: rgb(40, 37, 96);
    font-size: 3rem;
}

.home h2 {
    text-align: center;
    color: rgb(40, 37, 96);
    margin-top: 10%;
}

.table {
    margin-top: 1%;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
    border: 1px solid #e0e4e4;
    color: rgb(40, 37, 96);
}

td:hover {
    background-color: #e0e4e4;
}

.btn-recarregar {
    margin-top: 2%;
    display: flex;
    justify-content: center;
}

.btn {
    background-color: rgb(40, 37, 96);
    color: #FEFEFE;
}

.candidatos {
    margin-top: 10%;
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
}

.candidato {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.candidato img {
    border-radius: 50%;
}

.candidato p {
    margin: 15px;
    color: rgb(40, 37, 96);
    font-weight: 600;
    font-size: 20px;
    text-align: center;
}

.chartBox {
    margin-top: 5%;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
}
</style>