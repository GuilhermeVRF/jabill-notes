<template>
    <link href="https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.snow.css" rel="stylesheet" />
    <div class="quill-container">
        <div ref="editor"></div>
    </div>
</template>

<script>
import "./CardQuill.css";
import {initializeQuill} from "./CardQuill.js";

export default {
    name: "CardQuill",
    mounted() {
        this.quill = initializeQuill(this.$refs.editor);
    }
}
</script>