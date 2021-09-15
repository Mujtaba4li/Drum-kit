var len=document.querySelectorAll(".drum").length;
for(var i=0;i<len;i++){
document.querySelectorAll("button")[i].addEventListener("click",clickedlisner)

 
}
function clickedlisner(){
var letterClicked=this.innerHTML;
switch (letterClicked) {
    case "w":
        var w= new Audio("sounds/crash.mp3");
        w.play();
        break;
    case "a":
        var a= new Audio("sounds/kick-bass.mp3");
        a.play();
        break;
    case "s":
        var s= new Audio("sounds/snare.mp3");
        s.play();
        break;
    case "d":
        var d= new Audio("sounds/tom-1.mp3");
       d.play();
        break;
    case "j":
        var j= new Audio("sounds/tom-2.mp3");
        j.play();
        break;
    case "k":
        var k= new Audio("sounds/tom-3.mp3");
        k.play();
        break;
    case "l":
        var l= new Audio("sounds/tom-4.mp3");
        l.play();
        break;

    default:
        alert("Click is on "+letterClicked)
        break;
}
buttonanimation(letterClicked);
}




    document.addEventListener("keypress", keylisner);
    
     
    
function keylisner(keyname)
{
    var mykey=keyname.key;
   
    switch (mykey) {
        case "w":
            var w= new Audio("sounds/crash.mp3");
            w.play();
            break;
        case "a":
            var a= new Audio("sounds/kick-bass.mp3");
            a.play();
            break;
        case "s":
            var s= new Audio("sounds/snare.mp3");
            s.play();
            break;
        case "d":
            var d= new Audio("sounds/tom-1.mp3");
           d.play();
            break;
        case "j":
            var j= new Audio("sounds/tom-2.mp3");
            j.play();
            break;
        case "k":
            var k= new Audio("sounds/tom-3.mp3");
            k.play();
            break;
        case "l":
            var l= new Audio("sounds/tom-4.mp3");
            l.play();
            break;
    
        default:
            console.log("You press '"+mykey+"' from the keyboard");
            break;
            


    }
    buttonanimation(mykey);
}

    //animation
    function buttonanimation(key)
    {
        var anim=("."+key);
        console.log("Button is "+anim);
        
        document.querySelector(anim).classList.add("pressed");
        setTimeout(function(){
            document.querySelector(anim).classList.remove("pressed");
        },100);
    }
