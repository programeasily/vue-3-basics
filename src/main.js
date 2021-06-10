import { createApp } from "vue";
import router from "./router/router.js";
import App from "./App.vue";
import dcInput from "./components/dynamic-comp/DcInput"
import dcTextArea from "./components/dynamic-comp/DcTextArea"

let app = createApp(App);

app.component("dcInput",dcInput)
app.component("dcTextArea",dcTextArea)

app.use(router).mount("#app");
