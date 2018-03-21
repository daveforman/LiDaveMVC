Class View {
    constructor(){

    }
        
    getCheckedValue( radioName ){
        var radios = document.getElementsByName( radioName ); // Get radio group by-name
        for(var y=0; y<radios.length; y++)
          if(radios[y].checked) return radios[y].value; // return the checked value
    }

     displayScore(result) {
        if(result >= 70){
            console.log("You can be our friend!")
        } else {
            console.log("You need to keep studying to be our friend!")
        }
      }
    
}

