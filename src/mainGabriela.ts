
import { personagem } from "./personagens";
import { jogador } from "./personagens";
import { mochila } from "./inventario";
import { arcoCelestial } from "./inventario";



interface IEscolha {
  texto: string;
  paginaAlvo: number;

  mostrarEscolha(): void;
}

export class Escolha implements IEscolha {
  constructor(public texto: string, public paginaAlvo: number) {}

  mostrarEscolha(): void {
    console.log(`${this.texto} (vá para a página ${this.paginaAlvo})`);
  }
}

interface IPagina {
  id: number;
  nome: string;
  descricao: string;
  escolhas: IEscolha[];
  verPagina(): void;
}

export class PaginaExploracao implements IPagina 
{
  constructor(
    public id: number,
    public nome: string,
    public descricao: string,
    public escolhas: IEscolha[]
  ) {}


    verPaginaAtual():void
    {
      console.log(this.id)
    }


  verPagina(): void 
  {
    console.log(`Você está na página ${this.id}. \n${this.descricao}\n`);

  }
  
}




jogador.falar()
jogador.habilidade()


export const mochilaDoJogador = new mochila()
mochilaDoJogador.novoItem(arcoCelestial)
mochilaDoJogador.novoItem(arcoCelestial)
mochilaDoJogador.listaritens()

mochilaDoJogador.listaritens()
mochilaDoJogador.usarItem(0)