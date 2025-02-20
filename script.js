const audio1=new Audio("audios/boom.wav");
const audio2=new Audio("audios/clap.wav");
const audio3=new Audio("audios/hihat.wav");
const audio4=new Audio("audios/kick.wav");
const audio5=new Audio("audios/openhat.wav");
const audio6=new Audio("audios/ride.wav");
const audio7=new Audio("audios/snare.wav");
const audio8=new Audio("audios/tink.wav");
const audio9=new Audio("audios/tom.wav");

document.getElementById("button1").addEventListener("click", function(){
    audio1.play();
});
document.getElementById("button2").addEventListener("click",function(){
    audio2.play();
});
document.getElementById("button3").addEventListener("click",function(){
    audio3.play();
});
document.getElementById("button4").addEventListener("click",function(){
    audio4.play();
});
document.getElementById("button5").addEventListener("click",function(){
    audio5.play();
});
document.getElementById("button6").addEventListener("click",function(){
    audio6.play();
});
document.getElementById("button7").addEventListener("click",function(){
    audio7.play();
});
document.getElementById("button8").addEventListener("click",function(){
    audio8.play();
});
document.getElementById("button9").addEventListener("click",function(){
    audio9.play();
});

document.addEventListener("keydown", function(event){
    if(event.key==="a"|| event.key==="A"){
        audio1.play();
    }
        else if(event.key==="b"|| event.key==="B"){
            audio2.play();
        }
        else if(event.key==="c"|| event.key==="C"){
            audio3.play();
        }
        else if(event.key==="d"|| event.key==="D"){
            audio4.play();
        }
        else if(event.key==="e"|| event.key==="E"){
            audio5.play();
        }
        else if(event.key==="f"|| event.key==="F"){
            audio6.play();
        }
        else if(event.key==="g"|| event.key==="G"){
            audio7.play();
        }
        else if(event.key==="h"|| event.key==="H"){
            audio8.play();
        }
        else if(event.key==="k"|| event.key==="K"){
            audio9.play();
        }
});




