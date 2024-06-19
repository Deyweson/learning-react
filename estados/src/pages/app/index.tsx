import { useState } from "react"
import { Lista } from "../../components/lista"
import styles from '../app/app.module.css'

function App() {
  const [item, setItem] = useState<string[]>(['123', '456', '678'])
  return (
    <section className={styles.lista}>
      <h1 className={styles.title}>Filmes</h1>
      <Lista itens={item} setItens={setItem} />
    </section>
  )
}

export default App
