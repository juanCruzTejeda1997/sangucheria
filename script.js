
let base = document.getElementById("base");
let pan = document.getElementById("pan");
let cYa= document.getElementById("c-a");
let fac = document.getElementById("total");
const carne=200;
const pollo=150;
const veg=100;
const panN=60;
const panB=50;
const panSG=75;
const queso=20;
const tomate=15;
const cebolla=15;
const lechuga=10;
const mos=5;
const mayo=5;
let total=0;
//  function detBase(base){
//     if( base.value.toLowerCase() == "carne"){
//         total=total+carne;
//     }else{

//         if(base.value.toLowerCase() == "pollo"){
//             total = total +pollo;
//         }else{

//             if(base.value.toLowerCase()=="vegetariano" || base.value.toLowerCase()=="vegetariana"){
//                 total = total + veg;
//         }else{
//             alert("La opcion de Base Ingresada es Incorrecta");
//     }
//     }
//     }
// }

// function detPan(pan){
//     if(pan.value.toLowerCase()=="negro"){
//         total=total+panN;
//     }else{
//         if(pan.value.toLowerCase()=="blanco"){
//             total=total+panB;
//         }else{
//             if(pan.value.toLowerCase()=="sin gluten"){
//                 total=total+panSG;
//             }
//             else{
//                 alert("El tipo de pan ingresado es incorrecto")
//             }
//         }
//     }
// }


// function detCyA(cYa){
//     var vectorCyA= cYa.value.split(",");/*queso tomate lechuga cebolla mayo mostaza */
//     for(i=0; i < vectorCyA.length;i++){
//         if(vectorCyA[i].toLowerCase()=="queso"){
//             total=total+queso;
//         }else{
//             if(vectorCyA[i].toLowerCase()=="tomate"){
//                 total=total+tomate;
//             }else{
//                 if(vectorCyA[i].toLowerCase()=="cebolla"){
//                     total=total+cebolla;
//                 }else{
//                     if(vectorCyA[i].toLowerCase()=="lechuga"){
//                         total=total+lechuga;
//                     }else{
//                         if(vectorCyA[i].toLowerCase()=="mostaza"){
//                             total=total+mos;
//                         }else{
//                             if(vectorCyA[i].toLowerCase()=="mayonesa"){
//                                 total=total+mayo;
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
    

// }

function detSanguche(base,pan,cYa){
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

    if(pan.value.toLowerCase()=="negro"){
        total=total+panN;
    }else{
        if(pan.value.toLowerCase()=="blanco"){
            total=total+panB;
        }else{
            if(pan.value.toLowerCase()=="sin gluten"){
                total=total+panSG;
            }
            else{
                alert("El tipo de pan ingresado es incorrecto")
            }
        }
    }

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
    detSanguche(base,pan,cYa);
    // detBase(base);
    // detPan(pan);
    // detCyA(cYa);
    fac.innerText=total;
}