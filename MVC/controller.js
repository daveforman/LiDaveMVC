$(document).ready(initApp);

function initApp() {
	controller = new Controller();
	view = new View();
	addClickHandler();
}

function addClickHandler() {
	$('#submit').on('click', view.getUserAnswers);	
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





