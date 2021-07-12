function myFunctionUS() { /* function of finding results from list (US) */
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInputUS");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


function myFunctionUK() { /* function of finding results from list (UK) */
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInputUK");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myULUK");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function alll(){
  document.getElementById("indicator").style.transform = "translateX(0%)";
}

function image(){
  document.getElementById("indicator").style.transform = "translateX(175%)";
}

function video(){
  document.getElementById("indicator").style.transform = "translateX(350%)";
}







//function hidesearUS() {
   // var copyText = document.getElementById("myInputUS");
    //copyText.select();
    //copyText.setSelectionRange(0, 99999)
    //document.execCommand("copy");
    
  //}




/* function of cahging the US formate of search */ 
 function changebackgroundToUK(){ // change background color for Head ..
    document. getElementById('searchbox'). style. backgroundColor = 'green' ;
  }
//function hidesearUS() {
//    document.getElementById("myInputUS").style.display = "none";
//  }
//function hidebtnUS() {
//    document.getElementById("btnUS").style.display = "none";
//  }

//function showsearUK() {
 //   document.getElementById("myInputUK").style.display = "block";
 // }
//function showbtnUK() {
  //  document.getElementById("btnUK").style.display = "block";
 // }




/* function of cahging the UK formate of search */ 
function changebackgroundToUS(){ // change background color for Head ..
    document. getElementById('searchbox'). style. backgroundColor = '#0AFFA0' ;
 }
//function hidesearUK() {
  //  document.getElementById("myInputUK").style.display = "none";
 // }
//function hidebtnUK() {
 //   document.getElementById("btnUK").style.display = "none";
 // }

//function showsearUS() {
  //  document.getElementById("myInputUS").style.display = "block";
  //}
//function showbtnUS() {
  //  document.getElementById("btnUS").style.display = "block";
 // }