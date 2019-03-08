var storedList = [];
function sortList(listArr) {
  return listArr.sort(function (a, b) { return a - b })
}

function storeNumber (num) {
  if (typeof num === 'number') {
    storedList.push(num);
  } else {
    console.log("Please provide a valid number - element '" + num + "' not added to array.");
  }
  return sortList(storedList);
};


module.exports = {
  storeNumber : storeNumber
}