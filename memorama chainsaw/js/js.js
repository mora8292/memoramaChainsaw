let tarjetsDestapadas=0;
let tarjet1=null;
let tarjet2=null;
let primerResult= null;
let secondResult=null;
let points=0;
let temporizador=false;
let timer=45;
let tiempoRegresivovoId=null;

let puntos=document.querySelector(".span");
let mostrarTime=document.getElementById("time");

let number= [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
number= number.sort(()=>{return Math.random()-0.5});
console.log(number);

function contarTiempo(){
    tiempoRegresivovoId= setInterval(()=>{
        timer--;
        mostrarTime.innerHTML=`Tiempo: ${timer} segundos`
        if(timer==0){
            bloquearTarjets();
        }
    },1000)
}

function bloquearTarjets(){
    clearInterval(tiempoRegresivovoId);
    for(let i=0; i<=11; i++){
        let tarjetBlocked= document.getElementById(i);
        tarjetBlocked.innerHTML=`<img src="./css/img/${number[i]}.jpeg">`;
        tarjetBlocked.disabled=true;
    }
}

function destapar(id){
    if(temporizador==false){
        contarTiempo()
        temporizador=true;
    }

    tarjetsDestapadas++;
    console.log(tarjetsDestapadas);
    if(tarjetsDestapadas==1){
        tarjet1= document.getElementById(id);
        primerResult=number[id];
        tarjet1.innerHTML=`<img src="./css/img/${primerResult}.jpeg">`;

        tarjet1.disabled=true;
    }else if(tarjetsDestapadas==2){
        tarjet2= document.getElementById(id);
        secondResult=number[id];
        tarjet2.innerHTML=`<img src="./css/img/${secondResult}.jpeg">`;
        
        tarjet2.disabled=true;
    }else if(tarjetsDestapadas>=3){

    }
    if(primerResult==secondResult){
        tarjetsDestapadas=0;

        points++;
        puntos.innerHTML=`Puntos: ${points}`;
        tarjet1=null;
        tarjet2=null;
        primerResult=null;
        secondResult=null;
        if(points==8){
            alert("Felicidades :D")
            clearInterval(tiempoRegresivovoId)
        }
    }
    else if(tarjet1 && tarjet2 && tarjetsDestapadas==2){
        setTimeout(()=>{
            tarjetsDestapadas=0;
            tarjet1.innerHTML=" ";
            tarjet2.innerHTML=" ";
            tarjet1.disabled=false;
            tarjet2.disabled=false;
            tarjet1=null;
            tarjet2=null;
            primerResult=null;
            secondResult=null;
        },650)
    }

}