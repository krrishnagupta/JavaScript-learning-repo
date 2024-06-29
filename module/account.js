let accountName = "krishna kumar gupta";
let accountNo = "1234567890";

function module2 (){
    console.log("haa bhai account access hogya");
}

function account(){
    console.log("ye bhi acceess hogya");
}
export function samename(){
    console.log("dono file me same funtion hai");
}

// shortcut method to export element 
    export{module2, account, accountName}
    