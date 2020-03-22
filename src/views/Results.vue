<template>
  <div class="results">
    <div class="margin-container"></div>
    <div v-if="filledInTest" class="main-container">
      <h2>Resultados</h2>
      <div v-if="hasSympthoms">
        <p>
          Tus respuestas sugieren la posibilidad de tener sintomatología
          compatible con COVID-19 según el algoritmo de coronamadrid.com.
        </p>
        <p>
          Algunas recomendaciones si crees que tienes COVID-19:
        </p>
        <ul>
          <li>
            Observa tu evolución y si tus síntomas empeoran, sobre todo si
            tienes dificultad respiratoria, ponte en contacto con el teléfono
            designado por tu Comunidad para la atención sobre el COVID-19 o con
            tu centro de salud.
          </li>
          <li>
            Quédate en casa para evitar contagios.
          </li>
          <li>
            Utiliza una mascarilla (continuamente y cambiándola cada 24 horas).
          </li>
          <li>
            Si vives con otras personas, permanece en una habitación separada
            con la puerta cerrada y utiliza un cuarto de baño propio si fuese
            posible. Ventila la habitación evitando las corrientes hacia el
            resto de la casa. No compartas vajilla, toallas ni sábanas.
          </li>
          <li>
            Limpia las superficies y objetos con lejía o productos
            desinfectantes.
          </li>
          <li>
            Guarda la ropa sucia en una bolsa cerrada y lávala por separado a
            60-90.
          </li>
          <li>
            Elimina tus residuos por separado utilizando un cubo con tapa.
          </li>
        </ul>
        <p>
          El COVID-19 se transmite por gotas que se expulsan al toser o
          estornudar, por eso la higiene y evitar el contacto es vital para
          reducir el contagio.
        </p>
      </div>
      <div v-else>
        <p>
          Tus respuestas sugieren que no tienes síntomas o no son suficientes
          para determinar un contagio de COVID-19 según el algoritmo de
          coronamadrid.com.
        </p>
      </div>
      <info-panel
        text="Recuerda que la información obtenida a través del uso de esta
          aplicación no sustituye ni pretende sustituir, en ningún caso, el
          consejo de un profesional médico. Si crees que tienes síntomas
          compatibles con el COVID-19 ponte en contacto con el teléfono
          correspondiente a tu Comunidad o con el de tu centro de salud."
      ></info-panel>
      <h3>Algunos enlaces de interés</h3>
      <a
        href="https://www.mscbs.gob.es/profesionales/saludPublica/ccayes/alertasActual/nCov-China/home.htm"
        target="_blank"
      >
        Web del Gobierno de España con información sobre el COVID-19
      </a>
      <br /><br />
      <a
        href="https://www.comunidad.madrid/servicios/salud/2019-nuevo-coronavirus"
        target="_blank"
      >
        Web de la Comunidad de Madrid con información sobre el COVID-19
      </a>
      <br /><br />
      <a
        href="https://www.comunidad.madrid/servicios/salud/covid-19-prevencion-consejos-ciudadania#videos"
        target="_blank"
      >
        Vídeos de la Comunidad de Madrid con consejos y recomendaciones para
        evitar la transmisión en la convivencia con una persona con síntomas
      </a>
      <div>
        <router-link to="/test">
          <button>Volver a realizar el test</button>
        </router-link>
      </div>
    </div>
    <div class="margin-container"></div>
  </div>
</template>

<script>
import InfoPanel from '@/components/InfoPanel.vue';

export default {
  name: 'Results',
  components: {
    InfoPanel
  },
  computed: {
    filledInTest() {
      return this.$store.state.filledInTest;
    },
    hasSympthoms() {
      return this.$store.state.hasSympthoms;
    }
  },
  created: function() {
    if (!this.filledInTest) {
      this.$router.push({
        name: 'Home'
      });
    }
  }
};
</script>

<style>
.results {
  padding-top: 30px;
  display: flex;
  flex-direction: row;
}

.margin-container {
  width: 15%;
}

.main-container {
  width: 70%;
}

.disclaimer {
  border-radius: 12px;
  border: 1px solid cornflowerblue;
}
</style>
