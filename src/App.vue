<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');

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
  font-weight: 400;
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

h3 {
  margin-top: 40px;
  color: cornflowerblue;
}

h2 {
  margin: 0;
  font-weight: 700;
  color: cornflowerblue;
}

p {
  text-align: justify;
  text-align-last: left;
}

ul {
  padding-left: 20px;
}

li {
  text-align: justify;
}

button {
  cursor: pointer;

  padding: 5px;
  color: white;
  background-color: cornflowerblue;
  border: none;
  border-radius: 4px;

  font-family: Inter, sans-serif;
  font-size: 120%;

  margin-top: 30px;
  margin-bottom: 30px;
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
