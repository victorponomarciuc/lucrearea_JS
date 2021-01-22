var i = 1;                
function myLoop() {         
  setTimeout(function() { 
    el = document.createElement('li');  
    el.innerHTML = i;  
    document.getElementById('ul__list').appendChild(el); 
    i++;                    
    if (i < 21) {          
      myLoop();              
    }                       
  }, 2000)
}
myLoop(); 
