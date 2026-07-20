<u>**What is an Object?**</u>  

*An Object groups multiple values together and let us use multiple values together.*
*An object is another type of value.*
Format:
const ObjectName = {
      Property1: Value1,
      Property2: Value2
    };
    console.log(Object name);//{Property1: 'Value1',  Property2: 'Value2'}

    Example:
    const product = {
      name: 'Socks',
      price: 1098
    };
    console.log(product);//{name: 'Socks', price: 1098}  
    
  *name and price are Properties.*
  
   - Using the property we can access specific values in the objects.    `const product = {`
      `name: 'Socks',`
     ` price: 1098`
    `};`
    `console.log(product);//{name: 'Socks', price: 1098}`  
    *//To print values using properties:-*  
    `console.log(product.name);//Socks`
    `console.log(product.price);//1098`

    - To change a value inside an object:- 
    *We change values using 'objectName.PropertyName'.*
    `product.name = 'cotton socks';`
    `console.log(product);//{name: 'cotton socks', price: 1098}`
 
    - To create new Property:
    `product.newProperty = 'true'`
    `console.log(product); //{name:'cotton sock', price: 1098, newProperty: true}`

    - To delete a property:
    `delete product.newProperty;`
    `console.log(product);//{name: 'cotton socks', price: 1098}`

    - To check the type of variable 'product':
    `console.log(typeof product);// object`

    <u>Rock, Paper, Scissor with score:-**</u>
    Algorithm:
    **Algorithm:**
when we click a button between Rock, Paper, Scissor,
1. Computer makes it's move randomly and choose one of the three.
2. Then computer's and user's move is compared.
3. Update a score.
4. Now, create a popup to show the result of who win or lose or it was a tie.

<u>**More details about objects:-**</u>

- Way of accessing values in objects:-

1. Dot Notation(use '.'):- 
console.log(ObjectName.property);

2. Bracket Notation(use []):-
console.log(ObjectName['Property']);
*We use Bracket notation because it lets us use properties that don't work with dot notation. Like, if we use '-' with dot notation then it will be taken as Subtraction symbol so we use bracket notation for that using [] and writing Property inside single-quote so it becomes string and computer understands.*

- Using bracket notation we can also add value to the object when we create it. 
Example:
   const product2 = {
      name: 'shirt',
      ['delivery-time']: '1 day'
    };
    console.log(product2['name']); //shirt
    console.log(product2.deliery-time);//Uncaught ReferenceError: time is not defined
    console.log(product2['deliery-time']);//undefined

- Between the bracket notation we can use a variable, calculation, string.

- We use 'Dot notation' bydefault always. And use break notation when we need to use some properties that doesnt work in dot notation.

- Inside an object, we can save any type of value: Number, string,BOolean, Char, Float, etc.

- We can use nested property for objects.
- We can create function inside an object too. Because a function is actually another type of value only.

const product3 = {
      name: 'shirt',
      // We can use nested property for objects.
      rating: {
        stars: 4.6,
        count: 89
      },
      //  We can create function inside an object too.
      fun: function function1(){
        console.log('hello!');
      },

      fun1: function function1(parameter1){
        console.log(parameter1 *0.1);
      }
    };

    console.log(product3.rating.count);
    product3.fun();
    product3.fun1(1000);

- 'console' is also an object. console.log(typeof console);//object
- 'console.log' is a method. console.log(typeof console.log);//Function 

Method:  
*Method is a function inside an object.*
Example: console.log, Math.random() where random is function and math is object.

**Built-in objects:-**
*Built-in objects are the objects already built.*

1.**JSON Built-in Object:-**
- JSON: 'JavaScript Object Notation'.
*It helps us work with 'JSON'.*
It'a a syntax similar to JavaScript object but has less features.

- JSON doesn't support 'Single-quotes' and 'functions'. JSON always uses double-quotw to assign values and variables, objects.

