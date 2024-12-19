<template>
    <img src="@/assets/loading.gif" alt="loading" id="loading" :width="width" :height="height">
</template>

<script>
export default {
    name: "CardLoading",
    props: {
        width: {
            type: String,
            default: "120"
        },
        height: {
            type: String,
            default: "100"
        }
    }
}
</script>