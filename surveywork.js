const fame=document.getElementById("name");
var tot=0;
var ages = document.getElementById("age").value;
if(Number(ages)>=60){
    tot+=8;
}
else if(Number(ages)>=40){
    tot+=6;
    
}
else if(Number(ages)>=10){
    tot+=1;
}
else if(Number(ages)<10){
    tot+=3;
}
function dill(){
    tot+=6;
}
document.getElementById("cold").addEventListener("click",dill);
function dull(){
    tot+=2;
}
document.getElementById("cough").addEventListener("click",dull);
function mull(){
    tot+=1;
}
document.getElementById("headache").addEventListener("click",mull);
function bull(){
    tot+=10;
}
document.getElementById("breathing difficulties").addEventListener("click",bull);
function rull(){
    tot+=1;
}
document.getElementById("bodypains").addEventListener("click",rull);
function gull(){
    tot+=8;
    document.getElementById("outdoor").disabled=true;
}
document.getElementById("outdoor").addEventListener("click",gull);
function ill(){
    tot+=28;
    document.getElementById("close").disabled=true;
}
document.getElementById("close").addEventListener("click",ill);
function drill(){
    tot+=13;
    document.getElementById("breathe").disabled=true;
}
document.getElementById("breathe").addEventListener("click",drill);
        function los(){
            document.getElementById("nos").disabled=true;
        }
        document.getElementById("nos").addEventListener("click",los);
        function gos(){
            document.getElementById("bos").disabled=true;
        }
        document.getElementById("bos").addEventListener("click",gos);
        function dros(){
            document.getElementById("jos").disabled=true;
        }
        document.getElementById("jos").addEventListener("click",dros);
function gill(){
    document.getElementById("endingm").innerHTML= "Hello,"+fame.value+", You have approximatly "+tot+" % of chances of being Covid-19 positive."
}
document.getElementById("end").addEventListener("click",gill);