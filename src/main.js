import { createApp } from "vue";
import axios from "axios";

// Vuetify
import "vuetify/styles";

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Components
import App from "./App.vue";

import router from "./router";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.use(router).use(vuetify).mount("#app");
