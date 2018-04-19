<template>
        <div id="app">
              <router-view/>
        </div>
</template>

<script>
export default {
  name: 'App',
  created() {
     console.log("%cMade with 💜 by Jonnzer", "color: #FFFFFF; font-size: 20px; padding: 20px 20px 30px 20px; font-fmaily: sans-serif; text-shadow: 1px 1px #7FF7AD, 2px 2px #357FE7, 3px 3px #542EE9, 4px 4px #D32DAF");
  }
}
</script>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background:#ecf0f1;
  width: 100%;
  height: 100%;
}


</style>
