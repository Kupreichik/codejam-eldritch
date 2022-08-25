import ancientsData from "../data/ancients";
import { blueCards, brownCards, greenCards } from "../data/mythicCards";
import { shuffle } from "./shuffle";

export function getDataCards() {
  const antient = document.querySelector('.ancient-btn-checked').id;
  const antientRules = ancientsData.filter(item => item.name === antient);

  let originalDeck = [blueCards, brownCards, greenCards];
  const difficulty = document.querySelector('.difficulty-checked').textContent;

  if(difficulty === 'Лёгкий') {
    let filterDeck = originalDeck.map(cards => 
      cards.filter( card => card.difficulty != 'hard'))
    originalDeck = filterDeck;
  }

  const shuffledDecks = {};
  shuffledDecks.blueCards = shuffle(originalDeck[0]);
  shuffledDecks.brownCards = shuffle(originalDeck[1]);
  shuffledDecks.greenCards = shuffle(originalDeck[2]);

  return [shuffledDecks, antientRules];
}