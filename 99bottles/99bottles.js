var limit = prompt("How many bottles of beer are on the wall?")

function chorus(number){
	console.log( (number + " of bottles of beer on the wall, " + number + " of bottles of beer!  Take one down, pass it around, " + (number-1) + " bottles of beer on the wall!"))
}
function specialchorus(smalln){
			console.log( smalln + " bottle of beer on the wall, " + smalln + " bottle of beer! Take it down, pass it around " + (smalln-1) + " bottle of beer on the wall.");
		}
for(i = limit; i > 0; i--){
	if (i <=1) {
		specialchorus(i);	
		      }
	else chorus(i);
}