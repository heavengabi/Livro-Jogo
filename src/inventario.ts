export interface inventario{
    nome: string;
    descricao: string;
    usar():void
        
}
export const arcoCelestial: inventario = {
    nome: "Arco Celestial de Valda",
    descricao: "Um arco místico que dispara flechas de energia estelar.",
    usar() {
        console.log("Você dispara uma flecha celestial!");
    }
};

export class mochila {
    private itens: inventario[] = []

    novoItem(item: inventario): void {
        this.itens.push(item)
        console.log(`Você guardou o item: ${item.nome}`)
    }

    listaritens():void {
          
            if(this.itens.length === 0 ){
                console.clear()
                console.log("╔══════════════════════════════════════╗");
                console.log("║              inventário              ║");
                console.log("╠══════════════════════════════════════╣");
                console.log("║       o inventario está vazio...     ║");
                console.log("║                                      ║");
                console.log("╚══════════════════════════════════════╝");
            }else {
                console.clear()
                        console.log("╔══════════════════════════════════════╗");
                        console.log("║              inventário              ║");
                        console.log("╚══════════════════════════════════════╝");
                this.itens.forEach((item, index) =>{
        
                console.log(`         ${index + 1} ${item.nome} 
                                      \n ${item.descricao}`)
                  
                 
                })
                console.log("                                        ");
                console.log("                                        ");
                console.log("                                        "); 
            }
    }
    usarItem(index: number): void {
        if( index < 0 || index >= this.itens.length){
            console.log("Item invalido!")
            return
        }
        const objeto = this.itens[index]
        objeto.usar()
        
    }
    
}

const mochilaDoJogador = new mochila()