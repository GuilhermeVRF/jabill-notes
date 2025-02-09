<template>
    <div :class="$style.logo">
        <img src="@/assets/logo.png" alt="logo" :class="[$style.logo, { [$style.collapsed]: isCollapsed }]">
        <h2 v-if="!isCollapsed">Jabill Notes</h2>
    </div>
</template>

<script>
import styles from "./CardLogo.module.css";

export default {
    name: "CardLogo",
    props: {
        isCollapsed: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        $style(){
            return styles;
        }
    }
}
</script>