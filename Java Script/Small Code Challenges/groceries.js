/*
Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.

Examples:

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'

groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'

groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'
*/
// listItems = [
//   { item: "Carrots" },
//   { item: "Hummus" },
//   { item: "Pesto" },
//   { item: "Rigatoni" },
// ];

/*
const groceries = (arr) => {
  let list = [];

  arr.forEach((a) => {
    list.push(a.item);
  });

  if (list.length === 1) {
    console.log(list[0]);
  } else {
    let string = "";
    for (let i = 0; i < list.length - 2; i++) {
      string = string.concat(list[i] + ", ");
    }
    string = string.concat(
      list[list.length - 2] + " and " + list[list.length - 1]
    );

    console.log(string);
  }
};

// groceries(listItems);

groceries([{item: 'Lettuce'}, {item: 'Onions'}, {item: 'Tomatoes'}])
*/

const groceries = (arr) => {
  const list = arr.map((a) => a.item);

  if (list.length === 1) {
    console.log(list[0]);
  } else {
    const lastItem = list.pop();
    console.log(`${list.join(", ")} and ${lastItem}`);
  }
};

groceries([{ item: "Lettuce" }]);
