<template>
    <div>
        
        <v-card
            class="mx-auto"
            max-width="344"
            variant="outlined"
        >
            <v-card-item>
                <div>
                    <div class="text-overline mb-1">
                        <h1>Registration</h1>
                    </div>
                    <div class="text-h6 mb-1">
                        <v-text-field label="Email" v-model="email"></v-text-field>
                    </div>
                    <div class="text-h6 mb-1">
                        <v-text-field 
                            label="Password"  
                            type="password"
                            v-model="password" ></v-text-field>
                    </div>
                </div>
                <p class="errorText" v-show="errorResponse" v-html="errorResponse">
                </p> 
            </v-card-item>

            <v-card-actions>
            <v-btn variant="outlined" @click="onRegister">
                Enregistrer
            </v-btn>
            </v-card-actions>
        </v-card>
    </div>
    
</template>

<script setup>
    import AuthenticationService from '@/services/AuthenticationService.js'
    import {ref} from "vue"

    let email = ref('');
    let password = ref('');
    let errorResponse = ref('');

    const onRegister = async () => {
        try{
            await AuthenticationService.register({
                email : email.value,
                password : password.value
            });
        }catch(error){
            //console.log(error.response.data)
            errorResponse.value = error.response.data.error
            console.log(errorResponse);
        }
    }
</script>

<style scoped>
    .errorText{
        color : red;
    }
</style>


