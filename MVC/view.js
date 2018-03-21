class View {
    constructor(){
        this.userAnswers =[];
    }
        
    getUserAnswers(){
        for(var y=0; y<radios.length; y++){}
        var radios = document.getElementsByName( "question"+y )
          
          controller.compareAnswers(this.userAnswers);
    }
    
    getScore(){
        for (var i=0; i<this.userAnswers.length; i++)
        if(getCheckedValue("question"+i)===answers[i]) score += 1; // increment only
        
  }

     displayScore(result) {
        if(result >= .7){
            console.log("You can be our friend!")
            $( ".result" ).text("You can be our friend").addClass("friend");
        } else {
            console.log("You need to keep studying to be our friend!")
            $( ".result" ).text("You failed! You need to keep studying to be our friend!").addClass("notFriend");
        }
      }
    
}



