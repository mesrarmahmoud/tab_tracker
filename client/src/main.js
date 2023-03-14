import { createApp } from 'vue'
import App from './components/App.vue'

// Router
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import './assets/main.css'


const vuetify = createVuetify({
  components,
  directives,
})

//App.
const app = createApp(App)

app.use(router);
app.use(vuetify);

app.mount('#app');
