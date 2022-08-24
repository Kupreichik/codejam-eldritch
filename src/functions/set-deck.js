import { getDataCards } from "./get-data-cards";
import { setStagesCards } from "./set-stages-cards";

export function setDeck() {
  const dataCards = getDataCards();
  const shuffledDecks = dataCards[0];
  const antientRules = dataCards[1];
  const deck = setStagesCards(shuffledDecks, antientRules);
  return deck;
}
