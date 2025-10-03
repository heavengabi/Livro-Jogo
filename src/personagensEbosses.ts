
import { inventario } from "./inventario";
import { personagem } from "./personagens";
import { esperar } from "./menu";

export class Personagem {
    constructor(
        public nome: string,
        public vida: number,
        public poder: string,
        public descricao: string,
        public itens: inventario[] = []
    ) {}

    atacar(): void {
        if (this.itens.length > 0) {
            const nomesItens = this.itens.map(i => i.nome).join(", ");
            console.log(`${this.nome} atacou usando: ${nomesItens}`);
        } else {
            console.log(`${this.nome} atacou com as próprias mãos!`);
        }
    }

    falar(): void {
        console.log(`🗣️  Olá! Meu nome é ${this.nome}.`);
    }

    habilidade(): void {
        console.log(`${this.nome} usou o poder: ${this.poder}!`);
    }
}



// ===== ITENS =====
export const facaComunista: inventario = {
    nome: "Faca Comunista",
    descricao: "Uma faca super afiada que corta o pão quentinho, passa manteiga e corta a mortadela.",
    usar() {
        console.log("Você dispara um corte descontrolado!");
    }
};

export const canecaCafe: inventario = {
    nome: "Caneca de Café fervente",
    descricao: "Um mago viciado em café. Seus poderes giram em torno de café, que ele usa tanto para atacar quanto para manter aliados acordados.",
    usar() {
        console.log("Dispara café quente nos inimigos!");
    }
};

//===== PERSONAGENS =====
const personagem1 = new Personagem(
    "Sidnei Abraham Lincoln",
    100,
    "Incomodar você",
    "Liderou a Guerra dos pães comunistas",
    [facaComunista]
);

const personagem2 = new Personagem(
    "Daniel",
    100000,
    "Atira Rajadas de café",
    "Alquimista da Cafeína",
    [canecaCafe]
);

export const personagens: Personagem[] = [personagem1, personagem2];


export async function mostrarPersonagens(): Promise<void> {
       
    if (personagens.length === 0) {
        console.clear()
      
        console.log("╔══════════════════════════════════════╗");
        console.log("║              Personagem              ║");
        console.log("╠══════════════════════════════════════╣");
        console.log("║       O inventário está vazio...     ║");
        console.log("╚══════════════════════════════════════╝");
    } else {
       console.clear()
        console.log("╔══════════════════════════════════════╗");
        console.log("║              Personagens             ║");
        console.log("╚══════════════════════════════════════╝");
        
        for (const personagem of personagens) 
            {
            console.log(`Nome: ${personagem.nome}`);
            console.log(`Descrição: ${personagem.descricao}`);
            console.log(`Poder: ${personagem.poder}`);

            if (personagem.itens.length > 0) 
            {
                console.log("Itens:");
                for (const item of personagem.itens) 
                {
                    console.log(`- ${item.nome}`);
                   
                }
    
            }
   
            console.log("--------------------------------------");
            
        }
    }
   
}