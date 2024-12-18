<template>
    <div class="sidebar">
        <CardLogo />
    </div>
</template>

<script>
import CardLogo from '../logo/CardLogo.vue';
export default{
    name: "CardSidebar",
    components: {
        CardLogo
    },
}
</script>

<style>
    .sidebar{
        height: 100vh;
        background-color: lightgray;
        width: 300px;
        border-right: solid 1px rgba(0, 0, 0, 0.5);
    }
</style>