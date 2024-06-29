// form event :-
    // focus, blur, change :-
        // let x = document.getElementById("input");

        // function focus(){
        //     x.style.background = "yellow";
        // }

        // function blur(){
        //     x.style.background = "blue";
        // }
        // x.addEventListener('focus',focus);    // foces the input box
        // x.addEventListener('blur',blur);      //"blur" event focues outside of the box
        // x.addEventListener('change', function(){  // it store the value of input box when we click out side the box
        //     console.log(this.value);
        // }) 
        // x.addEventListener('input', function(){  // it store the value of input box when we click the press the keybords button
        //     console.log(this.value);
        // })


// Event bubbling and Event captureing :-
        
let a = document.getElementById("one");
let b = document.getElementById("two");
let c = document.getElementById("butn");

export function onef(event) {
    console.log("first div is activated");
}
a.addEventListener("click", onef, true);  // if we add true in the "addEventListener('event', func(), true)" it convert into "event capturing"

function twof() {
    console.log("second div is activated");
}
b.addEventListener('click', twof, true); // Change from a to b

function btnf() {
    console.log("button is activated");
}
c.addEventListener("click", btnf, true); // Change from a to c

a.addEventListener("click", function(event){
    event.stopPropagation();                    // we only click on one thing(button, div, etc) is only declare that element
});

let link = document.getElementById("link");
link.addEventListener("click", function(event){
    event.preventDefault();           // "preventDefault" dont provide screen access to the website 
})