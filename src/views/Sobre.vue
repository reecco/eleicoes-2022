<template>
  <div class="about">
    <h1>Sobre</h1>
    <div class="stack">
      <h3>Este projeto foi desenvolvido com</h3>
      <ul class="list">
        <li>Vue.js</li>
        <li>Node.js</li>
        <li>Chart.js</li>
        <li>Bootstrap 5</li>
        <li>CSS</li>
        <li>API TSE</li>
      </ul>
    </div>
    <h2>Contato</h2>
    <div class="contato">
      <a href="https://www.linkedin.com/in/fredericorecco/" target="_blank">
        <img src="https://raw.githubusercontent.com/fredcardoso191/twitter-api/main/frontend/imgs/linkedin-2-240.png"
          alt="Imagem Linkedin">
      </a>
      <a href="https://github.com/fredcardoso191" target="_blank">
        <img src="https://raw.githubusercontent.com/fredcardoso191/twitter-api/main/frontend/imgs/github-240.png"
          alt="Imagem GitHub">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sobre',

  created() {
    document.title = 'Sobre'
  }
}
</script>

<style scoped>
.about {
  margin-top: 5%;
  color: rgb(40, 37, 96);
}

.about h1 {
  text-align: center;
  font-size: 4rem;
}

.stack {
  margin-top: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stack h3 {
  font-size: 1.2rem;
}

.list {
  margin-top: 1%;
  list-style-type: none;
  margin-right: 5rem;
}

li {
  margin: 15px;
  font-size: 1.2rem;
}

.about h2 {
  margin-top: 2%;
  text-align: center;
}

.contato {
  display: flex;
  justify-content: center;
}

.contato a img {
  height: 75px;
  width: 75px;
  margin: 40px;
  transition: .5s;
}

.contato a img:hover {
  scale: 1.1;
}

@media screen and (max-width: 375px) {
  .about h1 {
    font-size: 1.5rem;
    margin-top: 15%;
  }

  .stack {
    margin-top: 5%;
  }

  .stack h3{
    font-size: 1.2rem;
  }

  .list {
    margin-right: 0;
  }

  li {
    font-size: 1rem;
  }

  .contato {
    flex-direction: column;
    align-items: center;
  }

  .contato a img {
    margin: 20px;
  }
}

@media screen and (max-width: 414px){
  .about h1 {
    font-size: 1.7rem;
    margin-top: 15%;
  }

  .stack {
    margin-top: 5%;
  }

  .stack h3 {
    font-size: 1.2rem;
  }

  .list {
    margin-right: 0;
  }

  .about h2 {
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 1024px) {
  .about h1 {
    font-size: 3rem;
  }
}
</style>