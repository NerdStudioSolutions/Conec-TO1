import Vue from "vue";
import App from "./App.vue";
import router from "./routes/index";
import * as firebase from "firebase";
import store from "./store";

Vue.config.productionTip = false;

const configOptions = {
  apiKey: "xxxxxxxxxx",
    authDomain: "xxxxxxxxxx",
    databaseURL: "xxxxxxxxxx",
    projectId: "xxxxxxxxxx",
    storageBucket: "xxxxxxxxxx",
    messagingSenderId: "xxxxxxxxxx",
    appId: "xxxxxxxxxx",
    measurementId: "xxxxxxxxxx"

};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
