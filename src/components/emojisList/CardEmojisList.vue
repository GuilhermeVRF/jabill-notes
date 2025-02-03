<template>
    <div v-if="isVisible" :class="$style.emojisContainer">
        <span 
          v-for="emoji in emojis" 
          :key="emoji" 
          @click="selectEmoji(emoji)" 
          :class="$style.emoji"
          >
          {{ emoji }}
        </span>
    </div>
</template>

<script>
import styles from "./CardEmojisList.module.css";
export default {
    data() {
        return {
            emojis: ["📄", "📃", "📑", "📜", "📒", "📕", "📗", "📘", "📙", "🗂", "🗒", "📝"]
        };
    },
    props: {
        isVisible: Boolean,
    },
    methods: {
        selectEmoji(emoji) {
            this.$emit("emoji-change", emoji); 
        }
    },
    computed: {
        $style(){
            return styles;
        }
    }
};
</script>