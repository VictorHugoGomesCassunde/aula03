import styles from "../styles/listadeProduto.module.css"


export default function ListadeProdutinhos({lista}){
    return(
        <ul className= {Styles.plocoLista}>
            {lista.map(produto => (
      <li key={produto.id}>
        <h2>{produto.title}</h2>
        <p>{produto.description}</p>
        <p>Preço: ${produto.price}</p>
        <img src={produto.image} alt={produto.title} width={100} />
      </li>
    ))}
        </ul>

    );
}