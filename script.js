
var base = document.getElementById("base");
var pan = document.getElementById("pan");
var cYa= document.getElementById("c-a");
var fac = document.getElementById("total");

var total=0;
 function detBase(base){
    if( base.value.toLowerCase() == "carne"){
        total=total+200;
    }else{

        if(base.value.toLowerCase() == "pollo"){
            total = total +150;
        }else{

            if(base.value.toLowerCase()=="vegetariano" || base.value.toLowerCase()=="vegetariana"){
                total = total + 100;
        }else{
            alert("La opcion de Base Ingresada es Incorrecta");
    }
    }
    }
}

function detPan(pan){
    if(pan.value.toLowerCase()=="negro"){
        total=total+60;
    }else{
        if(pan.value.toLowerCase()=="blanco"){
            total=total+50;
        }else{
            if(pan.value.toLowerCase()=="sin gluten"){
                total=total+75;
            }
        }
    }
}
function detCyA(cYa){
    var vectorCyA= cYa.value.split(",");/*queso tomate lechuga cebolla mayo mostaza */
    for(i=0; i < vectorCyA.length;i++){
        if(vectorCyA[i].toLowerCase()=="queso"){
            total=total+20;
        }else{
            if(vectorCyA[i].toLowerCase()=="tomate"){
                total=total+15;
            }else{
                if(vectorCyA[i].toLowerCase()=="cebolla"){
                    total=total+15;
                }else{
                    if(vectorCyA[i].toLowerCase()=="lechuga"){
                        total=total+10;
                    }else{
                        if(vectorCyA[i].toLowerCase()=="mostaza"){
                            total=total+5;
                        }else{
                            if(vectorCyA[i].toLowerCase()=="mayonesa"){
                                total=total+5;
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(vectorCyA[0]);

}


function calcular(){
    detBase(base);
    detPan(pan);
    detCyA(cYa);
    fac.innerText=total;
    console.log(base.value);
}