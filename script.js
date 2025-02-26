// Inicializa a variável count com o valor 1, representando o primeiro slide
let count = 1;

// Define o primeiro botão de rádio como selecionado automaticamente ao carregar a página
document.getElementById("radio1").checked = true;

// Cria um intervalo que chama a função nextImage() a cada 2 segundos (2000 milissegundos)
setInterval(function () {
    nextImage();
}, 2000);

// Função responsável por avançar para a próxima imagem no slider
function nextImage() {
    count++; // Incrementa a variável count para avançar para o próximo slide

    // Se count ultrapassar 4 (número total de slides), volta para o primeiro slide
    if (count > 4) {
        count = 1;
    }

    // Marca o botão de rádio correspondente ao slide atual como selecionado
    document.getElementById("radio" + count).checked = true;
}
