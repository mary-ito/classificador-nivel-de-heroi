let nome = "mary-ito"
let experiencia = 8001
let nivel

if(experiencia <= 1000){
  nivel = "Ferro"
}else if(experiencia > 1000 && experiencia <= 2000){
  nivel = "Bronze"
}else if(experiencia > 2000 && experiencia <= 5000){
  nivel = "Prata"
}else if(experiencia > 5000 && experiencia <= 7000){
  nivel = "Ouro"
}else if(experiencia > 7000 && experiencia <= 8000){
  nivel = "Platina"
}else if(experiencia > 8000 && experiencia <= 9000){
  nivel = "Ascendente"
}else if(experiencia > 9000 && experiencia <= 10000){
  nivel = "Imortal"
}else[
  nivel = "Radiante"
]

console.log("O Herói de nome " + nome + " está no nível de " + nivel)