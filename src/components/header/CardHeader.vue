<template>
    <header class="header">
        <CardLogo />
    </header>
</template>

<script>
import CardLogo from '../logo/CardLogo.vue';

export default{
    name: 'CardHeader',
    components: {
        CardLogo
    }
}
</script>

<style>
.header{
    position: fixed;
    width: 100vw;
}
</style>