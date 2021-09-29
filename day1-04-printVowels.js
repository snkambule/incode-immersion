/*Write a function `printVowels` that takes a string as argument and displays only the vowels of the string.

Vowels are `a`, `e`, `i`, `o`, `u`.


Here are a few test cases:

Test:   printVowels("hello world")
Output:
```eoo
```

Test:   printVowels("kangaroo")
Output:
```aaoo
```

Test:   printVowels("cheeseburger")
Output:
```eeeue
```

Test:   printVowels("rhythm")
Output:
```
```*/

  function printVowels(str) {
    const vowels = [];
    
    for(const c of str){
      if('aeiou'.includes(c)){
        vowels.push(c);
      }
    }
    console.log(vowels.join(""));
  }


printVowels("loophole");
printVowels("laaaaaaaaalapooo");


    


