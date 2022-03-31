

for(var i=0;i<document.querySelectorAll("button").length;i++)
{
  
  document.querySelectorAll("button")[i].addEventListener("click",function(){
      
    var alphabet=this.id;
  console.log(alphabet);
    makesound(alphabet);
    flash(alphabet);
  });

}


    document.addEventListener('keydown',function(){
      makesound(event.key);
      flash(event.key);
    },false);
  
    // document.addEventListener('keydown',makesound(event.key),false);
    
    function flash(alphabet)
    {
         var flashkey=document.querySelector("."+alphabet);
         var flashclass=flashkey.classList.add("pressed");
           setInterval(() => {
             flashkey.classList.remove("pressed")
           }, 100);
    }
function makesound(alphabet)
{  

  switch(alphabet)
   {
     case "w":
  var audio1 = new Audio("../dancestat/sounds/drum.mp3");
  audio1.play();
  break;

  case "a":
  var audio2 = new Audio("../dancestat/sounds/drum.mp3");
  audio2.play();
  break;

  case "s":
    var audio3 = new Audio("../dancestat/sounds/drum.mp3");
    audio3.play();
    break;

  
  // case "s":
  // var aud = new Audio("./");
  // aud.play();
  // break;

  case "d":
  var audio4 = new Audio("../dancestat/sounds/drum.mp3");
  audio4.play();
  break;

  case "j":
    var audio5 = new Audio("../dancestat/sounds/crash.mp3");
    audio5.play();
    break;

    case "k":
    var audio6 = new Audio("../dancestat/sounds/kick-bass.mp3");
    audio6.play();
    break;

    case "l":
    var audio7 = new Audio("../dancestat/sounds/snare.mp3");
    audio7.play();
    break;

      default:
        console.log(alphabet);
}
}
  
    // document.addEventListener('keydown', (event) => {
    //   var name = event.key;
    //   var code = event.code;
    //   // Alert the key name and key code on keydown
    //   alert(`Key pressed ${name} \r\n Key code value: ${code}`);
    // }, false);