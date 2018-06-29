// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const matrix = [];

  for (let i = 0; i < n; i++) {
    matrix.push([]);
  }

  let currentNum = 1;
  let startRow = 0;
  let endRow = n - 1;
  let startCol = 0;
  let endCol = n - 1;

  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      matrix[startRow][i] = currentNum;
      currentNum++;
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      matrix[i][endCol] = currentNum;
      currentNum++;
    }
    endCol--;
    
    for (let i = endCol; i >= startCol; i--) {
      matrix[endRow][i] = currentNum;
      currentNum++;
    }
    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      matrix[i][startCol] = currentNum;
      currentNum++;
    }
    startCol++;

  }

  return matrix;
}

matrix(4)

module.exports = matrix;
