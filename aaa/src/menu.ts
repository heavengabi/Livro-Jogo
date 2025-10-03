import { PaginaExploracao } from "./mainGabriela";
import { Escolha } from "./mainGabriela";
import { jogador } from "./personagens";
import { mochila } from "./inventario";
import { GatoGalatico } from "./personagens";

import promptSync = require("prompt-sync");
import { mochilaDoJogador } from "./mainMiguel";
const prompt = promptSync();
const nome = prompt("Digite seu nome: ");
let opcao = Number(prompt("\n=== Menu Principal ===\n1 - História\n2 - Personagens\n3 - Habilidades Ocultas\n4 - Batalha\n5 - Escolhas Narrativas\n6 Inventario \n Sair\nEscolha: "));


const pagina1 = new PaginaExploracao(
  1,
  "O Condado em Perigo",
  "Você está no Condado, vivendo uma vida tranquila. De repente, Gandalf aparece com notícias urgentes: o Anel deve ser levado a Rivendell antes que caia nas mãos de Sauron.",
  [
    new Escolha("Aceitar a missão de levar o Anel a Rivendell", 2),
    new Escolha("Tentar esconder o Anel e ficar no Condado", 3)
  ]
);

 const pagina2 = new PaginaExploracao(
  2,
  "Caminho pela Floresta",
  "Você parte do Condado e entra na floresta densa. A escuridão e os sons estranhos tornam o caminho perigoso.",
  [
    new Escolha("Seguir pela trilha escura", 4),
    new Escolha("Desviar pelo rio para evitar perigos", 5)
  ]
);

const pagina3 = new PaginaExploracao(
  3,
  "Ataque dos Inimigos",
  "Ao tentar esconder o Anel, Orcs e espiões de Sauron descobrem seu esconderijo.",
  [
    new Escolha("Lutar", 6),
    new Escolha("Fugir", 7)
  ]
);

 const pagina4 = new PaginaExploracao(
  4,
  "Encontro com Aragorn",
  "Um homem misterioso aparece. É Aragorn, que oferece ajuda.",
  [
    new Escolha("Aceitar ajuda", 8),
    new Escolha("Continuar sozinho", 9)
  ]
);

 const pagina5 = new PaginaExploracao(
  5,
  "Rio Perigoso",
  "O rio é rápido e traiçoeiro.",
  [
    new Escolha("Nadar através do rio", 10),
    new Escolha("Seguir a margem", 11)
  ]
);

 const pagina6 = new PaginaExploracao(
  6,
  "Batalha Desfavorável",
  "Você tenta lutar, mas é cercado e gravemente ferido.",
  []
);

 const pagina7 = new PaginaExploracao(
  7,
  "Esconderijo na Floresta",
  "Você se esconde, mas sente o peso da solidão e do medo.",
  [
    new Escolha("Procurar abrigo seguro", 12),
    new Escolha("Continuar andando", 3)
  ]
);

 const pagina8 = new PaginaExploracao(
  8,
  "Viagem com Aragorn",
  "Com Aragorn, você atravessa florestas perigosas. A confiança cresce.",
  [
    new Escolha("Seguir para Rivendell", 14),
    new Escolha("Desviar para a Montanha Solitária", 15)
  ]
);

 const pagina9 = new PaginaExploracao(
  9,
  "Caminho Solitário",
  "Sem guia, a floresta parece interminável e cheia de perigos.",
  [
    new Escolha("Acampar e descansar", 16),
    new Escolha("Continuar andando", 17)
  ]
);

const pagina10 = new PaginaExploracao(
  10,
  "Travessia Arriscada",
  "Você tenta nadar pelo rio, mas a correnteza é forte.",
  [
    new Escolha("Lutar contra a correnteza", 18),
    new Escolha("Deixar a correnteza levar", 19)
  ]
);

