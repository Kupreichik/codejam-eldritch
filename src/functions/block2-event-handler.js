import { block2, block3, difficultyBtnChoose } from "../dom-elements";
import { changePageBlock } from "./change-page-block";
import { setDeck } from "./set-deck";
import { showDeckTracker } from "./show-deck-tracker";


export function block2EventHandler(event) {
  if(event.target.classList.contains('difficulty')) {
    const checkedDifficulty = document.querySelector('.difficulty-checked');
    if(checkedDifficulty) {
      checkedDifficulty.classList.remove('difficulty-checked');
    };
    event.target.classList.add('difficulty-checked');
    difficultyBtnChoose.removeAttribute('disabled');
  }

  if(event.target.classList.contains('btn-choose')) {
    changePageBlock(block2, block3);
    const deck = setDeck();
    showDeckTracker(deck);
  }
}