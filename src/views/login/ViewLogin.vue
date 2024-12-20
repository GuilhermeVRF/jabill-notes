<template>
    <CardHeader />
    <CardForm
        :fields="loginFields"
        :imgSrc="require('@/assets/login.png')"
        title="Login"
        linkTo="/register"
        linkMessage="Não está cadastrado? Registre-se aqui"
    />
</template>

<script>
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
    }
}
</script>