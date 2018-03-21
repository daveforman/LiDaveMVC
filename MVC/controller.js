$(document).ready(initApp);

function initApp() {
	var controller = new Controller();
	$	
}

function addClickHandler(argument) {
	// body...
}

class Controller {
	constructor() {
		this.answer = [
			'A', 'C', 'B'
		]
	}
	
	compareAnswer(inputArr){
		var correctCounter = 0;
		for (var i = 0; i < inputArr.length; i++) {
			if(inputArr[i] === this.answer[i])
				correctCounter++;
		}
		return correctCounter/this.answer.length
	}

	decideViewOutput(userAnswer){
		if (compareAnswer(userAnswer) >= 0.7) {
			view.displayWin();
		} else {
			view.displayLoss();
		}
	}
}





// function returnScore(result){
//   alert("Your score is "+ getScore() +"/"+ tot);

// }