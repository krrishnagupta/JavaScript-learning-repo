// function :
            /*
            Syntax = function Function_name(parameter){

            } */

    // function table(a = 2) {
    //     for(i = 1; i <= 10; i++){
    //         document.write(`${a} x ${i} = ${a*i}<br>`);
    //     }
    //      document.write("<br>");
    // }

    // table();   // calling function 

    // table(a = 3);   // calling function with changing parameter.  

    // table(4);   // calling function with changing parameter.

// // Note : when we call a function , we give the argument in the parathesis(), to the function.

    // function maths(a, b) {
    //     document.write(`${a} + ${b} = ${a+b} <br>`);
    //     document.write(`${a} - ${b} = ${a-b} <br>`);
    //     document.write(`${a} * ${b} = ${a*b} <br>`);
    //     document.write(`${a} / ${b} = ${a/b} <br>`);
    // }
    // maths(60, 30);


// // arguments objet : hum jitne chaye utne arguments pas kar sakte hai.
    // function calculate() {
    //     if(arguments.length == 0){
    //         document.write("no parameter is define");
    //     }
    //     else{
    //         let sum = 0;
    //         for (let i = 0; i < arguments.length; i++) {
    //             sum = sum + arguments[i];
    //         }
    //         document.write(sum);
    //     }
    //     document.write("<br>")
    // }

    // calculate(11,12,13);

    // let add = calculate;   // we can also store "function" in variable

    // add(1, 2, 3);  // calling variable with arguments


/* -------- return function ------------ */

    function addition(a, b){
        let d = a + b;
        return d;       // yaha hum jo return kar wayenge c me wahi store hoga.
    }

    let c = addition(5, 4);
    document.write(c);

    // function comparison(a , b){
    //     if(a < b){
    //         return 1;
    //     }
    //     else if(a > b){
    //         return -1;
    //     }
    //     else{
    //         return 0;
    //     }
    // }

    // let Compare = comparison(6, 6);
    // document.write(Compare);

// Global variable v/s Local variable :

    // let god = "krishn";   // global variable

    // function xyz(){
    //     let america = "kanha";    // local variable
    //     console.log(america);     // calling local variable
    //     console.log(god);         // calling global variable
    // }
    // console.log(america);   // we can not call local variable out side the function
    // console.log(god);      // we can call global variable every wehere
    // xyz();

// Anonymous function :

    // let anonymus = function (){               // a function without any name is called anonymus function.
    //     console.log("hello krishn !!");
    // }

    // anonymus();

// setTimeout function : 

    // function time(){
    //     document.write("hello krishna kumar gupta");
    // }

    // setTimeout(time, 3000);    // ye mili seconde me time leta hai, jese "3000" is equal to "3"  second.


// immediatly invoked function :

    // (function invoked(){
    //     alert("hello dear");          // syntax : (function name(){--- code ---})();
    // })();
