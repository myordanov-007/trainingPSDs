const form = document.getElementById("contact-form1");
const msgContainer = document.getElementsByClassName("error-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  function getPatternString(n = Number(userInput.value), numberOfLetters = 1) {
  // create an Array of Arrays the size of a single M
  var oneLetter = createGrid(n * 5, n + 1);
  // start from the bottom left corner, going up
  var x = 0, y = n, goingUp = true;
  // While x is not at its maximum value
  while (x <= n * 5 - n) {
    // Replace the n characters at index x with '*'
    oneLetter[y].splice(x, n, ...new Array(n).fill('*'));
    // Change direction if needed (up or down)
    if ((y === n && !goingUp) || (y === 0 && goingUp)) { 
      goingUp = !goingUp; 
    }
    x++;
    y+= goingUp ? -1 : 1;
  }
  //have to transform the array into string
  return oneLetter.map(row => loopStr(row.join(''), numberOfLetters)).join('\n');
}
//create an grid only with '-'
function createGrid(x, y) {
  return new Array(y).fill(null).map(function() {
    return new Array(x).fill('-');
  });
}


function loopStr(str, n) {
  return new Array(n).fill(str).join('');
}
// checks for correct input
 if(userInput.value % 2 === 0) // if the entered number is even
  {
    alert ('The number has to be odd');
  }
  else if (2 > userInput.value || userInput.value > 10000) // if the entered number is out of the range
  {
    alert ('The number has to be bigger than 2 and smaller than 10000');
  } else{
    console.log(getPatternString(undefined, 2)); // visualization of the logo
  }

});


//validation on the input field - the user can enter only digits from the keyboard
$( document ).ready( function() { 
  $("#userInput").keypress(function(event){
      var ew = event.which;
      if(48 <= ew && ew <= 57)
          return true; 
      return false;
  });
});

