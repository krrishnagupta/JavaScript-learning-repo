
// Date objet :

// let x = new Date();
// console.log(x);

// let x = new Date(year month day hour minute second milisecond) // if want enter any difrent date , so we have to enter maximum 7-parameter and minimum 2-parameter(year, month)
// let x = new Date(2003, 5, 6, 8, 45, 10, 20); 
// console.log(x);

// let x = new Date("june 6, 2003 8:45:00");   // another way to declear date.
// console.log(x);

// methods :-
// 1) .get :-
    // console.log(x.getTime());  // 1
    // console.log(x.getFullYear()); // 2
    // console.log(x.getMonth()); // 3
    // console.log(x.getDay());  // 4
    // console.log(x.getHours());  //5
    // console.log(x.getMinutes());  //6
    // console.log(x.getSeconds());  //7

// 2) .set :-
    // x.setTime( 1234567);  // 1
    // x.setFullYear(2022); // 2
    // x.setMonth( 7); // 3
    // x.setHours(5);  //5
    // x.setMinutes(50);  //6
    // x.setSeconds(7);  //7

    // console.log(x);


// New keyword :

    // let newKeyword = new Object();  // New keyword is used to create new object.
    // newKeyword.name = "krishna";
    // newKeyword.surname = "gupta";

    // console.log(newKeyword.surname);

// Geter and Seter function :-

    // let person = {
    //     name : "krishna",
    //     age : 20,
    //     DOB : new Date(2003, 5, 6),

    //     get getname(){
    //         return this.name.toUpperCase();
    //     },

        set setname(n){
            this.name = n.toUpperCase();
        }
        
    // };
    // console.log(person.getname);   // get function calling 

    // person.setname = "kanha";
    // console.log(person);        // set function calling 



// ************************************* Object Constructer *************************************************

    // function Student(first, last, age, cls,) {     // object constructer : it is used to create so many object with difffernt value.
        
    //     this.firstname = first;
    //     this.lastname = last;
    //     this.age = age;
    //     this.class = cls;
    // }

    // // if we want to add a value  to object constructre, we can add dynamically letter by "prototype" function. 

    // Student.prototype.nationality = "India";

    // let student1 = new Student("krishna", "gupta", 20, 12,);  // object-1

    // // student1.nationality = "indian";   // it only store in "student1-object "

    // let student2 = new Student("kanha", "gupta", 21, "college",); // object-2

    // console.log(student1);
    // console.log(student2);


// ******************************** Nested object *********************************

    // let student ={
    //     computerCode:  57246,
    //     course: "computer-science",

    //     persnal : {
    //         name: "krishna",
    //         email: "abcd@gmail.com",
    //         age: 20,

    //         document: {
    //             adhar: "1234 2234 4432 5432",
    //             cgpa : 8.5,
    //         }
    //     }
    // };

    // console.log(student.persnal.name, student.persnal.document.cgpa);

// ******************************** Hoisting ************************************

    // note : it is theoritical topic 
    // if we call any variable before decalearing, it will give "undefined" value  in "var" variable ,
    // but in "let" and "const" it will give reference error : can't initiallize value before intiallization.
    // example :-

        // console.log(u);
        // console.log(v);

        // let u = 2;
        // var v = 3;