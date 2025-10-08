import { inventario } from "./inventario";
import { mochila } from "./inventario";
import { arcoCelestial } from "./inventario";
import { mostrarPersonagens } from "./personagensEbosses";


interface Personagem {
    nome: string;
    vida: number;
    item: inventario[];
    poder: string;
    falar():void
    habilidade():void
}

export class personagem implements Personagem{
    constructor(
        public nome: string,
        private vida: number,
        public poder:string,
        descricaoPersonagem:string,
        public item: inventario[] = [],
    ) {}

    atacar():void{
        console.log(`${this.nome} atacou ${this.item}`)
    }
    falar(){
        console.log(` 🗣️  Ola! o meu nome é ${this.nome}.`)
    }
    habilidade(){
        console.log(`${this.nome} usou o poder : ${this.poder}!`)
    }
}



export const jogador = new personagem(
    "Elfa das Estrelas",
    100,
    "Chuva de Meteoros Menores",
    "Uma elfa bonitinha e carismática.",
    [arcoCelestial]
);

export class Monstro {
   constructor(
    public nome: string,
     public vida: number,
      public arma:string,
       public poder: string,
       descricaoPersonagem:string,
        public dano: number  ){
            
    }
}
export class Boss extends Monstro {

    atacar(): void {
        console.log(`${this.nome} atacou e causou ${this.dano} dano`)
    }
    habilidade():void{
        console.log(`${this.nome} usou o poder ${this.poder} e causou ${this.dano}`)
    }
}
export const GatoGalatico = new Boss("Gato",1000,"patas magicas","Um gato fofo que vive no mundo da lua","Quebrar o tempo",30)

GatoGalatico.atacar()

jogador.falar()
jogador.habilidade()



const mochilaDoJogador = new mochila()
mochilaDoJogador.novoItem(arcoCelestial)


mochilaDoJogador.listaritens()
mochilaDoJogador.usarItem(0)



mostrarPersonagens()
