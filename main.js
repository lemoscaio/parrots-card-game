let cartas = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"];

let cartasAtuais = []
let cartasEmbaralhadas = []
let quantidadeCartas = "14"
// let quantidadeCartas = ""

function perguntarQuantidadeCartas() {
    quantidadeCartas = prompt("Quantas cartas você deseja? (Números pares de 4 a 14)")

    return quantidadeCartas
}

function calcularCartas() {

    for (let i = 0; i < quantidadeCartas/2; i++) {
        cartasAtuais.push(cartas[i]);
    }
    cartasAtuais.sort(comparador)

    adicionarCartas(cartasAtuais)
}

function comparador() {
    return Math.random() - 0.5
}

// perguntarQuantidadeCartas()
calcularCartas()
calcularCartas()

function adicionarCartas(cartasAtuais) {

    const cartasSection = document.querySelector(".cartas");

    while (cartasAtuais.length >= 1) {
    
        cartasSection.innerHTML += `<article class="carta">
                    <div class="carta__face carta--frente">
                        <img class="carta__imagem" src="imagens/front.png" alt="Frente da Carta">
                    </div>
                    <div class="carta__face carta--verso">
                        <img src="imagens/${cartasAtuais.pop()}.gif" alt="Verso: Metal Parrot" class="carta__imagem">
                    </div>
                </article>`

                console.log(cartasAtuais)
    
    }

}