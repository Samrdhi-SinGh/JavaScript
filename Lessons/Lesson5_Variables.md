Variables :-

In this lesson:
1. Variables = a way to save values
2. Re-assign a variable.
3. Created the Cart Quantity feature.
4. Short-cuts for re-assigning a variable.
5. Naming Conventions and best practices.
6. 3 ways to create a variable: let, const, var.
7. typeof with variables.


Variables :-

Variables: "Variables are container where we can save a value and then use it later."

We can use a variable wherever we use a value.

let:
'let' is a Keyword used to declare variables. It creates new variables. 
Like; let var = 3;
console.log(var); //3

let var = 3; : It is assigning a value to a variable.
Here, var is variable name and 3 is variable's value.

Syntax rules for Variables :-

Variable name restrictions:

1. Can't use special words (Keywords).
Example: 
a. let let = 4;
let is keyword and can't be used as an variable name.
b. let let1 = 5;
let1 is not a keyword so it can be used as a variable.

2. Can't start with a number.
Example: let 3var = "Hello"; 
3var is not a valid variable because it started with number.

3. Can't use special characters except $ and _.
Example: let $var = 10; // Valid
let var_ = 20; // Valid
let var-name = 30; // Invalid

Assigning & Re-assigning values :-

When assigning values to a variable we use 'let'.
When R
e-assigning another value to the same variable we just assign without using 'let'.

Example: 
    let assign = 3;
    console.log(assign); //3

    assign = 4;
    console.log(assign); //4

Semicolon: It's used for rnd of an instruction.

Semicolon Insertion: 
Semicolon Insertion is a special feature of JavaScript which would try to insert the last semicolon in the line of code automatically.
Example: console.log('Hello!')
Still print on Console: Hello!

Semicolon insertion sometimes put semicolon in wrong place. So always try to use semicolon so there will be no need of semicolon insertion.

Note: Variables also works with 'String Interpolation'.

Short-cuts for Re-assigning Variables :-

 1. cartQuantity++; // for increasing the variable by adding 1 everytime.
 2. cartQuantity += 1;
 3. cartQuantity += n;

 For operators:
 += 2  variable = variable + 2
 -= 2  variable = variable - 2
 *= 2  variable = variable * 2
 /= 2  variable = variable / 2
 ++    variable = variable + 1
 --    variable = variable - 1

 Naming convention :- (For variables)

 1. camelCase: cartQuantity
 Always used in Js. First letter of all words except first word is always capital.$var
 
 2. PascalCase: CartQuantity
 Used in one feature of JavaScript. First letter capital of all words.

 3. kebab-case: cart-quantity
 Not used in Js. Though used in HTML, CSS, And naming the files.

 4. snake_case: cart_quantity
 Used in other languages.

 Three ways to create Variables in JavaScript :-

 1. let: Used to declare variables and can re-assign values. (Let is only used when variables have to be changed.)

 2. const: Used to declare variable but never re-assigns values. Bydefault const is always used. (const means constant.)

 3. var: Used to declare variable. But its used in old JavaScript only. 

 typeof with variable: typeof tells us what type a value is.

