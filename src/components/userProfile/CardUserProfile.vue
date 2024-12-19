<template>
    <div class="userProfile">
        <template v-if="isLoading">
            <CardLoading width="80" height="50"/>
        </template>
        <template v-else>
            <img :src="perfilImage" alt="perfil image" id="perfilImage">
            <p id="username">{{ username }}</p>
        </template>
    </div>
</template>

<script>
import "./CardUserProfile.css";
import { fetchUser } from "./CardUserProfile.js";
import CardLoading from "../loading/CardLoading.vue";

export default {
    name: "CardUserProfile",
    components: {
        CardLoading
    },
    data () {
        return {
            perfilImage: require('@/assets/perfil.jpeg'),
            username: "Sem nome",
            isLoading: true
        }
    },
    async mounted() {
        try {
            const user = await fetchUser();
            if (user.username) this.username = user.username;

            if (user.photo) this.perfilImage = user.photo;
        } catch (error) {
            console.error("Erro ao carregar dados:", error);
        } finally {
            this.isLoading = false;
        }  
    }
}
</script>