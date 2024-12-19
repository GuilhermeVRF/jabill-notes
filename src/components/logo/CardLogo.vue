<template>
    <div class="logo">
           <img src="@/assets/logo.png" alt="logo" :class="['logo', {collapsed: collapsed}]">
           <h2 v-if="!collapsed">Jabill Notes</h2>
        </div>
</template>

<script>
import "./CardLogo.css";

export default {
    name: "CardLogo",
    props: {
        collapsed: {
            type: Boolean,
            default: false,
        },
    },
}
</script>