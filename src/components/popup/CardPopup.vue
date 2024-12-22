<template>
    <transition name="slide-right">
        <div
            v-if="visible"
            :class="['popup', status]"
            @animationend="onAnimationEnd"
        >
        <img :src="status === 'success' ? require('@/assets/success.png') : require('@/assets/error.png')" alt="Status icon" class="popup-icon"/>
            <span>{{ message }}</span>
        </div>
    </transition>
</template>

<script>
export default{
    name: "CardPopup",
    data(){
        return {
            visible: false,
            status: '',
            message: ''
        }
    },
    methods:{
        show(){
            this.visible = true;
            setTimeout(() => {
                this.visible = false;
            }, 3000)
        }
    }
}

</script>

<style>
.popup{
    position: fixed;
    top: 20px;
    right: -300px;
    width: 250px;
    padding: 20px;
    color: black;
    background-color: white;
    border-radius: 8px;
    border: solid 1px black;
    animation: slideIn 1.5s forwards, fadeOut 5s 4.5s forwards;
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 3000;
    box-shadow: 0px 0px 10px black;
}

.popup span{
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    
}

.popup-icon{
    width: 50px;
}

@keyframes slideIn {
  to {
    right: 20px;
  }
}

@keyframes fadeOut {
  to {
    opacity: 0;
  }
}

</style>