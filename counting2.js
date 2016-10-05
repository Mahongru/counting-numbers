function countingIndex(object) {

  object = object.split("");
  var indexObject = {};

  for (var i = 0; i < object.length; i++) {
    var obKey = object[i];
    var keyIdx = i.toString();

    if (indexObject[obKey]) {
      indexObject[obKey] = indexObject[obKey] + ", " + i.toString();

    } else {
      indexObject[obKey] = keyIdx;
    }

  }

  return indexObject;

}

var index = "lighthouse in the house";

console.log(countingIndex(index));
