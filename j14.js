// ********* change inline style with js *************

    // let divx = document.getElementById("divx");
    // let css = divx.firstElementChild;
    // css.style.cssText += "color: white; background-color: grey";   // 1st way{it overwrite the previous style,{but "+=" this opretore concatiate the other style }}
    // css.setAttribute('style', 'color: blue; background-color: grey');  // 2nd way{-------//--------}
    // css.style.color = "orange";          //--- 3rd way
    // css.style.backgroundColor = "grey";  //--- 3rd way 


// ********** get computed css ***********

    let style = document.getElementById("divx");
    let css = getComputedStyle(style);
    console.log(css.color);

// ************ css class *********

    //let cscl = document.getElementById("csc");
    // cscl.className = boder  // it overwrite's the class
    // cscl.className += " bodr";  // it append's class{note: we have to give space before writing classname like this => " classname"}
    // console.log(cscl.className);  // className, it display all the applied class
    
    // ** classList :-
    // console.log(cscl.classList); // "classList", it provide classes in a form of array
    // for(let i of cscl.classList){  // we can also see class by for loop
    //     console.log(i);
    // }  
    // cscl.classList.add("bodr");  // add the class by "add" method
    // cscl.classList.remove("color") // remove the class by "remove" method
    // cscl.classList.replace("bodr", "color"); // it replace the class by replace("jise replace karna ho", "jis se replace kar na ho" ); method
    // // let contain = cscl.classList.contains("color") // true, { it returns the boolean value , if class is present or not in element}
    // let contain = cscl.classList.contains("bodr");  // false 
    // console.log(contain);
    // cscl.classList.toggle("bodr"); // it applied class to element if it is not present and if it is present it does not applied
    
// *********** how to get Width and Height of any element ************
    
    let wh = document.getElementById("csc");
    // console.log(wh.offsetHeight);    // it also contain the length of (border, margin as well)
    // console.log(wh.offsetWidth);

    console.log(wh.clientHeight);  // it does not contain the length of (border, margin) 
    console.log(wh.clientWidth);