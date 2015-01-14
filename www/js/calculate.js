function valueCheck(){
  var x = document.getElementById('celsius').value;
  var y = document.getElementById('faren').value;
  var z = document.getElementById('kelvin').value;
  if(x != "" && y != "" && z != ""){
    // alert("Please only enter one temperature value");
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
        alert("Please enter a value");
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
   document.getElementById("faren").value = Math.round(F) + "˚ Farenheight";
   document.getElementById("celsius").value += "˚ Celsius"
   document.getElementById("faren").style.color = "#38d8ac";
   document.getElementById("lbl").innerHTML = "Equals";

// Operations on the kelvin textbox
   document.getElementById("kelvin").value = Math.round(K) + " Kelvin";
   document.getElementById("kelvin").style.color = "#38d8ac";
   document.getElementById("lbl2").innerHTML = "Equals";
}

 else if (degree == "F"){

   F = document.getElementById("faren").value;
   C = (F - 32) * 5/9;
   K = C * 1 + 273;
   document.getElementById("celsius").value = Math.round(C) + "˚ Celsius";
   document.getElementById("celsius").style.color = "#38d8ac";
   document.getElementById("faren").value += "˚ Farenheight"
   document.getElementById("lbl").innerHTML = "Equals";

   document.getElementById("kelvin").value = Math.round(K) + " Kelvin";
   document.getElementById("kelvin").style.color = "#38d8ac";
   document.getElementById("lbl2").innerHTML = "Equals";
 }

 else {

   K = (document.getElementById("kelvin").value )
   C = K - 273;
   F = C * 9/5 + 32;

   document.getElementById("faren").value = Math.round(F) + "˚ Farenheight";
   document.getElementById("celsius").style.color = "#38d8ac";
   document.getElementById("kelvin").value += " Kelvin"
   document.getElementById("lbl").innerHTML = "Equals";

   document.getElementById("celsius").value = Math.round(C) + "˚ Celsius";
   document.getElementById("faren").style.color = "#38d8ac";
   document.getElementById("lbl2").innerHTML = "Equals";
 }
}


function clearVal(){
  document.getElementById('celsius').value = "";
  document.getElementById('faren').value = "";
  document.getElementById("kelvin").value = "";
  document.getElementById("kelvin").style.color = "#434343";
  document.getElementById("faren").style.color = "#434343";
  document.getElementById("celsius").style.color = "#434343";
  document.getElementById("lbl").innerHTML = "Or";
  document.getElementById("lbl2").innerHTML = "Or";
}


var calcBtn = document.getElementById('btnCalc')
calcBtn.onclick = valueCheck;
//
var clrBtn = document.getElementById('btnClear')
clrBtn.onclick = clearVal;
//
calcBtn.addEventListener('touchstart', valueCheck, false);
clrBtn.addEventListener('touchstart', clearVal, false);
