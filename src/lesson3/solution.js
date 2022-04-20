import _ from 'lodash';

// BEGIN (write your solution here)
export default (items, maxVolume) => {
  let usedVolume = 0;

  return _.sortBy(items, 'cost')
    .reverse()
    .reduce((acc, item) => {
      if ((usedVolume + item.weight) <= maxVolume) {
        acc.push(item.name);
        usedVolume += item.weight;
      }

      return acc;
    }, [])
    .sort();
};
// END
