<template>
    <div class="container">
      <CardSidebar :pages="pages" @create-page="createPage"/>
      <CardContent
        v-if="page" 
        :title="page.title"
        :emoji="page.emoji"
        :cape="page.cape"
        :content="page.content"
        :slug="slug"
        @text-change="textChange"
        @title-change="titleChange"
      />
    </div>
  </template>
  
<script>
import { fetchPagesInServer, fetchPageInServer, sendTextChangeToServer, sentTitleChangeToServer } from "./ViewEditor.js"
import CardContent from '@/components/content/CardContent.vue';
import CardSidebar from '@/components/sidebar/CardSidebar.vue';

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
    CardContent
  },
  async mounted(){
    try{
      this.pages = await fetchPagesInServer();
    }catch(exception){
      console.log("Erro ao coletar as páginas: "+ exception)
    }
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
    createPage(page){
      this.pages[page.slug] = page
    },
    textChange(content){
      sendTextChangeToServer(this.slug, content)
    },
    async titleChange(title){
      const newSlugAndTitle = await sentTitleChangeToServer(this.slug, title);
      if(newSlugAndTitle){
        this.pages[this.slug].title = newSlugAndTitle.title;
        this.pages[newSlugAndTitle.slug] = this.pages[this.slug];
        delete this.pages[this.slug];

        this.$router.replace(`/content/${newSlugAndTitle.slug}`)
      }
    },
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
    height: 100vh;
  }
  </style>
  