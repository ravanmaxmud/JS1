var saat = new Date().getHours()
if (saat >= 6 && saat <= 12) {
     alert("Sbahun Xeyir")
} else if (saat >= 13 && saat <= 18) {

     alert("Gunortan Xeyir")
} else {
     alert("Gejen Xeyre");
}
function bas(){
     if(document.body.style.backgroundColor=="white")
     {
          document.body.style.backgroundColor='red'
     }
      else
      {
          document.body.style.backgroundColor='white'
      }
}
