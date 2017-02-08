var buildArray = function(){
    var i,ival ;
    var list = new Array();
    for (i = 0; i < 65536; i++){
		ival = Math.floor(Math.random()*256);
		list[i] = ival;
    }
    return list;
}
var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
	var guess;
	var i = 1;
   
	while(min <= max) {
		  guess = Math.floor((max + min) / 2);
		  if (array[guess] === targetValue) {
				 console.log("Total guesses " +i);
				 return guess;
		  }
		  else if (array[guess] < targetValue) {
				min = guess + 1;
		  }
		  else {
				max = guess - 1;
		  }
		  i++;
		  console.log("Guess " + guess);
	  }
	  
		  return -1;
}
var thelist = buildArray(100);
console.log("Before Search");
console.log(thelist);
thelist.sort(function(a, b){return a-b});
thelist.sort();
console.log("After Search");

var searchValue = Math.floor(Math.random()*256);
var result = doSearch(thelist, searchValue);
console.log("Found value" +searchValue+" at index " + result);

