import { deck } from "../dom-elements";
import { setDeck } from "./set-deck";
import { showCard } from "./show-card";
import { showDeckTracker } from "./show-deck-tracker";

let currentDeck;
let i = 2;

export function playCards() {
  currentDeck ? currentDeck : currentDeck = setDeck();

  currentDeck[i].length === 0 ? (i = i - 1) : i;
  if(i < 0) {
    deck.remove();
    return;
  };

  let currentCard = currentDeck[i][currentDeck[i].length - 1];
  showCard(currentCard.cardFace);

  currentDeck[i].pop();
  showDeckTracker(currentDeck);
}