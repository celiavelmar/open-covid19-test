<template>
  <div class="panel">
    <div class="icon">
      <font-awesome-icon :icon="['fas', 'info-circle']"></font-awesome-icon>
    </div>
    <div>
      <p>
        {{ text }}
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
