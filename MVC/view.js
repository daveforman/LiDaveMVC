<<<<<<< HEAD
///Example from stack 


class View {
    constructor(){
        this.userAnswers =[];
    }
        
    getUserAnswers(){
        var radios = document.getElementsByName( "question"+y ); // Get radio group by-name
        for(var y=0; y<radios.length; y++){}
          if(radios[y].checked){ 
              this.userAnswers.push(radios[y]);
          }
          controller.compareAnswers(this.userAnswers);
    }
    
    getScore(){
        for (var i=0; i<this.userAnswers.length; i++)
        if(getCheckedValue("question"+i)===answers[i]) score += 1; // increment only
        
  }

     displayScore(result) {
        if(result >= .7){
            console.log("You can be our friend!")
        } else {
            console.log("You need to keep studying to be our friend!")
        }
      }
    
}


