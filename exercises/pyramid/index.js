// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function pyramid(n) {
  var array = Array(n + (n - 1)).fill(' ');
  
  for (var i = 0; i < n; i++) {
    var middle = Math.floor(array.length / 2);
    var startRange = middle - i;
    var endRange = middle + i;

    if (i >= startRange || i <= endRange) {
      array.fill('#', startRange, endRange + 1);
    }

    console.log(array.join(''));
  }
}

module.exports = pyramid;
