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
    compareDNA(otherOrganism) {
      let matches = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherOrganism.dna[i]) {
          matches++;
        }
      }
      const similarity = ((matches / this.dna.length) * 100).toFixed(2);
      console.log(`specimen #2 have ${similarity}% DNA in common`);
    },
  };
};

const newOrganism1 = pAequorFactory(1, mockUpStrand());
const newOrganism2 = pAequorFactory(2, mockUpStrand());
// console.log(newOrganism1.dna);
// console.log(newOrganism2.dna);
newOrganism1.compareDNA(newOrganism2);
