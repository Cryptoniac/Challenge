
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "Not Found";
  }
}

// Test your code by modifying these values
checkObj("gift");

// Different ways to archieve the same result
// Setup
var myObj = {
gift: "pony",
pet: "kitten",
bed: "sleigh"
};

function checkObj(checkProp) {
// Your Code Here
if(myObj.hasOwnProperty(checkProp)){
return myObj[checkProp];
}
else if(myObj.hasOwnProperty(checkProp) !== true){
return "Not Found";
}
else{
return "Change Me!";
}
}

// Test your code by modifying these values
checkObj("gift");