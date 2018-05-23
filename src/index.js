import "./styles/main.scss";

import BS4Modal1 from "./bs4modal1.js";

let modal1 = new BS4Modal1({
  modalBackground: "bs4modal1_bg",
  modalContent: "bs4modal1-content",
  showBtn1: "bs4modal1_show",
  showBtn2: "", // optional
  closeBtn1: "bs4modal1_closebtn1",
  closeBtn2: "", // optional
  animateEntry: true, // optional
  animateEntryClass: "animated bounceIn",
  animateExit: true, // optional
  animateExitClass: "animated bounceOut"
});

modal1.init();

let modal2 = new BS4Modal1({
  modalBackground: "bs4modal2_bg",
  modalContent: "bs4modal2-content",
  showBtn1: "bs4modal2_show",
  showBtn2: "", // optional
  closeBtn1: "bs4modal2_closebtn1",
  closeBtn2: "", // optional
  // animateEntry: true, // optional
  animateEntryClass: "animated bounceIn",
  // animateExit: true, // optional
  animateExitClass: "animated bounceOut"
});

modal2.init();

