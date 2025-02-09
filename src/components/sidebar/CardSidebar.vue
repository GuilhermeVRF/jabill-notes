<template>
    <div :class="['sidebar', {collapsed: isCollapsed}]">
        <CardLogo :isCollapsed="isCollapsed"/>
        <div class="toggleSidebar">
            <button @click="toggleSidebar" class="toggleSidebar-btn">{{ isCollapsed ? '>>>' : '<<<' }}</button> 
        </div> 
        <CardPagesList :pages="pages" :collapsed="isCollapsed" @create-page="createPage" @deletePage-inList="deletePageInList"/>
    </div>
</template>

<script>
import CardLogo from '../logo/CardLogo.vue';
import CardPagesList from '@/components/pagesList/CardPagesList.vue';
export default{
    name: "CardSidebar",
    emits: ['create-page'],
    props: {
        pages: {
            type: Object,
            required: true
        }
    },
    data (){
        return {
            isCollapsed: false
        }
    },
    methods: {
        toggleSidebar(){
            this.isCollapsed = !this.isCollapsed;
        },
        createPage(page){
            this.$emit("create-page", page)
        },
        deletePageInList(slug){
            this.$emit("deletePage-inList", slug);
        }
    },
    components: {
        CardLogo,
        CardPagesList
    },
}
</script>

<style>
    .sidebar{
        background-color: lightgray;
        width: 350px;
        border-right: solid 1px rgba(0, 0, 0, 0.5);
        flex-shrink: 0;
        transition: 0.3s;
    }

    .toggleSidebar{
        display: flex;
        width: 100%;
        justify-content: end;
    }

    .collapsed{
        width: 50px;
        flex-shrink: 0;
    }

    .toggleSidebar-btn{
        width: 45px;
        height: 30px;
        border: none;
        background-color: transparent;
        cursor: pointer;
        font-size: 20px;
    }
    .toggleSidebar-btn:hover{
        color: white;
    }

    @media screen and (max-width: 500px){
        .sidebar{
            width: 100%;
        }

        .sidebar .logo{
            justify-content: center;
        }

        .sidebar h2{
            display: none;
        }

        .collapsed{
            width: 50px;
        }
    }
</style>