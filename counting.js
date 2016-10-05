function countingLetters(object) {

  object = object.split(" ").join("");
  object = object.split("");
  var letter = {};

  for (var i = 0; i < object.length; i++) {
    if (letter[object[i]]) {
      letter[object[i]] += 1;

    } else {
      letter[object[i]] = 1;
    }

  }

  return letter;

}

countingLetters("lighthouse in the house");
