import findNumberByName from '../../src/lesson1/solution.js';

const phonebook = [
  { name: 'Alex Bowman', number: '48-2002' },
  { name: 'Aric Almirola', number: '10-1001' },
  { name: 'Bubba Wallace', number: '23-1111' },
  { name: 'Chase Elliott', number: '9-9900' },
  { name: 'Denny Hamlin', number: '11-0022' },
  { name: 'John Logano', number: '22-2299' },
  { name: 'Kevin Harvick', number: '4-1154' },
  { name: 'Kyle Busch', number: '18-3002' },
  { name: 'Kyle Larson', number: '5-2234' },
  { name: 'Matt Dibenedetto', number: '21-1102' },
];

it('findNumberByName empty collection', () => {
  expect(findNumberByName([], 'None')).toEqual(null);
});

it('findNumberByName non-exist name', () => {
  expect(findNumberByName(phonebook, 'None')).toEqual(null);
  expect(findNumberByName(phonebook, '123')).toEqual(null);
});

it('findNumberByName searching', () => {
  expect(findNumberByName(phonebook, 'Denny Hamlin')).toEqual('11-0022');
  expect(findNumberByName(phonebook, 'Chase Elliott')).toEqual('9-9900');
  expect(findNumberByName(phonebook, 'Alex Bowman')).toEqual('48-2002');
  expect(findNumberByName(phonebook, 'Matt Dibenedetto')).toEqual('21-1102');
  expect(findNumberByName(phonebook, 'Kyle Larson')).toEqual('5-2234');
  expect(findNumberByName(phonebook, 'Kevin Harvick')).toEqual('4-1154');
  expect(findNumberByName(phonebook, 'Kyle Busch')).toEqual('18-3002');
});

it('findNumberByName searching2', () => {
  const coll = phonebook.slice(0, 2);
  expect(findNumberByName(coll, 'Alex Bowman')).toEqual('48-2002');
  expect(findNumberByName(coll, 'Aric Almirola')).toEqual('10-1001');
});
