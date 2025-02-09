<template>
    <div :class="$style.title">
        <span :class="$style.emoji" @click="toggleEmojisList">{{ this.emoji }}
            <CardEmojisList :isVisible="showEmojisList" @emoji-change="handleEmojiSelected"/>
        </span>
        <input type="text" @input="updateTitle" :value="title" :class="$style.input_title">
    </div>
</template>

<script>
import CardEmojisList from "../emojisList/CardEmojisList.vue";
import styles from "./CardPageTitle.module.css";
export default{
    name: "CardPageTitle",
    components: {CardEmojisList},
    data(){
        return {
            showEmojisList: false,
            
        };
    },
    props: {
        title: {
            type: String,
            required: true
        },
        emoji:{
            type: String
        }
    }, 
    methods: {
        updateTitle(event){
            const newValue = event.target.value;
    
            event.target.value = newValue;
            
            if (newValue.trim() !== "") {
                this.$emit("title-change", newValue);
            }
        },
        toggleEmojisList() {
            this.showEmojisList = !this.showEmojisList;
        },
        handleEmojiSelected(emoji){
            this.$emit("emoji-change", emoji)
        }
    },
    computed: {
        $style(){
            return styles;
        }
    }
}
</script>