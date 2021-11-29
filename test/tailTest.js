const assertEqual = require('../assertEqual');
const tail = require('../tail');
const words = ["Hello", "Lighthouse", "Labs"];
const result = tail(words);

assertEqual([].length, 0);
assertEqual(result.length, 2); 
assertEqual(words.length, 3); 
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");