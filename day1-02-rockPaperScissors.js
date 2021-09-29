/*You probably know the game "Rock, paper, scissors" (if you don't, look up the rules and have a couple of games with your neighbour!).

Write a function that announces the result of the game.

Your function `rockPaperScissors` will take two arguments:

- the first is the move of the first player, between `"rock"`, `"paper"` and `"scissors"`
- the second is the move of the second player, between `"rock"`, `"paper"` and `"scissors"`

Your function will print `First player wins` if the first player wins, `Second player wins` if the second player wins, and `Draw` if nobody wins.


Here are a few test cases:

Test:   rockPaperScissors("rock", "rock")
Output: 
```Draw
```

Test:   rockPaperScissors("rock", "paper")
Output: 
```Second player wins
```

Test:   rockPaperScissors("rock", "scissors")
Output: 
```First player wins
```

Test:   rockPaperScissors("paper", "scissors")
Output: 
```Second player wins
``*/
function rockPaperScissors(first = "rock" || "paper" || "scissors",second = "rock" || "paper" || "scissors") {
    if(first === "rock" && second === "scissors"){
     console.log("First player wins");
    }
    else if(first === "paper" && second === "scissors" ) {
        console.log("Second player wins");
    }
    else if(first === "rock" && second === "paper"){
        console.log("Second player wins");
    }

    else if (first === "rock" && second === "rock"){
      console.log("Draw");
    }

    else if (first === "paper" && second === "paper"){
        console.log("Draw");
      }

      else if (first === "scissors" && second === "scissors"){
        console.log("Draw");
      }
} 

 rockPaperScissors("rock","paper");
 rockPaperScissors("scissors","scissors");