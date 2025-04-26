import './assets/main.css'

import { createApp, ref } from 'vue'
import App from './App.vue'
import './index.css'
import Input from './components/Input.vue'
import Output from './components/Output.vue'

const text = ref('')

const app = createApp(App)

app.component('Input', Input)
app.component('Output', Output)

app.mount('#app')
