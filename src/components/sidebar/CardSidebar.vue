<template>
    <div class="sidebar"></div>
</template>

<script>
export default{
    name: "CardSidebar"
}
</script>

<style>
    .sidebar{
        height: 100vh;
        background-color: black;
        width: 15%;
    }

    @media screen and (max-width: 900px) {
        .sidebar{
            width: 35%;
        }
    }


    @media screen and (max-width: 400px) {
        .sidebar{
            width: 50%;
        }
    }
</style>