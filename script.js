 // 1. Pegar referências aos elementos HTML que vamos usar
const binaryInput = document.getElementById('binaryInput');
const decimalOutput = document.getElementById('decimalOutput');
const errorMessage = document.getElementById('errorMessage'); 

// 2. Adicionar um "ouvinte" de eventos no campo de entrada
// A função dentro dele será executada toda vez que o usuário digitar algo.
binaryInput.addEventListener('input', () => {
    // Pega o valor digitado pelo usuário
    const binaryString = binaryInput.value;

    // Limpa a mensagem de erro e o resultado anterior
    errorMessage.textContent = '';
    decimalOutput.textContent = '0';

    // Se o campo estiver vazio, não faz nada
    if (binaryString === "") {
        return;
    }

    // Verifica se o valor digitado é um número binário válido
    // 3. Validação: Verifica se todos os caracteres são '0' ou '1'
    for (let i = 0; i < binaryString.length; i++) {
        const char = binaryString[i];
        if (char !== '0' && char !== '1') {
            errorMessage.textContent = 'Por favor, insira apenas 0s e 1s.';
            return; // Para a execução se encontrar um caractere inválido
        }
    }

    // 4. Lógica de Conversão (o coração do programa)
    let decimalValue = 0;
    let power = 0;

    // Itera sobre a string binária da DIREITA para a ESQUERDA
    for (let i = binaryString.length - 1; i >= 0; i--) {
        const digit = parseInt(binaryString[i]);

        // Se o dígito for 1, adiciona o valor da potência de 2 correspondente
        if (digit === 1) {
            // AQUI USAMOS A FUNÇÃO MATEMÁTICA REQUERIDA: Math.pow()
            decimalValue += Math.pow(2, power);
        }

        // Incrementa a potência para a próxima posição (da direita para a esquerda)
        power++;
    }

    // 5. Exibe o resultado final na tela
    decimalOutput.textContent = decimalValue;
   
});
