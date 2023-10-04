const pregunta = {
    titulo: '¿A quién ha doblado más veces Constantino Romero?',
    respuestas: [
        {
            label: "Clint Eastwood",
            id: "clint-eastwood",
            name: "actor",
            value: "clint-eastwood"
        },
        {
            label: "James Earl",
            id: "james-earl",
            name: "actor",
            value: "james-earl"
        },
        {
            label: "Roger Moore",
            id: "roger-moore",
            name: "actor",
            value: "roger-moore"
        },
        {
            label: "William Shatner",
            id: "william-shatner",
            name: "actor",
            value: "william-shatner"
        },
        {
            label: "Arnold Schwarzenegger",
            id: "arnold-schwarzenegger",
            name: "actor",
            value: "arnold-schwarzenegger"
        }
    ]
}

function imprimePregunta(pregunta) {
  let newHTML = "";

  newHTML += imprimeTitulo(pregunta);
  newHTML += imprimeTodasLasRespuestas(pregunta);

  return newHTML;
}

function imprimeTitulo(pregunta) {
  // Put your code here

  return `<p>${pregunta.titulo}</p>`
}

let respuesta = pregunta.respuestas

function imprimeTodasLasRespuestas(pregunta) {
  // Put your code here
let pepito = ""
  for (let i = 0; i < respuesta.length; i++){
   pepito += imprimeUnaRespuesta(respuesta[i])
  } 
  return pepito
}

function imprimeUnaRespuesta(respuesta) {
  // Put your code here


let answer = "";

answer += imprimeLabel(respuesta);
answer += imprimeInput(respuesta);


  return answer;
 }



function imprimeLabel(respuesta) {
  // Put your code here

let label = ""
label += `<label for = "${respuesta.id}"> ${respuesta.label}</label>`
return label

}

function imprimeInput(respuesta) {
  // Put your code here

  let input = ""
  input += `<input id= ${respuesta.id} name= ${respuesta.name} type="radio" value= ${respuesta.value}>`
  return input
}


document.getElementById("contenedorPreguntas").innerHTML = imprimePregunta(pregunta);