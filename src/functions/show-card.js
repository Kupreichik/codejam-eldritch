import { cardCurrent, cardNext, deck } from "../dom-elements";

export function showCard() {
  deck.classList.add('take-kard');
  
  window.setTimeout(function () {
    deck.classList.remove('take-kard');
    cardCurrent.style.backgroundImage = 'url(./assets/MythicCards/blue/blue1.webp)';
    cardNext.style.backgroundImage = 'url(./assets/MythicCards/green/green1.webp)';
  }, 500);
}