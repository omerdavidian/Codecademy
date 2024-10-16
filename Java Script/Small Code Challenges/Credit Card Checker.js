// All valid credit card numbers
//              8     6     3     5     0     0     3     0
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Add your functions below:
const validateCred = (arr) => {
  let sumOddDigits = 0;
  let sumEvenDigits = 0;
  //   console.log(`length of array: ${arr.length}`);

  // Add odd-indexed digits (starting from the right)
  for (let i = arr.length - 1; i >= 0; i -= 2) {
    sumOddDigits += arr[i];
  }

  // Add even-indexed digits, applying the doubling and adjustment
  for (let j = arr.length - 1; j > 0; j -= 2) {
    let temp = arr[j - 1] * 2;
    if (temp < 10) {
      sumEvenDigits += temp;
    } else {
      sumEvenDigits += temp - 9;
    }
  }
  /*
  console.log(`Sum of Odd numbers from the right: ${sumOddDigits}`);
  console.log(`Sum of Even numbers from the right: ${sumEvenDigits}`);
  console.log(`Total of numbers: ${sumEvenDigits + sumOddDigits}`);
*/
  return (sumEvenDigits + sumOddDigits) % 10 === 0;
};

// console.log(validateCred(invalid4));

//check through the nested array for which numbers are invalid, and return another nested array of invalid cards
const findInvalidCards = (arr) => {
  let invalidCards = [];
  for (let card of arr) {
    if (validateCred(card) === false) {
      invalidCards.push(card);
    }
  }
  return invalidCards;
};

const invalidCards = findInvalidCards(batch);
// console.log(invalidCards)

const idInvalidCardCompanies = (arr) => {
  let companies = [];

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i][0]);
    switch (arr[i][0]) {
      case 3:
        // console.log("Amex");
        if (companies.indexOf("Amex") === -1) {
          companies.push("Amex");
        }
        break;
      case 4:
        // console.log("Visa");
        if (companies.indexOf("Visa") === -1) {
          companies.push("Visa");
        }

        break;
      case 5:
        // console.log("Mastercard");
        if (companies.indexOf("Mastercard") === -1) {
          companies.push("Mastercard");
        }

        break;
      case 6:
        // console.log("Discover");
        if (companies.indexOf("Discover") === -1) {
          companies.push("Discover");
        }

        break;
      default:
        console.log("Company not found");
    }
  }
  console.log(companies);
};

// idInvalidCardCompanies(invalidCards);

//string to an array
const stringToArray = (str) => {
  return str.split("");
};
// console.log(stringToArray("6541859724573654"));

//invalid number to valid number
const fixToValid = (arr) => {
  if (validateCred(arr) === false) {
    // console.log("Invalid");
    let sumOddDigits = 0;
    let sumEvenDigits = 0;
    //   console.log(`length of array: ${arr.length}`);

    // Add odd-indexed digits (starting from the right)
    for (let i = arr.length - 1; i >= 0; i -= 2) {
      sumOddDigits += arr[i];
    }

    // Add even-indexed digits, applying the doubling and adjustment
    for (let j = arr.length - 1; j > 0; j -= 2) {
      let temp = arr[j - 1] * 2;
      if (temp < 10) {
        sumEvenDigits += temp;
      } else {
        sumEvenDigits += temp - 9;
      }
    }
    let total = (sumEvenDigits + sumOddDigits) % 10;
    console.log(`remainder: ${total}`);
    if (arr[arr.length - 1] - total >= 0) {
      arr[arr.length - 1] -= total;
    } else {
      arr[arr.length - 1] += 10 - total;
    }
    return arr;
  }
};

//invalid numbers to check
const invalidNumberToCheck = invalid3;

//an invalid number
console.log(invalidNumberToCheck);

//test for the invalid number
console.log(validateCred(invalidNumberToCheck));

//fix the number and insert into fixedNumber
let fixedNumber = fixToValid(invalidNumberToCheck);

//the new fixed number:
console.log(fixedNumber);

//test for the new number
console.log(validateCred(fixedNumber));
