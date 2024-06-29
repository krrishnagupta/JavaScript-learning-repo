//    <" Adavance javascript "> (ES 6)

// let and const variable 

// default parameter :-  we can give a defalt parameter to the function
    function defaultParameter(value = "default"){
        console.log(value);
    }
    defaultParameter()   // if we not define the parameter in the calling function, so it take default value 

// rest parameter(...argumentName) :-  it is used to store multiple parameter, it stores parameter in the array[]
    function restParameter(...para){
        let result = 0;
        for(let i = 0; i < para.length; i++){
            result += para[i];
        }
        console.log(result);
    }
    
    restParameter(5, 2);

// spred opretor(...array) :- it is used to concetinate the array
    let array1 = [1,2,3,4];
    let array2 = [5,6,7,8,...array1];
    let array3 = [...array1,...array2]
    console.log(array2);   //output = [5,6,7,8,1,2,3,4]
    console.log(array3);   // output = [1,2,3,4,5,6,7,8,1,2,3,4]

// for of loop :- it is a variant of for loop which is developed in ES6 to access the values of arrays and string;
    let score = [1,2,3,4,5,6,7,8,9,10]
    for(let x of score){
        console.log(x);
    }

// Templet Litreal (`  `):- it is used to give multiple line in string, and to concatinate the string;
    let str ="krishna \n gupta";  // in previous version we have to use "\n" for next line

    let nameing = `krishna   
kumar                  
   gupta`;           // in tempet litral we can access multiple space


    console.log(str);
    console.log(nameing);
    console.log(`my name is ${str}.`);

// Array Destructuring :-
let array4 = ["javascript", 200, "js"];

let [Name, pages, short] = array4;           // arrray destructuring, it is also used in function, and nested array.
console.log(Name);

// object Destructuring :-
let doc = {
    name : "krishna",
    surname : "gupta",                     
    dob : "06/06/2003",
    college : {
        enroll : "0808cl211026",
        comp : "57246"
    }
}
let {name, surname, dob, college : {enroll, comp}} = doc;           // object destructing is same as array destructing but it works in object

console.log(enroll);

