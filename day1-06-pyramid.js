/*Write a function `pyramid` that takes the size of the base as argument, and draws a pyramid of `#`.

Test:   pyramid(9)
Output:
```    #
   ###
  #####
 #######
#########
```

Test: pyramid(1)
Output:
```#
```

Test: pyramid(5)
```  #
 ###
#####
```

Test: pyramid(6)
```  ##
 ####
######
```*/
function pyramid(n) {
   
   let string = "";
  
   for (let i = 1; i <= n; i++) {
     
     for (let j = 1; j <= n - i; j++) {
       string += " ";
     }
   
     for (let k = 0; k < 2 * i - 1; k++) {
       string += "#";
     }
     string += "\n";
   }
   console.log(string);
   }
