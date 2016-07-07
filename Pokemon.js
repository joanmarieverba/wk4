// write a class/Constructor
// called Pokemon() that has
//
// - an init method
// - a reader method
// - a private variable
// - and a static method

// -------- BONUS
// write it a second way
// with ES6

function Pokemon(){
    init: "name";
    reader: "text";
    function characteristics(){
      size()  //private method
    }

};

//static method
Pokemon.new = function(){
  return new Pokemon();
}
