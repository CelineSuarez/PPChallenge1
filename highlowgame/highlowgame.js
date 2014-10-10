$(document).ready(function(){
	var answer = (Math.floor(Math.random() * 100) + 1);
	var guesses = 0;
	var num_max_guesses = 4;
	$("#submit1").click(function(){
		var num = $("#number").val();
		
		if (num < answer){
			$("#output").html("higher");
			guesses += 1;
				if (guesses >= num_max_guesses){
					$("#output").append("\nYou lose.");
				}
		}
		else if (num > answer){
			$("#output").html("lower");
			guesses += 1;
				if (guesses >= num_max_guesses){
					$("#output").append("\nNERP. You lose.");
				}
		}
		else {
			$("#output").html("Correct!\nYou used " + guesses + " amount of guesses.");
		}

	});
});