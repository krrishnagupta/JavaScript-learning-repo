// Opps in javascript 
    //******************* oops before ES-6(ECMAscript-6) *****************//

    // define object :-
        let persone = 
        {
            name: "krishna",
            surname: "gupta",
            dob: "06/06/2003",

         // define method :-
            fullname: function (){
                console.log(this.name + " " + this.surname);
            }
        }
        // console.log(persone.name);
        // console.log(persone.fullname());

    // another way to define object :-
        let score = new Object();
        score.physics = 89;
        score.maths = 70;
        score.english = 60;
        score.fullmarks = function(){
            console.log(this.physics + this.maths + this.english);
        }
        // console.log(score.physics);
        // console.log(score.fullmarks());

    // there's no class concept brfore ES-6,  we use "function constructor" :-
        function Persone(first, last, a){
            this.firstname = first,
            this.lastname = last,
            this.age = a,

          // define method in function constructor  
            this.hi = function(){
                alert("hello there this is method of function constructor");
            }
        }
        // obj 1
        let persone1 = new Persone("krishna", "gupta", 20)
        // console.log(persone1);
        // console.log(persone1.hi());  // access method

        // obj 2
        let persone2 = new Persone("kanha", "gupta", 21)
        // console.log(persone2);

    // prototype :-
        let proto = {}
        console.log(proto)   // every object is connected to the proptotype which show the property of object

        let proto1 = {
            name: "krishna"
        }
        console.log(proto1.hasOwnProperty('name')); // it is one of the property of prototype, which shows the property of object
        
        function Student(naam,last, roll, a){
            this.name = naam;
            this.surname = last;
            this.rollNo = roll;
            this.age = a 
        }
        Student.prototype.fullname = function(){
            console.log(this.name + " " + this.surname);
        }
        let student1 = new Student("krishna", "gupta", 26, 20);
        console.log(student1.age);  
        console.log(student1); 


    // Inheritence :-

        function Employee(name, lastname, doj){
            this.empname = name;
            this.emplastname = lastname;
            this.joining = doj
        }
        Employee.prototype.empdetail = function(){
            console.log(this.empname + " " + this.joining);
        }

        function Salary(sl){
            this.salary = sl
        }
        Salary.prototype.boss = function(){
            console.log("salary of boss is : 100000");
        }

        // Employee.prototype = Object.create(Salary.prototype);  // it replace the prototype with other prototype

        Employee.prototype.__proto__ = Object.create(Salary.prototype);  //it gives accsses to a function constructor to acquire the prototype of another function constructor


        let emp1 = new Employee("kanha", "gupta", "21/02/24");
        console.log(emp1.boss());
        console.log(emp1.empdetail()); // it gives error
        

        
        