Why JSON over JavaScript object?
A 'JavaScript object' can only be understood by JavaScript while JSON can almost be understand by all languages(It's more universal).

-We use JSON,
1. When we send data between two computers.
2. When we store data.

Built-in JSON Object:
*JSON object helps us convert JavaScript object into JSON*

1. stringify(): It is a method inside the JSON Object which helps convert JavaScript object into JSON. 'It results in a string'.
It gives 
Example:
 console.log(JSON.stringify(product3));//{"name":"shirt","rating":{"stars":4.6,"count":89}}
     console.log(typeof JSON.stringify(product3));//string


 2. parse(): To convert from JSON to JavaScript.
 Example:
     const jsonString = JSON.stringify(product3);
     console.log(JSON.parse(jsonString));

2. **localStorage built-in objrcts:-**
*It savesvalues more permanently.*
Variables are temporary. If we refresh the page or close the page, all the variables are deleted.
*Using localStorage, the variable contains the value even though we refresh the page. It only supports string.*

localStorage.steItem(): To save the value inside the storage.
localStorage.getItem(): To get the value from the storage.

 localStorage.setItem('message'//name, 'hello'//value);
 console.log(localStorage.getItem('message'//name));

- localStorage.removeItem(): Used to remove values.
  local.Storage.removeItem('score');// As we reset and refresh and play again, the score is already removed and there is nothing but 'null' stored so it will give an error: 'Cannot read properties of null (reading 'wins') at playGame'.

  *When something doesn't exist in localstorage, it give 'null'.*

  For score === null,
  we can also use !score

if score = null;
  !score => true
  score === null => true
if score = {win=0, losses=...}
!score => false
score === null => false

<u>**null vs undefined:-**</u>

null: Intentionally wants something to be empty.null will not use default value.
undefined: A variable or pararmeter having no value asserted. It can default value then.


**Auto-boxing:-**

 //Auto-Boxing:
    // JavaScript has a special feature 'Auto-boxing, it first wraps the string into a special object and then use methods with it.'
    // Not only objects, values can also have properties  & methods. We don't see the special object.
    // Auto - boxing doesn't work with 'null and undefined'.
    console.log('hello'.length);//5, length tells the number of characters of value.
    console.log('hello'.toUpperCase());//HELLO, toUpperCase converts small characters into upper ones.
    console.log('HELLO'.toLowerCase());//hello, toLowerCase convert uppers to lower.

    //Auto-Boxing works with floats, boolean, etc but not take integers but can give them when takes float for them:
    console.log(3.0.toString());//3, string.
    // console.log(null.property());//r: Cannot read properties of null (reading 'property')

    //Object are references:
    const object1 = {
      message: 'hello'//This values is not stored in the message, it is stored somewhere in computer memory and this variable is given a reference that points to the value location in the memory.
    };

    //Copy by referance:
    const object2 = object1;// here, object2 doesn't get the actual value of object1, it just gets the referance that points to the value in memory and this fast too.

    //We can assert a different value into a const variable using object using referance because we are changing the value in variable directly, we are changing it at the location referance points to.
    object1.message = 'Good morning!';
    console.log(object1);//{message: 'Good morning!'} 
    console.log(object2);//{message: 'Good morning!'} 

    //'We compare referances, not values in objects.''
    const object3 = {
      message: 'Good morning'
    };
    console.log(object3 === object1);//false, because it doesn't compare values, it compares referances.
    console.log(object2 === object1);//true

    //Shortcuts for objects:
    const object4 = {
      message: 'hello',
      price: 1098
    };

    //Detructuring:Easier way to take properties out of an obejct
    // const message = object4.message;
    const { message, price } = object4;//Both lines do samething. Here the message of object4 will be taken and then stored in const message variable.
    console.log(message);//hello
    console.log(price);//1098

    // Shorthand Property: 
    const object5 = {
      // message: message//This will give the message value from above objects
      message //This also does the same, if property and variable name are same.
    };
    console.log(object5);

    //ShortHand method:
    const object6 = {
      // method: function function1(){
      // console.log('method');//method}
      method() {//ShortHand property
      console.log('method');
      }
    };
