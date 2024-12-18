<template>
  <CardHeader 
    :isLogged="true"
  />
  <div class="container">
    <CardSidebar />
    <CardContent />
  </div>
</template>

<script>
import CardContent from './components/content/CardContent.vue';
import CardHeader from './components/header/CardHeader.vue';
import CardSidebar from './components/sidebar/CardSidebar.vue';

export default {
  name: 'App',
  components: {
    CardHeader,
    CardSidebar,
    CardContent
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

.container{
  display: flex;
  width: 100%;
}
</style>
