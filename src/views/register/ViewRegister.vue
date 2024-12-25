<template>
    <CardHeader />
    <CardForm
        :fields="registerFields"
        :imgSrc="require('@/assets/register.png')"
        title="Registrar"
        linkTo="/login"
        linkMessage="Já está cadastrado? Faça login aqui"
        @submit-form="registerUser"
    />
</template>

<script>
import { registerUser } from "./ViewRegister.js";
import CardHeader from '@/components/header/CardHeader.vue';
import CardForm from '@/components/form/CardForm.vue';

export default{
    name: 'ViewRegister',
    components: {
        CardHeader,
        CardForm,
    },
    data(){
        return {
            registerFields: [
                {
                    label: "Nome",
                    type: "text",
                    id: "name",
                    name: "name",
                    placeholder: "Nome",
                    required: false,
                },
                {
                    label: "Email",
                    type: "email",
                    id: "email",
                    name: "email",
                    placeholder: "Email",
                    required: false,
                },
                {
                    label: "Senha",
                    type: "password",
                    id: "password",
                    name: "password",
                    placeholder: "Senha",
                    required: false,
                },
                {
                    label: "Repita a Senha",
                    type: "password",
                    id: "repeat_password",
                    name: "repeat_password",
                    placeholder: "Repita a senha",
                    required: false,
                },
                {
                    label: "Imagem de perfil",
                    type: "file",
                    id: "profile_image",
                    name: "profile_image",
                    placeholder: "Repita a senha",
                    required: false,
                }
            ],
        };
    },
    methods: {
        registerUser(form){
            registerUser(form, this.$router)
        }
    }
}
</script>