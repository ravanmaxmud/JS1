var saat = new Date().getHours()
if (saat >= 6 && saat <= 12) {
     alert("Sbahun Xeyir")
     document.body.style.backgroundColor='red'
} else if (saat >= 13 && saat <= 18) {

     alert("Gunortan Xeyir")
     document.body.style.backgroundColor='green'
} else {
     alert("Gejen Xeyre");
     document.body.style.backgroundColor='blue'
}
// function bas(){
//      if(document.body.style.backgroundColor=="white")
//      {
//           document.body.style.backgroundColor='red'
//      }
//       else
//       {
//           document.body.style.backgroundColor='white'
//       }
// }
