HTML & CSS Review, JavaScript :-

HTML: Creates the content
CSS: Changes the appearance.
JavaScript: Makes the websie interactive.

HTML and CSS review :-

Everything starts from HTML.

HTML: 'Hyper Text Markup Language'
It gives instruction to the computer using code editors.

For button: <button></button>
For Paragraph: <p></p>

HTML Structure :-

1. <!DOCTYPE html>: This is not a HTML element. This is special line of code that tells a browser to use mordern version of code. 
2. <html>: This represents the entire web page.
3. lang="en":It declares the content language (English).
4. <head>: This contains information about the page.
5. <meta>: The <meta> tag provides metadata about the HTML document (data about the page) and belongs inside the <head> element.
6. <title>: Title sets the title of the webpage.
7. <body>: This element is supposed to contain everything that is visible on the page.

This structure gives the ability to refresh our webpage automatically when we change our code.

HTML Syntax:-

Even if we don't add the structure of HTML, browser automatically adds it.

HTML Element :- HTML Elements contain HTML Tag and content. An 'Opening tag+ Content + Closing tag'.
Example: <button>CLick</button> 
(button is element name)

HTML Tag :- HTML Tags is an element enclosed in angle bracket (<>) that defines structure and content of a webpage.

<>: Opening tag
</>: Closing tag

Most HTML tags have an opening tag, content, and a closing tag, while some are empty tags that do not require a closing tag.

HTML Attribute :- Attribute change the behaviour of an element.
class, id, title,etc: Attribute name.
Values of attribute: Attribute value.

class Attribute: 
class attribute is used to add a label to an element.
Same class can be added to multiple elements.

title attribute: 'title = "Text"' It is an attribute that gives property getting description(Text) of something when hovered over it.
=
Nesting :- Element inside an element.
Example: <p> For more information <button>Click here</button> and learn. </p>

Notes:-

Muliple spaces are combined into one space in HTML.
Example: <p> Have better understanding        of  everything.</p>
Output: Have better understanding of everything.

In HTML, 'newlines' are also counted as spaces.
It helps in giving content a newline.

Example: <p> Filter Keys lets you
ignore brief.</p>
Output:  Filter Keys lets you ignore brief.
No next line in output here. 

Web page :- A single page (on a website).
(home page, cart page, etc.)

CSS :-

CSS: 'Cascading Style Sheet' 
It changes the appearance of the website.

<style>
    button{
        color: red; It cahnges the text color to red.
        border: none; Removes border.
    }
</style> : Style lets us write Css inside it.

CSS Syntax :-
 
CSS Selector: Selects which elements to change. It is used to give properties.

CSS Property: Tells the computer what we are changing.
Like; Background-color, color, Font-size, etc.

CSS Value: What will change in the property.

JavaScript :-
To run Js in HTML code we use <script>.

onclick: An attribute used to run Js code.

In JavaScript, when the numbers were directly given on console, it ran and gave output. But in file, it should always work when written inside "console.log()".

Note :-
The code in <script> element run first (when page is loaded).
The code in onclick attribute runs after (when we click the button).

Comment :-
Comment is used to provide more information for people reading code.

//: This is "Single-line comment" used to give comments <script>.
/* */: This is "multi-line comment" also used to give comments <style> & <script>.
<!-- -->: This is also used to give comments in HTML.

Commenting out the code: When the code is not needed to run. And iot shouldn't be deleted too.