// OOps in javascript
    //***************OOps after ES-6 *****************//
    
  // define class :-
    class persone{
      // constructor method     
        constructor(n, a){
            this.name = n;
            this.age = a;
        }
      // Prototype method  :- it automaticlly attached to prototype of the object
        sayHi(){
            console.log("it is prototype method");
        }

      // Static method  :- it only accsse by the "class", we cant accsses the static method by object
        static hello(){
            console.log("it is a static method");
        }
      // Static property :- it is also access only by class
        static name = "krishna kumar gupta";
    }
    let persone1 = new persone("krishna", 20);
    console.log(persone1);  // calling constructor method
    persone1.sayHi();       // calling prototype method
    persone.hello();        //  calling static method
    console.log(persone.name);  // calling static property

  // Inheritance :-
    // Parent class
    class empdetail{
      #surname =""          // declare private property by "#propertyName", we can access private property only in class, if we want to access privte property outside the class we have call that private property in method in class then we have to call that method outside the class
      constructor(n, su, a){  
        this.#surname = su;       // declare value of private property
        this.name = n;
        this.age = a;
      }

      hi(){
        console.log("hello there...")
      }
      lastname(){                   // we can also make private function by adding # to the front side of object
        console.log(this.#surname);
      }
    }
    // child class
    class wages extends empdetail{           // "wages" class is inherit the detail of "empdetail" class
      constructor(n, a, s){
        super(n,a)           // we have to use super() method to inherite all the properies of parent class
        this.salary = s;
      }

      info(){
        super.hi()    // calling method of parent class in method of child class
        console.log("my name is " + this.name + " and age is " + this.age + " and my salary is " + this.salary )
      }
    }

  // Multiple inheritance :-
    // grand child class
    class identity extends wages{
      
      constructor(n, a, s,i){
        super(n, a, s, i)
        this.id = i;
      }
    }

    let emp1 = new wages("krishna","gupta", 20, "1200,000");
    // console.log(emp1.name);  // accessing public property of class
    // emp1.info();
    emp1.lastname();   //  accessing private property by function

    // let emp2 = new identity("krishna", 20, "1200000", "1234526");
    // console.log(emp2);

    
  // Mixin :-
    // create object
    let mix = {
      sayHi(){
        console.log("hi....");
      },

      saybye(){
        console.log("bye....");
      }
    }

    // create class 
    class mixin{
      constructor(){
        this.name = "krishna";
      }
    }
    Object.assign(mixin.prototype, mix)  // accessing objects into class
    let x = new mixin();
    console.log(x);
    console.log(x.sayHi());