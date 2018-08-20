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
      this.modalContentClass = this.getId(this.modalContent).getAttribute("class");
      this.addEvents();
    },
    getId(el) {
      return document.getElementById(el);
    },
    generateListener(id, actions) {
      // for optional items
      if (id !== undefined) {
        actions.forEach((i) => {
          this.getId(id).addEventListener(i.ev, (event) => i.exec(event));
        });
      }
    },
    addEvents() {
      this.generateListener(this.showBtn1, [{
        ev: "click",
        exec: () => this.showModal()
      }]);

      this.generateListener(this.showBtn2, [{
        ev: "click",
        exec: () => this.showModal()
      }]);

      this.generateListener(this.closeBtn1, [{
        ev: "click",
        exec: () => this.closeModal()
      }]);

      this.generateListener(this.closeBtn2, [{
        ev: "click",
        exec: () => this.closeModal()
      }]);

      this.generateListener(this.modalBackground, [{
        ev: "click",
        exec: (event) => {
          if (event.target.id === this.modalBackground) {
            this.closeModal();
          }
        }
      }]);

      document.body.addEventListener("keypress", (e) => {
        if (e.keyCode === 27) {
          this.close();
        }
      });
    },
    showModal() {
      this.getId(this.modalBackground).style.display = "block";
      this.getId(this.modalContent).className = `${this.modalContentClass}`;
      if (this.animateEntry) {
        this.getId(this.modalContent).className = `${this.modalContentClass} ${this.animateEntryClass}`;
      }
    },
    closeModal() {
      if (this.animateExit) {
        this.getId(this.modalContent)
          .className = `${this.modalContentClass} ${this.animateExitClass}`;

        window.setTimeout(() => {
          this.close();
        }, 500);
        window.clearTimeOut();
      }

      this.close();
    },
    close() {
      this.getId(this.modalBackground).style.display = "none";
    }
};