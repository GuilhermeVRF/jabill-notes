<template>
    <div :class="$style.container">
      <CardSidebar :pages="pages" @create-page="createPage" @deletePage-inList="deletePageInList"/>
      <CardContent
        v-if="page" 
        :title="page.title"
        :emoji="page.emoji"
        :cape="page.cape"
        :content="page.content"
        :slug="slug"
        @text-change="textChange"
        @title-change="titleChange"
        @emoji-change="emojiChange"
        @childPage-created="childPageCreated"
      />
      <CardNotFound v-else />
    </div>
  </template>
  
<script>
import { fetchPagesInServer, fetchPageInServer, sendTextChangeToServer, sentTitleChangeToServer, sentEmojiChangeToServer } from "./ViewEditor.js"
import CardContent from '@/components/content/CardContent.vue';
import CardSidebar from '@/components/sidebar/CardSidebar.vue';
import CardNotFound from "@/components/notFound/CardNotFound.vue";
import styles from "./ViewEditor.module.css";


export default {
  name: 'ViewContent',
  data() {
    return{
      pages: [],
      page: null,
      slug: "",
    }
  },
  components: {
    CardSidebar,
    CardContent,
    CardNotFound
  },
  async mounted(){
    await this.fetchPages()
  },
  watch: {
    '$route.params.slug': {
      immediate: true,
      handler: async function(newSlug){ 
          this.slug = newSlug;
          this.page = await fetchPageInServer(this.slug);
      }
    }
  },
  methods: {
    async childPageCreated(){
      await this.fetchPages()
    },
    deletePageInList(slug){
      this.pages = this.pages.filter(page => page.slug !== slug);
    },
    createPage(page){
      this.pages.push(page);
    },
    textChange(content){
      sendTextChangeToServer(this.slug, content)
    },
    emojiChange(emoji){
      const index = this.pages.findIndex(page => page.slug === this.slug);

      if(index !== -1){
        this.pages[index].emoji = emoji;
      }

      this.page.emoji = emoji;
      sentEmojiChangeToServer(this.slug, emoji)
    },
    async titleChange(title){
      const newSlugAndTitle = await sentTitleChangeToServer(this.slug, title);
      if(newSlugAndTitle){
        const index = this.pages.findIndex(page => page.slug === this.slug);

        if(index !== -1){
          this.pages[index].title = newSlugAndTitle.title;
          this.pages[index].slug =  newSlugAndTitle.slug;
        }

        this.$router.replace(`/content/${newSlugAndTitle.slug}`)
      }
    },
    async fetchPages() {
      try {
        this.pages = await fetchPagesInServer();
        console.log(this.pages);
      } catch (exception) {
        console.log("Erro ao coletar as páginas: " + exception);
      }
    }
  },
  computed: {
    $style(){
        return styles;
    }
  }
}
</script>
  