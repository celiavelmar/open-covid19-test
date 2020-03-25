<template>
  <div class="test">
    <div class="margin-container"></div>
    <div>
      <h2>Evalúa tus síntomas</h2>
      <form @submit.prevent="getEvaluation">
        <radio-question
          question="¿Tienes sensación de falta de aire de inicio brusco (en ausencia de cualquier otra patología que justifique este síntoma)?"
          name="airShortness"
        ></radio-question>
        <radio-question
          question="¿Tienes fiebre? (+37.7ºC)"
          name="fever"
        ></radio-question>
        <radio-question
          question="¿Tienes tos seca y persistente?"
          name="dryCough"
        ></radio-question>
        <radio-question
          question="¿Has tenido contacto estrecho con algún paciente positivo confirmado?"
          name="closeContact"
        ></radio-question>
        <radio-question
          question="¿Tienes mucosidad en la nariz?"
          name="mucus"
        ></radio-question>
        <radio-question
          question="¿Tienes dolor muscular?"
          name="muscularPain"
        ></radio-question>
        <radio-question
          question="¿Tienes sintomatología gastrointestinal?"
          name="gastrointestinal"
        ></radio-question>
        <radio-question
          question="¿Llevas más de 20 días con estos síntomas?"
          name="twentyDays"
        ></radio-question>
        <div class="right">
          <router-link class="back" to="/">Volver</router-link>
          <button type="submit">
            Obtener resultados
          </button>
        </div>
      </form>
    </div>
    <div class="margin-container"></div>
  </div>
</template>

<script>
import RadioQuestion from '@/components/RadioQuestion.vue';

export default {
  name: 'Test',
  components: {
    RadioQuestion
  },
  methods: {
    getEvaluation(submitEvent) {
      const questions = submitEvent.target;
      const scores = {
        airShortness: 60,
        fever: 15,
        dryCough: 15,
        closeContact: 29,
        mucus: 0,
        muscularPain: 0,
        gastrointestinal: 0,
        twentyDays: -15
      };

      const score = Object.keys(scores).reduce((accumulator, scoreName) => {
        return (
          accumulator +
          (questions[scoreName].value === 'true' ? scores[scoreName] : 0)
        );
      }, 0);

      this.$store.commit('filledInTest');
      this.$store.commit('hasSympthoms', score >= 30);
      this.showResults();
    },
    showResults() {
      this.$router.push({
        name: 'Results'
      });
    }
  }
};
</script>

<style>
.test {
  padding-top: 30px;
  display: flex;
  flex-direction: row;
}

.margin-container {
  display: flex;
  width: 15%;
}

.back {
  margin-right: 20px;
}
</style>
