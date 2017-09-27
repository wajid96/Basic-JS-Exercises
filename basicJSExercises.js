/* ---------------------------

*** #1 Area of Triangle ***

Write a JavaScript function to calculate the area of a triangle given the base and height.

Test:
console.log(areaTriangle(10, 20));

Output:
100

 --------------------------- */

function areaTriangle(base, height) {
  return 0.5*base*height;
}
console.log("Triangle Area Calculator:");
/* Uncomment the following to check */
   console.log(areaTriangle(2, 7));
   console.log(areaTriangle(20, 56.5));
   console.log(areaTriangle(50, 34));




/* ---------------------------

*** #2 Rotate String ***

Rotate a given string in the left direction by periodically removing
one letter from the beginning of the string and attaching it to the end.

Test:
rotateString("cat");

Output:
cat
atc
tca
cat

HINT: Use substring()
 --------------------------- */

function rotate_string(text) {
  console.log(text);
  for(var i=0; i<text.length; i++){
  text = text.substring(1, text.length)+text[0];
  console.log(text);
  }
}

console.log("Rotate String:");
/* Uncomment the following to check */
  rotate_string("cat");
  rotate_string("voracious")





/* ---------------------------

*** #3 Hide part of email address ***

Write a JavaScript function to hide email addresses to protect from unauthorized user.

Test:
console.log(protect_email("tom_jenkins@example.com"));

Output:
"tom_j...@example.com"

HINT: Use split() and substring()

 --------------------------- */

function protect_email(email) {
  var splitarr = email.split("@");
  var part1 = splitarr[0];
  var part2 = splitarr[1];
  part1 = part1.substring(0,(part1.length-(part1.length/2)));
  return part1 + "...@" + part2;
}

console.log("Protected email:");
/* Uncomment the following to check */
  console.log(protect_email("harry_potter@gmail.com"));
  console.log(protect_email("sarah.connor@gmail.com"));



/* ---------------------------

*** #4 Alphabetical Order ***

Write a JavaScript function that returns a passed string with letters in alphabetical order.

Test:
console.log(alphabetic_order('webmaster'));

Output:
abeemrstw

HINT: Use join(), split() and sort() functions
 --------------------------- */

function alphabetic_order(word) {
  var splits = word.split("");
  var a_char = splits.sort();
  return a_char.join("");
}

console.log("Alphabetic Order:");
/* Uncomment the following to check */
  console.log(alphabetic_order("webmaster"));
  console.log(alphabetic_order("textbook"));




/* ---------------------------

*** #5 Remove Duplicate Values ***

Write a JavaScript program to find and remove duplicate values in a JavaScript array.

Test:
remove_duplicates([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);

Output:
[3, 'a', 2, 4, 9]

 --------------------------- */

function remove_duplicates(arr) {
  var updatedarr = [];
  for(var i=0; i<arr.length; i++){
    for(var j=i+1; j<arr.length; j++){
      if(arr[i]===arr[j]){
        delete arr[j];
      }
    }
  }
  var c=0;
  for(var k=0; k<arr.length; k++){
    if(arr[k]!=null){
      updatedarr[c++]=arr[k];
    }
  }
  return updatedarr.join();
}

console.log("Remove Duplicate Values:");
/* Uncomment the following to check */
  console.log(remove_duplicates([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));


/* ---------------------------

*** #6 Dash between Odd Numbers ***

Write a JavaScript program which accepts a number as input and inserts dashes (-) between two consecutive odd numbers.

Test:
dash_in_odd(013247568);

Output:
"01-3247-568"

HINT: Use toString() and parseInt() functions
 --------------------------- */

function dash_in_odd(number) {
  var str = number.toString();
  var result = [str[0]];

  for(var i=1; i<str.length; i++)
    {
      if((str[i-1]%2 != 0) && (str[i]%2 != 0))
       {
        result.push('-', str[i]);
       }
      else
       {
        result.push(str[i]);
       }
    }
  console.log(result.join(''));
}

console.log("Dash between ODD Numbers:");
/* Uncomment the following to check */
  dash_in_odd(100);
  dash_in_odd(1356);
  dash_in_odd(13790);
  dash_in_odd(132459784);


/* ---------------------------

*** #7 Guessing Game ***

Write a JavaScript program where the program takes a random integer between 1 to 10,
the user is then prompted to input a guess number. If the user input matches with guess number,
the program will display a message "Good Work" otherwise display a message "Not matched"

HINT: Use Math.ceil() and Math.random()

 --------------------------- */

function guessing_game(guess) {
  // Get a random integer from 1 to 10 inclusive
  var num = Math.ceil(Math.random() * 10);
  if (guess == num)
  {
  	console.log("Good Work");
  }
  else {
  	console.log("Not matched");
  }
}

console.log("Guessing Game:");
/* Uncomment the following to check */
  var guess = prompt('Guess the number between 1 and 10 inclusive');
  console.log("User guessed: "+ guess);
  guessing_game(guess);
