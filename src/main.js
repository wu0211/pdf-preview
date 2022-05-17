import { createApp } from 'vue'
import App from './App.vue'
import PDFPreview from "pdf-preview-vue3";
import 'pdf-preview-vue3/style.css'
createApp(App).use(PDFPreview).mount('#app')

