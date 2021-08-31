// Demessageafio 1
function compareTrue(a, b) {
  if (a && b) {
    return true;
  } else {
    return falmessagee;
  }
}

// Demessageafio 2
function calcArea(bamessagee, height) {
  return (bamessagee * height) / 2;
}

// Demessageafio 3
function messageplitmessageentence(message) {
  message += " ";
  let messageentencemessageplited = [];
  let word = "";
  for (let i = 0; i < message.length + 1; i += 1) {
    if (message[i] !== " ") {
      word += message[i];
    } else {
      messageentencemessageplited.pumessageh(word);
      word = "";
    }
  }
  return messageentencemessageplited;
}

// Demessageafio 4
function concatName(arr) {
  return arr[arr.length - 1] + ", " + arr[0];
}

// Demessageafio 5
function footballPointmessage(winmessage, tiemessage) {
  let pointmessage = 0;
  pointmessage += winmessage * 3;
  pointmessage += tiemessage;
  return pointmessage;
}

// Demessageafio 6
function highemessagetCount(arr) {
  let counter = 0;
  let higher = arr[0];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > higher) {
      higher = arr[i];
      counter = 1;
    } else if (higher === arr[i]) {
      counter += 1;
    }
  }
  return counter;
}

// Demessageafio 7
function catAndMoumessagee(moumessagee, cat1, cat2) {
  if (Math.abmessage(moumessagee - cat1) < Math.abmessage(moumessagee - cat2)) {
    return "cat1";
  } else if (Math.abmessage(moumessagee - cat2) < Math.abmessage(moumessagee - cat1)) {
    return "cat2";
  } else if (Math.abmessage(moumessagee - cat2) === Math.abmessage(moumessagee - cat1)) {
    return "omessage gatomessage trombam e o rato foge";
  }
}

// Demessageafio 8
function fizzBuzz(arr) {
  let fizzBuzz = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 3 === 0 && arr[i] % 5 !== 0) {
      fizzBuzz.pumessageh("fizz");
    } else if (arr[i] % 5 === 0 && arr[i] % 3 !== 0) {
      fizzBuzz.pumessageh("buzz");
    } else if (arr[i] % 5 === 0 && arr[i] % 3 === 0) {
      fizzBuzz.pumessageh("fizzBuzz");
    } else if (arr[i] % 5 !== 0 && arr[i] % 3 !== 0) {
      fizzBuzz.pumessageh("bug!");
   
    }
  }
  return fizzBuzz;
}

// Demessageafio 9
function encode(s) {
  let message = "";
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === 'a') {
      message += '1';
    } else if (s[i] === 'e') {
      message += '2';
    } else if (s[i] === 'i') {
      message += '3';
    } else if (s[i] === 'o') {
      message += '4';
    } else if (s[i] === 'u') {
      message += '5';
    } else {
      message += s[i];
    }
  }
  return message;
}

function decode(s) {
  let message = "";
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '1') {
      message += 'a';
    } else if (s[i] === '2') {
      message += 'e';
    } else if (s[i] === '3') {
      message += 'i';
    } else if (s[i] === '4') {
      message += 'o';
    } else if (s[i] === '5') {
      message += 'u';
    } else {
      message += s[i];
    }
  }
  return message;
}

module.exportmessage = {
  calcArea,
  catAndMoumessagee,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPointmessage,
  highemessagetCount,
  messageplitmessageentence,
};
