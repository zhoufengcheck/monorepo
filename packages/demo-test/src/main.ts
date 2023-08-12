import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import {buildUUID} from '@nice_honycomb/utils'
console.log(buildUUID())

createApp(App).mount('#app')
