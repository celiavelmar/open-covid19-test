<template>
  <div id="app">
    <div class="nav">
      <!-- <router-link to="/">Home</router-link> |
       -->
      <a
        href="https://github.com/celiavelmar/open-covid19-test"
        target="_blank"
        class="github-button"
      >
        Ver en
        <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
      </a>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;900&display=swap');

html,
body {
  min-height: 100vh;
}

html {
  background-color: white;
}

body {
  background: aliceblue;
}

#app {
  font-family: Inter, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
  margin: 0;
  font-weight: 900;
  font-size: 7vw;
  text-align: center;
  color: cornflowerblue;
}

h2 {
  margin: 0;
  font-weight: 700;
  color: cornflowerblue;
}

button {
  font-family: Inter, sans-serif;
}

.nav {
  padding: 30px;
  display: flex;
  flex-direction: row-reverse;
}

.github-button {
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;

  text-decoration: none;
  color: initial;

  padding: 5px;
  color: white;
  background-color: cornflowerblue;
  border: none;
  border-radius: 4px;
}

.center {
  text-align: center;
}
.right {
  text-align: right;
}
</style>
