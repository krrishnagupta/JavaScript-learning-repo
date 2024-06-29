// *********** String manupilation ************ 

let a = "krishna";
let b = "gupta";
console.log(`hi ${a}`);   //tempate litral

console.log(a.length);   // length of string
console.log(a[4]);  // finding letter in string. 

console.log(a +" "+ b);      //concatination of string.
console.log(a.concat(" ",b));  //concatination of string.

let str = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ";
let str2 = str.substring(6, 26);   //substring
console.log(str2);  
console.log(str.indexOf("amet"));  //indexing **remember in "indexOf" 'O' is always capital.

console.log(str.trim(str));  // trim is used for removing the white_space from the string.

console.log(str.toLowerCase(str)); // "toLowerCase" convert all the string in lowercase

console.log(str.toUpperCase(str));  // "toUpperCase" convert all the string in Uppercase

console.log(str.replace("dolor", "Rupee"));  // "replace" is used to replace the element from the string.

console.log(str.includes("Lorem"));  /* "includes", it check the word or substring in the string ,
                                        if string conatain the word or substring it return 'true' otherwise it returns 'false' */
