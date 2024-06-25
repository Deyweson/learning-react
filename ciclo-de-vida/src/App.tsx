import { useEffect, useState } from "react"


function App() {

  const [nome, setNome] = useState<string>('Deyve')

  useEffect(() => {
    console.log('renderizou')
  })

  function mudarNome(){
    setNome('Deyweson' + Math.random())
  }

  return (
    <>
      <h1>{nome}</h1>
      <button onClick={mudarNome}>Clique</button>
    </>
  )
}

export default App
