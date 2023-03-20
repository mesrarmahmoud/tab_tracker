<script setup>
    import PageHeader from './pages/Header.vue'
    import {ref} from 'vue'

    let order = ref(0)
</script>

<template>
    <v-layout>
        <v-navigation-drawer color="grey-darken-2" permanent></v-navigation-drawer>
        <page-header :order="order"/>
        <v-main>
            <v-switch v-model="order" true-value="-1" false-value="0" label="Toggle order"></v-switch>
            <router-view />
        </v-main>
    </v-layout>
    
</template>

<style scoped>
    
</style>
