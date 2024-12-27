<template>
    <div :class="$style.content">
        <CardLoggedHeader />
        <div :class="$style.imageCape">
            <CardImagesList />
            <img src="@/assets/yellow.png" :class="$style.cape">
            <CardPageTitle :title="title" :emoji="emoji" @title-change="titleChange"/>
        </div>
        <CardQuill :content="content" :slug="slug" @text-change="textChange"/>
    </div>
</template>

<script>
import CardLoggedHeader from '../loggedHeader/CardLoggedHeader.vue';
import CardImagesList from '../imagesList/CardImagesList.vue';
import CardPageTitle from '../pageTitle/CardPageTitle.vue';
import CardQuill from '../text/CardQuill.vue';
import styles from './CardContent.module.css';

export default {
  name: "CardContent",
  emits: ['text-change', 'title-change'],
  components: {
    CardImagesList,
    CardQuill,
    CardPageTitle,
    CardLoggedHeader
  },
  props: {
    title: {
      type: String,
      required: true
    },
    cape: {
      type: String,
      required: true
    },
    emoji: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  },
  methods: {
    textChange(content){
      this.$emit("text-change", content)
    },
    titleChange(title){
      this.$emit("title-change", title)
    }   
  },
  computed: {
    $style() {
      return styles;
    }
  }
}
</script>