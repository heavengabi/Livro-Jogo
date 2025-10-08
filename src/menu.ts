import { PaginaExploracao } from "./mainGabriela";
import { Escolha } from "./mainGabriela";
import { jogador } from "./personagens";
import { mochilaDoJogador } from "./mainGabriela";


import promptSync = require("prompt-sync");
const prompt = promptSync();


// pra ver se tem aliados (não utilizado nesta versão da história, mas mantido)
let temAliado = false; 


// Páginas da História Corrigida (1 a 20) + Páginas de Final (21, 22, 23)

const pagina1 = new PaginaExploracao(
    1,
    "O Início da Jornada",
    "Você está em Hobbiton, em um dia tranquilo. Gandalf, o Cinza, aparece com uma notícia alarmante: o Um Anel foi encontrado. Ele te entrega o Anel e diz: \"Frodo, este Anel precisa ser destruído antes que Sauron retorne.\"",
    [
        new Escolha("Aceitar imediatamente a missão e partir em direção a Valfenda com Gandalf.", 2),
        new Escolha("Perguntar mais sobre o Anel antes de tomar qualquer decisão.", 3),
        new Escolha("Recusar a missão, dizendo que não pode carregar esse fardo.", 4)
    ]
);

const pagina2 = new PaginaExploracao(
    2,
    "A Partida Imediata",
    "Você pega o Anel e sente uma energia fria. Sem hesitar, parte para o norte com Gandalf. No caminho, na Floresta das Trevas, o ar é pesado e você escuta algo se movendo nas sombras.",
    [
        new Escolha("Avançar cautelosamente, confiando em Gandalf.", 5),
        new Escolha("Investigar a origem do som, achando que pode ser uma ameaça.", 6)
    ]
);

const pagina3 = new PaginaExploracao(
    3,
    "O Peso do Conhecimento",
    "Gandalf explica que o poder do Anel é imenso e sua tentação pode corromper até o coração mais puro. Ciente dos perigos, a responsabilidade parece ainda maior. Ele te pergunta se você está pronto.",
    [
        new Escolha("Aceitar a missão, agora mais ciente dos perigos.", 5),
        new Escolha("Sugerir que o Anel seja escondido, pois a jornada parece perigosa demais.", 4)
    ]
);

const pagina4 = new PaginaExploracao(
    4,
    "A Recusa e a Sombra",
    "Gandalf suspira e avisa que se você não levar o Anel, ele será encontrado e o Condado será o primeiro a sofrer. O medo toma conta de você, mas a inércia é perigosa.",
    [
        new Escolha("Repensar sua decisão e confiar em Gandalf para seguir até Valfenda.", 5),
        new Escolha("Tentar esconder o Anel em uma caverna de Hobbiton.", 23) // Leva ao Final 3
    ]
);

const pagina5 = new PaginaExploracao(
    5,
    "A Chegada de um Aliado",
    "Confiando em seu guia, você avança. Das sombras surge Aragorn, um Guardião, que os seguia para proteger o Anel. Ele informa que a estrada está sendo vigiada por Espectros e oferece ajuda.",
    [
        new Escolha("Aceitar a ajuda de Aragorn e seguir com ele.", 7),
        new Escolha("Desconfiar do estranho e insistir no caminho principal.", 8)
    ]
);

const pagina6 = new PaginaExploracao(
    6,
    "Um Perigo Desnecessário",
    "Você se afasta para investigar e se depara com orcs batedores. Você escapa, mas é ferido por uma lâmina Morgul, cujo veneno o torna mais fraco e vulnerável à influência do Anel.",
    [
        new Escolha("Com suas forças se esvaindo, você se junta a Gandalf e segue o mais rápido possível.", 8)
    ]
);