const pagina11 = new PaginaExploracao(
  11,
  "Margem Segura",
  "Seguindo a margem, você encontra pegadas estranhas que o assustam",
  [
    new Escolha("Seguir as pegadas", 20),
    new Escolha("Ignorar e seguir", 21)
  ]
);

const pagina12 = new PaginaExploracao(
  12,
  "Abrigo Seguro",
  "Você encontra uma caverna protegida por árvores e arbustos densos.",
  [
    new Escolha("Descansar", 22),
    new Escolha("Continuar a jornada à noite", 23)
  ]
);

const pagina13 = new PaginaExploracao(
  13,
  "Fome e Cansaço",
  "O cansaço aumenta e a fome começa a incomodar.",
  [
    new Escolha("Procurar comida", 24),
    new Escolha("Ignorar a fome e continuar", 25)
  ]
);

const pagina14 = new PaginaExploracao(
  14,
  "Rivendell",
  "Você chega em Rivendell, exausto mas seguro.",
  [
    new Escolha("Procurar comida", 24),
    new Escolha("Ignorar a fome e continuar", 25)
  ]
);

const pagina15 = new PaginaExploracao(
  15,
  "Montanha Solitária",
  "O caminho é árduo e perigoso.",
  [
    new Escolha("Subir a montanha", 28),
    new Escolha("Descer e procurar outro caminho", 29)
  ]
);

const pagina16 = new PaginaExploracao(
  16,
  "Acampamento Noturno",
  "Durante o descanso, você é atacado por Orcs.",
  []// derrota
);

const pagina17 = new PaginaExploracao(
  17,
  "Caminhada Solitária",
  "Você se perde na floresta e encontra um Gollum suspeito.",
  [
    new Escolha("Conversar com ele", 30),
    new Escolha("Fugir", 6)
  ]
);

const pagina18 = new PaginaExploracao(
  18,
  "Luta contra a Corrente",
  "Você consegue atravessar, mas está exausto e com frio.",
  [
    new Escolha("Procurar abrigo", 12),
    new Escolha("Continuar a jornada", 13)
  ]
);

const pagina19 = new PaginaExploracao(
  19,
  "Deixando a Corrente Levar",
  "Você é levado a uma ilha isolada.",
  [
    new Escolha("Explorar a ilha", 20),
    new Escolha("Tentar voltar", 10)
  ]
);

const pagina20 = new PaginaExploracao(
  20,
  "Pegadas Estranhas",
  "As pegadas pertencem a orcs!",
  [
    new Escolha("Seguir e enfrentar", 6),
    new Escolha("Escapar pela floresta", 12)
  ]
);

const pagina21 = new PaginaExploracao(
  21,
  "Ignorar as Pegadas",
  "Você segue seguro, mas se perde no caminho.",
  [
    new Escolha("Procurar Rivendell", 14),
    new Escolha("Tentar outro caminho", 15)
  ]
);

const pagina22 = new PaginaExploracao(
  22,
  "Descanso na Caverna",
  "Recuperando forças, você se prepara para a longa jornada.",
  [
    new Escolha("Partir de manhã", 14),
    new Escolha("Partir à noite", 17)
  ]
);

const pagina23 = new PaginaExploracao(
  23,
  "Jornada Noturna",
  "O perigo da noite se aproxima: lobos e sombras ameaçam.",
  [
    new Escolha("Enfrentar os perigos", 6),
    new Escolha("Tentar se esconder", 12)
  ]
);

const pagina24 = new PaginaExploracao(
  24,
  "Procurando Comida",
  "Você encontra frutas e ervas, mas algo se move nas sombras.",
  [
    new Escolha("Ignorar e comer rápido", 18),
    new Escolha("Esperar e observar", 20)
  ]
);

const pagina25 = new PaginaExploracao(
  25,
  "Ignorar a Fome",
  "A fraqueza toma conta e você quase desmaia.",
  []
);

const pagina26 = new PaginaExploracao(
  26,
  "Formação da Sociedade",
  "A Sociedade do Anel está formada! A jornada para destruir o Anel começa.",
  []// vitoria911
  
);

