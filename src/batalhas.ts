import { jogador } from "./personagens";
import { personagem } from "./personagens";
import { GatoGalatico } from "./personagens";
import { esperar } from "./menu";
import { mochilaDoJogador } from "./mainGabriela";

import promptSync = require("prompt-sync");
import { mostrarPersonagens } from "./personagensEbosses";
const prompt = promptSync();


export  async function Batalha(){

     let opcao = 0;

    while (opcao !== 4) {
        console.clear();
        console.log("╔══════════════════════════════════════╗");
        console.log("║              Batalha ⚔️              ║");
        console.log("╚══════════════════════════════════════╝");
        console.log("╔══════════════════════════════════════╗");
        console.log("║              Bem vindo!              ║");
        console.log("╠══════════════════════════════════════╣");
        console.log("║                                      ║");
        console.log("║  [1] Personagens                     ║");
        console.log("║  [2] Batalha                         ║");
        console.log("║  [3] Inventário                      ║");
        console.log("║  [4] Sair                            ║");
        console.log("║                                      ║");
        console.log("╚══════════════════════════════════════╝");
        opcao = Number(prompt("Escolha seu caminho: "));

        switch (opcao) {
            case 1:
              mostrarPersonagens()
              await esperar(10000)
                break;
            case 2:
             Atacar()
             break
            case 3:
            console.log("n terminei")
            break
            case 4: 
            return
                break
            
            default:
                console.log("Opção invalida")
               
        }
    }
}















// batalhar
async function Atacar(){
    console.clear()

     let opcao = 0;

    while (opcao !== 4) {
        console.clear();
        console.log("╔══════════════════════════════════════╗");
        console.log("║              bosses             ║");
        console.log("╚══════════════════════════════════════╝");
        console.log("╔══════════════════════════════════════╗");
        console.log("║              Bem vindo!              ║");
        console.log("╠══════════════════════════════════════╣");
        console.log("║                                      ║");
        console.log("║  [1] Personagens                     ║");
        console.log("║  [2] Batalha                         ║");
        console.log("║  [3] Inventário                      ║");
        console.log("║  [4] Sair                            ║");
        console.log("║                                      ║");
        console.log("╚══════════════════════════════════════╝");
        opcao = Number(prompt("Es:"));

        switch (opcao) {
            case 1:
              mostrarPersonagens()
                break;
            case 2:
             Atacar()
                break
            case 3:
             mochilaDoJogador.listaritens()
             await esperar(5000)
             break
             case 4: 
             return
             break
            default:
                console.log("Opcão invalida")
               
        }
    }
}
// }
// function batalhar(){
//          if(jogador.)
// }