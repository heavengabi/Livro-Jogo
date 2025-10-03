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

  verPagina(): void {
    console.log(`Você está na página ${this.id}. \n${this.descricao}\n`);

    if (this.escolhas.length > 0) 
        {
      console.log(`Escolhas disponíveis:`);
      this.escolhas.forEach((escolha, index) => 
        {
        console.log(`${index + 1}. ${escolha.texto} -> Página ${escolha.paginaAlvo}`);
      });
    }
  }
}

