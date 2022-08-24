import { st1blue, st1brown, st1green, st2blue, st2brown, st2green, st3blue, st3brown, st3green } from "../dom-elements";

export function showDeckTracker(deck) {
  const st1greenCount = deck[2].filter(item => item.color == 'green').length;
  const st1brownCount = deck[2].filter(item => item.color == 'brown').length;
  const st1blueCount = deck[2].filter(item => item.color == 'blue').length;
  const st2greenCount = deck[1].filter(item => item.color == 'green').length;
  const st2brownCount = deck[1].filter(item => item.color == 'brown').length;
  const st2blueCount = deck[1].filter(item => item.color == 'blue').length;
  const st3greenCount = deck[0].filter(item => item.color == 'green').length;
  const st3brownCount = deck[0].filter(item => item.color == 'brown').length;
  const st3blueCount = deck[0].filter(item => item.color == 'blue').length;

  st1green.textContent = `${st1greenCount}`;
  st1brown.textContent = `${st1brownCount}`;
  st1blue.textContent = `${st1blueCount}`;
  st2green.textContent = `${st2greenCount}`;
  st2brown.textContent = `${st2brownCount}`;
  st2blue.textContent = `${st2blueCount}`;
  st3green.textContent = `${st3greenCount}`;
  st3brown.textContent = `${st3brownCount}`;
  st3blue.textContent = `${st3blueCount}`;
}