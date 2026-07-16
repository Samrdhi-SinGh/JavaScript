Booleans & If-Statements :-

What are Booleans :-

Booleans are another type of value in JavaScript.
There are only 2 boolean values: 'true', 'false'.

Purpose of Boolean Values :-
A Boolean value represents whether something is 'true' or 'false'.
 
Syntax rule for Boolean :-

To create a boolean, we just type true or false. 
We don't surround true or false with quotes because it'll become a String.

Comparison Operators :-
>: Greater than.
<: Less than.
>=: Greater than equal to.
<=: Less than equal to.
===: equal to.
!==: Not equal to.

=: Assign Values.

JavaScript has two equals to check; === & == :- We always use ===.

'==' is used to check if the values are equal, so it does by converting both the values into the same means by doing 'type converion' automatically. 
Like console.log(5 == '5') // true
While '===' is used to do strict equality. It does not do type conversion.
Like; console.log(5 == '5') //false.


Note: !== & != :- It's same as === & ==. !== is used always.

Operator Precedence :-
1. (...)
2. * /
3. + -
4. Comparison operators.


If-Statements :-

Lets us write multiple group of code.
And then decide which course to run.

Syntax rules for if statements :-

To create a if-statement, we have to write,
if with parenthesis conatining boolean value inside and then run the code inside the curly brackets.
We can also an 'else' statement, it will run only when the 'if' condition is false.
"The 'else' statement is optional."

Format:
if(Condition){
  console.log(statements); //Branches
}
else{
  console.log(statements); //Branches
}

When there is only one line of code inside 'if' and 'else' statements then there is no need of {}. But if there is more than one line, {} is necessary.

else if statement :-
We can have more than one statement.
We use 'else if' after 'if'.

Format:
if(Condition){
  console.log(statements); //Branches
}
else if(Condition){
  console.log(statement)
}
else{
  console.log(statements); //Branches
}