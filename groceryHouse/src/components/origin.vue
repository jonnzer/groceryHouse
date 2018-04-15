<template>
  <div class="hello">
  </div>
</template>

<script>
export default {
  name: "origin",
  data() {
    return {
     
    };
  },
  created(){
    this.originAct()
  },
  methods: {
    originAct() {
        const rect = new mojs.Shape({
          shape:  			'rect',
          left:         '50%',
          fill:         'none',
          radius:       20,
          stroke:       { 'rgba(0,255,255, 1)' : 'magenta' },
          strokeWidth:  { 10: 0 },
          strokeDasharray: '100%',
          strokeDashoffset: { '-100%' : '100%' },
          angle:        { 0: 180 },
          duration:     2000,
          repeat:       999,
        }).play();
    }
  },
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
