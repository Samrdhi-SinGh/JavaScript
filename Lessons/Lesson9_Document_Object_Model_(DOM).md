<u>**DOM:-**</u>
DOM = another built-in object
"Document object"

  document.body.innerHTML = 'hello';//This removes everything from page and displays only 'hello'.      
Here, 
document: Built-in object
body: The body is an object inside document
innerHTML: An object inside body.

  document.title = 'Hello';//It changes the title of page

  *The document object represents / models the webpage. That's why DOM is*"Document Object Model".

  'document' is built in object that's interconnected/linked to webpage and changes things on page and gets things from it too.

  console.log(document.body);//It gives the whole body in the console.
*We can have HTML elements inside JavaScript.Th DOM combines HTML and JavaScript together.*

*When HTML element is inside JAvaScript, it converts into JavaScript object.*
  console.log(typeof document.body);//object


console.log(document.body.innerHTML);//innerHTML gves all the HTML inside the body to console in JavaScript.

*We can give HTML code to innerHTML too.*
console.log(document.body.innerHTML = '<button>Change</button>')//<button>Change</button>

document.querySelector(): It let us get any element and put it inside the JavaScript.

- Every HTML element has a property .innerHTML

- DOM combines JS & HTML together. It gives JS full control of the webpage.

- document.innerText is used for text to be count only even if there is space inbetween or beside them.

- <p> is a block element that takes an entire line by itself.