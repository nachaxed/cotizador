//cotizador de seguros 
//definir variables del mismo 
//hacer un nav-bar tranqui como para setear el pedido
// utilizar function - leer la teoria -. dont forget 


let seguro = document.getElementById('seguros');
seguro.addEventListener("change", () =>{
})

 let select = document.getElementById('sofriel');
 select.addEventListener("change", () =>{
    //  console.log(select.value)
 } )
 console.log(select)
 const enviar= document.querySelector(".enviar")
 enviar.addEventListener("click",Enviardata)

 function Enviardata(e){ 
      // console.log(select.value)
      // console.log(seguro.value)  
   alert(`Seleccionaste el avion ${select.value}, Seguro es: ${seguro.value}`)
 }
 
 //constructor 

 const seguros = [{ id: 1, select: "Gulfstream G500", seguro: 125},
                  { id: 2, select: "Gulfstream G600", seguro: 70},
                  { id: 3, select: "Gulfstream G650ER", seguro: 50},
                  { id: 4, select: "Dassault Falcon 8X", seguro: 100}];

 const buscarGulfstreamG500 = seguros.find(seguro => seguro.id === 3);
 //console.log(buscarGulfstreamG500);

 const barato = seguros.filter(seguro => seguro.id <100);
 //console.log(barato);

 const aumento = seguros.map(seguro => seguro.seguro += 30);
 //console.log(aumento);

 //array para los seguros 
 const seguroPromedio = [125,70,50,100];

 const seguroPromedioSuma = seguroPromedio.reduce((acc, el) => acc.concat(el), [])
 //console.log(seguroPromedioSuma / seguroPromedio.length );

 