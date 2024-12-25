<template>
    <div class="pagesMenu">
        <input id="createPage" type="button" value="Criar página" class="btn-createPage" @click="createPage">
        <ul class="pagesList">
            <li v-for="page in pages" :key="page.id">
                <RouterLink :to="'/content/' + page.slug">{{ String.fromCodePoint(0x1F4C3) }} {{ page.title }}</RouterLink>
            </li>
        </ul>
    </div>
</template>

<script>
import { fetchPages, createPage } from "./CardPagesList.js";
import "./CardPagesList.css"
export default{
    name: "CardPagesList",
    components: {

    },
    data(){
        return {
            pages: []
        }
    },
    async mounted() {
        this.pages = await fetchPages()
    },
    methods: {
        async createPage(){
            const page = await createPage();
            if(page) this.pages.push(page)
        }
    }
}
</script>