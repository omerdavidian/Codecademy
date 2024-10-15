// Returns a random DNA base
const returnRandBase = (exclude = null) => {
  const dnaBases = ["A", "T", "C", "G"];
  //if exclude exist then return an array without excluded element. otherwise keep original array
  const filteredBases = exclude
    ? dnaBases.filter((base) => base !== exclude)
    : dnaBases;
  //filteredBases could be 4 element or 3 element if exclude exist.
  return filteredBases[Math.floor(Math.random() * filteredBases.length)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, dnaArr) => {
  return {
    specimenNum: num,
    dna: dnaArr,
    mutate() {
      console.log(dnaArr);
      const cellNum = Math.floor(Math.random() * 15);
      console.log(`cell possition muteted: ${cellNum}`);
      const cellBase = dnaArr[cellNum];
      console.log(`old dnaBase: ${cellBase}`);
      //exclude the old cell dnaBase from the new random dnaBase
      dnaArr[cellNum] = returnRandBase(cellBase);
      console.log(`new cell dana: ${dnaArr[cellNum]}`);
      return dnaArr;
    },
  };
};

const newOrganism = pAequorFactory(1, mockUpStrand());

console.log(newOrganism.mutate());
