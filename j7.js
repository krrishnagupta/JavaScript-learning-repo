// Array :

// book = ["english", "maths", "physics", "chemistry"];
// number = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// book[1] = "computer science";  // we can change the value of any index by "Array_name[index] = 'new value' "  
// console.log(book[3]);     // we can access any string in array by entering the index value of it.
// console.log(book);
// console.log(book.length);

// console.log(number);

// number.push('ten');  // "push", opration insert any element on the last index of array.
// console.log(number); 
// number.pop();        //  "pop", opration delete any element on the last index of array.
// console.log(number);

// number.unshift("one")  // "unshift", operation insert any element on the first index of array.
// console.log(number);
// number.shift("one");  // "shift", operation delete any element on the first index of array.
// console.log(number);

// number.splice(1, 1);  // "splice" operation delet any element of any index in array = array.splice(from, how_many);
// console.log(number);

// let position = book.indexOf("physics");   // "indexOf" keyword is used to find the index of any element in the array.
// console.log(position);

// console.log(Array.isArray(book));  // "Array.isArray" is keyword which is used to check array.

// let convert_array = "this is some ranbom text here"
// console.log(convert_array.split(' '));   // '.split', is used to convert some random words into Array .
// console.log(book.join(" "));  // '.join' convert array into simple string.

// let new_array = book.concat(number);
// console.log(new_array);


// Multi dimensional array :

multi = [
    ["krishna", 20 ],
    ["vishal", 21],
    ["khushal", 22],
    ["harsh", 20],
    ["lokesh", 21] 
] 

// console.log(multi);
console.log(multi[0][0]);
// console.log(multi[3][0]);

// for loop in Array :
// for_array = ["krishna", "kanha", "kk", "mahendra","krishna kumar"];
// array_length = for_array.length;

// for (let i = 0; i < array_length ;i++) {
//     console.log(`my name is ${for_array[i]} \n`); 
    
// }

// for_array.forEach(names);

// function names(value) {
//     console.log(value);
// }
