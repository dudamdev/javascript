// WHAT IS THE DOM
//  - Document Object Model
//  - Use it to manipulate content , style and structure
//  - Is one od the most unique and useful tools of JavaScript

// Document
// - Element <html>
//      - Element <head>
//          - Element <title>
//              - Text: 'This is my website'
//      - Element <body>
//          - Element <p>
//              - Class Atribute "className"
//              - Text: 'My Paragraph'
//          - Element <h1>
//              - Text: 'My Header'

// ##############################################################################

// // DOM MANIPULATION

// // getElementById()
// const title = document.getElementById('main-heading');
// console.log(title)

// // getElementByClassName()
// // const listItem = document.getElementsByClassName('list-items')
// // console.log(listItem)

// // getElementByTagName()
// const listItem = document.getElementsByTagName('li')
// console.log(listItem)

// // querySelector() --> Select only the first element
// // const container = document.querySelector('div');
// // console.log(container)

// // querySelectorAll()
// const container = document.querySelectorAll('div');
// console.log(container)

// ##############################################################################

// STYLING ELEMENTS

// const title = document.querySelector("#main-heading");

// // inline-style <h1 id="main-heading" style="color: red;">Favorite Movie Franchise</h1>
// title.style.color = "red";

// // inline-style --> for applies it to all elements
// const listItems = document.querySelectorAll(".list-items");
// for (let i = 0; i < listItems.length; i++) {
//   listItems[i].style.fontSize = "1.5rem";
// }

// ##############################################################################

// // CREATING ELEMENTS

// const ul = document.querySelector("ul");
// const li = document.createElement("li");

// // Adding Elements
// ul.append(li);

// // MODIFYING THE TEXT
// // const firstListItem = document.querySelector(".list-items");

// // // Plain text
// // console.log(firstListItem.innerText);
// // // Text like display in the HTML (with indentation)
// // console.log(firstListItem.textContent);
// // // Whole tag content, including other tags and indentation
// // console.log(firstListItem.innerHTML);

// li.innerText = "X-man";

// // MODIFYING ATTRIBUTES & CLASSES
// // li.setAttribute("id", "main-heading");
// // li.removeAttribute("id");

// // const title = document.querySelector("#main-heading");
// // console.log(title.getAttribute("id"));

// // Add the Class "list-items" to the element
// li.classList.add("list-items");
// // Remove the Class "list-items" from the element
// li.classList.remove("list-items");
// console.log(li.classList.contains("list-items"));

// // REMOVE ELEMENTS
// li.remove();

// ##############################################################################

// PARENT NODE TRAVERSAL
// let ul = document.querySelector("ul");

// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// const html = document.documentElement;

// console.log(html.parentNode); // Selects the #document <!DOCTYPE html>
// console.log(html.parentElement); // Returns null

// CHILD NODE TRAVERSAL
// console.log(ul.childNodes); // Counts indentation as text nodes (11)
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor = "blue";

// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// SIBLING NODE TRAVERSAL
// const div = document.querySelector("div");

// console.log(div.childNodes);

// console.log(ul.previousSibling);
// console.log(ul.nextSibling);
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);

// ##############################################################################
