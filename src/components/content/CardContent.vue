<template>
    <div class="content">
        <div class="imageCape">
            <CardImagesList />
            <img src="../../assets/yellow.png" id="cape">
        </div>
        <div class="text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis quo rerum soluta sequi tenetur accusamus quod ullam porro ipsum! Veniam atque sunt cumque sed tempore, eligendi nihil voluptate illo?</p>
        </div>
    </div>
</template>

<script>
import CardImagesList from '../imagesList/CardImagesList.vue';
import './CardContent.css';

export default {
  name: "CardContent",
  components: {
    CardImagesList
  },
}
</script>