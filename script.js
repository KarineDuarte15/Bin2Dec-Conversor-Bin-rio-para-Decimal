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
    
   
});