const pagina27 = new PaginaExploracao(
  27,
  "Partida Solitária",
  "Sem aliados, você encontra inúmeros perigos e não consegue chegar a Mordor.",
  []
);

const pagina28 = new PaginaExploracao(
  28,
  "Subida da Montanha",
  "A subida é difícil, mas você avista Rivendell ao longe.",
  [
    new Escolha("Continuar", 14),
    new Escolha("Retornar", 15)
  ]
);

const pagina29 = new PaginaExploracao(
  29,
  "Outro Caminho",
  "Um caminho mais longo e perigoso se apresenta.",
  [
    new Escolha("Seguir", 14),
    new Escolha("Voltar", 17)
  ]
);

const pagina30 = new PaginaExploracao(
  30,
  "Encontro com Gollum Caminho",
  "Gollum parece perdido e oferece informações sobre os inimigos.",
  [
    new Escolha("Confiar nele", 8),
    new Escolha("Não confiar", 6)
  ]
);


// guarda todas as páginas em um dicionário por id
const paginas: { [id: number]: PaginaExploracao } = {
  1: pagina1,
  2: pagina2,
  3: pagina3,
  4: pagina4,
  5: pagina5,
  6: pagina6,
  7: pagina7,
  8: pagina8,
  9: pagina9,
  10: pagina10,
  11: pagina11,
  12: pagina12,
  13: pagina13,
  14: pagina14,
  15: pagina15,
  16: pagina16,
  17: pagina17,
  18: pagina18,
  19: pagina19,
  20: pagina20,
  21: pagina21,
  22: pagina22,
  23: pagina23,
  24: pagina24,
  25: pagina25,
  26: pagina26,
  27: pagina27,
  28: pagina28,
  29: pagina29,
  30: pagina30,
};

// função para jogar a partir de uma página
function jogar(pagina: PaginaExploracao) {
  console.log("\n📖 " + pagina.nome);
  console.log(pagina.descricao);

  if (pagina.escolhas.length === 0) {
    console.log("\n--- Fim da história ---");
    return;
  }

  console.log("\nOpções:");
  pagina.escolhas.forEach((e, i) => {
    console.log(`${i + 1} - ${e.texto}`);
  });

  const escolha = Number(prompt("Escolha: "));
  const escolhida = pagina.escolhas[escolha - 1];

  if (escolhida) {
    const proxima = paginas[escolhida.paginaAlvo];
    if (proxima) {
      jogar(proxima); // chamada recursiva → avança na história
    } else {
      console.log(" Página não encontrada!");
    }
  } else {
    console.log("Opção inválida!");
    jogar(pagina); // repete a mesma página
  }
}



function Menu() {
    let opcao = 0;

    while (opcao !== 7) {
        console.log(`\n=== Menu Principal ===
1 - História
2 - Personagens
3 - Habilidades Ocultas
4 - Batalha
5 - Escolhas Narrativas
6 - Inventário
7 - Sair`);

        opcao = Number(prompt("Escolha: "));

        switch(opcao) {
            case 1:
                Historia();
                break;
            case 2:
                jogador.falar();
                break;
            case 3:
                jogador.habilidade();
                break;
            case 4:
                console.log("Batalha ainda não implementada.");
                break;
            case 5:
                console.log("Escolhas narrativas ainda não implementadas.");
                break;
            case 6:
                mochilaDoJogador.listaritens();
               break;
            case 7:
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida!");
        }
    }
}




function Inventario(){
    
    
}

function Historia(){
    let opcao2 = Number(prompt("\n=== Menu Principal ===\n1 - História\n2 - Personagens\n3"));
    switch(opcao2){
       case 1:
        jogar(pagina1)
        break;
        default:
        break;
   
    }
}

function Gabriela1()
{
    
}

function Gabriela()
{
    
}

function Gabriela3()
{
    
}

function Gabriela4(){
    
}




Menu();