const pagina7 = new PaginaExploracao(
    7,
    "Atalhos e Segredos",
    "Aragorn prova ser um aliado valioso, guiando-os por caminhos secretos e evitando as patrulhas inimigas. A jornada é difícil, mas segura. Após vários dias, vocês finalmente avistam o vale de Valfenda.",
    [
        new Escolha("Entrar em Valfenda para o Conselho de Elrond.", 9)
    ]
);

const pagina8 = new PaginaExploracao(
    8,
    "A Perseguição no Topo do Vento",
    "Insistindo no caminho principal, o grupo é interceptado pelos Espectros do Anel no Topo do Vento. Você é apunhalado por uma lâmina Morgul. A jornada se torna uma corrida desesperada contra o tempo.",
    [
        new Escolha("Continuar a jornada tortuosa até Valfenda.", 9)
    ]
);

const pagina9 = new PaginaExploracao(
    9,
    "O Conselho de Elrond",
    "Em Valfenda, você se recupera. Elrond convoca um conselho. É revelado que o Anel só pode ser destruído na Montanha da Perdição. A responsabilidade da missão recai sobre você.",
    [
        new Escolha("Aceitar a missão e formar a Sociedade do Anel.", 10),
        new Escolha("Sugerir que outro mais poderoso leve o Anel.", 23) // Leva ao Final 3
    ]
);

const pagina10 = new PaginaExploracao(
    10,
    "A Sociedade do Anel",
    "A Sociedade é formada. A primeira parte da jornada os leva à montanha de Caradhras, onde uma tempestade implacável, conjurada pelo inimigo, bloqueia o caminho.",
    [
        new Escolha("Tentar atravessar a montanha, confiando na força do grupo.", 11),
        new Escolha("Aceitar a sugestão de Gandalf de passar pelas Minas de Moria.", 12)
    ]
);

const pagina11 = new PaginaExploracao(
    11,
    "A Fúria da Montanha",
    "A força de vontade não é páreo para a magia de Saruman. Uma avalanche quase enterra a todos. A tentativa falha, e a única opção restante é o caminho escuro sob a montanha.",
    [
        new Escolha("Seguir Gandalf e entrar em Moria.", 12)
    ]
);

const pagina12 = new PaginaExploracao(
    12,
    "As Profundezas de Moria",
    "Na escuridão de Moria, vocês despertam um Balrog, um demônio do mundo antigo. Na Ponte de Khazad-dûm, Gandalf confronta a criatura para garantir a passagem do grupo.",
    [
        new Escolha("Assistir ao confronto, pronto para ajudar.", 13),
        new Escolha("Fugir imediatamente, como Gandalf ordenou.", 13)
    ]
);

const pagina13 = new PaginaExploracao(
    13,
    "O Sacrifício de Gandalf",
    "Gandalf e o Balrog caem no abismo. A perda de seu mentor é um golpe devastador. Sob a liderança de Aragorn, a Sociedade emerge à luz do sol, abalada, mas determinada.",
    [
        new Escolha("Continuar a jornada até a floresta de Lothlórien.", 14)
    ]
);

const pagina14 = new PaginaExploracao(
    14,
    "A Dama da Luz",
    "Em Lothlórien, Galadriel testa sua determinação. Ela lhe oferece um presente: o Frasco de Galadriel, contendo a luz de uma estrela para ser uma luz em lugares escuros.",
    [
        new Escolha("Aceitar o presente, compreendendo seu propósito.", 15),
        new Escolha("Recusar o presente, temendo o poder que emana dele.", 22) // Leva ao Final 2
    ]
);

const pagina15 = new PaginaExploracao(
    15,
    "A Tentação de Boromir",
    "A Sociedade desce o Rio Anduin. A influência do Anel afeta Boromir, que o confronta, tentando tomar o Anel para si, acreditando ser uma arma para salvar seu povo.",
    [
        new Escolha("Resistir a Boromir e usar o Anel para ficar invisível e escapar.", 16),
        new Escolha("Tentar argumentar com Boromir, sem usar o poder do Anel.", 23) // Leva ao Final 3
    ]
);

