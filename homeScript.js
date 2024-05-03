let story = document.getElementById("dialog");
let pee = document.getElementById("pee");
let storyPic = document.getElementById("imgD");


let name = prompt("Please enter your name");
document.getElementById("nickName").innerHTML += name;


// id = dialog makes a pop up dialog
// the #id has to be a div element 
// use $("#id").dialog('close'); to close the box
$( function() {
    $( "#dialog" ).dialog();
} );

// id = dialog makes the height and width of the pop up
$( "#dialog" ).dialog({
  width: 500,
  height: 500,
});



let lineCounter = 1;
const settingMess = "King Nero was the richest and most powerful human to ever lay foot on planet earth, however one man stood in front of him ready to risk it all.";
let   kingTalkOne = "Welcome ";
      kingTalkOne += name;
      kingTalkOne += ", I've heard great tales of your adventure but I don't think you're ready to Fight The Casino";
const playerTalkOne = "I've spent decades honing my strength to one day take you down and rightfully take what's mine, brother";
const kingTalkTwo = "If you can earn enough money from the casino then I'll enligthen you but currently I dont have time to spend on trash";
const playerTalkTwo = "I'll destory everything here until its only just me and you";
const kingTalkThree = "You fool, dont you know that the casino always wins";


function messages(lineCounter) {
    if(lineCounter == 1) { 
        storyPic.src = "https://i.imgur.com/hNCqe6H.png";
        return settingMess;
     }else if(lineCounter == 2) {
        storyPic.src = "https://i.imgur.com/vLmXVUC.png";
        return kingTalkOne;
     }else if(lineCounter == 3) {
        storyPic.src = "https://i.imgur.com/npnRwbJ.png";
        return playerTalkOne;
     }else if(lineCounter == 4) {
        storyPic.src = "https://i.imgur.com/vLmXVUC.png";
        return kingTalkTwo;
     }else if(lineCounter == 5) {
        storyPic.src = "https://i.imgur.com/npnRwbJ.png";
        return playerTalkTwo;
     }else if(lineCounter == 6) {
        storyPic.src = "https://i.imgur.com/vLmXVUC.png";
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











