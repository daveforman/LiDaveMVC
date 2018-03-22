class View {
    constructor(){
        this.userAnswers =[];
        this.length = 8;
        this.getUserAnswers = this.getUserAnswers.bind(this);
    }
        
    getUserAnswers(){
        for(var i=0; i<this.length; i++){
          var radio = $(`input[name ='question${i}']:checked`);
      	  console.log('the index now is:', i);
      	  console.log('radio right now is:', radio.val());
      	  this.userAnswers.push(radio.val());
        }
        console.log('The answer array is:',this.userAnswers);
        controller.compareAnswers(this.userAnswers);
    }
    
    displayScore(result) {
      console.log('The result is',result);
      if(result >= .7){
          console.log("You can be our friend!")
          $( ".result" ).text("Yay! You can be our friend!").addClass("friend");
      } else {
          console.log("You need to keep studying to be our friend!")
          $( ".result" ).text("You failed! You need to keep studying to be our friend!").addClass("notFriend");
      }
    }
}


