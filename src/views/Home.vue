<template>
  <div class="home">
    <div class="margin-container"></div>
    <div>
      <h1>Bienvenid@ a Open COVID-19 Test</h1>
      <p>
        Un test de autoevaluación para el COVID-19 de código abierto que
        devuelve los mismos resultados que
        <a href="https://www.coronamadrid.com/">coronamadrid.com</a> pero no
        almacena tus valiosos datos.
      </p>
      <div class="center">
        <router-link to="/test">
          <button>Entendido, llévame al test</button>
        </router-link>
      </div>
    </div>
    <div class="margin-container"></div>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style>
p {
  text-align: justify;
  text-align-last: center;
  font-weight: 400;
}

.home {
  display: flex;
  flex-direction: row;
}

.margin-container {
  display: flex;
  width: 20%;
}
</style>
