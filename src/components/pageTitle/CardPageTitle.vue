<template>
    <div :class="$style.title">
        <span :class="$style.emoji">{{ String.fromCodePoint(0x1F4C3) }}</span>
        <input type="text" @input="updateTitle" :value="title" :class="$style.input_title">
    </div>
</template>

<script>
import styles from "./CardPageTitle.module.css";
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
            this.$emit("title-change", event.target.value)
        }
    },
    computed: {
        $style(){
            return styles;
        }
    }
}
</script>