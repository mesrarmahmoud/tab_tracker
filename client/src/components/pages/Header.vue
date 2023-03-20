<template>
    <v-app-bar
        color="grey-lighten-2"
        :order="order"
      >
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Title</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn v-show="!isUserLogIn" variant="outlined" @click="nagivationTo({path : '/login'})" >
          <v-icon class="mr-2">mdi-login-variant</v-icon>
          <small>Login</small>
          
        </v-btn>

        <v-btn v-if="!isUserLogIn" class="ml-3" variant="flat"
            color="secondary" @click="nagivationTo({path : '/register'})">
          <v-icon class="mr-2">mdi-account-plus</v-icon>
          <small>Sign up </small>
        </v-btn>

        <!-- <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn> -->
      </v-app-bar>
    
</template>
<script setup>

  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router';
  import {ref , computed} from "vue"


  const store = useStore();
  const router = useRouter();

  const props = defineProps({
      order : Number
  })

  const isUserLogIn = computed(() =>  store.state.isUserLogIn )
  
  store.state.isUserLogIn
  console.log(store.state.isUserLogIn)

  

  const nagivationTo  = (route) => {
      router.push(route)
  }
    
</script>
<style scoped>

</style>
