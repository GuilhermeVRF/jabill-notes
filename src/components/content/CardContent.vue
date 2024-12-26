<template>
    <div class="content">
        <CardLoggedHeader />
        <div class="imageCape">
            <CardImagesList />
            <img src="../../assets/yellow.png" id="cape">
            <div class="title">
              <h1 contenteditable="true" @input="changeTitle">{{ title }}</h1>
            </div>
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
  data(){
    return {
      title: "Título"
    }
  },
  components: {
    CardImagesList,
    CardQuill,
    CardLoggedHeader
  },
  props: {
    emoji: {
      type: String,
      required: true
    }
  },
  methods: {
    changeTitle(event){
      this.title = event.target.innerHTML;
      console.log(this.title)
    }  
  }
}
</script>