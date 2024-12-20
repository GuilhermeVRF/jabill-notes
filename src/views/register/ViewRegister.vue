<template>
    <CardHeader />
    <CardForm
        :fields="registerFields"
        :imgSrc="require('@/assets/register.png')"
        title="Registrar"
        linkTo="/login"
        linkMessage="Já está cadastrado? Faça login aqui"
    />
</template>

<script>
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
                    required: true,
                },
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
                    required: true,
                },
                {
                    label: "Repita a Senha",
                    type: "password",
                    id: "repeat-password",
                    name: "repeat-password",
                    placeholder: "Repita a senha",
                    required: true,
                },
                {
                    label: "Imagem de perfil",
                    type: "file",
                    id: "perfilImage",
                    name: "perfilImage",
                    placeholder: "Repita a senha",
                    required: true,
                }
            ],
        };
    }
}
</script>