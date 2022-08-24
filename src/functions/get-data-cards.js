import ancientsData from "../data/ancients";
import { blueCards, brownCards, greenCards } from "../data/mythicCards";
import { shuffle } from "./shuffle";

export function getDataCards() {
  const difficulty = document.querySelector('.difficulty-checked').textContent;
  const antient = document.querySelector('.ancient-btn-checked').id;
  const antientRules = ancientsData.filter(item => item.name === antient)

  const shuffledDecks = {};

  shuffledDecks.blueCards = shuffle(blueCards);
  shuffledDecks.brownCards = shuffle(brownCards);
  shuffledDecks.greenCards = shuffle(greenCards);

  return [shuffledDecks, antientRules];
}