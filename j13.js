// ****** cloning ******

    // let clone = document.getElementById("clone");
    // let clonex = clone.cloneNode(true);
    // clonex.id = "newclone";
    // document.body.appendChild(clonex);

// ******** replace *********

    // let clone = document.getElementById("clone");  // parent element
    // let service = document.createElement("li");  // create new element
    // service.textContent = "services";  

    // let replace = clone.firstElementChild.nextElementSibling; // give the path where to replace

    // clone.replaceChild(service, replace);  // replace element with new value.

// ******** insert Adjacent HTML **********

    // let elm = document.getElementById("divx");
    // let text = "<h1>yes we do that !!</h1>";
    // elm.insertAdjacentHTML("beforebegin", text);  //  insert html code before div start
    // elm.insertAdjacentHTML("afterbegin", text);   //  insert html code after div start
    // elm.insertAdjacentHTML("beforeend", text);    //  insert html code before div end
    // elm.insertAdjacentHTML("afterend", text);     //  insert html code after div end 

// *********** Change attribute *************
    
    let divx = document.getElementById("divx");
    divx.setAttribute("class", "new");   // set a new attribute
    let vla = divx.getAttribute("class");  // get the value of attribute
    console.log(vla);           
    let vla1 = divx.removeAttribute("name");  // remove the attribute form tag
    let vla2 = divx.hasAttribute("name");  // check the tag if attribute is present in the tag or not.
    console.log(vla2);                       // if it's present it returnes "true" otherwise "false"
    