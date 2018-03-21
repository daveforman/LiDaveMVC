
class View {
    constructor(){
        this.userAnswers =[];
        this.length = 8;
        this.getUserAnswers = this.getUserAnswers.bind(this);
    }
        
    getUserAnswers(){
        for(var i=0; i<this.length; i++){
          var radio = $('input[name =question' + i + ']' ).val();
          console.log(radio);
          this.userAnswers.push(radio);
        }
        console.log(radio.val());
        controller.compareAnswers(this.userAnswers);
    }
    
	 displayScore(result) {
	    if(result >= .7){
	        console.log("You can be our friend!")
	    } else {
	        console.log("You need to keep studying to be our friend!")
	    }
	  }
    
}


