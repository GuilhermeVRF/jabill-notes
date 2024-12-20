<template>
    <header class="logged-header">
        <CardUserProfile />
    </header>
</template>

<script>
import "./CardLoggedHeader.css";
import CardUserProfile from '../userProfile/CardUserProfile.vue';

export default {
    name: "CardHeader",
    components: {
        CardUserProfile
    },
}
</script>