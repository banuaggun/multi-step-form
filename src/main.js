import { createApp } from 'vue'
//import './styles/global/global.sass'
import store from './store'
import App from './App.vue'

createApp(App).use(store).mount('#app')
