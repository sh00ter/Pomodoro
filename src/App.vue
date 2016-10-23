<template lang='jade'>
  div#app.container(v-noise='"white"')
    h2
      span {{ 'Pomodoro' | uppercase | addspace }}
      controls-component
    state-title-component(v-bind:isworking='isworking')
    countdown-component
    kittens-component(v-show="!isworking", transition="expand")
</template>

<style scoped>
</style>

<script>
  import ControlsComponent from './components/ControlsComponent'
  import CountdownComponent from './components/CountdownComponent'
  import KittensComponent from './components/KittensComponent'
  import StateTitleComponent from './components/StateTitleComponent'
  import store from './vuex/store'
  import { isWorking } from './vuex/getters'

  window.data = {
    kittens: true
  }

  export default {
    store,
    components: {
      ControlsComponent,
      CountdownComponent,
      KittensComponent,
      StateTitleComponent
    },
    data () {
      return window.data
    },
    vuex: {
      getters: {
        isworking: isWorking
      }
    }
  }
</script>
