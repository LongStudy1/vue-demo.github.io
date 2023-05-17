import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElmentPlus from 'element-plus';

const app = createApp(App)
app.use(ElmentPlus);
app.mount('#app')
