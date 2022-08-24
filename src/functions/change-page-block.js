export function changePageBlock(elem, elemNext) {
  elem.classList.add('block-hiding');
  window.setTimeout(function () {
    elem.classList.add('block-hidden');
    elem.classList.remove('block-hiding');
    elemNext.classList.remove('block-hidden');
    elemNext.classList.remove('block-hiding');
  }, 500);
}