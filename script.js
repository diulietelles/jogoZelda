let personagens = []
let armas = []
let itens = []
// Declara arrays vazios para armazenar 

document.getElementById("createCharacterButton").onclick = criarPersonagem // chama a função criarPersonagem
document.getElementById("listCharactersButton").onclick = listarPersonagens //chama a função listarPersonagens
document.getElementById("exitButton").onclick = () => alert('Saindo do jogo. Até a próxima!') //jogador está saindo do jogo

// // funcao inicia o jogo, exibe uma mensagem de início e chama o menu 
function iniciarJogo() {
    alert("O jogo começou! Vamos criar seu personagem.")
    menu()
}

// funcao para criar um personagem, armazenando dados como um objeto
function criarPersonagem() {
    let personagem = {
        nome: prompt('Qual nome do seu personagem?'),
        vida: Number(prompt('Quanto de vida seu personagem vai ter?')),
        ataque: Number(prompt('Quanto de ataque seu personagem vai ter?')),
        defesa: Number(prompt('Quanto de defesa seu personagem vai ter?')),
    }
    
    validarPersonagem(personagem)
    adicionarImagemPersonagem(personagem) // uncao para adicionar a imagem do personagem na interface
}

 // funcao que valida os dados do personagem 
function validarPersonagem(personagem) {
   while (personagem.nome.length < 3 || personagem.nome.length > 20 || !soLetras(personagem.nome)) {
        // verifica se o nome do personagem é válido, entre 3 e 20 caracteres e apenas letras
        if (personagem.nome.length < 3) {
            alert('Nome de personagem muito curto...')
        } else if (personagem.nome.length > 20) {
            alert('Que nome grandão, prefiro menores...')
        } else {
            alert('O nome deve conter apenas letras.')
        }
        personagem.nome = prompt('Qual nome do seu personagem?')
        // caso não seja válido, solicita que o usuario digite novamente
    }

    while (personagem.vida < 1 || personagem.vida > 20) {
        //  se o valor da vida está entre 1 e 20, caso nao esteja, solicita de novo um valor
        if (personagem.vida < 1) {
            alert('Poucos corações de vida, tente um número maior...')
        } else {
            alert('Muitos corações de vida, tente um número menor...')
        }
        personagem.vida = Number(prompt('Quanto de vida seu personagem vai ter?'))
    }

    while (personagem.ataque < 1 || personagem.ataque > 15) {
        // se o valor de ataque está entre 1 e 15, caso não esteja, solicita novo valor
        if (personagem.ataque < 1) {
            alert('Dano de ataque muito baixo, tente um ataque maior...')
        } else {
            alert('Dano de ataque inicial muito alto, tente um número menor...')
        }
        personagem.ataque = Number(prompt('Quanto de ataque seu personagem vai ter?'))
    }

    while (personagem.defesa < 1 || personagem.defesa > 11) {
        // se o valor de defesa está entre 1 e 11, caso não esteja, solicita novo
        if (personagem.defesa < 1) {
            alert('Defesa muito baixa, tente um valor mais alto...')
        } else {
            alert('Defesa muito alta, tente um valor menor...')
        }
        personagem.defesa = Number(prompt('Quanto de defesa seu personagem vai ter?'))
    }

    personagens.push(personagem)
    personagens.sort((a, b) => a.nome.localeCompare(b.nome))
    // add o personagem validado ao array de personagens e em ordem alfabética pelo nome
    console.log(personagens)
}

function adicionarImagemPersonagem(personagem) {
    const container = document.getElementById('personagens_imagens')
    const personagemDiv = document.createElement('div')
    personagemDiv.classList.add('personagem')
    // cria uma nova div para o personagem e adiciona a classe personagem

    const img = document.createElement('img');
    img.src = personagem.imagem; // imagem do personagem
    img.alt = personagem.nome;    // texto alternativo com o nome do personagem
    img.width = 100;              // largura da imagem
    img.height = 100;             // altura da imagem

    const info = document.createElement('p');
    info.textContent = `${personagem.nome} - Vida: ${personagem.vida}, Ataque: ${personagem.ataque}, Defesa: ${personagem.defesa}`;
    // parágrafo com as informações do personagem

    personagemDiv.appendChild(img);
    personagemDiv.appendChild(info);
    container.appendChild(personagemDiv);
    // add a imagem e as informaçoes do personagem div e depois ao container na pagina
}

function menu() {
    let option
    do {
        option = prompt("Selecione uma opção:\n1. Criar Personagem\n2. Listar Personagens\n3. Sair");
        //  um menu de opções para o usuario

        switch (option) {
            case '1':
                criarPersonagem()
                break
            case '2':
                listarPersonagens()
                break
            case '3':
                alert('Saindo do jogo. Até a próxima!')
                break
            default:
                alert('Opção inválida. Tente novamente.')
        }
    } while (option !== '3')
    // menu em loop ate que o usuario escolha  sair
}

function listarPersonagens() {
    if (personagens.length === 0) {
        alert('Nenhum personagem criado ainda.')
    } else {
        let lista = 'Personagens:\n' + personagens.map(p => ` ${p.nome} - Vida: ${p.vida}, Ataque: ${p.ataque}, Defesa: ${p.defesa}`).join('\n');
        alert(lista)
    }
    //lista de personagens criados, se nenhum personagem foi criado, exibe uma mensagem avisando
}
