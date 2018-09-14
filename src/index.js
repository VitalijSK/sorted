class Sorter {
  constructor() {
    this.array = [];
    this.compare = (a,b) => a - b ;
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array.map(elem => elem);
  }

  sort(indices) {
    const tempArray = indices.sort( (a,b)=> a - b)
        .map( (elem) => {
        return this.array[elem];
    })
    const sortElements = tempArray.sort( this.compare );
    indices.forEach( (elem, i) => {
        this.array[elem] = sortElements[i];
    })                 
  }
  setComparator(compareFunction) {
    this.compare = compareFunction;
  }
}

module.exports = Sorter;