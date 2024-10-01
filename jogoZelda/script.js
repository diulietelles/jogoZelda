let personagens = [];
let armas = [];
let itens = [];
let etapaAtual = 0;

// Função para iniciar o jogo
function iniciarJogo() {
    etapaAtual = 0;
    console.log("Jogo iniciado!"); // Mensagem de início do jogo
    menu(); // Chama o menu ao iniciar o jogo
}

// Função para exibir o menu
function menu() {
    let opcao = prompt("Menu:\n1. Coletar Personagens\n2. Coletar Armas\n3. Coletar Itens\n4. Validar Dados\n5. Sair");

    switch(opcao) {
        case '1':
            coletarPersonagens();
            break;
        case '2':
            coletarArmas();
            break;
        case '3':
            coletarItens();
            break;
        case '4':
            validarDados();
            break;
        case '5':
            console.log("Saindo do jogo.");
            return;
        default:
            console.log("Opção inválida!");
            menu();
    }
}

// Função para coletar dados de personagens
function coletarPersonagens() {
    while (personagens.length < 3) {
        let nome = prompt("Digite o nome do personagem:");
        let vida = parseInt(prompt("Digite os corações de vida (1 a 20):"));
        let ataque = parseInt(prompt("Digite o valor de ataque:"));
        let defesa = parseInt(prompt("Digite o valor de defesa:"));

        personagens.push({ nome, vida, ataque, defesa });
    }
    menu();
}

// Função para coletar dados de armas
function coletarArmas() {
    while (armas.length < 3) {
        let tipo = prompt("Digite o tipo da arma:");
        let dano = parseInt(prompt("Digite o dano da arma (maior que 0):"));
        let alcance = parseInt(prompt("Digite o alcance da arma:"));

        armas.push({ tipo, dano, alcance });
    }
    menu();
}

// Função para coletar dados de itens
function coletarItens() {
    while (itens.length < 3) {
        let nome = prompt("Digite o nome do item:");
        let efeito = prompt("Digite o efeito do item:");

        itens.push({ nome, efeito });
    }
    menu();
}

// Função para validar dados
function validarDados() {
    console.log(validarPersonagens(personagens).join('\n'));
    console.log(validarArmas(armas).join('\n'));
    console.log(validarItens(itens).join('\n'));
    menu();
}

// Função para validar personagens
function validarPersonagens(personagens) {
    let mensagens = [];
    personagens.forEach(personagem => {
        if (!personagem.nome) {
            mensagens.push("Erro: Personagem com nome inválido.");
        }
        if (personagem.vida < 1 || personagem.vida > 20) {
            mensagens.push(`Erro: O personagem ${personagem.nome} tem corações de vida fora do intervalo permitido.`);
        }
        if (personagem.ataque <= 0 || personagem.defesa < 0) {
            mensagens.push(`Erro: O personagem ${personagem.nome} tem valores de ataque ou defesa inválidos.`);
        }
    });
    return mensagens.length > 0 ? mensagens : ["Personagens validados com sucesso!"];
}

// Função para validar armas
function validarArmas(armas) {
    let mensagens = [];
    armas.forEach(arma => {
        if (!arma.tipo) {
            mensagens.push("Erro: Arma com tipo inválido.");
        }
        if (arma.dano <= 0) {
            mensagens.push(`Erro: A arma ${arma.tipo} tem dano inválido.`);
        }
        if (arma.alcance < 0) {
            mensagens.push(`Erro: A arma ${arma.tipo} tem alcance inválido.`);
        }
    });
    return mensagens.length > 0 ? mensagens : ["Armas validadas com sucesso!"];
}

// Função para validar itens
function validarItens(itens) {
    let mensagens = [];
    itens.forEach(item => {
        if (!item.nome) {
            mensagens.push("Erro: Item com nome inválido.");
        }
        if (!item.efeito) {
            mensagens.push(`Erro: Item ${item.nome} com efeito inválido.`);
        }
    });
    return mensagens.length > 0 ? mensagens : ["Itens validados com sucesso!"];
}

// Chamada para iniciar o jogo
iniciarJogo();
