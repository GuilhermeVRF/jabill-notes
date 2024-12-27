<template>
    <div :class="$style.form_container">
        <img :src="imgSrc" alt="login" :class="$style.form_image">
        <div  :class="$style.form_content">
            <h1 :class="$style.login_title">{{ title }}</h1>
            <form :class="$style.form" method="post" @submit.prevent="submitForm">
                <div v-for="(field, index) in fields" :key=index :class="$style.form_group">
                    <label :for="field.id">{{ field.label }}</label>
                    <input
                        v-if="field.type != 'file'"
                        v-model="formData[field.id]" 
                        :type="field.type" 
                        :id="field.id" 
                        :name="field.name" 
                        :placeholder="field.placeholder" 
                        :required="field.required"
                        class="form_control"
                    >
                    <input
                        v-else
                        type="file"
                        :id="field.id"
                        :name="field.name"
                        :placeholder="field.placeholder"
                        :required="field.required"
                        class="form_control"
                        @change="handleFileEvent(field.id, $event)"
                    >
                </div>

                <div :class="$style.form_action">
                    <button type="submit" class="btn btn-success">Enviar</button>
                    <button type="reset" class="btn btn-danger">Resetar</button>
                </div>
            </form>
            <router-link :to="linkTo">{{ linkMessage }}</router-link>  
        </div>
    </div>    
</template>

<script>
import styles from "./CardForm.module.css";
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
        handleFileEvent(fieldId, event){
            const file = event.target.files[0];
            this.formData[fieldId] = file;
        },
        submitForm() {
            this.$emit('submit-form', {formData : this.formData })
        }
    },
    computed: {
        $style() {
            return styles;
        }
    }
}
</script>