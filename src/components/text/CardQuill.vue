<template>
    <link href="https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.snow.css" rel="stylesheet" />
    <div :class="$style.quill_container">
        <div ref="editor"></div>
    </div>
</template>

<script>
import styles from "./CardQuill.module.css";
import {initializeQuill} from "./CardQuill.js";

export default {
    name: "CardQuill",
    emits: ['text-change'],
    props: {
      content:{
        type: String,
        required: true
      },
      slug: {
        type: String,
        required: true
      }
    },
    mounted() {
        this.quill = initializeQuill(this.$refs.editor, this.content);

        this.quill.on('text-change', async () => {
            this.$emit("text-change", this.quill.root.innerHTML)
        });
    },
    computed: {
      $style(){
        return styles;
      }
    }
}
</script>