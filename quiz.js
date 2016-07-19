
console.log('Results will display below.');

var button = document.getElementById("button");
// Assign a function to be executed when the button is clicked
button.addEventListener("click", starterFunction);

function checkKey(e){
  if(e.keyCode == 13) {starterFunction();}
}

//get inputs and call tree function
function starterFunction(){

  //get input data
  var height = document.getElementById('height').value;
  var char = document.getElementById('char').value;

  //alert that fields need a value
  if(height.length === 0) {
    alert('Please input a height.\n(Default 10 has been used.)');
  }

  if(char.length === 0) {
    alert('Please input a character.\n(Default * has been used.)');
  }

  console.log('-------------------------------------');

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

  var obj = {
              'height': height,
              'character': char
            };

  //call function to create the tree
  createTree(obj);

  document.forms["form"].reset();
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
