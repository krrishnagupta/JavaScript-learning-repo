// import { a } from "./user.js";
// import { module } from "./user.js";
// import { samename } from "./user.js";

    // console.log(a);
    // module();
    // samename();

// shortcut :- 
import {module2, account, accountName, samename as sn} from "./account.js";   // we have to use "as" method to call function, if we have two function with same name in diffrent file 

    // module2();
    // account();
    // console.log(accountName);
    //sn();

// another shortcut methode :-
    import * as usr from "./user.js"
    console.log(usr.a);
    usr.module();
