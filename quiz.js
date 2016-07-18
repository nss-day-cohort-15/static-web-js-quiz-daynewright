
console.log('Results will display below.');

var button = document.getElementById("button");
// Assign a function to be executed when the button is clicked
button.addEventListener("click", tree);

function checkKey(e){
  if(e.keyCode == 13) {tree();}
}

//main function for calculation
function tree(){
  console.log('-------------------------------------');


  //get input data
  var height = document.getElementById('height').value;
  var char = document.getElementById('char').value;


  //validate input data
  if(isNaN(parseInt(height))){
    console.warn('Height 10 was used as default because no number was provided.');
    height = 10;
  }

  if(char.length > 1){
    console.warn('Only one character is allowed and first one submitted was used.');
    char = char.toString().charAt(0);
  }else if(char.length === 0){
    console.warn('Default * character was used.');
    char = '*';
  }

  console.log('height used: ', height);
  console.log('characted used: ', char);


  console.log('-------------------------------------');



  document.forms["form"].reset();
}
