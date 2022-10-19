<template>
    <div class="home">
        <h1>Apuração 1º turno</h1>

        <table class="table">
            <thead>
                <tr class="">
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
                    <td>{{ candidato.vap.toLocaleString('pt-BR') }}</td>
                    <td>{{ candidato.pvap }}%</td>
                    <td v-if="candidato.st == '2º turno'" class="bg-success text-light">{{ candidato.st }}</td>
                    <td v-else class="bg-danger text-light">{{ candidato.st }}</td>
                </tr>
            </tbody>
        </table>

        <div class="chartBox">
            <canvas id="myChart"></canvas>
        </div>

        <h2>Foram para o 2º turno</h2>
        <h3><a href="/apuracao/turno/2">Acompanhe o 2º turno aqui</a></h3>
        <div class="candidatos">
            <div class="candidato" v-for="(candidato, index) in candidatosTurno2" :key="index">
                <img v-if="candidato.seq == 1" src="/img/lula.webp" alt="Candidato Lula">
                <img v-else src="/img/bolsonaro.webp" alt="Candidato Bolsonaro">
                <p>{{ candidato.nm }}</p>
                <p>{{ candidato.vap }} votos</p>
                <p>{{ candidato.pvap }}%</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Chart from 'chart.js/auto'

export default {
    name: 'PrimeiroTurno',

    data() {
        return {
            candidatos: [],
            candidatosTurno2: []
        }
    },

    components: {
    },

    methods: {
        apuracao() {
            axios.get('https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json').then(res => {
                this.candidatos = res.data.cand
                this.segundoTurno(this.candidatos)
                this.grafico(this.candidatos)
            }).catch(error => {
                console.log(error)
            })
        },

        segundoTurno(candidatos) {
            candidatos.forEach(candidato => {
                if (candidato.st == '2º turno') {
                    this.candidatosTurno2.push(candidato)
                }
            });
        },

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
        }
    },

    mounted() {
        this.apuracao()
    },

    created() {
        document.title = '1º turno'
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

.home h2,
.home h3 {
    text-align: center;
    color: rgb(40, 37, 96);
    margin-top: 10%;
    font-size: 2rem;
}

.home h3 a {
    text-decoration: underline;
    font-size: 1.5rem;
    color: rgb(40, 37, 96);
    text-align: center;
}

.home h3 a:hover {
    opacity: 0.5;
}

.candidatos {
    margin-top: 5%;
    display: flex;
    justify-content: space-around;
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
}

.chartBox {
    margin-top: 5%;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
}
</style>