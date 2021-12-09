import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import EVUI from 'evui';
import '@/assets/css/base.css';

createApp(App).use(store).use(router).use(EVUI).mount('#app');
