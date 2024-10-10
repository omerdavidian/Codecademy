// Write your code here:
const dogFactory = (name, breed, weight) => {
  return {
    _name: name,
    _breed: breed,
    _weight: weight,
    get name() {
      return this._name;
    },
    get breed() {
      return this._breed;
    },
    get weight() {
      return this._weight;
    },
    set name(dogName) {
      if (typeof dogName === "string") {
        this._name = dogName;
      } else {
        console.log("Must be a string");
      }
    },
    set breed(dogBreed) {
      if (typeof dogBreed === "string") {
        this._breed = dogBreed;
      } else {
        console.log("Must be a string");
      }
    },
    set weight(dogWeight) {
      if (typeof dogWeight === "number") {
        this._weight = dogWeight;
      } else {
        console.log("Must be a number");
      }
    },
    bark() {
      return "ruff! ruff!";
    },
    eatTooManyTreats() {
      return this._weight++;
    },
  };
};

// Create an instance of the dog
const myDog = dogFactory("ari", "labrador", 45);
console.log(`initial weight is: ${myDog.weight}`);
myDog.eatTooManyTreats();
myDog.eatTooManyTreats();
myDog.eatTooManyTreats();
myDog.eatTooManyTreats();
console.log(`And after all those treats: ${myDog.weight}`);

for (let key in myDog) {
  if (typeof myDog[key] !== "function" && key[0] !== "_") {
    console.log(myDog[key]);
  }
}
