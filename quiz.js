
console.log('Results will display below.');

var button = document.getElementById("button");
var height = document.getElementById('height');
  var char = document.getElementById('char');
// Assign a function to be executed when the button is clicked
button.addEventListener("click", starterFunction);
height.addEventListener("keydown", checkKey);
char.addEventListener("keydown", checkKey);

function checkKey(e){
  if(e.keyCode == 13) {starterFunction();}
}

//get inputs and call tree function
function starterFunction(){

  //get input data
  heightVal = height.value;
  charVal = char.value;

  //alert that fields need a value
  if(heightVal.length === 0) {
    alert('Please input a height.\n(Default 10 has been used.)');
  }

  if(charVal.length === 0) {
    alert('Please input a character.\n(Default * has been used.)');
  }

  console.log('-------------------------------------');

  //validate input data
  if(isNaN(parseInt(heightVal))){
    console.warn('Height 10 was used as default because no number was provided.');
    heightVal = 10;
  }

  if(charVal.length > 1){
    console.warn('Only one character is allowed and first one submitted was used.');
    charVal = charVal.toString().charAt(0);
  }else if(char.length === 0){
    console.warn('Default * character was used.');
    charVal = '*';
  }

  console.log('height used: ', heightVal);
  console.log('characted used: ', charVal);

  console.log('-------------------------------------');

  var obj = {
              'height': heightVal,
              'character': charVal
            };

  //call function to create the tree
  createTree(obj);

  document.getElementById('height').value = "";
  document.getElementById('char').value = "";
}


//tree creation function
function createTree(obj){
  var spaces = Array(parseInt(obj.height)).join(" ");
  var letters = obj.character;
  var double = letters + letters;


  for(var i = obj.height; i > 0; i--){

    console.log(spaces, letters);

    letters += double;
    spaces = spaces.replace(" ","");
  }
  console.log(obj);

}
