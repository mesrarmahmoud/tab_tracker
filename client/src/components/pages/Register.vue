<template>
    <div>
        <h1>this is register vue</h1>
        <v-card
            class="mx-auto"
            max-width="344"
            variant="outlined"
        >
            <v-card-item>
            <div>
                <div class="text-overline mb-1">
                    <v-text-field label="Email" v-model="email"></v-text-field>
                </div>
                <div class="text-h6 mb-1">
                    <v-text-field 
                        label="Password"  
                         type="password"
                        v-model="password" ></v-text-field>
                </div>
            </div>
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
    let password = ref('')

    const onRegister = async () => {
        const response = await AuthenticationService.register({
            email : email,
            password : password
        });
    }

</script>

<style scoped>

</style>


