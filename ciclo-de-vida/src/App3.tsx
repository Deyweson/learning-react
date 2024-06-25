import { useEffect, useState } from "react"

interface IBerries {
  name: string
  url: string
}

function App() {

  const [berries, setBerries] = useState<IBerries[]>([]);

  async function getBerries() {
    const response = await fetch('https://pokeapi.co/api/v2/berry')
    const berries = await response.json()
    setBerries(berries.results)
  }

  useEffect(() => {
    getBerries()
  }, [])

  return (
    <>
      <h1>Poke Berries</h1>
      {berries.map(iten =>
        <>
          <p key={Math.random()}>{iten.name}</p>
        </>
      )}
    </>
  )
}

export default App
