<template>
    <div class="form-container">
        <img :src="imgSrc" alt="login" class="form-image">
        <div  class="form-content">
            <h1 class="login-title">{{ title }}</h1>
            <form class="form" method="post" @submit.prevent="submitForm">
                <div v-for="(field, index) in fields" :key=index class="form-group">
                    <label :for="field.id">{{ field.label }}</label>
                    <input
                        v-model="formData[field.id]" 
                        :type="field.type" 
                        :id="field.id" 
                        :name="field.name" 
                        :placeholder="field.placeholder" 
                        :required="field.required"
                        class="form-control"
                    >
                </div>

                <div class="form-action">
                    <button type="submit" class="btn btn-success">Enviar</button>
                    <button type="reset" class="btn btn-danger">Resetar</button>
                </div>
            </form>
            <router-link :to="linkTo">{{ linkMessage }}</router-link>  
        </div>
    </div>    
</template>

<script>
import "./CardForm.css";
import { reactive } from "vue";

export default {
    name: 'CardForm',
    props: {
        fields: {
            type: Array,
            default: () => [],
        },
        imgSrc: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        required: {
            type: Boolean,
            default: false,
        },
        linkTo: {
            type: String,
            required: true,
        },
        linkMessage: {
            type: String,
            required: true,
        }
    },
    data (){
        return {
            formData: reactive({})
        }
    },
    created (){
        this.fields.forEach(element => {
            this.formData[element.id] = ''   
        });
    },
    methods: {
        submitForm() {
            this.$emit('submit-form', {formData : this.formData })
        }
    }
}
</script>