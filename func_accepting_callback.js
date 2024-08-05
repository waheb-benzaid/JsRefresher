const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

const upperFirstWord = (str) => {
  const [firstWord, ...otherWords] = str.split(" ");
  return [firstWord.toUpperCase(), otherWords].join(" ");
};

const transformer = function (str, fn) {
  console.log(`str before the transformation ${str}`);
  console.log(`Transformed string ${fn(str)}`);
  console.log(`Transformed ${fn.name}`);
};

transformer("hello world from firas", upperFirstWord);
