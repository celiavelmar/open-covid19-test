<template>
  <div>
    <p class="question">{{ question }}</p>
    <input
      type="radio"
      :name="name"
      value="true"
      :id="name + 'True'"
      required
    />
    <label :for="name + 'True'">Sí</label>
    <br />
    <input
      type="radio"
      :name="name"
      value="false"
      :id="name + 'False'"
      required
    />
    <label :for="name + 'False'">No</label>
  </div>
</template>

<script>
export default {
  name: 'radio-question',
  props: {
    question: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
.question {
  text-align: left;
  text-align-last: left;
  margin-bottom: 0;
  margin-top: 30px;
}

input {
  margin-top: 10px;
}
</style>
