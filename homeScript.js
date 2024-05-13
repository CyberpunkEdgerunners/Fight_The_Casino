let story = document.getElementById("dialog");
let pee = document.getElementById("pee");
let storyPic = document.getElementById("imgD");


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

//ask the user only once for the name and will save the info for next time
//clear cookies from history in order to enter a new name
let nameFlag = getCookie("name");
if(!nameFlag) {
    let name = prompt("Please enter your name");
    document.cookie = "name=" + name;
}
document.getElementById("nickName").innerHTML += getCookie("name");

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

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
} 




let lineCounter = 1;
const settingMess = "King Nero was the richest and most powerful human to ever lay foot on planet earth, however one man stood in front of him ready to risk it all.";
let   kingTalkOne = "Welcome ";
kingTalkOne += nameFlag;
kingTalkOne += ", I've heard great tales of your adventure but I don't think you're ready to Fight The Casino";
const playerTalkOne = "I've spent decades honing my strength to one day take you down and rightfully take what's mine, brother";
const kingTalkTwo = "If you can earn enough money from the casino then I'll enligthen you but currently I dont have time to spend on you lil bro";
const playerTalkTwo = "I'll play your dumb games but I'll destory everything here until its only just you and me";
const kingTalkThree = "You fool, dont you know that the house always wins";


function messages(lineCounter) {

    switch(lineCounter) {
        case 1:    
            storyPic.src = "https://i.imgur.com/hNCqe6H.png";
            return settingMess;

        case 2:
            storyPic.src = "https://i.imgur.com/vLmXVUC.png";
            return kingTalkOne;

        case 3: 
            storyPic.src = "https://i.imgur.com/npnRwbJ.png";
            return playerTalkOne;

        case 4:
            storyPic.src = "https://i.imgur.com/vLmXVUC.png";
            return kingTalkTwo;

        case 5: 
            storyPic.src = "https://i.imgur.com/npnRwbJ.png";
            return playerTalkTwo;

        case 6:
            storyPic.src = "https://i.imgur.com/vLmXVUC.png";
            return kingTalkThree;

        default:
            return -1;
    }
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

    document.getElementById("mainImg").addEventListener("click", function() {
        $('#dialog').dialog('close');
    });

});












