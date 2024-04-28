let story = document.getElementById("dialog");
let pee = document.getElementById("pee");

let name = prompt("Please enter your name");
document.getElementById("nickName").innerHTML += name;

$( function() {
    $( "#dialog" ).dialog();
} );

$( "#dialog" ).dialog({
  width: 500,
  height: 400,
});



let lineCounter = 1;
const settingMess = "King Nero was the richest and most powerful human to ever lay foot on planet earth, however one man stood in front of him ready to risk it all.";
let   kingTalkOne = "Welcome ";
      kingTalkOne += name;
      kingTalkOne += ", I've heard great tales of your adventure but I don't think you're ready to Fight The Casino";
const playerTalkOne = "I've spent decades honing my strength to one day take you down and rightfully take what's mine, brother";
const kingTalkTwo = "If you can earn enough money from the then I'll enligthen you but currently I dont have time to spend on trash";
const playerTalkTwo = "I'll destory everything here until its only just you and me";
const kingTalkThree = "You fool, dont you know that the casino always wins";


function messages(lineCounter) {
    if(lineCounter == 1) { 
        story.style.backgroundImage = 'https://www.pikpng.com/pngl/b/50-502013_clash-royale-king-png-clash-royale-hack-png.png';
        return settingMess;
     }else if(lineCounter == 2) {
        return kingTalkOne;
     }else if(lineCounter == 3) {
        return playerTalkOne;
     }else if(lineCounter == 4) {
        return kingTalkTwo;
     }else if(lineCounter == 5) {
        return playerTalkTwo;
     }else if(lineCounter == 6) {
        return kingTalkThree;
     }else 
        return -1;
}

window.addEventListener("load", function(){

     story.addEventListener("click", function() {
        let ret = messages(lineCounter);
        lineCounter++;
        if(ret == -1) {
            $( '#dialog').dialog('close');
            return;
        }
        pee.innerHTML = ret;
    });

});












