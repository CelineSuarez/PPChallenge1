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


function isAnagramBadWay( word1, word2 ) {
	var array1 = word1.split("");
	var array2 = word2.split("");
	var status = false;
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
			status = true;
			lettermatches1 += 1;
		}
	}

	if (status == true) {
		return true;
	}
	else {
		return false;
	}

}

console.log(isAnagramBadWay("racecarracecar", "aaaarrrrccccee "))