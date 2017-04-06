<template>
  <div class="header">
  <router-link to='/'>Home</router-link>
  <router-link to='/create-snipmarks' class="name">Create Snipmarks</router-link>
  </div>
</template>


<script>
  export default {
    name: 'Navbar'
  }
</script>

<style>
  .header {
    height: 50px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
</style>
