<u>Arrays and Loops:-**</u>

Arrays:-
Array are another type of value. It represents a list of values.
An array is a special type of object.
- Inside an array we can ut any type of value.
Format:
[1,3,'hello']

- We can store array in a variable.
const myarray = [1,2,'hey',true, [1,2], {'name', 'Sam'}];
console.log(myarray);

To get a specific value in an array => []
- We can get single value from array using 'index'.
console.log(myarray[0]); // 1

Index:- *Position in the array.* 
Indexing always starts from 0 and it's called '0-indexed array'. 

- We can change the value of in the array using index.
Like; myarray[1] = 4;
console.log(myarray); // [1,4,'hey',true, [1,2], {'name', 'Sam'}]


<u>**Methods and Properties:-**</u>  

Array.isArray(): This built-in function is used to check if a variable or value is an array or not and it always answers in 'true or false'.
Like; 
console.log(Array.isArray(myarray));//true
console.log([1,2]);//true  

.length(): This is used to give the number of elements or characters of an elemwnt too.
Like;
console.log(myarray.length);//4, .length tells us the number of elements. And [1,2] is counted as one element.
console.log('hello'.length);//5  

.push(): *This adds a value to the end of the array.*
Like;
    myarray.push(100);
    console.log(myarray);//[1, 4, 'Hey', [1,3], 100]  

.splice(): *This removes a value from an array.*
It takes two numbers;
1. Index we want to remove.
2. Number of values to remove.  

Format:
Array.splice(index, values to be removed from the given index);    

Like;
 myarray.splice(0, 2);
    console.log(myarray);//(3) ['Hey', Array(2), 100], It'll remove two values from the given index that is 0 here.

<u>**Loops:-**</u>  

*Loops let us run some code over and over.Loops creates a scope.*



    let i = 1;//Loop variable

    while(i<=3){//Loop condition
      console.log(i);//Loop body
      i++;//Loop inc/dec
    }//1, 2, 3

There's two types of loop:-
1. while loop:-
let i = 1;
while(i<=5>){
    console.log(i0);
    i++;
}//1, 2, 3, 4, 5

2. for loop
for(let i = 1; i<=5; i++){
    console.log(i);
}// 1, 2, 3, 4, 5

**While vs For loop:-**
Standard loop => for
Non-standard loop => while

Non-standard loop: 
Generate random numbers until one that's at least 0.5:  

let randomNumber = 0;
while(randomNumber < 0.5){
    randomNumber = Math.random();
}
console.log(randomNumber);//0.53....

**Looping through an Array:-**
1. Go through each value of an array one by one
2. Do something with each value.