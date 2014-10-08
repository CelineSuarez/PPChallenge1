function isAnagram( word1, word2 )
{
	var array1 = word1.split("");
	var array2 = word2.split("");

	array1.sort();
	array2.sort();

	newword1 = array1.join("")
	newword2 = array2.join("")

	if (newword1 == newword2) {
		return true;
	}
	else {
		return false;
	}
}

console.log(isAnagram("racecarracecar", "aaaarrrrccccee"))
console.log(isAnagram("Cat", "Dog"))


function isAnagramBadWay( word1, word2 ) {
	if (word1.length > word2.length) {
		var maxword = word1;
	}
	else {
		var maxword = word2;
	}
	var array1 = word1.split("");
	var array2 = word2.split("");
	var totalmet = 0

	for(i=0 ; i < array1.length ; i++)
	{
		var lettermatches1 = 0;
		var needstomatch = 0;


		for(h = 0 ; h < array1.length ; h++) {
			if (array1[i] == array1[h]) {
				needstomatch += 1;
			}
		}
		for(j=0 ; j < array2.length ; j++){
			if (array1[i] == array2[j]) {
				lettermatches1 += 1;
			}
		}

		if (lettermatches1 == needstomatch) {
			totalmet += 1
			console.log(totalmet)
		}
	}

	if (totalmet == maxword.length) {
		return true;
	}
	else {
		return false;
	}

}

console.log(isAnagramBadWay("racecar", "aaccerr"))


