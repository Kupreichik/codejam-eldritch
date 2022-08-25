import ancientsData from "../data/ancients";
import { blueCards, brownCards, greenCards } from "../data/mythicCards";
import { shuffle } from "./shuffle";

export function getDataCards() {
  const antient = document.querySelector('.ancient-btn-checked').id;
  const antientRules = (ancientsData.filter(item => item.name === antient))[0];

  const greenCardsCount = antientRules.firstStage.greenCards + antientRules.secondStage.greenCards + antientRules.thirdStage.greenCards;
  const brownCardsCount = antientRules.firstStage.brownCards + antientRules.secondStage.brownCards + antientRules.thirdStage.brownCards;
  const blueCardsCount = antientRules.firstStage.blueCards + antientRules.secondStage.blueCards + antientRules.thirdStage.blueCards;
  const cardsCounts = [greenCardsCount, brownCardsCount, blueCardsCount];

  let originalDeck = [greenCards, brownCards, blueCards];
  let shuffledDeck = originalDeck.map(shuffle);
  let filterDeck = shuffledDeck;

  const difficulty = document.querySelector('.difficulty-checked').textContent;

  if(difficulty === 'Очень лёгкий') {
    let easyDeck = shuffledDeck.map(cards => 
      cards.filter( card => card.difficulty == 'easy'));

    let normalDeck = shuffledDeck.map(cards => 
      cards.filter( card => card.difficulty == 'normal'));

    let requiredDeck = [];
    for(let i = 0; i < easyDeck.length; i++) {
      let requiredСount = cardsCounts[i] - easyDeck[i].length;
      requiredСount > 0 ?
        requiredDeck.push([...easyDeck[i], ...normalDeck[i].splice(0, requiredСount)]) :
        requiredDeck.push(easyDeck[i]);
    }
    filterDeck = requiredDeck.map(shuffle);
  }

  if(difficulty === 'Лёгкий') {
    filterDeck = shuffledDeck.map(cards => 
      cards.filter( card => card.difficulty != 'hard'))
  }

  if(difficulty === 'Сложный') {
    filterDeck = shuffledDeck.map(cards => 
      cards.filter( card => card.difficulty != 'easy'))
  }

  return [filterDeck, antientRules];
}