const pagina16 = new PaginaExploracao(
    16,
    "A Ruptura da Sociedade",
    "A tentativa de Boromir fratura a Sociedade. Você percebe que a influência do Anel corromperá a todos e decide continuar a jornada para Mordor sozinho, ou quase. Sam se recusa a deixá-lo.",
    [
        new Escolha("Aceitar a companhia de Sam e seguir para Mordor.", 17),
        new Escolha("Tentar despistar Sam e seguir completamente sozinho.", 22) // Leva ao Final 2
    ]
);

const pagina17 = new PaginaExploracao(
    17,
    "Um Guia Inesperado",
    "Você e Sam capturam a criatura que os persegue: Gollum. Ele jura lealdade para reaver seu \"Precioso\" e promete guiá-los por um caminho secreto até Mordor.",
    [
        new Escolha("Confiar em Gollum para guiá-los, mantendo-o sob vigilância.", 18),
        new Escolha("Desconfiar de Gollum e tentar encontrar o caminho sozinho.", 22) // Leva ao Final 2
    ]
);

const pagina18 = new PaginaExploracao(
    18,
    "A Toca de Laracna",
    "Gollum os leva por um túnel escuro, mas é uma armadilha. Ele os abandona para Laracna, uma aranha gigante. A escuridão é total.",
    [
        new Escolha("Usar o Frasco de Galadriel para afastar a escuridão e lutar.", 19),
        new Escolha("Tentar passar furtivamente na escuridão.", 23) // Leva ao Final 3
    ]
);

const pagina19 = new PaginaExploracao(
    19,
    "A Montanha da Perdição",
    "Você afasta Laracna e finalmente chega à Montanha da Perdição. Diante do fogo, o poder do Anel sobre você atinge o auge, clamando para que você o possua.",
    [
        new Escolha("Lembrar-se de seus amigos e jogar o Anel no fogo.", 20),
        new Escolha("Ceder no último momento e reivindicar o Anel para si.", 23) // Leva ao Final 3
    ]
);

const pagina20 = new PaginaExploracao(
    20,
    "O Fim da Jornada",
    "No seu momento de fraqueza, Gollum ataca, morde seu dedo e pega o Anel. Em sua euforia, ele tropeça e cai na lava. O Anel é destruído. A Montanha da Perdição entra em erupção.",
    [
        new Escolha("Aceitar o fim, ao lado de Sam, enquanto a torre de Sauron desmorona.", 21) // Leva ao Final 1
    ]
);

// PÁGINAS DE FINAL
const pagina21 = new PaginaExploracao(
    21,
    "Final 1: O Herói Redimido",
    "Você e Sam são resgatados pelas águias. A Terra-média é salva. Você retorna ao Condado como um herói, e embora marcado, encontra a paz. A coragem e a amizade prevaleceram sobre o mal.",
    [] // Sem escolhas, fim de jogo
);

const pagina22 = new PaginaExploracao(
    22,
    "Final 2: A Tentação Vencida",
    "Suas escolhas o levaram por um caminho de isolamento e desconfiança. Você destrói o Anel, mas a jornada o quebrou. Você retorna para casa como uma sombra de si mesmo, com a alma ferida para sempre. A Terra-média está salva, mas o seu sacrifício pessoal foi imenso.",
    [] // Sem escolhas, fim de jogo
);

const pagina23 = new PaginaExploracao(
    23,
    "Final 3: O Senhor das Sombras",
    "Sua hesitação, medo ou desejo de poder selaram um destino sombrio. O Anel não foi destruído. Seja por sua falha direta ou por uma cadeia de eventos iniciada por sua fraqueza, Sauron recuperou o Anel. A Terra-média é coberta pela escuridão, e a guerra está perdida.",
    [] // Sem escolhas, fim de jogo
);


