function priceChecker(){
		var people=parseInt(prompt("How many people are traveling?"));
		var season=prompt("Which season do you wish to travel?");
		if(season=="Spring" || season=="spring"){
			if(people<=5 && people>0){
				alert("The price is 500 euro per person!");
			}
			else if(people>5){
				alert("The price is 400 euro per person!");
			}
			else{
				alert("You did not enter an appropriate number");
			}
		}
		else if(season=="Autumn" || season=="autumn"){
			if(people<=5 && people>0){
				alert("The price is 500 euro per person!");
			}
			else if(people>5){
				alert("The price is 400 euro per person!");
			}
			else{
				alert("You did not enter an appropriate number");
			}
		}
		else if(season=="Summer" || season=="summer"){
			if(people<=5 && people>0){
				alert("The price is 500 euro per person!");
			}
			else if(people>5){
				alert("The price is 400 euro per person!");
			}
			else{
				alert("You did not enter an appropriate number");
			}
		}
		else if(season=="Winter" || season=="winter"){
			if(people<=5 && people>0){
				alert("The price is 500 euro per person!");
			}
			else if(people>5){
				alert("The price is 400 euro per person!");
			}
			else{
				alert("You did not enter an appropriate number");
			}
		}
		
		else{
			alert("Season not recognised. Check your spelling!");
		}
		}