export default function BS4Modal1(opts) {
  this.modalBackground = opts.modalBackground;
  this.modalContent = opts.modalContent;
  this.showBtn1 = opts.showBtn1;
  this.showBtn2 = opts.showBtn2;
  this.closeBtn1 = opts.closeBtn1;
  this.closeBtn2 = opts.closeBtn2;
  this.animateEntry = opts.animateEntry;
  this.animateEntryClass = opts.animateEntryClass;
  this.animateExit = opts.animateExit;
  this.animateExitClass = opts.animateExitClass;
}

BS4Modal1.prototype = {
  init() {
    this.modalContentClass = document.getElementById(this.modalContent).getAttribute("class");
    this.addEvents();
  },
  addEvents() {
    document.getElementById(this.showBtn1).addEventListener("click", () => {
      this.showModal();
    });

    if (this.showBtn2) {
      document.getElementById(this.showBtn2).addEventListener("click", () => {
        this.showModal();
      });
    }

    document.getElementById(this.closeBtn1).addEventListener("click", () => {
      this.closeModal();
    });

    if (this.closeBtn2) {
      document.getElementById(this.closeBtn2).addEventListener("click", () => {
        this.closeModal();
      });
    }

    document.body.addEventListener("keypress", (e) => {
      if (e.keyCode === 27) {
        this.close();
      }
    });

    document.getElementById(this.modalBackground).addEventListener("click", (e) => {
      if (e.target.id === this.modalBackground) {
        this.closeModal();
      }
    });
  },
  showModal() {
    document.getElementById(this.modalBackground).style.display = "block";
    if (this.animateEntry) {
      document.getElementById(this.modalContent)
      .className = `${this.modalContentClass} ${this.animateEntryClass}`;
    }
  },
  closeModal() {
    if (this.animateExit) {
      document.getElementById(this.modalContent)
      .className = `${this.modalContentClass} ${this.animateExitClass}`;

      window.setTimeout(() => {
        this.close();
      }, 500);
      window.clearTimeOut();
    }
    this.close();
  },
  close() {
    document.getElementById(this.modalBackground).style.display = "none";
  }
};

let zz = new BS4Modal1({
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

zz.init();