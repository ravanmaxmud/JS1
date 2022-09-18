// var saat = new Date().getHours()
// if (saat >= 6 && saat <= 12) {
//      alert("Sbahun Xeyir")
//      document.body.style.backgroundColor='red'
// } else if (saat >= 13 && saat <= 18) {

//      alert("Gunortan Xeyir")
//      document.body.style.backgroundColor='green'
// } else {
//      alert("Gejen Xeyre");
//      document.body.style.backgroundColor='blue'
// }
function btnbg(){
     if(document.body.style.backgroundColor=="white")
     {
          document.body.style.backgroundColor='red'
     }
      else
      {
          document.body.style.backgroundColor='white'
      }
}
function btn(){
     var text = document.getElementById('input').value
     var result = text.slice(-3,-2);
     console.log(result)
     if(result == 3){
          document.body.style.backgroundColor='blue'
          document.getElementById('h4').innerHTML=text;
          document.getElementById('h4').style.color ='white'
     }
     else if(result ==2){
          document.body.style.backgroundColor='yellow';
          document.getElementById('h4').innerHTML=text;
          document.getElementById('h4').style.color ='black'
     }
     else if(result == 1){
          document.body.style.backgroundColor='purple';
          document.getElementById('h4').style.color ='green'
          document.getElementById('h4').innerHTML=text;
     }
     else{
          alert("Not Found!!!");
     }
}