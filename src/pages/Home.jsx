import {useEffect, useState } from "react";
import ListadeProdutinhos from "../componets/ListadeProdutinhos";

export default function Home() {

 const [lista, setLista] = useState([]);

 useEffect(() => {
const receberListaProdutos = async () => {
    try{const resposta = await fetch('https://fakestoreapi.com/products')
     const dados = await resposta.json();
     setLista(dados);
    }catch (erro)
    {alert ("ocorreu um erro no API")}

}
receberListaProdutos();
}, []);

if (lista.length === 0) {
    return <h1>Carregando...</h1>

}
const orederAz = () => {
    const listaOredenada = [...lista].sort((a, b) => a.tilhe.localeCompare (b.title));
    setLista(listaOredenada);
    

}

return(
<> 
            <ListadeProdutinhos lista={lista} />
           
        </>
)
}
