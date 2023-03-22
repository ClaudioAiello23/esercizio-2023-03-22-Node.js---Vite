<!-- PARTE VUE JS -->
<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<!-- PARTE HTML-->
<template>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h2 class="display-4">Inserimento jumbotron with Bootstrap!!!</h2>
            <p class="lead">Finchè c'è <span id="vite">VITE</span> c'è speranza!!!</p>
        </div>
    </div>
</template>

<!-- PARTE CSS -->
<style scoped>
.jumbotron {
    padding: 6.25rem;
    background-color: lightgray;
    border-radius: 1.25rem;
    font-size: 1.875rem;
}

.jumbotron:hover {
    border: .625rem solid yellow;
}

p {
    color: rgb(17, 165, 17);
    font-weight: bold;
}

#vite {
    color: yellow;
    font-size: 2.5rem;
    opacity: 0.2;
}

#vite:hover {
    opacity: 1;
}
</style>
