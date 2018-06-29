// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  var vowels = 0;

  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    //since includes method has a linear time complexity, I chose using an if statement
       //to reduce overall time complexity
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      vowels++;
    }
  }

  return vowels;
}

module.exports = vowels;
