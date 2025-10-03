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
export const arcoCelestial2: inventario = {
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
        console.log("\n 📦 itens na mochila")
            if(this.itens.length === 0 ){
                console.log(`A mochila está vazia.. 📭💨`)
            }else {
                this.itens.forEach((item, index) =>{
                    console.log(`${index + 1} ${item.nome} - ${item.descricao}`)
                })
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