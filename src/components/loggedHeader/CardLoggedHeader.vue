<template>
    <header :class="$style.logged_header">
        <CardUserProfile />
    </header>
</template>

<script>
import styles from "./CardLoggedHeader.module.css";
import CardUserProfile from '../userProfile/CardUserProfile.vue';

export default {
    name: "CardHeader",
    components: {
        CardUserProfile
    },
    computed: {
        $style(){
            return styles;
        }
    }
}
</script>