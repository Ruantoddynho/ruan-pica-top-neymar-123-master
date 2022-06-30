document.write("<h1>Adivinhe o número que eu pensei</h1>")
// Gera um número aleatório entre 1 e 10
const número= Math.floor(Math.random() * 10) + 1

let chute = 0
let tentativas = 0

while (número !== chute && tentativas < 10) {
 chute = Number (prompt("Informe o número: "))

if(número == chute)
      document.write("<br/>Parabéns!")
      else
      document.write("<br/>Errou!")

      tentativas += 1 }
      document.write("</br>Número pensado: " + número)