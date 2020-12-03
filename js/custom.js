window.onload=()=>{
    //TIMER
    let elementsArray = document.querySelectorAll(".food");
    let myTimer;
    let counter=new Map();
    elementsArray.forEach( (elem)=> {
        elem.addEventListener("mouseover", (e)=> {
            counter[elem.id]=0;
            myTimer=setInterval(
                ()=>{
                    counter[elem.id]++;
                }, 1000
            )
            elem.style.background='cyan';
            console.log("INSIDE "+ elem.id);
            e.stopImmediatePropagation();
        }, true);

        elem.addEventListener("mouseout", (e)=> {
            elem.lastElementChild.lastElementChild.lastElementChild.innerHTML=counter[elem.id];
            elem.style.background='white';
            console.log("OUTSIDE "+ elem.id);
            clearInterval(myTimer);
            e.stopImmediatePropagation();
        }, true);
    });

    // PRODUCT CATEGORY SELECT
    let selElem=document.getElementById("selectProdType");
    selElem.addEventListener("change", (e)=>{
        switch(selElem.value) {
            case "selFruits": {
                document.getElementById("containerFruits").style.display="block";
                document.getElementById("containerVegetables").style.display="none";
                break;
            }
            case "selVegetables": {
                document.getElementById("containerFruits").style.display="none";
                document.getElementById("containerVegetables").style.display="block";
                break;
            }
            case "selAll":{
                document.getElementById("containerFruits").style.display="block";
                document.getElementById("containerVegetables").style.display="block";
                break;
            }
            default:
                break;
        }
    })

    // REDIRECT TO CART
    let itemBtns = document.querySelectorAll(".item-btn"); 
    itemBtns.forEach( (itemBtn)=> {
        itemBtn.addEventListener("click", ()=> {
            document.location.href="html/cart.html";
        })
    });

    // VALIDATE EMAIL
    document.getElementById("validateBtn").addEventListener("click", ()=> {
        let inputEmailValue = document.getElementById("inputEmailValue").value;
        atpos = inputEmailValue.indexOf("@");
        dotpos = inputEmailValue.lastIndexOf(".");

        if (atpos < 1 || ( dotpos - atpos < 2 )) {
            document.getElementById("inputEmailValue").className = "email-warning";
            return false;
        }
        document.getElementById("inputEmailValue").className = "email-valid";
        return true;
    })

    // SEARCH ITEM 
    let inputSearch=document.getElementById("inputSearch");
    inputSearch.addEventListener("keyup", (e)=> {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("inputSearch");
        filter = input.value.toUpperCase();
        let parent = document.getElementsByClassName("panel-heading");
        for (i = 0; i < parent.length; i++) {
            txtValue = parent[i].textContent || parent[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                parent[i].parentElement.parentElement.style.display = "";
            } else {
                parent[i].parentElement.parentElement.style.display = "none";
            }
        }      
    })
    
    // STORE HISTORY EVENT
    inputSearch.addEventListener("keypress", (e)=>{
        if(e.code=="Enter"){
            optionMaker(inputSearch.value);
            e.preventDefault();
            inputSearch.value = '';
        }
    })
}



const optionMaker = (text) => {
    const historyOptions = document.createElement("option");
    historyOptions.setAttribute("value", text);
    var t = document.createTextNode(text);
    historyOptions.appendChild(t);
    document.getElementById("selectHistory").appendChild(historyOptions);
    //alert(document.getElementById("selectHistory").outerHTML);
}

// $(document).ready(function(){
//     $("select").change(function(){
//         $(this).find("option:selected").each(function(){
//             var optionValue = $(this).attr("value");
//             if(optionValue){
//                 $(".box").not("." + optionValue).hide();
//                 $("." + optionValue).show();
//             } 
//             else{
//                 $(".box").hide();
//             }
//         });
//     }).change();
//     $(window).keydown(function(event){
//         if(event.keyCode == 13 && (noenter()== true)) {
//           event.preventDefault();
//           return false;
//         }
//       });
// });


//  let counter=new Map();
//  let myTimer;

// function incrementCounter(elem) {
//     //alert(elem.id);
//     counter[elem.id]=0;
//     myTimer=setInterval(
//         ()=>{
//             counter[elem.id]++;
//         }, 1000
//     )
//     elem.style.background='cyan';
//     console.log("INSIDE "+ elem.id);
// }

// function displayNresetCounter(elem) {
//     //alert(elem.lastElementChild.lastElementChild.lastElementChild);
//     //alert(counter[elem.id]);
//     elem.lastElementChild.lastElementChild.lastElementChild.innerHTML=counter[elem.id];
//     elem.style.background='white';
//     console.log("OUTSIDE "+ elem.id);
//     clearInterval(myTimer);
// }