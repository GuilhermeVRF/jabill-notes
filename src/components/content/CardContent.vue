<template>
    <div class="content">
        <CardLoggedHeader />
        <div class="imageCape">
            <CardImagesList />
            <img src="../../assets/yellow.png" id="cape">
        </div>
        <CardQuill />
    </div>
</template>

<script>
import CardLoggedHeader from '../loggedHeader/CardLoggedHeader.vue';
import CardImagesList from '../imagesList/CardImagesList.vue';
import CardQuill from '../text/CardQuill.vue';
import './CardContent.css';

export default {
  name: "CardContent",
  components: {
    CardImagesList,
    CardQuill,
    CardLoggedHeader
  },
}
</script>