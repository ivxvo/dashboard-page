import { createApp } from 'vue'
import App from './App.vue'

import { router } from "./router";
import VueGoogleCharts from "vue3-googl-chart";

import "./assets/main.css"

createApp(App)
.use(router)
.use(VueGoogleCharts)
.mount('#app');
