<template>
  <div>
    <br />
    <h1>{{ animal.name }} ({{ $route.params.species }})</h1>
    <p>Age: {{ animal.age }}</p>
    <p>Breed: {{ animal.breed }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      animal: {}
    }
  },
  computed: {
    // this is the same as below
    // cats(){
    //   return this.$store.state.cats
    // }
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  mounted () {
    this.animal = this[this.$route.params.species][this.$route.params.id]// this['cats'][0], this.cats[0]
  }
}
</script>
