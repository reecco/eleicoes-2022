<template>
    <nav>
        <div class="logo">
            <router-link to="/">
                Eleições 2022
            </router-link>
        </div>
        <div class="list">
            <router-link to="/">Home</router-link>
            <router-link to="/sobre">Sobre</router-link>
            <a href="https://github.com/fredcardoso191/eleicoes-2022" target="_blank">Repositório</a>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    background-color: rgb(40, 37, 96);
}

.list,
.logo {
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo a {
    font-size: 2rem;
    text-decoration: none;
    font-style: italic;
}

.logo a:hover {
    color: #FEFEFE;
}

.list {
    margin: 0 20px;
}

a {
    margin: 10px;
    font-size: 1.2rem;
    text-decoration: none;
    color: #FEFEFE;
}

.list a:hover {
    opacity: 0.5;
    color: #FEFEFE;
}

@media screen and (max-width: 375px) {
    nav {
        justify-content: space-between;
        padding: 0 30px;
        background-color: rgb(40, 37, 96);
    }

    .logo,
    .logo a {
        display: none;
    }

    a {
        margin: 30px;
        font-size: 1.2rem;
    }
}

@media screen and (max-width: 414px) {
    nav {
        justify-content: space-around;
        padding: 0 30px;
        background-color: rgb(40, 37, 96);
    }

    .logo,
    .logo a {
        display: none;
    }

    a {
        margin: 30px;
        font-size: 1.2rem;
    }
}
</style>