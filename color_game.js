

var num=6;
var colors=generatecolors(num);
var pickcolor=pickscolor() ;
var msg = document.querySelector("#msg");
var s = document.querySelectorAll(".square");
var c = document.querySelector(".color");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

easy.addEventListener("click",function(){
	num=3;
	reset.textContent = "New Colors!";
  msg.textContent = "";
	easy.classList.add("selected");
	hard.classList.remove("selected");
	colors=generatecolors(3);
	 pickcolor=pickscolor() ;
	 h1.style.backgroundColor ="skyblue";
	for(var i=0;i<s.length;i++)
  { 
  	if(colors[i]){
  	s[i].style.backgroundColor = colors[i];
  }
  else{
  	s[i].style.display = "none";
  }
  }
  c.textContent = pickcolor;


})

hard.addEventListener("click",function(){
	hard.classList.add("selected");
	 h1.style.backgroundColor ="skyblue";
	easy.classList.remove("selected");
	reset.textContent = "New Colors!";
  msg.textContent = "";
	num = 6;
	colors=generatecolors(6);
	 pickcolor=pickscolor() ;
	  c.textContent = pickcolor;
	for(var i=0;i<s.length;i++)
  { 
  
  	s[i].style.backgroundColor = colors[i];
  	s[i].style.display = "block";
  }
 
  
 
})


reset.addEventListener("click",function(){
	 colors=generatecolors(num);
	  h1.style.backgroundColor ="skyblue";
	 pickcolor=pickscolor() ;
	 c.textContent = pickcolor;
	reset.textContent = "New Colors!";
  msg.textContent = "";
	for(var i=0;i<s.length;i++)
  {
      	if(colors[i]){
  	s[i].style.backgroundColor = colors[i];
  }
  else{
  	s[i].style.display = "none";
  	}
  }
})
c.textContent = pickcolor;
for(var i=0;i<s.length;i++)
  {
  	s[i].style.backgroundColor = colors[i];

  	 s[i].addEventListener("click",function(){
  	  var clickcolor = this.style.backgroundColor;

  	  if(clickcolor==pickcolor)
  	  {
  	  	msg.textContent = "Correct";
  	  	change(pickcolor);
  	  	h1.style.backgroundColor =pickcolor;
  	  	reset.textContent = "Play Again?";
  	  }
  	  else
  	  {
  	  	msg.textContent = "Try Again";
  	  	this.style.backgroundColor = "black";
  	  }
  })

  }
  function change(color)
   {
   	for(var i=0;i<s.length;i++)
   		  {
   		  	s[i].style.backgroundColor = color;
   		  }
   		  
   }

 function pickscolor() {
 	var color = Math.floor(Math.random()*colors.length);
 	return colors[color];
 	// body...
 }

 function generatecolors(n){
     
     var a=[];
      for(var i=0;i<n;i++)
      	 {
      	 	var r=Math.floor(Math.random()*256);
      	 	var b=Math.floor(Math.random()*256);
      	 	var g=Math.floor(Math.random()*256);
      	 	var k = "rgb("+r+", "+g+", "+b+")";
      	 	a.push(k);
      	 }
      	 return a;
 }