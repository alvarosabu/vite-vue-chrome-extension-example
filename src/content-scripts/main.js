import { createApp } from "vue";
import Popup from "./Popup.vue";
import "@/styles/main.css";

const MOUNT_EL_ID = "as-awesome-extension";

let mountEl = document.getElementById(MOUNT_EL_ID);
if (mountEl) {
  mountEl.innerHTML = "";
}
mountEl = document.createElement("div");
mountEl.setAttribute("id", MOUNT_EL_ID);
document.body.appendChild(mountEl);

const vm = createApp(Popup).mount(mountEl);

chrome.runtime.onMessage.addListener(message => {
  if (message.toggleVisible) {
    vm.visible = !vm.visible;
  }
});
