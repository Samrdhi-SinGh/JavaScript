<u>**What is a Function?**</u>
A function lets us reuse code.

A function is made using 'function' only.
To call it again and again we just have to call it.

Format:
function function1(){
  Statements;
}

function1(); // Calling the function

<u>Rules for function names:-**</u>
1. Can't use special words.
Example: function()// It's a keyword so it acn't be used.

2. Can't start with a number.
Example: 1tierfunction() // Started with a number.

3. Can't use special characters except '$' & '_'.
Example: *Hello() // Started with special character except '$' & '_'

function function1(){//*This code only creates the function. It never runs it.
  console.log('hello');
}

function1(); //*Calling/Running/Executing the function. Calling the function only runs it.*

Here, 
function is keyword to make function.
function1() is the defined function by developer.
console.log.... is function body inside {..}.
The function is then called by function1();.

- One racommendation for function name is to use a verb or action for it like pick.

<u> **Benefit of function:-**</u>
1. Functions let us reuse the code and make the code alot cleaner by removing all the duplication(repeatation of codes) we had.
2. Functions also make our code easier to update: *If we have to update the code, we just have to update it into function, not everywhere.*

<u>**Return Statement:-**</u>
A return statement let us get a value out of the function.

Format:
function funtionName(){
Statement;
return value; //Returning a value from a function.
}

<u>**Syntax rule for Return statement:-**</u>
return: To return a value we type return.
value: A value that th return will get out of the function when 'successfully executed'. 

- Instead of just a value we can return Strings, calculations, variables, or anything that results in a value.
Exaple:
return 2 + 2;
return variable1;
return Math.random();

- we can also not return a value in a function. It will return 'undefined' in console.

Format:
function funtionName(){
Statement;
return; //Returning 'undefined'
}

- *When we use the return statement, it ends the function immediately.*  
Example:
function function1(){
  Statement;
  return;
  console.log('after'); 
}

On console: undefined
*No after will be printed because return statement functio ends immediately and no line after it runs.*

<u>**Tracing the code:-**</u>
*Following the code line by line is called 'Tracing the code'.*

<u>**Comparing return variable and global variable:-**</u>

 *Returning a variable is preferred over using a global variable beacuse 'Scopes' can help prevent 'Name conflicts'.*
- The variable stays inside the scope and return is used to return it.

<u>**Parameters:-**</u>  
*A Parameters return a value into a function.*
*It is used to modify a function to work with any value that can come as per situations not just constant value given inside the function.*

- 'Parameters works as a variable. It is given in the function(..) and then used inside it as an variable.'

<u>**Syntax Rules for Parameter:-**</u>
1. Can't use special words.
Example: function()// It's a keyword so it can't be used.

2. Can't start with a number.
Example: function tierfunction(4hello) // Started with a number.

3. Can't use special characters except '$' & '_'.
Example: function fn(*parameter1){..}//Incorrect

Best practice is to always use 'camelcase'.

<u>**Passing the value into the function and Arrgument:-**</u>  
*When we put the value in the function when calling it, we call it "Passing the value into the function." and the value as "Argument".*

Format:
function func(Parameter){
  Statement;
}
fun(argument); // passing a value into the function. Subtitute Parameter with argument.

example: alert('hello');

- Functuion can have more thanone parameter.
Format:
function func(Parameter1, Parameter2){
  Statement;
}
fun(argument1, argument2); // passing a value into the function. Subtitute Parameter with argument.
*parameter1 = argument1 & parameter2 = argument2.*