// Browser Object Model : 
    // window object :-
        let butn = document.getElementById("butn");
        let butn1 = document.getElementById("butn1");
        // let butn2 = document.getElementById("butn2");
        let url = "http://www.google.com";
        let features = 'width=500px, height=500px';

        var wind;

        butn.addEventListener('click',function(){    // open other window on the same parameter by name and features of previous window
            wind =  window.open(url, 'google', features,);
        });
        butn1.addEventListener('click',function(){   // open other window on the page by{window.open()}method
            wind = window.open("http://www.yahoo.com",'google',);
        });
        // butn2.addEventListener('click',function(){    // closing window by {variable.close()}
        //     wind.close()
        // });

//********** setTimeout function ******
    // let timeout = setTimeout(fun, 5000);
    // function fun() {
    //     window.open("http://www.google.com","google","width = 500px, height = 500px") 
    // }

    // if(/*condition*/ ){
    //     clearTimeout(timeout);  // clearTimeout use hota hai kisi condition, like sing-in page 
    // }

// ******** Set interval ************
    // var interval = setInterval(fun, 5000);  
    // let butn2 = document.getElementById("butn2");
    // butn2.addEventListener('click',function(){
    //     clearInterval(interval)
    // });

// *********** location method *******
    console.log(location.href);
    console.log(location.pathname);
    console.log(location.protocol);
    
    // let butn3 = document.getElementById("butn3");
    // butn3.addEventListener("click",function(){
    //     location.assign("http://www.google.com")    // location.assign()
    // })

    butn3.addEventListener("click",function(){
        location.replace("http://www.google.com")    // location.replace()  {history will not store in the browser}
    })

// *********navigator ************
    // console.log(navigator.appName);
    // console.log(navigator.appVersion);
    // console.log(navigator.appCodeName);
    // console.log(navigator.javaEnabled());
    // console.log(navigator.cookieEnabled);
    // console.log(navigator.userAgent);
    // console.log(navigator.onLine);
    // console.log(navigator.language);
    
// ********* screen object ********
    // console.log(screen.width);
    // console.log(screen.height);
    // console.log(screen.availWidth);
    // console.log(screen.availHeight);
    // console.log(screen.colorDepth);
    // console.log(screen.pixelDepth);
    // console.log(screen.orientation);

// ********** Localstorage and Sessionstorage 
    // localStorage :-
    localStorage.setItem("mykey","myvalue");
    const myval = localStorage.getItem("mykey");
    console.log(myval);
    localStorage.removeItem("mykey");
    localStorage.clear();

    // SesssionStorage :-
    sessionStorage.setItem("mykey","myvalue");
    const session = sessionStorage.getItem("mykey");
    console.log(session);
    sessionStorage.removeItem("mykey");
    sessionStorage.clear();

