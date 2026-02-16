import { createApp, ref } from "vue";
import App from "./App.vue";
import router from "./router";
import { loadTexts, useText } from "@/composables/useText";

const app = createApp(App);

const lang = ref("de");
app.provide("lang", lang);

loadTexts();

const { t } = useText(lang);
app.config.globalProperties.t = t;

app.use(router).mount("#app");
