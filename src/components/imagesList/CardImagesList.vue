<template>
    <div :class="$style.imageOptions">
        <button :class="$style.changeCape" @click="toggleImages">Alterar</button>
        <div :class="$style.imagesList" v-if="showImages">
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
import styles from "./CardImagesList.module.css";

export default {
    name: 'CardImagesList',
    data() {
        return {
            images: [],
            showImages: false,
        };
    },
    mounted() {
        this.fetchSplashPhotos();
    },
    methods: {
        async fetchSplashPhotos() {
            try {
                for(let i = 0;i < 10;i++){
                    const response = await fetch(
                        `https://api.unsplash.com/photos?page=${i}&orientation=landscape&h=200`,
                        {
                            headers: {
                                Authorization: "Client-ID DEf5PIsEk6nUPD8S_9T_VD4cXuJ_DPoW9DzBhn3oR74",
                            },
                        }
                    );

                    if (!response.ok)
                        throw new Error(`Erro: ${response.status} - ${response.statusText}`);

                    const data = await response.json();
                    this.images = [...this.images, ...data];
                }
            } catch (error) {
                console.error("Erro ao buscar a foto:", error.message);
            }
        },
        toggleImages() {
            console.log("Alterar");
            this.showImages = !this.showImages; // Alterna a flag
        },
    },
    computed: {
        $style(){
            return styles;
        }
    }
};
</script>
