<template>
    <div :class="$style.pagesMenu" v-if="!collapsed">
        <form :class="$style.createPageForm">
            <input type="text" class="form_control" placeholder="Criar Página" v-model="newPageTitle">
            <input  type="button" value="+" class="btn btn-success" @click="createPage">
        </form>
        <ul :class="$style.pagesList">
            <li v-for="([slug, page]) of Object.entries(pages)" :key="page.id" :class="$style.pageLink">
                <div :class="$style.pageLinkTitle">
                    <span>{{ page.emoji }}</span>
                    <RouterLink :to="'/content/' + slug"> {{ page.title }}</RouterLink>
                </div>
                <button :class="$style.deletePage" @click=deletePage(slug)>
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
            const page = await createPageInServer(this.newPageTitle);

            if(page) this.$emit("create-page", page)
        },
        deletePage(slug) {
            delete this.pages[slug];
            deletePage(slug, this.$route.params.slug)

            if(slug == this.$route.params.slug){
                const slugs = Object.keys(this.pages);
                const lastSlug = slugs.length > 0 ? slugs[slugs.length - 1] : 'empty';
                this.$router.replace(`/content/${lastSlug}`);
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