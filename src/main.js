import Vue from 'vue'
import App from './App'
import VueNoiseGeneratorPlugin from './plugins/VueNoiseGenerator'

Vue.use(VueNoiseGeneratorPlugin)

Vue.filter('leftpad', (value) => {
  if (value >= 10) {
    return value
  }
  return '0' + value
})

Vue.filter('uppercase', (value) => {
  return value.toUpperCase()
})

Vue.filter('addspace', (value) => {
  return value + ' '
})

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
