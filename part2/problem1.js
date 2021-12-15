var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var firstpart = alphabet.substring(0,13).split('');
var secondpart = alphabet.substring(13).split('').reverse();
var button = document.getElementById("button");
var solution = '';

button.onclick = function() {
var b = document.getElementById("text").value.split('');

for (var i = 0 ; i < b.length; i++) {
 if (firstpart.indexOf(b[i]) !== -1) {
   solution += secondpart[firstpart.indexOf(b[i])];
 } else {
   solution += firstpart[secondpart.indexOf(b[i])];
  }
}
console.log(solution);

solution = '';
}