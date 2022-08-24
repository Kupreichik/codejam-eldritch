import { ancientBtnChoose, block1, block2 } from "../dom-elements";
import { changePageBlock } from "./change-page-block";

export function block1EventHandler(event) {

  if(event.target.classList.contains('ancient-img')) {
    event.target.classList.toggle('ancient-img-scale-up');
  } else if(document.querySelector('.ancient-img-scale-up')) {
    document.querySelector('.ancient-img-scale-up').classList.remove('ancient-img-scale-up');
  };

  if(event.target.classList.contains('ancient-card-btn')) {
    const checkedBtn = document.querySelector('.ancient-btn-checked');
    if(checkedBtn) {
      checkedBtn.classList.remove('ancient-btn-checked');
    };
    event.target.classList.add('ancient-btn-checked');
    ancientBtnChoose.removeAttribute('disabled');
  }

  if(event.target.classList.contains('btn-choose')) {
    changePageBlock(block1, block2);
  }
}