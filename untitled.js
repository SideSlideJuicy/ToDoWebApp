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