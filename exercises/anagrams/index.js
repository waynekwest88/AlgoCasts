// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return stringA.split('').sort().join('') === stringB.split('').sort().join('')
}

module.exports = anagrams;

// function buildMap(string) {
//   let map = {};

//   for (var i = 0; i < string.length; i++) {
//     var lowerCaseChar = string[i].toLowerCase();
//     map[lowerCaseChar] = map[lowerCaseChar] + 1 || 1;
//   }

//   return map;
// }

// function anagrams(stringA, stringB) {
//   var mapA = buildMap(stringA);
//   var mapB = buildMap(stringB);

//   if (stringA.length === stringB.length) {
//     for (var char in mapA) {
//       if (mapA[char] !== mapB[char]) {
//         return false;
//       }
//     }
//     return true;
//   } else {
//     return false;
//   }
// }

