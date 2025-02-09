<template>
    <div :class="$style.pagesMenu" v-if="!collapsed">
        <form :class="$style.createPageForm">
            <input type="text" :class="$style.createPageInput" placeholder="Criar Página" v-model="newPageTitle">
            <input type="button" value="+" :class="$style.createPageBtn" @click="createPage">
        </form>
        <ul :class="$style.pagesList">
            <li v-for="page in pages" :key="page.id" :class="$style.pageLink" :style="{ marginLeft: page.depth * 10 + 'px' }">
                <div :class="$style.pageLinkTitle">
                    <span>{{ page.depth > 0 ? '└─' : '' }} {{ page.emoji }}</span>
                    <RouterLink :to="'/content/' + page.slug"> {{ page.title }}</RouterLink>
                </div>
                <button :class="$style.deletePage" @click=deletePage(page.slug)>
                    <img src="@/assets/trash.png" alt="X">
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
import { createPageInServer, deletePage } from "./CardPagesList.js";

import style from "./CardPagesList.module.css"
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
        },
        collapsed:{
            type: Boolean,
            required: true
        }
    },
    methods: {
        async createPage(){
            if(this.newPageTitle == "") return;
            const page = await createPageInServer(this.newPageTitle, null);

            this.newPageTitle = "";
            if(page) this.$emit("create-page", page)
        },
        deletePage(slug) {
            this.$emit("deletePage-inList", slug);
            
           deletePage(slug, this.$route.params.slug)

            if(slug == this.$route.params.slug){
                const lastSlug = this.pages.length > 0 ? this.pages[this.pages.length - 1].slug : 'empty';
                this.$router.replace(`/content/${lastSlug}`);
                console.log('aqui')
            }
        }
    },
    computed: {
        $style(){
            return style;
        }
    }
}
</script>