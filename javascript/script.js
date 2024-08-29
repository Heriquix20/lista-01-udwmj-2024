document.addEventListener("DOMContentLoaded", function () {
    const numeroSorteado = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;

    function verificarPalpite() {
        const palpite = parseInt(document.getElementById("palpite").value);
        tentativas++;

        if (palpite === numeroSorteado) {
            alert("Parabéns! Você acertou o número em " + tentativas + " tentativas.");
        } else if (palpite > numeroSorteado) {
            alert("Seu palpite é maior que o número sorteado. Tente novamente.");
        } else {
            alert("Seu palpite é menor que o número sorteado. Tente novamente.");
        }
    }

    document.getElementById("verificar").addEventListener("click", verificarPalpite);
});
