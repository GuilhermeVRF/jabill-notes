<template>
    <CardHeader />
    <p class="error-message" v-if="$route.query.error">{{ $route.query.error }}</p>
    <CardForm
        :fields="loginFields"
        :imgSrc="require('@/assets/login.png')"
        title="Login"
        linkTo="/register"
        linkMessage="Não está cadastrado? Registre-se aqui"
        @submit-form="login"
    />
</template>

<script>
import { login } from './ViewLogin';
import CardHeader from '@/components/header/CardHeader.vue';
import CardForm from "@/components/form/CardForm.vue";

export default {
    name: "ViewLogin",
    components: {
        CardHeader,
        CardForm,
    },
    data(){
        return {
            loginFields: [
                {
                    label: "Email",
                    type: "email",
                    id: "email",
                    name: "email",
                    placeholder: "Email",
                    required: true,
                },
                {
                    label: "Senha",
                    type: "password",
                    id: "password",
                    name: "password",
                    placeholder: "Senha",
                    required: true
                },
            ],
        };
    },
    methods :{
        login(form){
            login(form, this.$router)
        }
    }
}
</script>