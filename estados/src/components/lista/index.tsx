import { Dispatch, SetStateAction } from 'react';
import styles from './lista.module.css';

interface ListaProps {
  itens: string[]
  setItens: Dispatch<SetStateAction<string[]>>
}

export function Lista({ itens, setItens }: ListaProps): JSX.Element {


  function deletar(i: string) {
    const newItem = itens.filter(item => item !== i)
    setItens(newItem);
    return;
  }
  return (
    <ul className={styles['lista-container']}>
      {itens.map(item =>
        <li key={item} className={styles['lista-item']}>
          {item}
          <button onClick={() => deletar(item)}>Deletar</button>
        </li>
      )}
    </ul>
  )
}