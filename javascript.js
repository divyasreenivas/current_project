// const { JSDOM } = require('jsdom');

//const dom = new JSDOM('<!DOCTYPE html><div id="count"></div>');
// const document = dom.window.document;

let countel= document.getElementById("count-el")
countel.appendChild
let saveel =document.getElementById("save-el")
let count = 0

console.log(saveel)
function increment(){
    count+=1
    countel.textContent=count

}

function save(){
   let  both = count + " - " 
    saveel.textContent+= both
    console.log(count)
    countel.textContent=0
    count =0
}

let welcome =document.getElementById("welcome")
let name = "anurag" 
let greeting ="hello my name is "

welcome.textContent=greeting+name
