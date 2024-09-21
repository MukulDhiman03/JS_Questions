// Write logic to get unique objects from below array ? I/P: [{name: "sai"},{name:"Nang"},{name: "sai},{name:"Nang"},{name: "111111"}]; O/P: [{name: "sai"},{name:"Nang"}{name: "111111"}]

function getUnique(arr) {
  const seen = new Set();
  return arr.filter((obj) => {
    if (!seen.has(obj.name)) {
      seen.add(obj.name);
      return true;
    }
    return false;
  });
}

const arr = [
  { name: "sai" },
  { name: "Nang" },
  { name: "sai" },
  { name: "Nang" },
  { name: "111111" },
];

const uniqueArr = getUnique(arr);
console.log(uniqueArr);
