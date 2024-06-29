// let append  = document.getElementById("append");
// let para = document.createElement("p");
// // append.appendChild(para);

// // let text = document.createTextNode("this is a para tag");   // adding text in element by "method"
// // para.appendChild(text);
// para.textContent = "this is a paragraph !!"  // adding text in element by "property"
// console.log(para.textContent);   // we can also perform read opretion by "textContent" property.

// para.className = "paragraph";   // give class to paragraph tag <p>
// para.id = "para1";   // give id to paragraph tag <p>

// document.body.appendChild(para);  // append child in body

// let prnt = document.getElementById("prnt");
// let list = document.createElement("li");
// prnt.appendChild(list);
// list.textContent = "new_list";

// insert before :-
// 1example
// let unl = document.getElementById("unl");  // parent
// let newlist = document.createElement("li");  // create new elemnet
// newlist.textContent = "new list";   // writ some text

// let postn = unl.firstElementChild.nextElementSibling;  // give position 
// unl.insertBefore(newlist, postn);  // insert element by insertBefore

// 2nd example
// let parent = document.body;
// let h2 = document.createElement("h2");
// h2.textContent = "insert before 2 example";

// let position = document.getElementById("ulprnt");

// parent.insertBefore(h2, position);

// // Remove child element :-
let prnt = document.getElementById("unl");
// let child = prnt.firstElementChild;   // deleting first child
let child = prnt.firstElementChild.nextElementSibling;  // deleting second child
// let child = prnt.lastElementChild;  // deleting last child
// prnt.removeChild(child);

document.body.removeChild(prnt);  // removing the whole unorderd list