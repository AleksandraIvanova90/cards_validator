import { changingDOM, getPaymentSystem, luhnAlgorithm } from "./validators.js";

export class InnFormWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.element = this.parentEl.querySelector(".form-inline");
    this.input = this.element.querySelector(".form-control");

    this.onSubmit = this.onSubmit.bind(this);
    this.onInput = this.onInput.bind(this);

    this.element.addEventListener("submit", this.onSubmit);
    this.input.addEventListener("input", this.onInput);
  }
  clear() {
    const items = this.parentEl.querySelectorAll("cards");

    for (const child of items) {
      console.log(child);
      child.classList.remove("cdisabled");
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const value = this.input.value;
    if (luhnAlgorithm(value)) {
      const cardName = getPaymentSystem(value);
      console.log(cardName);
      changingDOM(cardName);
    }
  }

  onInput(e) {
    if (e.target) {
      let cards = Array.from(this.parentEl.querySelectorAll(".card"));
      cards.forEach((card) => {
        const mark = card.className.includes("cdisabled");
        if (mark) {
          card.classList.remove("cdisabled");
        }
      });
    }
  }
}
