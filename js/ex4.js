function colorChange()
{
    let r = document.getElementById("red").value;
    let g = document.getElementById("green").value;
    let b = document.getElementById("blue").value;
    let w = document.getElementById("width").value;

    let b_r = document.getElementById("bred").value;
    let b_g = document.getElementById("bgreen").value;
    let b_b= document.getElementById("bblue").value;

    let p = document.getElementById("dummy");

    let check1 = r==""||g==""||b=="";
    let check2 = b_r==""||b_g==""||b_b=="";

    if(check1 && check2)
    {
        alert("Please fill out color codes");
    }
    else if(!check1 && check2)
    {
        p.style.border = w+"px solid "+"rgb("+r+","+g+","+b+")";
        document.getElementById("border").reset(); 
    }
    else if(check1 && !check2)
    {
        p.style.backgroundColor = "rgb("+b_r+","+b_g+","+b_b+")";
        document.getElementById("background").reset();    
    }
    else
    {
        p.style.border = w+"px solid "+"rgb("+r+","+g+","+b+")";
        p.style.backgroundColor = "rgb("+b_r+","+b_g+","+b_b+")"; 
        document.getElementById("border").reset();
        document.getElementById("background").reset();   
    }

}

function colorReset()
{
    let p = document.getElementById("dummy");
    
    p.style.border = "none";
    p.style.backgroundColor = "white";
    document.getElementById("border").reset();
    document.getElementById("background").reset();
}