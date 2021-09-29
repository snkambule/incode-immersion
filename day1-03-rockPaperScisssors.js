function rockPaperScissors(first = "rock" || "paper" || "scissors",second = "rock" || "paper" || "scissors") {
    if(first === "rock" && second === "scissors"){
     console.log("First player wins");
    }
    else if(first === "paper" && second === "scissors" ) {
        return "Second player wins" ;
    }
    else if(first === "rock" && second === "paper"){
        return "Second player wins" ;
    }

    else if (first === "rock" && second === "rock"){
      return "Draw";
    }

    else if (first === "paper" && second === "paper"){
        return "Draw";
      }

      else if (first === "scissors" && second === "scissors"){
        return "Draw" ;
      }

      else {
        return "Argument error" ;
      }
} 

rockPaperScissors("glue","paster");
rockPaperScissors("rock","paper");
