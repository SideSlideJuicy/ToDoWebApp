var div = document.getElementById('upcoming-content');
var display = 0;

function upcoming()
{
    if(display == 1)
    {
        div.style.display = 'block';
        display = 0;
    }
    else
    {
        div.style.display = 'none'; 
        display = 1;
    }
}



var div2 = document.getElementById('completed-content');
var display2 = 0;

function completed()
{
    if(display2 == 1)
    {
        div2.style.display = 'block';
        display2 = 0;
    }
    else
    {
        div2.style.display = 'none'; 
        display2 = 1;
    }
}



var div3 = document.getElementById('overdue-content');
var display3 = 0;

function overdue()
{
    if(display3 == 1)
    {
        div3.style.display = 'block';
        display3 = 0;
    }
    else
    {
        div3.style.display = 'none'; 
        display3 = 1;
    }
}








// Date
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = d + "/" + m + "/" + y;






Scroll = (
    function(){
          var x,y;
         function hndlr(){
            window.scrollTo(x,y);
            //return;
          }  
          return {

               disable : function(x1,y1){
                    x = x1;
                    y = y1;
                   if(window.addEventListener){
                       window.addEventListener("scroll",hndlr);
                   } 
                   else{
                        window.attachEvent("onscroll", hndlr);
                   }     

               },
               enable: function(){
                      if(window.removeEventListener){
                         window.removeEventListener("scroll",hndlr);
                      }
                      else{
                        window.detachEvent("onscroll", hndlr);
                      }
               } 

          }
    })();



function newTaskButton(){
    document.getElementById("new-task").classList.toggle("active");
    Scroll.disable(0,document.body.scrollTop);

    document.getElementById('task-name').value = "";
    document.getElementById('task-description').value = "";
    document.getElementById("add-btn").disabled = true; 
    document.getElementById('date').checked = false;
    document.getElementById('time').checked = false;
    document.getElementById('repeat').checked = false;
    document.getElementById('priority').checked = false;
    document.getElementById('notifications').checked = false;


        
    

}


        

        


function btnActivation(){

    if(!document.getElementById('task-name').value.length){
        document.getElementById("add-btn").disabled = true;            
    }else{
        document.getElementById("add-btn").disabled = false;

    }           
}

function addTaskButton(){
    document.getElementById("new-task").classList.toggle("active");

    document.getElementById('task-name').value = "";
    document.getElementById('task-description').value = "";
    document.getElementById("add-btn").disabled = true; 
    Scroll.enable();
}

function cancelTaskButton(){
    document.getElementById("new-task").classList.toggle("active");

    document.getElementById('task-name').value = "";
    document.getElementById('task-description').value = "";
    document.getElementById("add-btn").disabled = true; 
    Scroll.enable();
}














function date(){
    document.getElementById('time').checked = false;
    document.getElementById('repeat').checked = false;
    document.getElementById('priority').checked = false;
    document.getElementById('notifications').checked = false;
}

function time(){
    document.getElementById('date').checked = false;
    document.getElementById('repeat').checked = false;
    document.getElementById('priority').checked = false;
    document.getElementById('notifications').checked = false;
}

function repeat(){
    document.getElementById('time').checked = false;
    document.getElementById('date').checked = false;
    document.getElementById('priority').checked = false;
    document.getElementById('notifications').checked = false;
}

function priority(){
    document.getElementById('time').checked = false;
    document.getElementById('repeat').checked = false;
    document.getElementById('date').checked = false;
    document.getElementById('notifications').checked = false;
}

function notifications(){
    document.getElementById('time').checked = false;
    document.getElementById('repeat').checked = false;
    document.getElementById('priority').checked = false;
    document.getElementById('date').checked = false;
}







function preventScroll(e){
    e.preventDefault();
    e.stopPropagation();

    return false;
}

var disableBodyScroll = function(){
    
}










function clearNewTaskContent(){

}