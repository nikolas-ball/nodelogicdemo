//Node Average Exersize
//Average Grade

//the function average should take a single parameter
//that parameter being an array of test sccores (all numbers)
//It should return the average score in the array, rounded to the nearest whole number

function average(scores){
	//add all scores together
	var total = 0;
	scores.forEach(function(score){
		total += score;
	});
	//divide by total number of scores
	var avg = total/scores.length
	//lastly, round the average
	return Math.round(avg);
	
}

console.log("average score for class one:");
var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores)); //should return 94

console.log("average score for class two:");
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2)); //should return 68