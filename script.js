/* Declare variables below to save the different sections (divs) of your story*/
let optionone=document.querySelector(".option-one");
optionone.onclick=function(){
let something=document.querySelector(".option-one-screen");  
something.style.display="block";
let story=document.querySelector(".story-opening"); 
story.style.display="none";
let buttons=document.querySelector(".buttons"); 
buttons.style.display="none";
};

let optiontwo=document.querySelector(".option-two");
optiontwo.onclick=function(){
let something1=document.querySelector(".option-two-screen");  
something1.style.display="block";
let story2=document.querySelector(".story-opening"); 
story2.style.display="none";
let buttons=document.querySelector(".buttons"); 
buttons.style.display="none";
};

let optiononee=document.querySelector(".option-onee");
optiononee.onclick=function(){
let something2=document.querySelector(".option-one-screen");  
something2.style.display="none";
let option2 = document.querySelector(".option-two-screen");
option2.style.display="block";
};

let optiontwoo=document.querySelector(".option-twoo");
optiontwoo.onclick=function(){
let something3=document.querySelector(".option-one-end");  
something3.style.display="block";
let option3 = document.querySelector(".option-two-screen");
option3.style.display="none";

};

let optiononeee=document.querySelector(".option-oneee");
optiononeee.onclick=function(){
let something4=document.querySelector(".option-three-end");  
something4.style.display="block";
let option4 = document.querySelector(".option-two-screen");
option4.style.display="none";
};

let optiontwooo=document.querySelector(".option-twooo");
optiontwooo.onclick=function(){
let something5=document.querySelector(".option-two-end");  
something5.style.display="block";
let option5 = document.querySelector(".option-two-screen");
option5.style.display="none";
    
};




/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/


