<template>
    <div :class="$style.pagesMenu" v-if="!collapsed">
        <form :class="$style.createPageForm">
            <input type="text" class="form_control" placeholder="Criar Página" v-model="newPageTitle">
            <input  type="button" value="+" class="btn btn-success" @click="createPage">
        </form>
        <ul :class="$style.pagesList">
            <li v-for="([slug, page]) of Object.entries(pages)" :key="page.id">
                <RouterLink :to="'/content/' + slug">{{ String.fromCodePoint(0x1F4C3) }} {{ page.title }}</RouterLink>
            </li>
        </ul>
    </div>
</template>

<script>
import { createPageInServer } from "./CardPagesList.js";
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
            const page = await createPageInServer(this.newPageTitle);

            if(page) this.$emit("create-page", page)
        }
    },
    computed: {
        $style(){
            return style;
        }
    }
}
</script>