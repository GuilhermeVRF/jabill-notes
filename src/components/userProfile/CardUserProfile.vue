<template>
    <div class="userProfile">
            <img :src="perfilImage" alt="perfil image">
            <p>Guilherme</p>
            <i class="fi fi-rs-settings"></i>
        </div>
</template>

<script>
import "./CardUserProfile.css";
export default {
    name: "CardUserProfile",
    props: {
        perfilImage: {
            type: String,
            default: () => require('@/assets/perfil.jpeg'),
        }
    }
}
</script>