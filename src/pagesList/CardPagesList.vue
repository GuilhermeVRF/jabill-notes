<template>
    <div class="pagesMenu">
        <form class="createPageForm">
            <input type="text" class="form-control" placeholder="Criar Página" v-model="newPageTitle">
            <input  type="button" value="+" class="btn" @click="createPage">
        </form>
        <ul class="pagesList">
            <li v-for="([slug, page]) of Object.entries(pages)" :key="page.id">
                <RouterLink :to="'/content/' + slug">{{ String.fromCodePoint(0x1F4C3) }} {{ page.title }}</RouterLink>
            </li>
        </ul>
    </div>
</template>

<script>
import { createPageInServer } from "./CardPagesList.js";
import "./CardPagesList.css"
export default{
    name: "CardPagesList",
    emits: ['create-page'],
    data() {
        return {
            newPageTitle: "",
        };
    },
    props: {
        pages: {
            type: Object,
            required: true
        }
    },
    methods: {
        async createPage(){
            const page = await createPageInServer(this.newPageTitle);

            if(page) this.$emit("create-page", page)
        }
    }
}
</script>