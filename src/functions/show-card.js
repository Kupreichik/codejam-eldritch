import { cardCurrent, cardNext, deck } from "../dom-elements";

export function showCard(currentCard) {
  cardNext.style.backgroundImage = `url(${currentCard})`
  deck.classList.add('take-kard');
  
  window.setTimeout(function () {
    deck.classList.remove('take-kard');
    cardCurrent.style.backgroundImage = `url(${currentCard})`;
  }, 500);
}