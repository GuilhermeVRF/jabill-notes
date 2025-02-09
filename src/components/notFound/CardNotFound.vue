<template>
    <div :class="$style.notFound">
        <CardLoggedHeader />
        <div :class="$style.notFoundContainer">
            <img src="@/assets/notFound.png" >
            <p>A página solicita não foi encontrada!</p>
        </div>
    </div>
</template>

<script>
import CardLoggedHeader from "../loggedHeader/CardLoggedHeader.vue";
import styles from "./CardNotFound.module.css"
export default{
    name: "CardNotFound",
    components: {
        CardLoggedHeader
    },
    computed: {
    $style(){
        return styles;
    }
  }
}
</script>