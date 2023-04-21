const accountnotif = document.querySelectorAll(".account-notif");

const numbernotif = document.getElementById("number-notif");

const alldots = document.getElementById("dot");

const activedots = document.querySelectorAll("#dot");

// accountnotif.forEach((eachaccount) => {
//     eachaccount.addEventListener("click", (e) =>{


//         alldots.classList.add("dotactive", e.target.classList.contains("active"));
//         e.target.classList.add("active");


//         if (numbernotif.innerText > 0) {
//             numbernotif.innerText -= 1;
//         }

//     });

// });

function clickHandler(e) {

    e.target.classList.add("active");
    alldots.classList.add("dotactive", e.target.classList.contains("active"));
    
    if (numbernotif.innerText > 0) {
      numbernotif.innerText -= 1;
    }
  
    e.target.removeEventListener("click", clickHandler);
  }
  
  accountnotif.forEach((eachaccount) => {
    eachaccount.addEventListener("click", clickHandler);
  });
  

const markall = document.querySelector(".mark-all");

markall.addEventListener("click", ()=>{
    accountnotif.forEach((accounts)=>{
        accounts.classList.add("active");
    })

    activedots.forEach((dots)=>{
        dots.classList.add("dotactive");
    })
 
    numbernotif.innerText = 0;
})
