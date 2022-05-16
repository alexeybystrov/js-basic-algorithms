// BEGIN (write your solution here)
export default (path) => {
  let result = path[0];

  for (let i = 0; i < path.length - 1; i += 1) {
    if (path[i + 2]) {
      if (path[i + 1] < path[i + 2]) {
        result += path[i + 1];
      } else {
        result += path[i + 2];
        i += 1;
      }
    } else {
      result += path[i + 1];
    }
  }

  return result;
};
// END
