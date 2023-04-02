var now=new Date,hour=now.getHours();document.getElementById("greeting").textContent=hour<12?"Good Morning !":hour<18?"Good Afternoon !":hour<22?"Good Evening !":"Good Night !";
