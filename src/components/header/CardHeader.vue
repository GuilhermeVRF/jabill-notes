<template>
    <header>
        <div class="logo">
            <h2>Jabill Notes</h2>
        </div>
        <div v-if="isLogged" class="perfil">
            <div class="userProfile">
                <p>Guilherme</p>
                <img :src="perfilImage" alt="perfil image">
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "CardHeader",
    props: {
        isLogged :{
            type: Boolean,
            require: true
        },
        perfilImage: {
            type: String,
            default: () => require('@/assets/perfil.jpeg'),
        }
    }
}
</script>

<style>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    width: 100%;
    border-bottom: solid 1px black;
}


.logo{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%;
    height: 100%;
    background-color: gray;
    color: white
}



@media screen and (max-width: 900px) {
    .logo{
        width: 35%;
    }
}

@media screen and (max-width: 400px) {
    .logo{
        width: 50%;
    }

    .logo h2{
        font-size: 20px;
    }

    .userProfile img{
        width: 45px;
    }

    .userProfile p{
        font-size: 14px;
    }
}
</style>