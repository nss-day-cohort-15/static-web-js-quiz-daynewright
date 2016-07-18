
console.log('Click submit and see the results below.');

var button = document.getElementById("button");
// Assign a function to be executed when the button is clicked
button.addEventListener("click", calculateTree);

function calculateTree(){
  var height = document.getElementById('height').value;
  var char = document.getElementById('char').value;

  if(isNaN(parseInt(height))){
    console.warn('Height 10 was used as default because no number was provided.');
    height = 10;
  }

  if(char.length > 1){
    console.warn('Only one character is allowed and first one submitted was used.');
    char = char.toString().charAt(0);
  }

  console.log(height)
  console.log(char);

  document.forms["form"].reset();

}
