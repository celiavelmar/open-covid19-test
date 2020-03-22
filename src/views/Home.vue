<template>
  <div class="home">
    <div class="margin-container"></div>
    <div>
      <h1>Bienvenid@ a Open COVID-19 Test</h1>
      <p class="home-p">
        Un test de autoevaluación para el COVID-19 de código abierto que
        devuelve los mismos resultados que
        <a href="https://www.coronamadrid.com/">coronamadrid.com</a> pero no
        almacena tus valiosos datos.
      </p>
      <p class="home-p">
        Si quieres más información puedes leer
        <a
          href="https://maldita.es/malditatecnologia/2020/03/20/aplicacion-madrid-coronavirus-oficial-comparte-datos-empresas/"
          >este artículo de Maldita.es</a
        >
        donde explican que la aplicación de la Comunidad de Madrid da acceso a
        tus datos a las empresas privadas que la han desarrollado sin
        anonimizarlos.
      </p>
      <p class="home-p">
        También puedes entrar a
        <a href="https://github.com/celiavelmar/open-covid19-test"
          >mi repositorio de GitHub
          <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon
        ></a>
        si quieres conocer el algoritmo que usa dicha aplicación (y también
        esta) y cómo lo he descubierto o ver el código fuente.
      </p>
      <info-panel></info-panel>
      <div class="center">
        <router-link to="/test">
          <button>¡Entendido! Llévame al test</button>
        </router-link>
      </div>
    </div>
    <div class="margin-container"></div>
  </div>
</template>

<script>
import InfoPanel from '@/components/InfoPanel.vue';

export default {
  name: 'Home',
  components: {
    InfoPanel
  }
};
</script>

<style>
p {
  text-align: justify;
  text-align-last: left;
}

a {
  color: cornflowerblue;
}

.home {
  padding-top: 30px;
  display: flex;
  flex-direction: row;
}

.home-p {
  padding: 1% 5%;
}

.margin-container {
  display: flex;
  width: 20%;
}
</style>
