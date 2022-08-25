const { block1, block2, deck } = require("./dom-elements");
const { block1EventHandler } = require("./functions/block1-event-handler");
const { block2EventHandler } = require("./functions/block2-event-handler");
const { playCards } = require("./functions/play-kards");

block1.addEventListener('click', block1EventHandler);
block2.addEventListener('click', block2EventHandler);
deck.addEventListener('click', playCards);