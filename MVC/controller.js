$(document).ready(initApp);

function initApp() {
	var controller = new Controller();
	var view = new View();
	$('#submit').on('click', view.getUserAnswers);	
}

function addClickHandler(argument) {
	// body...
}

class Controller {
	constructor() {
		this.answer = ['A', 'C', 'B']
	}
	
	compareAnswers(inputArr){
		var correctCounter = 0;
		for (var i = 0; i < inputArr.length; i++) {
			if(inputArr[i] === this.answer[i])
				correctCounter++;
		}
		view.displayScore(correctCounter/this.answer.length);
	}
}





// function returnScore(result){
//   alert("Your score is "+ getScore() +"/"+ tot);

// }