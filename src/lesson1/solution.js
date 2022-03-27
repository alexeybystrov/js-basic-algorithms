// BEGIN (write your solution here)
const findNumberByName = (phonebook, nameToFind, indexAcc = 0) => {
  const midIndex = Math.ceil(phonebook.length / 2) - 1;
  const leftPart = phonebook.slice(0, midIndex + 1);
  const rightPart = phonebook.slice(midIndex + 1);

  if (
    !phonebook[midIndex]
    || (phonebook.length === 1 && phonebook[0].name !== nameToFind)
  ) {
    return null;
  }

  if (nameToFind < phonebook[midIndex].name) {
    return findNumberByName(leftPart, nameToFind);
  }

  if (nameToFind > phonebook[midIndex].name) {
    return findNumberByName(rightPart, nameToFind, indexAcc + leftPart.length);
  }

  return phonebook[midIndex].number;
};

export default findNumberByName;
// END
