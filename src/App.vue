<template>
  <CardHeader 
    :isLogged="true"
  />
  <CardSidebar />
</template>

<script>
import CardHeader from './components/header/CardHeader.vue';
import CardSidebar from './components/sidebar/CardSidebar.vue';

export default {
  name: 'App',
  components: {
    CardHeader,
    CardSidebar
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
