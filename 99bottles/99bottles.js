var limit = prompt("How many bottles of beer are on the wall?")

function chorus(number){
	return (number + " of bottles of beer on the wall, " + number + " of bottles of beer!  Take one down, pass it around, " + (number-1) + "bottles of beer on the wall!")
}
for(i = limit; i >= 0; i--){
	chorus(i);
}