// Objeto que guarda todas as páginas para acesso fácil
const paginas: { [id: number]: PaginaExploracao } = {
    1: pagina1, 2: pagina2, 3: pagina3, 4: pagina4, 5: pagina5, 6: pagina6, 7: pagina7, 8: pagina8, 9: pagina9, 10: pagina10,
    11: pagina11, 12: pagina12, 13: pagina13, 14: pagina14, 15: pagina15, 16: pagina16, 17: pagina17, 18: pagina18, 19: pagina19, 20: pagina20,
    21: pagina21, 22: pagina22, 23: pagina23
};

// Função para criar uma pausa no jogo
export function esperar(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// --- VERSÃO ÚNICA E CORRIGIDA DA FUNÇÃO 'jogar' ---
async function jogar(pagina: PaginaExploracao): Promise<void> {
    console.clear();
    pagina.verPaginaAtual()
    console.log("\n📖 " + pagina.nome);
    console.log(pagina.descricao);

    // Verifica se a página atual é um final de jogo
    if (pagina.escolhas.length === 0) {
        console.clear();
        console.log("╔══════════════════════════════════════╗");
        console.log("║              Fim de Jogo!            ║");
        console.log("╚══════════════════════════════════════╝");
        
        console.log("\n" + pagina.nome.toUpperCase());
        console.log(pagina.descricao);
        
        console.log("\nVoltando ao menu em 10 segundos...");
        await esperar(10000);
        return; // Encerra a função
    }

    console.log("\nOpções:");
    pagina.escolhas.forEach((e, i) => {
        console.log(`${i + 1} - ${e.texto}`);
    });

    const escolha = Number(prompt("Escolha: "));
    const escolhida = pagina.escolhas[escolha - 1];
    
    if(escolha === 0){
          return 
        }
    if (escolhida) {
        const proxima = paginas[escolhida.paginaAlvo];
       
        // Lógica para ganhar um aliado (mantida, mas não crucial para esta história)
        if (proxima && (proxima.id === 7)) { //Exemplo: Ganha aliado ao encontrar Aragorn
            console.log("\n🤝 Você agora tem um aliado em sua jornada!");
            temAliado = true;
            await esperar(2000);
        }

        if (proxima) {
            await jogar(proxima); // Usa await na chamada recursiva
        
        }
    } else {
        console.log("\nOpção inválida! Tente novamente.");
        await esperar(2000);
        await jogar(pagina); // Repete a mesma página
    } 
}
// --- MENU PRINCIPAL CORRIGIDO ---
async function Menu() {
    let opcao = 0;

    while (opcao !== 3) {
        console.clear();
        console.log("╔══════════════════════════════════════╗");
        console.log("║           Senhor dos Aneis 💍        ║");
        console.log("╚══════════════════════════════════════╝");
        console.log("╔══════════════════════════════════════╗");
        console.log("║           Menu principal             ║");
        console.log("╠══════════════════════════════════════╣");
        console.log("║                                      ║");
        console.log("║  [1] História                        ║");
        console.log("║  [2] Sair                            ║");
        console.log("║                                      ║");
        console.log("╚══════════════════════════════════════╝");
        opcao = Number(prompt("Escolha seu caminho: "));

        switch (opcao) {
            case 1:
                console.clear();
                console.log("╔══════════════════════════════════════╗");
                console.log("║        Iniciando a Aventura...       ║");
                console.log("╚══════════════════════════════════════╝");
                
                temAliado = false; // Reseta a variável de aliado para um novo jogo
                await esperar(2000);
                
                // AGORA O MENU ESPERA A HISTÓRIA TERMINAR
                await jogar(pagina1); 
                break;
    
    
            case 2:
                console.clear();
                console.log("╔══════════════════════════════════════╗");
                console.log("║         Obrigado por jogar!          ║");
                console.log("╚══════════════════════════════════════╝");
                await esperar(2000); // Pausa antes de sair
                break;
            default:
                console.clear();
                console.log("Opção inválida!");
                await esperar(2000);
        }
    }
}

// Inicia o jogo
Menu();
