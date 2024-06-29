// ************* Loops ************

// While loop 

    // let x = 1;
    // while (x <= 10) {
    //     document.write(x);
    //     x++;
    // }

    // let even = 0;
    // let sum = 0;
    // while (even <= 20) {
    //     if (even % 2 == 0) {
    //         sum = even + sum; 
    //     }
    //     even++;
    // }
    // document.write(sum);

// do while loop
    // let x = 12;
    // do{
    //     document.write(x);
    //     x++;
    // }while (x <= 10);

// For loop

// for (let index = 1; index <= 10; index++) {
//     document.write("2"+" * "+ index + " = " + 2 * index);
//     document.write('<br>');  
// }

// ** nested loop **

    // for(let value = 1; value <= 10; value++){
    //     document.write(value + "<br>");
    //     for(let spell = 1; spell <= 1; spell++){
    //         document.write("krishna" + "<br>");
    //     }
    //     for(let spell1 = 1; spell1 <= 1; spell1++){
    //         document.write("Gupta" + "<br>");
    //     }
    // }

// ********** loop end **********

// ********** break and continue statement **********

    for (let ind = 1; ind <= 10; ind++) {   
        if (ind == 5){
            break;
        }
        document.write(ind + '<br>');
    }

    // for (let int = 1; int <= 10; int++) {   
    //     if (int == 5){
    //         continue;
    //     }
    //     document.write(int + '<br>');
    // }


    // outer : for (let value = 1; value <= 10; value++){   // lable = "name :" like outer : for(){}
    //     document.write(value + "<br>");
    //     for(let spell = 1; spell <= 1; spell++)
    //     {
    //         document.write("krishna" + "<br>");

    //         if(value == 5){
    //             break outer;
    //         }
    //     }
    //     for(let spell1 = 1; spell1 <= 1; spell1++){
    //         document.write("Gupta" + "<br>");
    //     }  
    // }