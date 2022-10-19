<template>
  <div class="home">
    <h1>Eleições Presidencias 2022</h1>
    <h2>Confira o resultado das eleições</h2>

    <router-link to="/apuracao/turno/1">1º turno</router-link>
    <router-link to="/apuracao/turno/2">2º turno</router-link>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },

  data() {
    return {
    }
  },

  methods: {
  },

  mounted() {
  },

  created() {
    document.title = 'Home'
  }
}
</script>

<style scoped>
.home {
  margin-top: 5%;
  height: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(40, 37, 96);
}

h1 {
  font-size: 4rem;
}

h2 {
  margin-top: 3%;
  font-size: 2rem;
}

p {
  margin-top: 5%;
}

a {
  width: 300px;
  border: 3px solid rgb(40, 37, 96);
  border-radius: 10px;
  text-align: center;
  padding: 15px;
  margin: 30px;
  font-size: 2rem;
  text-decoration: none;
  color: #FEFEFE;
  background-color: rgb(40, 37, 96);
  transition: .5s;
}

a:hover {
  background-color: transparent;
  color: rgb(40, 37, 96);
}
</style>