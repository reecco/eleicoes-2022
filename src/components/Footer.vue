<template>
    <footer>
        <div>
            <p>&copy; 2022, Desenvolvido por Frederico Recco</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
footer {
    margin-top: 10%;
    display: flex;
    justify-content: center;
    color: rgb(40, 37, 96);
    align-items: center;
}

footer p {
    font-size: 1.25rem;
}

@media screen and (max-width: 375px) and (max-height: 667px) {
    footer div {
        width: 50%;
        margin-top: 5%;
    }

    footer p {
        text-align: center;
    }
}

@media screen and (max-width: 414px) {
    footer div {
        width: 50%;
        margin-top: 10%;
    }

    footer p {
        text-align: center;
    }
}

@media screen and (min-width: 415px) {
    footer p {
        font-size: 1.5rem;
    }
}
</style>