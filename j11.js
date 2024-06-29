// DOM (Document Object Model) :-
//              DOM is an API(Application Programming Interface) for manupilating the Html and Xml documents.(add, remove, and modify parts of documents)

//***** Select  :-


// let unlist = document.getElementById("l1");   // select element by "id"
// console.log(unlist);
// console.log(unlist.innerHTML);   // get element
// unlist.innerHTML = "krishna";    // Set element 

// let list = document.getElementsByClassName("l2");   // select element by class
// console.log(list);           // class = it store the collection of same class in array
// for (let i = 0; i < list.length; i++) {
//     console.log(list[i].innerHTML);    // get element
//     list[i].innerHTML = "kk";       // set element
// }

// let list2 = document.getElementsByClassName("l2 cl2");   // we can select element by multiple class
// console.log(list2);
// for (let i = 0; i < list2.length; i++) {
//     console.log(list2[i].innerHTML);    // get element
//     list2[i].innerHTML = "kk";       // set element
// }

// let div1 = document.getElementById("div1");
// let head = div1.getElementsByTagName("h2");    // select elemen by tag
// for (let i = 0; i < head.length; i++) {   
//     console.log(head[i].innerHTML);    // get element
//     head[i].innerHTML = "this is heading";  //set element
// }


// let quary = document.querySelector("p.query");   // select element by querySelector
// console.log(quary);


// let quary = document.querySelectorAll("p.query");   // select element by querySelectorAll
// for (let i = 0; i < quary.length; i++) {
//     quary[i].innerHTML = "we want to access all the class by query, we have select querySelectorAll"

// }

// ******  Traversing element ******

// let ch = document.getElementById("ch");   // get parent element by child's Id
// let prt = ch.parentElement;
// console.log(prt);
// prt.innerHTML = "hello";

let prnt = document.getElementById("prnt");  // select child element by parent element
// let child = prnt.firstElementChild;  // select first child
let child = prnt.children   // slect all child
console.log(child);
for (let i = 0; i < child.length; i++) {
    child[i].innerHTML = "hi";
}

let sibling = document.getElementById("sibling");
// let brother = sibling.previousElementSibling;
let brother = sibling.nextElementSibling;
console.log(brother);
brother.innerHTML = "krishna";