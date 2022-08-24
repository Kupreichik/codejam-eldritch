import { shuffle } from "./shuffle";

export function setStagesCards(shuffledDecks, antientRules) {
  const firstStageArr = [
    ...shuffledDecks.blueCards.splice(0, antientRules[0].firstStage.blueCards),
    ...shuffledDecks.brownCards.splice(0, antientRules[0].firstStage.brownCards),
    ...shuffledDecks.greenCards.splice(0, antientRules[0].firstStage.greenCards)
  ];
  
  const secondStageArr = [
    ...shuffledDecks.blueCards.splice(0, antientRules[0].secondStage.blueCards),
    ...shuffledDecks.brownCards.splice(0, antientRules[0].secondStage.brownCards),
    ...shuffledDecks.greenCards.splice(0, antientRules[0].secondStage.greenCards)
  ];

  const thirdStageArr = [
    ...shuffledDecks.blueCards.splice(0, antientRules[0].thirdStage.blueCards),
    ...shuffledDecks.brownCards.splice(0, antientRules[0].thirdStage.brownCards),
    ...shuffledDecks.greenCards.splice(0, antientRules[0].thirdStage.greenCards)
  ];
  const deck = [];
  deck.push(shuffle(thirdStageArr));
  deck.push(shuffle(secondStageArr));
  deck.push(shuffle(firstStageArr));

  return deck;
}