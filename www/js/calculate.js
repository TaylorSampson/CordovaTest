function valueCheck(){
  var x = document.getElementById('celsius').value;
  var y = document.getElementById('faren').value;
  if(x != "" && y != ""){
    alert("Please only enter one temperature value");
  } else{
      if(x != ""){
        convert('C');
        }
      else if(y != ""){
        convert('F');
        }
      else{
        alert("Please enter a value");
        }
      }
    }


function convert(degree){
 if (degree == "C"){
   F = document.getElementById("celsius").value * 9/5 + 32;
   document.getElementById("faren").value = Math.round(F);
   document.getElementById("faren").style.color = "#38d8ac";


 }else{
   C = (document.getElementById("faren").value - 32) * 5/9;
   document.getElementById("celsius").value = Math.round(C);
   document.getElementById("celsius").style.color = "#38d8ac";
 }
}

function clearVal(){
  document.getElementById('celsius').value = "";
  document.getElementById('faren').value = "";
  document.getElementById("faren").style.color = "#434343";
  document.getElementById("celsius").style.color = "#434343";
}
