let personagens = [];
let armas = [];
let itens = [];


document.getElementById("createCharacterButton").onclick = criarPersonagem;
document.getElementById("listCharactersButton").onclick = listarPersonagens;
document.getElementById("exitButton").onclick = () => alert('Saindo do jogo. Até a próxima!');

function iniciarJogo() {
    alert("O jogo começou! Vamos criar seu personagem.");
    menu();
}

function criarPersonagem() {
    let personagem = {
        nome: prompt('Qual nome do seu personagem?'),
        vida: Number(prompt('Quanto de vida seu personagem vai ter?')),
        ataque: Number(prompt('Quanto de ataque seu personagem vai ter?')),
        defesa: Number(prompt('Quanto de defesa seu personagem vai ter?')),
  
    };

    validarPersonagem(personagem);
    adicionarImagemPersonagem(personagem); // Função para adicionar a imagem
}

function validarPersonagem(personagem) {
    while (personagem.nome.length < 3 || personagem.nome.length > 20 || !soLetras(personagem.nome)) {
        if (personagem.nome.length < 3) {
            alert('Nome de personagem muito curto...');
        } else if (personagem.nome.length > 20) {
            alert('Que nome grandão, prefiro menores...');
        } else {
            alert('O nome deve conter apenas letras.');
        }
        personagem.nome = prompt('Qual nome do seu personagem?');
    }
    function validarPersonagem(personagem) {
        while (personagem.nome.length < 3 || personagem.nome.length > 20 || !soLetras(personagem.nome)) {
            if (personagem.nome.length < 3) {
                alert('Nome de personagem muito curto...');
            } else if (personagem.nome.length > 20) {
                alert('Que nome grandão, prefiro menores...');
            } else {
                alert('O nome deve conter apenas letras.');
            }
            personagem.nome = prompt('Qual nome do seu personagem?');
        }
    }
    while (personagem.vida < 1 || personagem.vida > 20) {
        if (personagem.vida < 1) {
            alert('Poucos corações de vida, tente um número maior...');
            personagem.vida = Number(prompt('Quanto de vida seu personagem vai ter?'));
        } else {
            alert('Muitos corações de vida, tente um número menor...');
            personagem.vida = Number(prompt('Quanto de vida seu personagem vai ter?'));
        }
    }
    function soLetras(nome) {
    for (let i = 0; i < nome.length; i++) {
        const crt = nome[i];
        // Verifica se o caractere não está entre A-Z e a-z
        if (!(crt >= 'A' && crt <= 'Z') && !(crt >= 'a' && crt <= 'z') && crt !== ' ') {
            return false;
        }
    }
    return true;
}
    while (personagem.ataque < 1 || personagem.ataque > 15) {
        if (personagem.ataque < 1) {
            alert('Dano de ataque muito baixo, tente um ataque maior...');
            personagem.ataque = Number(prompt('Quanto de ataque seu personagem vai ter?'));
        } else {
            alert('Dano de ataque inicial muito alto, tente um número menor...');
            personagem.ataque = Number(prompt('Quanto de ataque seu personagem vai ter?'));
        }
    }

    while (personagem.defesa < 1 || personagem.defesa > 11) {
        if (personagem.defesa < 1) {
            alert('Defesa muito baixa, tente um valor mais alto...');
            personagem.defesa = Number(prompt('Quanto de defesa seu personagem vai ter?'));
        } else {
            alert('Defesa muito alta, tente um valor menor...');
            personagem.defesa = Number(prompt('Quanto de defesa seu personagem vai ter?'));
        }
    }

    personagens.push(personagem);
    personagens.sort((a, b) => a.nome.localeCompare(b.nome));
    console.log(personagens);
}

function adicionarImagemPersonagem(personagem) {
    const container = document.getElementById('personagens_imagens');
    const personagemDiv = document.createElement('div');
    personagemDiv.classList.add('personagem');

    const img = document.createElement('img');
    img.src = personagem.imagem; // URL da imagem fornecida
    img.alt = personagem.nome;    // Nome do personagem como texto alternativo
    img.width = 100;              // Tamanho da imagem
    img.height = 100;

    const info = document.createElement('p');
    info.textContent = `${personagem.nome} - Vida: ${personagem.vida}, Ataque: ${personagem.ataque}, Defesa: ${personagem.defesa}`;

    personagemDiv.appendChild(img);
    personagemDiv.appendChild(info);
    container.appendChild(personagemDiv);
}

function menu() {
    let option;
    do {
        option = prompt("Selecione uma opção:\n1. Criar Personagem\n2. Listar Personagens\n3. Sair");
        switch (option) {
            case '1':
                criarPersonagem();
                break;
            case '2':
                listarPersonagens();
                break;
            case '3':
                alert('Saindo do jogo. Até a próxima!');
                break;
            default:
                alert('Opção inválida. Tente novamente.');
        }
    } while (option !== '3');
}

function listarPersonagens() {
    if (personagens.length === 0) {
        alert('Nenhum personagem criado ainda.');
    } else {
        let lista = 'Personagens:\n' + personagens.map(p => ` ${p.nome} - Vida: ${p.vida}, Ataque: ${p.ataque}, Defesa: ${p.defesa}`).join('\n');
        alert(lista);
    }
}