function valueCheck(){
  var x = document.getElementById('celsius').value;
  var y = document.getElementById('faren').value;
  var z = document.getElementById('kelvin').value;

  if((x != "" && y != "") || (x!="" && z != "") || (y!= "" & z!="") || (x != "" && y!= "" & z!="")){

  } else{
      if(x != ""){
        convert('C');
        }
      else if(y != ""){
        convert('F');
        }
      else if(z != ""){
        convert('K');
      }
      else{
        document.getElementById('celsius').placeholder = "Requires Numeric Input";
        document.getElementById('faren').placeholder = "Requires Numeric Input";
        document.getElementById('kelvin').placeholder = "Requires Numeric Input";
        document.getElementById("celsius").style.color = "#D85C38";
        document.getElementById("faren").style.color = "#D85C38";
        document.getElementById("kelvin").style.color = "#D85C38";
        }
      }
    }

function convert(degree){
  if (degree == "C"){
    // declaring variables to hold the values in the textboxes
    C = document.getElementById("celsius").value
    F = C * 9/5 + 32;
    K = C * 1 + 273.15;

    // Operations on the farenheight textbox
    document.getElementById("faren").value = Math.round(F * 100) / 100;
    document.getElementById("celsius").value = C;
    document.getElementById("faren").style.color = "#38d8ac";
    document.getElementById("lbl3").style.visibility = "visible";
    document.getElementById("lbl").style.visibility = "visible";
    // Operations on the kelvin textbox
    document.getElementById("kelvin").value = Math.round(K * 100) / 100;
    document.getElementById("kelvin").style.color = "#38d8ac";
    document.getElementById("lbl2").style.visibility = "visible";
  }

 else if (degree == "F"){

   F = document.getElementById("faren").value;
   C = (F - 32) * 5/9;
   K = C * 1 + 273;
   document.getElementById("celsius").value = Math.round(C * 100) / 100;
   document.getElementById("celsius").style.color = "#38d8ac";
   document.getElementById("faren").value = F;
   document.getElementById("lbl").style.visibility = "visible";
   document.getElementById("lbl3").style.visibility = "visible";

   document.getElementById("kelvin").value = Math.round(K * 100) / 100;
   document.getElementById("kelvin").style.color = "#38d8ac";
   document.getElementById("lbl2").style.visibility = "visible";
 }

 else {

   K = (document.getElementById("kelvin").value )
   C = K - 273;
   F = C * 9/5 + 32;

   document.getElementById("faren").value = Math.round(F * 100) / 100;
   document.getElementById("celsius").style.color = "#38d8ac";
   document.getElementById("kelvin").value += ""
   document.getElementById("lbl").style.visibility = "visible";
   document.getElementById("lbl3").style.visibility = "visible";
   document.getElementById("celsius").value = Math.round(C * 100) / 100;
   document.getElementById("faren").style.color = "#38d8ac";
   document.getElementById("lbl2").style.visibility = "visible";
 }
}


function clearVal(){
  document.getElementById('celsius').value = "";
  document.getElementById('faren').value = "";
  document.getElementById("kelvin").value = "";
  document.getElementById("kelvin").style.color = "#434343";
  document.getElementById("faren").style.color = "#434343";
  document.getElementById("celsius").style.color = "#434343";
  document.getElementById("lbl").style.visibility = "hidden";
  document.getElementById("lbl2").style.visibility = "hidden";
  document.getElementById("lbl3").style.visibility = "hidden";
  document.getElementById('celsius').placeholder = "Temperature In C";
  document.getElementById('faren').placeholder = "Temperature In F";
  document.getElementById('kelvin').placeholder = "Temperature In K";
}

function myFocusFunction(){
  document.getElementById('celsius').value = "";
  document.getElementById('faren').value = "";
  document.getElementById('kelvin').value = "";
  document.getElementById("kelvin").style.color = "#434343";
  document.getElementById("faren").style.color = "#434343";
  document.getElementById("celsius").style.color = "#434343";
  document.getElementById('celsius').placeholder = "Temperature In C";
  document.getElementById('faren').placeholder = "Temperature In F";
  document.getElementById('kelvin').placeholder = "Temperature In K";
}


var txtfocus1 = document.getElementById('celsius')
var txtfocus2 = document.getElementById('faren')
var txtfocus3 = document.getElementById('kelvin')

var calcBtn = document.getElementById('btnCalc')
calcBtn.onclick = valueCheck;
//
var clrBtn = document.getElementById('btnClear')
clrBtn.onclick = clearVal;
//
calcBtn.addEventListener('touchstart', valueCheck, false);
clrBtn.addEventListener('touchstart', clearVal, false);
txtfocus1.addEventListener('focus', myFocusFunction, false );
txtfocus2.addEventListener('focus', myFocusFunction, false);
txtfocus3.addEventListener('focus', myFocusFunction, false);
