/**
 * Bin2Dec - Conversor de Binário para Decimal
 * Script Final
 */

// 1. Pega as referências dos 3 elementos HTML com os quais vamos interagir.
// É CRUCIAL que os IDs no seu arquivo index.html sejam EXATAMENTE IGUAIS
// aos que estão dentro das aspas aqui ('binaryInput', 'decimalOutput', 'converter-btn').

const binaryInput = document.getElementById('binaryInput');
const decimalOutput = document.getElementById('decimalOutput');
const converterBtn = document.getElementById('converter-btn');

/**
 * Esta é a única função que faz a conversão.
 * Ela lê o valor do campo, valida e, se estiver tudo certo, calcula e exibe o resultado.
 * Esta função SÓ É CHAMADA quando o botão é clicado ou a tecla Enter é pressionada.
 */
function realizarConversao() {
    // Pega o valor atual do campo de input
    const binaryString = binaryInput.value;

    // Limpa qualquer mensagem de erro antiga
    errorMessage.textContent = '';

    // Caso 1: Se o campo estiver vazio, o resultado é 0.
    if (binaryString === "") {
        decimalOutput.textContent = '0';
        return; // Encerra a função
    }

    // Caso 2: Validação - verifica cada caractere da string
    for (let i = 0; i < binaryString.length; i++) {
        const char = binaryString[i];
        if (char !== '0' && char !== '1') {
            // Se encontrar um caractere inválido, mostra erro e para tudo.
            errorMessage.textContent = 'Erro: Insira apenas 0s e 1s.';
            decimalOutput.textContent = '0'; // Limpa o resultado antigo
            return; // Encerra a função
        }
    }

    // Caso 3: Se a validação passou, fazemos a conversão
    let decimalValue = 0;
    let power = 0;
    for (let i = binaryString.length - 1; i >= 0; i--) {
        if (parseInt(binaryString[i]) === 1) {
            decimalValue += Math.pow(2, power);
        }
        power++;
    }

    // Finalmente, exibe o resultado correto na tela
    decimalOutput.textContent = decimalValue;
}

// 2. Adiciona os "ouvintes" de eventos.
// O código abaixo é a única coisa que pode CHAMAR a função de conversão.

// Quando o botão for clicado, chame a função realizarConversao
converterBtn.addEventListener('click', realizarConversao);

// Quando uma tecla for pressionada DENTRO do campo de input...
binaryInput.addEventListener('keydown', (event) => {
    // ...verifique se a tecla foi "Enter"
    if (event.key === 'Enter') {
        // Se foi, chame a função realizarConversao
        realizarConversao();
    }
});