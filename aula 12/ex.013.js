var agora = new Date()
var hora = agora.getHours()

if (hora >= 0 && hora < 6) {
  console.log("Boa madrugada!");
} else if (hora < 12) {
  console.log("Bom dia!");
} else if (hora >= 12 && hora < 18) {
  console.log("Boa tarde!");
} else if (hora >= 18 && hora < 24) {
  console.log("Boa noite!");
}
