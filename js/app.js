const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");

import { openPopUp } from "./popup.js";
import { closePopUp } from "./popup.js";

openBtn.addEventListener("click", openPopUp);
closeBtn.addEventListener("click", closePopUp);
