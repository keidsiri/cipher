const sentence = prompt("Please enter the sentence: ");
console.log(sentence);

function firstAndLast(string) {
  return (string[0] + string.slice(-1)).toUpperCase();
}

function reverse(string) {
  return string.split("").reverse().join("");
}

function middleChar(string) {
  return string.charAt(Math.floor(string.length / 2));
}

function cipher(string) {
  return reverse(middleChar(string) + string + reverse(firstAndLast(string)));
}

cipher = cipher(sentence);
console.log(cipher)

$(document).ready(function() {
  $("#original").click(function() {
    alert(sentence);
  });

  $("#cipher").click(function() {
    alert(cipher);
  });
})