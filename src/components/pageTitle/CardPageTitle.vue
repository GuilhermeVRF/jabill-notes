<template>
    <div class="title">
        <span class="emoji">{{ String.fromCodePoint(0x1F4C3) }}</span>
        <h1 contenteditable="true" @input="updateTitle"> {{ title }}</h1>
    </div>
</template>

<script>
import "./CardPageTitle.css";
export default{
    name: "CardPageTitle",
    props: {
        title: {
            type: String,
            required: true
        },
        emoji: {
            type: String,
        }
    }, 
    methods: {
        updateTitle(event){
            this.$emit("title-change", event.target.innerText)
        }
    }
}
</script>