let btn = document.querySelector("#btn");
btn.addEventListener("click", tiempo)

function tiempo (){
    let eH = document.querySelector("#eHoras").value;
    let eM = document.querySelector("#eMinutos").value;
    let eS = document.querySelector("#eSegundos").value;
    let sH = document.querySelector("#sHoras").value;
    let sM = document.querySelector("#sMinutos").value;
    let sS = document.querySelector("#sSegundos").value; 
    
    var a = new Date("February 20, 2014 05:28:01");
    var b = new Date("February 20, 2014 03:28:01");
    let en = new Date(0,0,0)
    
    var c = ((a-b)/1000);
    var d = Math.floor(c/3600);
    console.log( d );

}