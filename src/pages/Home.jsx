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
<> 
            <ListadeProdutinhos lista={lista} />
           
        </>
}
