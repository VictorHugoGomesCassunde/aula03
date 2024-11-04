import styles from "../styles/listadeProduto.module.css"

export default function ListadeProdutinhos({lista}){
    return(
         <div className= {styles.blocosEXE}>
        <ul className= {styles.blocoLista}>
            {lista.map(produto => (
      <li key={produto.id} className={styles.produtoitem}>
        <h2>{produto.title}</h2>
        <p>{produto.description}</p>
        <p>Preço: ${produto.price}</p>
        <img src={produto.image} 
        alt={produto.title} 
        width={150} />
      </li>
    ))}
       
        </ul>
 </div>
    );
}