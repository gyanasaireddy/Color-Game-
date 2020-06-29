// alert("connected")

var nos=6;
var colors=randomColor(nos);
var pickedColor=colorPick();
var squares=document.querySelectorAll(".square");
var message=document.querySelector("#message");
var header=document.querySelector("#header");
var h1=document.querySelector("h1");
var newgm=document.querySelector("#newgm");
var easybtn=document.querySelector("#easyBtn");
var hardbtn=document.querySelector("#hardBtn");

easybtn.addEventListener("click", function(){
  nos=3;
  // h1.style.backgroundColor="#232323";
  h1.style.backgroundColor="steelblue"
  easybtn.classList.add("selected");
  hardbtn.classList.remove("selected");
  colors=randomColor(nos);
  pickedColor=colorPick();
  message.textContent="";
  header.textContent=pickedColor;
  for(var i=0;i<squares.length;i++)
  {
    if(colors[i])
    {
      squares[i].style.backgroundColor=colors[i];
    }
    else
    {
      squares[i].style.display="none";
    }
  }
});

hardbtn.addEventListener("click", function(){
  nos=6;
  // h1.style.backgroundColor="#232323";
  h1.style.backgroundColor="steelblue"
  hardbtn.classList.add("selected");
  easybtn.classList.remove("selected");
  colors=randomColor(nos);
  pickedColor=colorPick();
  message.textContent="";
  header.textContent=pickedColor;
  for(var i=0;i<squares.length;i++)
  {

      squares[i].style.backgroundColor=colors[i];
      squares[i].style.display="block";

  }
});


newgm.addEventListener("click",function(){
  newgm.textContent="new game"
  colors=randomColor(nos);
  pickedColor=colorPick();
  h1.style.backgroundColor="steelblue";
  message.textContent="";
  colorfill();
header.textContent=pickedColor;

})
header.textContent=pickedColor;

colorfill();
for(var i=0;i<squares.length;i++)
{
  

  squares[i].addEventListener("click", function(){
    var selectedColor=this.style.backgroundColor;
    
    if(selectedColor==pickedColor)
    {
      for(var i=0;i<squares.length;i++)
      squares[i].style.backgroundColor=selectedColor;

      h1.style.backgroundColor=selectedColor;
      message.textContent="Correct!!";
      newgm.textContent="Play Again?"
    }
    else{
      this.style.backgroundColor="#232323";
      message.textContent="Try Again!!";
    }

  });

}
function colorfill()
{
  for(var i=0;i<squares.length;i++)
      squares[i].style.backgroundColor=colors[i];
}
function colorPick(){
  var random= Math.floor((Math.random())*colors.length);
  return colors[random];
}

function randomColor(num){
   var arr=new Array();
    for(var i=0;i<num;i++)
  {
    arr.push(randomgen());
  }
  return arr;

}
function randomgen(){
  var r=Math.floor((Math.random())*256);
  var g=Math.floor((Math.random())*256);
  var b=Math.floor((Math.random())*256);
  // var rgb= 
  return "rgb("+r+", "+g+", "+b+")";
}