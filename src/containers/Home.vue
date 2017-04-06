<template>
  <div>
  <h1>Hola MedellinJS de Noche</h1>
  <div id="Home">
    <div class="snipmarks-list">
      <li v-for="marker in markers">
        <router-link :to="{ name: 'Specific Snipmark', params: { id: marker.id }}">
          {{ marker.name }}
        </router-link>
      </li>
    </div>
  </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  computed: mapGetters({
    markers: 'getMarkers'
  }),
  mounted () {
    this.$store.dispatch('loadMarks')
  }
}
</script>
