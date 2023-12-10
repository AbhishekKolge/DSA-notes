//edge list
const graph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];
//simply shows connection

//adjacent list
const graph2 = [[2], [2, 3], [0, 1, 3], [1, 2]];
//index is the node and values are node's neighbour.

//adjacent matrix
const graph3 = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
];
//0 and 1 indicating whether node x has connection to node y.

//       2 ------ 0
//      / \
//     /   \
//    1 --- 3
