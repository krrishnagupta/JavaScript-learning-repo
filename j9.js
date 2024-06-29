// Objects in javascript :

// syntax :    let variable_name = { }

    let object = {
        firstName : "krishna",
        middleName : "kumar",
        lastName : "gupta",
        DOB : "06/06/2003"
    }
    // console.log(persone);
    // console.log(object.DOB);          // thers two way of calling an a object.
    // console.log(object.firstName);      // 1st way (dot notation)
    // console.log(object["lastName"]);   // 2nd way  (array notation)


    // object.age = 20;    // adding new property to the object.
    // console.log(object);

    // object.firstName = "kanha";   // changing the value of property.
    // console.log(object.firstName); 

    // delete object.middleName;    // deleting the property of object.
    // console.log(object);

    // console.log("adhar" in object);    // chacking the value or property is exist or not in the object. it returns only false or true.
    // console.log("age" in object);

    // // for in loop in object :- is used to itrate all the properties of an object.

    for(let key in object){
        // document.write(key);
        document.write(key + " : " + persone[key] + ", "); // we have to use 2nd way :-" (object[variable]) ", to call the value of properties in the object.
        document.write("<br>")
    }

// Methods in object: there are 4 ways to make a methods in object

    // let object = 
    // {
    //     firstName : "krishna",
    //     middleName : "kumar",
    //     lastName : "gupta",
    //     DOB : "06/06/2003",

        // wayThree : function(){    // 3rd way
        //     console.log("hello");
        // }

        //wayFour (){                     // 4th way  {es6}
        //  console.log("hello there");   
        //}
    // }
    // object.wayThree();

    // object.wayFour();


    // object.wayOne = function(){    // 1st way
    //     console.log("hello");
    // }
    // object.wayOne();


    // function waySecond (){           // 2nd way
    //     console.log("hello");
    // }
    // object.second = waySecond();

    // let person = {
    //     name: "krishna",
    //     surname: "gupta",
    //     age : 20,
        
    //     seo6 (){
    //         console.log( "iam "+ this.name + " and i have " + car.name +" " + "car")
    //     }
    // }

    // let car  = {
    //     name : "Tata",
    //     model : "safari"
    // }

    // person.seo6();

// Math object : 

    // let x = Math.sqrt(4);  // squreroot

    // let x = Math.pow(4, 2);  // power

    // let x = Math.PI;  // pi

    // let x = Math.random();
    // console.log(x);

    // function random(min, max){
    //     let x = Math.floor(Math.random()*(max - min + 1))+ min;
    //     return x;
    // }

    // let a = random(10, 30);
    // console.log(a);