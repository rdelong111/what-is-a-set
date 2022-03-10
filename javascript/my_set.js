class MySet {
  // throw an error if called with anything other than string, array or nothing
  // if an iterable is provided only its unique values should be in data
  // strings and arrays will need to be broken down by their elements/characters
  constructor(iterable) {
    this.data = {};
    if (iterable) {
      if (Array.isArray(iterable) || typeof iterable === 'string') {
        for (const single of iterable) {
          if (!(single in this.data)) {
            this.data[single] = true;
          }
        }
      }
      else {
        throw Error('Error');
      }
    }
  }

  // return number of elements in MySet
  size() {
    return Object.keys(this.data).length;
  }

  // add an item to MySet as is
  // don't worry about arrays here!
  // return the MySet instance
  add(item) {
    if (!(item in this.data)) {
      this.data[item] = true;
    }
    return this;
  }

  // delete an item from MySet
  // don't worry about arrays here!
  // return true if successful, otherwise false
  delete(item) {
    if (item in this.data) {
      delete this.data[item];
      return true;
    }
    else {
      return false;
    }
  }

  // return true if in MySet, otherwise false
  // don't worry about arrays here!
  has(item) {
    if (item in this.data) {
      return true;
    }
    else {
      return false;
    }
  }

  // return data as an array
  // don't worry about arrays here!
  entries() {
    return Object.keys(this.data);
  }
}

if (require.main === module) {
  // add your own tests in here
  
}

module.exports = MySet;

