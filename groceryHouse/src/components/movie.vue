<template>
	  <div class="movie">hello movie~</div>
</template>

<script>
  import {mapActions} from 'vuex'
	export default {
		name: "movie",
    created(){
		  this.act_latestMovie()
    },
    methods: {
      ...mapActions([
        'act_latestMovie'
      ])
    },
	}

</script>

<style scoped>
  .movie{
    font-size: 1.6rem;
  }
</style>
