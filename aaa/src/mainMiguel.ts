import { personagem } from "./personagens";
import { jogador } from "./personagens";
import { mochila } from "./inventario";
import { arcoCelestial } from "./inventario";


jogador.falar()
jogador.habilidade()



export const mochilaDoJogador = new mochila()
mochilaDoJogador.novoItem(arcoCelestial)
mochilaDoJogador.novoItem(arcoCelestial)
mochilaDoJogador.listaritens()

mochilaDoJogador.listaritens()
mochilaDoJogador.usarItem(0)