<template>
    <div :class="$style.userProfile">
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
import styles from "./CardUserProfile.module.css";
import { fetchUser , fetchUserProfile} from "./CardUserProfile.js";
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
            const username = await fetchUser(this.$router);
            const profileImage = await fetchUserProfile();
            if (username) this.username = username;

            if (profileImage) this.perfilImage = profileImage;
        } catch (error) {
            console.error("Erro ao carregar dados:", error);
        } finally {
            this.isLoading = false;
        }  
    },
    computed: {
        $style(){
            return styles;
        }
    }
}
</script>