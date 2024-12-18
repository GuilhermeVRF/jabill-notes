<template>
    <div class="imageOptions">
        <button id="changeCape" @click="toggleImages">Alterar</button>
        <div id="imagesList" v-if="showImages">
            <img
                v-for="image in images"
                :key="image.id"
                :src="image.urls.small"
                :alt="image.alt_description || 'Imagem'"
                :width="150"
                :height="100"
                style="margin: 5px;"
            />
        </div>
    </div>
</template>

<script>
import "./CardImagesList.css";

export default {
    name: 'CardImagesList',
    data() {
        return {
            images: [],
            showImages: false, // Flag reativa para alternar visibilidade
        };
    },
    mounted() {
        this.fetchSplashPhotos();
    },
    methods: {
        async fetchSplashPhotos() {
            try {
                const response = await fetch(
                    "https://api.unsplash.com/photos?page=1&orientation=landscape&h=200",
                    {
                        headers: {
                            Authorization: "Client-ID DEf5PIsEk6nUPD8S_9T_VD4cXuJ_DPoW9DzBhn3oR74",
                        },
                    }
                );

                if (!response.ok)
                    throw new Error(`Erro: ${response.status} - ${response.statusText}`);

                const data = await response.json();
                this.images = data;
            } catch (error) {
                console.error("Erro ao buscar a foto:", error.message);
            }
        },
        toggleImages() {
            console.log("Alterar");
            this.showImages = !this.showImages; // Alterna a flag
        },
    },
};
</script>
