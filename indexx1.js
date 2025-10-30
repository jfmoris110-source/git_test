  // local storage 
//  
//let toggle = function(){
let note_toggle = document.querySelector('#notesw');
let fixy = document.querySelector('#fixy');
note_toggle.addEventListener('click', () => {
  if (fixy.style.display == "none"){
  fixy.style.display = "inline-block";
  fixy.style.width = '90%'; 
  } else {fixy.style.display = "none";
      fixy.style.width = '1px';
  }
});
note_toggle.click();   // ?? or else it needs two clicks before it does anything
// }
// toggle();
let storit = function() {
  if(localStorage.getItem('org_idx')) {
    document.querySelector('#content').innerHTML = localStorage.getItem('org_idx');
  }
}

let editBtn = document.querySelector('#edit_content');
let content = document.querySelector('#content');

editBtn.addEventListener('click', () => {
  content.contentEditable = !content.isContentEditable;
  if(content.contentEditable === 'false') {
    localStorage.setItem('org_idx', content.innerHTML);
  }
});
storit();

function test(){
let all_cats = document.getElementById("fixy");
let cats = document.querySelectorAll("content")
cats.forEach( (cat)=>console.log(cat.innerText )
);
}