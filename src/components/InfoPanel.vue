<template>
  <div class="panel">
    <div class="icon">
      <font-awesome-icon :icon="['fas', 'info-circle']"></font-awesome-icon>
    </div>
    <div>
      <p>
        La información obtenida a través del uso de esta aplicación no sustituye
        ni pretende sustituir, en ningún caso, el consejo de un profesional
        médico. Si crees que tienes síntomas compatibles con el COVID-19 ponte
        en contacto con el teléfono correspondiente a tu Comunidad.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'info-panel',
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
.panel {
  display: flex;

  background-color: navy;
  border-radius: 12px;
  color: white;
  margin: 1% 5%;
  padding-left: 20px;
  padding-right: 20px;
}

.icon {
  padding-top: 18px;
  padding-right: 10px;
  vertical-align: middle;
  display: inline-block;
}
</style>
