'use strict';


// Enumeration dictionary
const asEnumeration = dictionary => {
  return Object.freeze({
    fromValue: value => {
      if (dictionary[value]) {
        return dictionary[value];
      }
      throw Error(`Invalid enumeration value ${value}`);
    },
  });
};

// We want to somehow take the object as is, run through an object.keys and then through each key determine an update type and do it.
// but there are just chances that it could need it to be done at the same time so it's not making too many db calls.
// we want the update object to be run at the same time and then and association setters done at the same time.


const updateInstance = record => console.log('update record', record);
function updateAssociations(record) {
  console.log(this);
  return { ...record, updated: true };
};
const updateManyAssociations = record => console.log('update record', record);

const recordValidation = record => ['memorability', 'quote', 'loveHate', 'gender', 'age', 'location'].includes(record);

const responseUpdater = asEnumeration({
  instance: {
    setResponse: updateInstance,
    validate: recordValidation,
  },
  singleAssociation: {
    setResponse: updateAssociations,
    validate: ['associatedWord', 'brandMeasurement'],
  },
  manyAssociation: {
    setResponse: updateManyAssociations,
    validate: ['ctas'],
  },
});

const updateType = type => responseUpdater.updateType(type);
const validateRecord = type => responseUpdater.updateType(type);

const setResponse = (type, record) => updateType(type).setResponse(record);

const validate = (type, record) => validateRecord(type).validate(record)

// ok, so what we need is another sequence of functions that take the req object,
// create an array of objects with their update type and the object to update
// and then the array can be passed through a promise.all with a map and each map just calls the setResponse function.
console.log(setResponse('singleAssociation', { memorability: 'hello' }));
console.log(validate('instance', 'quote'));


const getUpdateType = type => fromValue(type).validate(type)

const defineUpdateType = body => {
  return Object.keys(body).reduce((update, entry) => {
    const updateType = getUpdateType(entry)
  }, {});
};


// mount determinedfunctions on object
const numbersEnumeration = asEnumeration({
  even: {
    getSequence: getEvenNumbers,
  },
  odd: {
    getSequence: getOddNumbers,
  },
});

// 3 functions to determine how to build a list of numbers matching condition.
const getEvenNumbers = limit => includeIfConditionIsMet(limit, number => number % 2 === 0);

const getOddNumbers = limit => includeIfConditionIsMet(limit, number => number % 2 !== 0);

// This function isnt relevant beccause it builds an array and we want to adjust this for database updates.
const includeIfConditionIsMet = (limit = 10, predicate) => {
  return (function inner(array, number) {
    if (number === limit) {
      return array;
    }
    return inner(predicate(number) ? [...array, number] : array, number + 1);
  })([], 1);
};

// Define functions to be called.
const fromValue = type => numbersEnumeration.fromValue(type);

const getSequence = type => fromValue(type).getSequence(10);

console.log(getSequence('even'));
