<template>
    <link href="https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.snow.css" rel="stylesheet" />
    <div class="quill-container">
        <div ref="editor"></div>
    </div>
</template>

<script>
import "./CardQuill.css";
import {initializeQuill, fetchPage} from "./CardQuill.js";

export default {
    name: "CardQuill",
    data() {
      return {
        slug: this.$route.params.slug,
        content: ""
      };
    },
    watch: {
      '$route.params.slug': {
        immediate: true,
        handler: async function(newSlug){ 
            this.slug = newSlug;
            this.content = await fetchPage(this.slug);
            this.quill.root.innerHTML = (this.content.content)
        }
      }
    },
    mounted() {
        this.quill = initializeQuill(this.$refs.editor);
    }
}
</script>