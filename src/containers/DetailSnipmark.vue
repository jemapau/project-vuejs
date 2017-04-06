<template>
  <div id="home">
    <div class="snipmark-item">
      <ul>
        <li>Marker name: {{ marker.name }}</li>
        <li>Marker description: {{ marker.description }}</li>
        <li>Marker date: {{ marker.date }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Detail',
    computed: mapGetters({
      marker: 'getMarker'
    }),
    created () {
      this.$store.dispatch('loadMarker', this.$route.params.id)
    }
  }
</script>
