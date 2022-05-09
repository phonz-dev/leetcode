// Given an m x n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

// A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.



// Example 1:

// Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
// Output: [15]
// Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column.
// Example 2:

// Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
// Output: [12]
// Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.
// Example 3:

// Input: matrix = [[7,8],[1,2]]
// Output: [7]
// Explanation: 7 is the only lucky number since it is the minimum in its row and the maximum in its column.

function luckyNumbers(matrix) {
  const transposed = transpose(matrix);

  for (let i = 0; i < matrix.length; i++) {
      const row = matrix[i];
      const min = Math.min(...row);
      const minIdx = row.indexOf(min);
      const col = transposed[minIdx];
      const max = Math.max(...col);

      if (min === max) {
          return [min];
      }
  }

  return [];
}

function transpose(matrix) {
  const height = matrix[0].length;
  const width = matrix.length;
  const transposed = [];

  for (let col = 0; col < height; col++) {
      const subarr = [];

      for (let row = 0; row < width; row++) {
      subarr.push(matrix[row][col]);
      }

      transposed.push(subarr);
  }

  return transposed;
}
