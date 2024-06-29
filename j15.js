// ****** Event listener **********

// // click event
//     // 1 way :-
//     function clicked(){
//         document.getElementById("p1").innerHTML = "the button is clicked";
//     }
//     let btn = document.getElementById("click");
//     btn.addEventListener('click',clicked);      // addEventListener is used to add event to the web page

//     // 2 way :-
//     btn.addEventListener('click',function(){
//         alert("2 way");
//     })

// // dblclick event
//     btn.addEventListener('dblclick',function(){
//         alert("2 way");
//     })

// // mouseover event 
//     btn.addEventListener('mouseover',function(){
//         console.log("mouse is over");
//     })

// // mouseout event 
//     btn.addEventListener('mouseout',function(){
//         console.log("mouse is out");
//     })

window.addEventListener('DOMContentLoaded',function(){  // "DOMContentLoaded" event 
    console.log("dom tree");
})
window.addEventListener('load',function(){   // load event 
    console.log(" img loded");
})

// **** Access multiple function by event listner *****
    let bt = document.getElementById("click");
    function click1(){
        console.log("click1 function is activated");
    }
    function click2(){
        console.log("click2 function is activated");
    }
    bt.addEventListener('click',click1);
    bt.addEventListener('click',click2);

    // remove event listner 

        bt.removeEventListener('click',click2);  // remove the click2 function().

    // keydown, keyup, and keypress event :-
    
        window.addEventListener('keydown',keys); 
        // window.addEventListener('keyup',keys);
        // window.addEventListener('keypress',keys);

        function keys(event){
            console.log(event.key);
        }
    
    // Scroll event listner : 
        // window.addEventListener('scroll',function(){      // "scroll" it detect scrolling
            // console.log("scrolling")
        // })

        // window.addEventListener('wheel',function(event){   // "wheel" it detect scroolling is going to upward or downward
        //     if(event.deltaX < 0){                   // for horzontal we use " deltaX"
        //         console.log("scrolling up");    
        //     }
        //     else if(event.deltaY > 0){              // for vertical we use " deltaY";
        //         console.log("scrolling down");
        //     }
        // })
