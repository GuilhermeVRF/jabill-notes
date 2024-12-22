<template>
  <CardPopup ref="popup"/>
  <router-view></router-view>
</template>

<script>
import CardPopup from './components/popup/CardPopup.vue';


export default {
  name: 'App',
  components: { CardPopup },
  mounted() {
    window.showPopup = (status, message) => {
      this.$refs.popup.status = status;
      this.$refs.popup.message = message;
      this.$refs.popup.show();
    }
  }
}
</script>

