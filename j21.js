// ********* functions **********
    // normal function :-
        function normal(a, b){
            let d = a+b;
            return d;
        }
        console.log(normal(2, 5));

    // Anonymus function :-
        document.addEventListener("click", function(){
            alert("anonymus function is called")
        })

    // Arrow function :-
        let Arrow = () => "arrow function";   // if no parameter pass
        console.log(Arrow());

        let Arrow1 = a => a*2;   // if 1 parameter is pass
        console.log(Arrow1(4));

        let Arrow2 = (a,b) => a+b;   // if two or more parameter is pass
        console.log(Arrow2(2,3));

        let Arrow3 = (a,b) => {
            let d = a+b;              // if function has tow or more line of code
            return d;
        }   
        console.log(Arrow3(2,6));

    // Call back function :-  
            /* Any function that is passed as an argument to another function so that 
            it can be executed in that other function is called as a callback function. */

        function a1(){
            console.log("function one");
        }
        function a2(){
            console.log("function two");
        }

        function back(a, b, callback){
            let c = a*b;
            console.log(c);
            callback();
        }
        back(20,30,a1);
        back(10,20,a2);
 
    // Map function :-   
        /*  map() creates a new array from calling a function for every array element.
            map() does not execute the function for empty elements.
            map() does not change the original array. */

        let array = [1,2,3,4,5];

        // calling Map function by anonymus function
        let arrayMap = array.map(function(elem){        
            return elem * 2;
        })
        console.log(arrayMap);

        // calling Map function by Arrow function
        let arrow4 = array.map((ele) => ele * 5)
        console.log(arrow4);

    // filter function :-
            /*  The filter() method creates a new array filled with elements that pass a test provided by a function.
                The filter() method does not execute the function for empty elements.
                The filter() method does not change the original array.  */
            // 1st example :
    let aarray = [
        {
            name: "krishna",
            position: "AI engineer"
        },
        {
            name: "kanha",
            position: "ml engineer"
        },
        {
            name: "kk",
            position: " developer"
        },
        {
            name: "abc",
            position: "AI engineer"
        },
        {
            name: "xyz",
            position: "AI engineer"
        }
    ]

    let aiEngineer = aarray.filter(val => val.position == "AI engineer");
    console.log(aiEngineer);

         // 2 example :
    let num = [10,12,23,44,50,68,57,48,39];

    let filter = num.filter(val => val >= 50);
    console.log(filter);


// ************* Cookies *************
    // write 
    document.cookie = "item1 = milk"    // document.cookie = "name=value; expires=day, date month year hour:min:sec UTC"
    document.cookie = "item2 = bread; expires = wed, 13 Mar 2024 12:00:00 UTC";
    
    // read 
    let x = document.cookie;
    console.log(x);

    // delete 
    // if we want to delete any cookie, we have to give the privious date or time to expires.
    document.cookie = "item1 = milk; expires = mon, 11 Mar 2024 12:00:00 UTC";

// *********** web storage(local storage and session storage) :-

    // localStorage
    localStorage.setItem('name', 'value');           // set item
    localStorage.setItem("location", "mumbai");
    console.log(localStorage.getItem("location"));   // get item
    localStorage.removeItem("name");       // remove item

    // sessionStorage
    sessionStorage.setItem('name', 'krishna');   // set item
    sessionStorage.setItem('sem', '6th'); 
    console.log(sessionStorage.getItem('name'));  // get item
    sessionStorage.removeItem('sem');             // remove item