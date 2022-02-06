let cartas = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"];

let cartasAtuais = [];
let cartasEmbaralhadas = [];
// let quantidadeCartas = parseInt("4");
let quantidadeCartas = "";
let quantidadeJogadas = 0;
let resposta;
let intervalo;
const cronometroEl = document.querySelector(".topo__cronometro-timer")
cronometroEl.innerHTML = 0;

function perguntarQuantidadeCartas() {
    quantidadeCartas = parseInt(prompt("Quantas cartas você deseja? (Números pares de 4 a 14)"));

    while (quantidadeCartas % 2 != 0 || quantidadeCartas == 2 || quantidadeCartas == 0 || quantidadeCartas > 14) {
        quantidadeCartas = parseInt(prompt("Quantas cartas você deseja? (Números pares de 4 a 14)"));
    }

    return quantidadeCartas;
}

function calcularCartas() {

    for (let i = 0; i < quantidadeCartas / 2; i++) {
        cartasAtuais.push(cartas[i]);
    }
    for (let i = 0; i < quantidadeCartas / 2; i++) {
        cartasAtuais.push(cartas[i]);
    }
    cartasAtuais.sort(comparador);

    adicionarCartas(cartasAtuais);
}

function comparador() {
    return Math.random() - 0.5;
}

function adicionarCartas(cartasAtuais) {

    const cartasSection = document.querySelector(".cartas");

    while (cartasAtuais.length >= 1) {
        let cartaParaAdicionar = cartasAtuais.pop();

        cartasSection.innerHTML += `<article class="carta ${cartaParaAdicionar} selecionada" data-identifier="card" onclick="virarCarta(this)">
                    <div class="carta__face carta--frente" data-identifier="front-face">
                        <img class="carta__imagem" src="imagens/front.png" alt="Frente da Carta">
                    </div>
                    <div class="carta__face carta--verso" data-identifier="back-face">
                        <img src="imagens/${cartaParaAdicionar}.gif" alt="Verso: Metal Parrot" class="carta__imagem">
                    </div>
                </article>`;
    }
}

function virarCarta(carta) {
    quantidadeJogadas += 1;

    carta.classList.add("selecionada");

    const cartasSelecionadasEl = document.querySelectorAll(".selecionada");
    let quantidadeSelecionadas = cartasSelecionadasEl.length;

    if (quantidadeSelecionadas === 2) {
        setTimeout(verificarCarta, 1000);
    }
}

function verificarCarta() {
    const cartasSelecionadasEl = document.querySelectorAll(".selecionada");
    let quantidadeSelecionadas = cartasSelecionadasEl.length;

    const carta1 = cartasSelecionadasEl[0];
    const carta2 = cartasSelecionadasEl[1];

    if (quantidadeSelecionadas === 2) {

        if (carta1.classList[1] === carta2.classList[1]) {
            carta1.classList.add("acertada");
            carta1.classList.remove("selecionada");
            carta2.classList.add("acertada");
            carta2.classList.remove("selecionada");

            verificarFim();

        }
        else {
            carta1.classList.remove("selecionada");
            carta2.classList.remove("selecionada");
        }
    }
}

function verificarFim() {

    const cartasAcertadasEl = document.querySelectorAll(".acertada");
    let quantidadeAcertadas = cartasAcertadasEl.length;

    const cronometroEl = document.querySelector(".topo__cronometro-timer");
    let quantidadeSegundos = parseInt(cronometroEl.innerHTML);

    if (quantidadeCartas === quantidadeAcertadas) {
        // quantidadeSegundos = quantidadeSegundos - 1;
        alert(`Você ganhou em ${quantidadeJogadas} jogadas e em ${quantidadeSegundos} segundos!`);
        clearInterval(intervalo);

        perguntarReinicio();
    }
}

function perguntarReinicio() {
    resposta = prompt("Gostaria de jogar de novo? 's' para SIM ou 'n' para NÃO");

    while (resposta !== "s" && resposta !== "n") {
        resposta = prompt("Responda APENAS 's' ou 'n'");
    }

    if (resposta === "s") {

        const cartasAcertadasEl = document.querySelectorAll(".acertada");
        let quantidadeAcertadas = cartasAcertadasEl.length;

        for (let i = 0; i < quantidadeAcertadas; i++) {
            cartasAcertadasEl[i].classList.remove("acertada");
        }

        reiniciarJogo();

    } else if (resposta === "n") {
        alert("Obrigado e volte sempre! Recarregue a página caso mude de ideia :D")
    }
}

function reiniciarJogo() {
    const cartasSection = document.querySelector(".cartas");

    cartasSection.innerHTML = "";

    quantidadeJogadas = 0;

    perguntarQuantidadeCartas();
    calcularCartas();
    setTimeout(tirarSelecaoTodasCartas,500);
    setTimeout(cronometro,500);
}

function cronometro() {
    cronometroEl.innerText = 0
    intervalo = setInterval(incrementarCronometro,1000)
}

function incrementarCronometro() {
    cronometroEl.innerHTML = parseInt(cronometroEl.innerHTML) + 1;
}

function tirarSelecaoTodasCartas() {
    const cartasSelecionadasEl = document.querySelectorAll(".selecionada");
    let quantidadeSelecionadas = cartasSelecionadasEl.length;

    for (let i = 0; i < quantidadeSelecionadas; i++) {
        cartasSelecionadasEl[i].classList.remove("selecionada")
    }
}

// Inicialização
setTimeout(reiniciarJogo,50)
