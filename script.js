
var base = document.getElementById("base");
var pan = document.getElementById("pan");
var cYa= document.getElementById("c-a");
var fac = document.getElementById("total");
var carne=200;
var pollo=150;
var veg=100;
var panN=60;
var panB=50;
var panSG=75;
var total=0;
 function detBase(base){
    if( base.value.toLowerCase() == "carne"){
        total=total+carne;
    }else{

        if(base.value.toLowerCase() == "pollo"){
            total = total +pollo;
        }else{

            if(base.value.toLowerCase()=="vegetariano" || base.value.toLowerCase()=="vegetariana"){
                total = total + veg;
        }else{
            alert("La opcion de Base Ingresada es Incorrecta");
    }
    }
    }
}

function detPan(pan){
    if(pan.value.toLowerCase()=="negro"){
        total=total+panN;
    }else{
        if(pan.value.toLowerCase()=="blanco"){
            total=total+panB;
        }else{
            if(pan.value.toLowerCase()=="sin gluten"){
                total=total+panSG;
            }
        }
    }
}
var queso=20;
var tomate=15;
var cebolla=15;
var lechuga=10;
var mos=5;
var mayo=5;

function detCyA(cYa){
    var vectorCyA= cYa.value.split(",");/*queso tomate lechuga cebolla mayo mostaza */
    for(i=0; i < vectorCyA.length;i++){
        if(vectorCyA[i].toLowerCase()=="queso"){
            total=total+queso;
        }else{
            if(vectorCyA[i].toLowerCase()=="tomate"){
                total=total+tomate;
            }else{
                if(vectorCyA[i].toLowerCase()=="cebolla"){
                    total=total+cebolla;
                }else{
                    if(vectorCyA[i].toLowerCase()=="lechuga"){
                        total=total+lechuga;
                    }else{
                        if(vectorCyA[i].toLowerCase()=="mostaza"){
                            total=total+mos;
                        }else{
                            if(vectorCyA[i].toLowerCase()=="mayonesa"){
                                total=total+mayo;
                            }
                        }
                    }
                }
            }
        }
    }
    

}


function calcular(){
    detBase(base);
    detPan(pan);
    detCyA(cYa);
    fac.innerText=total;
    console.log(base.value);
}