var qna={
    hey:"hey, i am ronnie",
    hi:"hi, i am Ronnie",
    iamfine:"glad to know",
    howareyou:"im fine,thanks, what about you?",
    areyouhuman:"yes bruh.. ",
    really:"bruh...",
    tellmeajoke:"why did the chicken cross the road? To get to the other side. haha",
    bye:"bye",
    whereareyoufrom:"im from mars",
    imgood:"good to hear",
    imfine:"good to hear",
    imprettygood:"good to hear",
    tellmeastory:"there's a boy who's an idiot and trying to chat with me",
    nicetomeetyoutoo:":)",
    gladtomeetyoutoo:":)",
    nicetomeetyou:":)     wanna hear a joke",
    yes:"why did the chicken cross the road? To get to the other side. haha" ,
    thankyou:"you're welcome",
    thanks:"you are welcome",
    goodmorning:"good morning have a great day",
    goodafternoon:"good afternoon",
    goodevening:"good evening hows your day",
    goodnight:"good night",
    whatsyourname:"my name is ronnie",
    good:"glad to know",
 iam:"ok",
 canyousing:"no i can't",
 whatcanyoudo:"i can sleep all day",
 youtoo:"thanks",
 yourewelcome:":)",
 youarewelcome:":)"
};

var aqna={};

function inp(){
    x=document.getElementById('chatbox');
    let y=x.value.split(' ').join('');
        y=y.toLowerCase();
    let s=y.replace(/[!@#$%^&*()<>?.,'";:{}=+-_]/g,'');
  document.getElementById("usersent").innerHTML="you: "+ x.value;
  document.getElementById('chatbox').value='';
  
  if(s!=''){

  
     if(s in qna){      
        document.getElementById("reply").innerHTML="Ronny: "+ qna[s];
    }
    else if(s in aqna){
      document.getElementById("reply").innerHTML="Ronny: "+ aqna[s];
}
    else{              
document.getElementById("reply").innerHTML="Rony: i could not understand";
    }
  }
}


function addQnA(){
document.getElementById("bodybox").style.display="none";
document.getElementById("uqna").style.display="block";
}
function home(){
document.getElementById("bodybox").style.display="block";
document.getElementById("uqna").style.display="none";
}



function submitQnA(){
x=document.getElementById('aq');
let y=x.value.split(' ').join('');
y=y.toLowerCase();
let s=y.replace(/[!@#$%^&*()<>?.,'";:{}=+-_]/g,'');
answer=document.getElementById("aa").value;
aqna["s"]=answer;
window.alert("thanks for the feedback");
document.getElementById('aq').value='';
document.getElementById('aa').value='';

}






document.onkeypress = keyPress;
function keyPress(e) {
var x = e || window.event;
var key = (x.keyCode || x.which);
if (key == 13 || key == 3) {
//runs this function when enter is pressed
inp();
}
if (key == 38) {
console.log('hi')
}
}
