import { shuffle } from "./shuffle";

export function setStagesCards(shuffledDecks, antientRules) {
  const firstStageArr = [
    ...shuffledDecks[2].splice(0, antientRules.firstStage.blueCards),
    ...shuffledDecks[1].splice(0, antientRules.firstStage.brownCards),
    ...shuffledDecks[0].splice(0, antientRules.firstStage.greenCards)
  ];
  
  const secondStageArr = [
    ...shuffledDecks[2].splice(0, antientRules.secondStage.blueCards),
    ...shuffledDecks[1].splice(0, antientRules.secondStage.brownCards),
    ...shuffledDecks[0].splice(0, antientRules.secondStage.greenCards)
  ];

  const thirdStageArr = [
    ...shuffledDecks[2].splice(0, antientRules.thirdStage.blueCards),
    ...shuffledDecks[1].splice(0, antientRules.thirdStage.brownCards),
    ...shuffledDecks[0].splice(0, antientRules.thirdStage.greenCards)
  ];
  const deck = [];
  deck.push(shuffle(thirdStageArr));
  deck.push(shuffle(secondStageArr));
  deck.push(shuffle(firstStageArr));

  return deck;
}