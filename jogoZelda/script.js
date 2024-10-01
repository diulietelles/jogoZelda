let etapaAtual = 0;
let personagens = [];
let armas = [];
let itens = [];

// Iniciar o jogo
function iniciarJogo() {
    etapaAtual = 0;
    document.getElementById('customPrompt').style.display = 'block';
    coletarPersonagens();
}

// Coletar dados de personagens
function coletarPersonagens() {
    if (etapaAtual < 3) {
        document.getElementById('promptMessage').innerText = `Digite o nome do personagem ${etapaAtual + 1}:`;
        document.getElementById('userInput').value = '';
        document.getElementById('userInput').focus();
    } else {
        validarDados();
    }
}

// Coletar dados de armas
function coletarArmas() {
    if (etapaAtual < 3) {
        document.getElementById('promptMessage').innerText = `Digite o tipo da arma ${etapaAtual + 1}:`;
        document.getElementById('userInput').value = '';
        document.getElementById('userInput').focus();
    } else {
        validarDados();
    }
}

// Coletar dados de itens
function coletarItens() {
    if (etapaAtual < 3) {
        document.getElementById('promptMessage').innerText = `Digite o nome do item ${etapaAtual + 1}:`;
        document.getElementById('userInput').value = '';
        document.getElementById('userInput').focus();
    } else {
        validarDados();
    }
}

// Confirmar entrada do usuário
function confirmar() {
    const userInput = document.getElementById('userInput').value;

    if (etapaAtual < 3) {
        if (personagens.length < 3) {
            personagens.push({ nome: userInput });
            etapaAtual++;
            coletarPersonagens();
        } else if (armas.length < 3) {
            armas.push({ tipo: userInput });
            etapaAtual++;
            coletarArmas();
        } else {
            itens.push({ nome: userInput });
            etapaAtual++;
            coletarItens();
        }
    } else {
        document.getElementById('customPrompt').style.display = 'none';
        validarDados();
    }
}

// Validar dados
function validarDados() {
    console.log(validarPersonagens(personagens).join('\n'));
    console.log(validarArmas(armas).join('\n'));
    console.log(validarItens(itens).join('\n'));
}

// Funções de validação
function validarPersonagens(personagens) {
    let mensagens = [];
    personagens.forEach(personagem => {
        if (!personagem.nome) {
            mensagens.push(`Erro: Personagem com nome inválido.`);
        }
        // Adicione a lógica de vida, ataque e defesa se necessário
    });
    return mensagens.length > 0 ? mensagens : ["Personagens validados com sucesso!"];
}

function validarArmas(armas) {
    let mensagens = [];
    armas.forEach(arma => {
        if (!arma.tipo) {
            mensagens.push(`Erro: Arma com tipo inválido.`);
        }
    });
    return mensagens.length > 0 ? mensagens : ["Armas validadas com sucesso!"];
}

function validarItens(itens) {
    let mensagens = [];
    itens.forEach(item => {
        if (!item.nome) {
            mensagens.push(`Erro: Item com nome inválido.`);
        }
    });
    return mensagens.length > 0 ? mensagens : ["Itens validados com sucesso!"];
}
