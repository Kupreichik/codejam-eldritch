import { cardBack } from "../dom-elements";
import { getDataCards } from "./get-data-cards";
import { setDeck } from "./set-deck";

  const dataCards = getDataCards();
  const shuffledDecks = dataCards[0];
  const antientRules = dataCards[1];
  const deck = setDeck(shuffledDecks, antientRules);

export function playCards() {
  let i = 2;
  if(deck[i].length == 0) {i -= 1};
  if(i < 0) {
    cardBack.remove();
  }

}