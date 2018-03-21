$(document).ready(initApp);

function initApp() {
	controller = new Controller();
	view = new View();
	$('#submit').on('click', view.getUserAnswers);	
}

function addClickHandler(argument) {
}

class Controller {
	constructor() {
		this.answer = ['B', 'D', 'B', 'D','C', 'D', 'A','C'];
	}
	
	compareAnswers(inputArr){
		var correctCounter = 0;
		for (var i = 0; i < inputArr.length; i++) {
			if(inputArr[i] === this.answer[i])
				correctCounter++;
		}
		console.log('correctCounter', correctCounter);
		view.displayScore(correctCounter/this.answer.length);
	}
}





