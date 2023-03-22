import { createApp } from 'vue'
import './style.css' // import file css generale che si trova nella stessa cartella di main.js; utilizzato "./ (facoltativo)" per richiamare la stessa directory.
import App from './App.vue' //collegamento al file App.vue che contiene tutti i collegamenti con i files components

createApp(App).mount('#app')
