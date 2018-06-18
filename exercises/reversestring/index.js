// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const reverse = (str) =>  {
  return str.split('').reduce((reversed, char) => {
    return char + reversed;
  }, '')
}

module.exports = reverse;

// const reverse = (str) =>  {
//   return str.split('').reverse().join('');
// }

// const reverse = (str) =>  {
//   let reversed = '';

//   for (let i = 0; i < str.length; i++) {
//     reversed = str[i] + reversed;
//   }

//   return reversed;
// }

// const reverse = (str) =>  {
//   let reversed = '';

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }

//   return reversed;
// }
