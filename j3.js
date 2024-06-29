// // if else condition

// let x = 10;

// if (x <= 10 || x <= 18) {
//     document.write("you are below 18");  //{"document.write", not work if defer attribute laying in script tag}
// }
// else if (x <= 30 || x <= 40) {
//     document.write("your are an adult");
// } else {
//     document.write("the value is wrong")
// }

// let boy = 17;
// let voter_id = "no";

// if( boy  >= 18){
//     if (voter_id == "yes") {
//         alert("you can vote"); 
//     }
//     else if (voter_id == "no"){
//         alert("you dont have voter id");
//     }
// }
// else{
//     alert("you can not vote");
// }

// Ternary opreatore
    let logged_in = 1;

    let option = logged_in == 1 ? "logout": "login";
        document.write(option);

// Nullish_coalescing opertor{ ?? }
    let user;
    // user = "krishna";
    alert(user ?? "guest");


// switch / case:

// let input = 18;

// switch (input) {
//     case  18:
//         document.write("your under age");
//         break;

//         case  28:
//             document.write("you can drive now");
//             break;

//     default:
//         document.write('input wrong');
//         break;
// }