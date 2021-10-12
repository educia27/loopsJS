/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

//a. 
for (let i = 0; i < 21; i++) {
  console.log(i);
}
console.log("_____________________________________");
//b.

for (let h = 3; h < 30; h+=2) {
  console.log(h);
}
console.log("_____________________________________");
//c.
for (let j = 12; j > -15; j-=2) {
  console.log(j);
}
console.log("_____________________________________");
//d.
for (let q = 50; q >= 20; q--) {
  if (q % 3 ===0)
  console.log(q);
}

/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].


Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 
console.log("_____________________________________");

let str = "LaunchCode";
let arr = [1, 5, 'LC101', 'blue', 42];

for (let z = 0; z < arr.length; z++) {
   console.log(arr[z]);
}
//let reversed = " ";
//for (let r = 0; r < str.length; r++) {
  // reversed = str[r] + reversed;
//}
for (let r = str.length-1; r>=0; r--) {
      console.log(str[r])
}


/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

let origArr = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];

let evenArr = [];

let oddArr = [];


for (let v = 0; v < origArr.length; v++) {
    if (origArr[v] % 2 === 0) { 
        evenArr.push(origArr[v]);
        //console.log(evenArr);
    } else {
      oddArr.push(origArr[v])
      //console.log(oddArr);
    } 
}
console.log("_____________________________________");
console.log(oddArr);
console.log(evenArr);

