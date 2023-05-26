import { createApp } from 'vue';
import App from './App.vue';
/* Set up using Vue 3 */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import  { fas }  from '@fortawesome/free-solid-svg-icons';
library.add( fas );
import  { far }  from '@fortawesome/free-regular-svg-icons';
library.add( far );

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app');

